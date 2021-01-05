
// DataCube event handlers

import Utils from '../stuff/utils.js'
import Icons from '../stuff/icons.json'
import WebWork from './script_ww_api.js'
import Dataset from './dataset.js'


export default class DCEvents {

    constructor() {

        this.ww = new WebWork(this)

        // Listen to the web-worker events
        this.ww.onevent = e => {
            for (var ctrl of this.tv.controllers) {
                if (ctrl.ww) ctrl.ww(e.data)
            }
            switch(e.data.type) {
                case 'request-data':
                    // TODO: DataTunnel class for smarter data transfer
                    if (this.ww._data_uploading) break
                    let data = Dataset.make_tx(this, e.data.data)
                    this.send_meta_2_ww()
                    this.ww.just('upload-data', data)
                    this.ww._data_uploading = true
                    break
                case 'overlay-data':
                    this.on_overlay_data(e.data.data)
                    break
                case 'overlay-update':
                    this.on_overlay_update(e.data.data)
                    break
                case 'data-uploaded':
                    this.ww._data_uploading = false
                    break
                case 'engine-state':
                    this.se_state = Object.assign(
                        this.se_state || {}, e.data.data)
                    break
                case 'modify-overlay':
                    this.modify_overlay(e.data.data)
                    break
                case 'script-signal':
                    this.tv.$emit('signal', e.data.data)
                    break
            }
            for (var ctrl of this.tv.controllers) {
                if (ctrl.post_ww) ctrl.post_ww(e.data)
            }
        }
    }

    // Called when overalay/tv emits 'custom-event'
    on_custom_event(event, args) {
        switch(event) {
            case 'register-tools': this.register_tools(args)
                break
            case 'exec-script': this.exec_script(args)
                break
            case 'exec-all-scripts': this.exec_all_scripts()
                break
            case 'data-len-changed': this.data_changed(args)
                break
            case 'tool-selected':
                if (!args[0]) break // TODO: Quick fix, investigate
                if (args[0].split(':')[0] === 'System') {
                    this.system_tool(args[0].split(':')[1])
                    break
                }
                this.tv.$set(this.data, 'tool', args[0])
                if (args[0] === 'Cursor') {
                    this.drawing_mode_off()
                }
                break
            case 'grid-mousedown': this.grid_mousedown(args)
                break
            case 'drawing-mode-off': this.drawing_mode_off()
                break
            case 'change-settings': this.change_settings(args)
                break
            case 'range-changed': this.scripts_onrange(...args)
                break
            case 'scroll-lock': this.on_scroll_lock(args[0])
                break
            case 'object-selected': this.object_selected(args)
                break
            case 'remove-tool': this.system_tool('Remove')
                break
            case 'before-destroy': this.before_destroy()
                break

        }

    }

    // Triggered when one or multiple settings are changed
    // We select only the changed ones & re-exec them on the
    // web worker
    on_settings(values, prev) {

        if (!this.sett.scripts) return

        let delta = {}
        let changed = false

        for (var i = 0; i < values.length; i++) {
            let n = values[i]
            let arr = prev.filter(x => x.v === n.v)
            if (!arr.length && n.p.settings.$props) {
                let id = n.p.settings.$uuid
                if (Utils.is_scr_props_upd(n, prev) &&
                    Utils.delayed_exec(n.p)) {
                    delta[id] = n.v
                    changed = true
                    this.tv.$set(n.p, 'loading', true)
                }
            }
        }

        if (changed && Object.keys(delta).length) {
            let tf = this.tv.$refs.chart.interval_ms ||
                     this.data.chart.tf
            let range = this.tv.getRange()
            this.ww.just('update-ov-settings', {
                delta, tf, range
            })
        }

    }

    // When the set of $uuids is changed
    on_ids_changed(values, prev) {

        let rem = prev.filter(
            x => x !== undefined && !values.includes(x))

        if (rem.length) {
            this.ww.just('remove-scripts', rem)
        }
    }

    // Combine all tools and their mods
    register_tools(tools) {
        let preset = {}
        for (var tool of this.data.tools || []) {
             preset[tool.type] = tool
             delete tool.type
        }
        this.tv.$set(this.data, 'tools', [])
        let list = [{
            type: 'Cursor', icon: Icons['cursor.png']
        }]
        for (var tool of tools) {
            var proto = Object.assign({}, tool.info)
            let type = tool.info.type || 'Default'
            proto.type = `${tool.use_for}:${type}`
            this.merge_presets(proto, preset[tool.use_for])
            this.merge_presets(proto, preset[proto.type])
            delete proto.mods
            list.push(proto)
            for (var mod in tool.info.mods) {
                var mp = Object.assign({}, proto)
                mp = Object.assign(mp, tool.info.mods[mod])
                mp.type = `${tool.use_for}:${mod}`
                this.merge_presets(mp, preset[tool.use_for])
                this.merge_presets(mp, preset[mp.type])
                list.push(mp)
            }
        }
        this.tv.$set(this.data, 'tools', list)
        this.tv.$set(this.data, 'tool', 'Cursor')
    }

    exec_script(args) {
        if (args.length && this.sett.scripts) {
            let obj = this.get_overlay(args[0])
            if (!obj || obj.scripts === false) return
            if (obj.script && obj.script.src) {
                args[0].src = obj.script.src // opt, override the src
            }
            // Parse script props & get the values from the ov
            // TODO: remove unnecessary script initializations
            let s = obj.settings
            let props = args[0].src.props || {}
            if (!s.$uuid) s.$uuid = `${obj.type}-${Utils.uuid2()}`
            args[0].uuid = s.$uuid
            args[0].sett = s
            for (var k in props || {}) {
                let proto = props[k]
                if (s[k] !== undefined) {
                    proto.val = s[k] // use the existing val
                    continue
                }
                if (proto.def === undefined) {
                    // TODO: add support of info / errors to the legend
                    console.error(
                        `Overlay ${obj.id}: script prop '${k}' ` +
                        `doesn't have a default value`)
                    return
                }
                s[k] = proto.val = proto.def // set the default
            }
            // Remove old props (dropped by the current exec)
            if (s.$props) {
                for (var k in s) {
                    if (s.$props.includes(k) && !(k in props)) {
                        delete s[k]
                    }
                }
            }
            s.$props = Object.keys(args[0].src.props || {})
            this.tv.$set(obj, 'loading', true)
            let tf = this.tv.$refs.chart.interval_ms ||
                     this.data.chart.tf
            let range = this.tv.getRange()
            if (obj.script && obj.script.output != null) {
                args[0].output = obj.script.output
            }
            this.ww.just('exec-script', {
                s: args[0], tf, range
            })
        }
    }

    exec_all_scripts() {
        if (!this.sett.scripts) return
        this.set_loading(true)
        let tf = this.tv.$refs.chart.interval_ms ||
                 this.data.chart.tf
        let range = this.tv.getRange()
        this.ww.just('exec-all-scripts', { tf, range })
    }

    scripts_onrange(r) {
        if (!this.sett.scripts) return
        let delta = {}

        this.get('.').forEach(v => {
            if (v.script && v.script.execOnRange &&
                v.settings.$uuid) {
                // TODO: execInterrupt flag?
                if (Utils.delayed_exec(v)) {
                    delta[v.settings.$uuid] = v.settings
                }
            }
        })

        if (Object.keys(delta).length) {
            let tf = this.tv.$refs.chart.interval_ms ||
                     this.data.chart.tf
            let range = this.tv.getRange()
            this.ww.just('update-ov-settings', {
                delta, tf, range
            })
        }
    }

    // Overlay modification from WW
    modify_overlay(upd) {
        let obj = this.get_overlay(upd)
        if (obj) {
            for (var k in upd.fields || {}) {
                if (typeof obj[k] === 'object') {
                    this.merge(`${upd.uuid}.${k}`, upd.fields[k])
                } else {
                    this.tv.$set(obj, k, upd.fields[k])
                }
            }
        }
    }

    data_changed(args) {
        if (!this.sett.scripts) return
        if (this.sett.data_change_exec === false) return
        let main = this.data.chart.data
        if (this.ww._data_uploading) return
        if (!this.se_state.scripts) return
        this.send_meta_2_ww()
        this.ww.just('upload-data', { ohlcv: main })
        this.ww._data_uploading = true
        this.set_loading(true)
    }

    set_loading(flag) {
        let skrr = this.get('.').filter(x => x.settings.$props)
        for (var s of skrr) {
            this.merge(`${s.id}`, { loading: flag })
        }
    }

    send_meta_2_ww() {
        let tf = this.tv.$refs.chart.interval_ms ||
                 this.data.chart.tf
        let range = this.tv.getRange()
        this.ww.just('send-meta-info', { tf, range })
    }

    merge_presets(proto, preset) {
        if (!preset) return
        for (var k in preset) {
            if (k === 'settings') {
                Object.assign(proto[k], preset[k])
            } else {
                proto[k] = preset[k]
            }
        }
    }

    grid_mousedown(args) {
        // TODO: tool state finished?
        this.object_selected([])
        // Remove the previous RangeTool
        let rem = () => this.get('RangeTool')
            .filter(x => x.settings.shiftMode)
            .forEach(x => this.del(x.id))
        if (this.data.tool && this.data.tool !== 'Cursor' &&
           !this.data.drawingMode) {
            // Prevent from "null" tools (tool created with HODL)
            if (args[1].type !== 'tap') {
                this.tv.$set(this.data, 'drawingMode', true)
                this.build_tool(args[0])
            } else {
                this.tv.showTheTip(
                    `<b>Hodl</b>+<b>Drug</b> to create, ` +
                    `<b>Tap</b> to finish a tool`
                )
            }
        } else if (this.sett.shift_measure && args[1].shiftKey) {
            rem()
            this.tv.$nextTick(() =>
                this.build_tool(args[0], 'RangeTool:ShiftMode'))
        } else {
            rem()
        }
    }

    drawing_mode_off() {
        this.tv.$set(this.data, 'drawingMode', false)
        this.tv.$set(this.data, 'tool', 'Cursor')
    }

    // Place a new tool
    build_tool(grid_id, type) {

        let list = this.data.tools
        type = type || this.data.tool
        let proto = list.find(x => x.type === type)
        if (!proto) return
        let sett = Object.assign({}, proto.settings || {})
        let data = (proto.data || []).slice()

        if(!('legend' in sett)) sett.legend = false
        if(!('z-index' in sett)) sett['z-index'] = 100
        sett.$selected = true
        sett.$state = 'wip'

        let side = grid_id ? 'offchart' : 'onchart'
        let id = this.add(side, {
            name: proto.name,
            type: type.split(':')[0],
            settings: sett,
            data: data,
            grid: { id: grid_id }
        })

        sett.$uuid = `${id}-${Utils.now()}`

        this.tv.$set(this.data, 'selected', sett.$uuid)
        this.add_trash_icon()
    }

    // Remove selected / Remove all, etc
    system_tool(type) {
        switch (type) {
            case 'Remove':
                if (this.data.selected) {
                    this.del(this.data.selected)
                    this.remove_trash_icon()
                    this.drawing_mode_off()
                    this.on_scroll_lock(false)
                }
                break
        }
    }

    // Apply new overlay settings
    change_settings(args) {
        let settings = args[0]
        delete settings.id
        let grid_id = args[1]
        this.merge(`${args[3]}.settings`, settings)
    }

    // Lock the scrolling mechanism
    on_scroll_lock(flag) {
        this.tv.$set(this.data, 'scrollLock', flag)
    }

    // When new object is selected / unselected
    object_selected(args) {
        var q = this.data.selected
        if (q) {
            // Check if current drawing is finished
            //let res = this.get_one(`${q}.settings`)
            //if (res && res.$state !== 'finished') return
            this.merge(`${q}.settings`, {
                $selected: false
            })
            this.remove_trash_icon()
        }
        this.tv.$set(this.data, 'selected', null)

        if (!args.length) return

        this.tv.$set(this.data, 'selected', args[2])
        this.merge(`${args[2]}.settings`, {
            $selected: true
        })

        this.add_trash_icon()
    }

    add_trash_icon() {
        const type = 'System:Remove'
        if (this.data.tools.find(x => x.type === type)) {
            return
        }
        this.data.tools.push({
            type, icon: Icons['trash.png']
        })
    }

    remove_trash_icon() {
        // TODO: Does not call Toolbar render (distr version)
        const type = 'System:Remove'
        Utils.overwrite(this.data.tools,
            this.data.tools.filter(x => x.type !== type)
        )
    }

    // Set overlay data from the web-worker
    on_overlay_data(data) {
        this.get('.').forEach(x => {
            if (x.settings.$synth) this.del(`${x.id}`)
        })
        for (var ov of data) {
            let obj = this.get_one(`${ov.id}`)
            if (obj) {
                this.tv.$set(obj, 'loading', false)
                if (!ov.data) continue
                obj.data = ov.data
            }
            if (!ov.new_ovs) continue
            for (var id in ov.new_ovs.onchart) {
                if (!this.get_one(`onchart.${id}`)) {
                    this.add('onchart', ov.new_ovs.onchart[id])
                }
            }
            for (var id in ov.new_ovs.offchart) {
                if (!this.get_one(`offchart.${id}`)) {
                    this.add('offchart', ov.new_ovs.offchart[id])
                }
            }
        }
    }

    // Push overlay updates from the web-worker
    on_overlay_update(data) {
        for (var ov of data) {
            if (!ov.data) continue
            let obj = this.get_one(`${ov.id}`)
            if (obj) {
                this.fast_merge(obj.data, ov.data, false)
            }
        }
    }

    // Clean-up unfinished business (tools)
    before_destroy() {
        let f = x => !x.settings.$state ||
            x.settings.$state === 'finished'
        this.data.onchart = this.data.onchart
            .filter(f)
        this.data.offchart = this.data.offchart
            .filter(f)
        this.drawing_mode_off()
        this.on_scroll_lock(false)
        this.object_selected([])
        this.ww.destroy()
    }

    // Get overlay by grid-layer id
    get_overlay(obj) {
        let id = obj.id || `g${obj.grid_id}_${obj.layer_id}`
        let dcid = obj.uuid || this.gldc[id]
        return this.get_one(`${dcid}`)
    }


}
