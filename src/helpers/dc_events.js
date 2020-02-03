
// DataCube event handlers

import Utils from '../stuff/utils.js'
import Icons from '../stuff/icons.json'

export default class DCEvents {

    // Called when overalay/tv emits 'custom-event'
    on_custom_event(event, args) {
        switch(event) {
            case 'register-tools':
                this.register_tools(args)
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
            case 'grid-mousedown':
                // TODO: tool state finished?
                this.object_selected([])
                if (this.data.tool && this.data.tool !== 'Cursor' &&
                        !this.data.drawingMode) {
                    this.tv.$set(this.data, 'drawingMode', true)
                    this.build_tool(args[0])
                }
                break
            case 'drawing-mode-off':
                this.drawing_mode_off()
                break
            case 'change-settings':
                this.change_settings(args)
                break
            case 'scroll-lock':
                this.on_scroll_lock(args[0])
                break
            case 'object-selected':
                this.object_selected(args)
                break
            case 'remove-tool':
                this.system_tool('Remove')
                break
            case 'before-destroy':
                this.before_destroy()
                break
        }
    }

    // Combine all tools and their mods
    register_tools(tools) {
        const preset = {}
        for (const tool of this.data.tools || []) {
             preset[tool.type] = tool
             delete tool.type
        }
        this.data.tools = []
        const list = [{
            type: 'Cursor', icon: Icons['cursor.png']
        }]
        for (const tool of tools) {
            const proto = Object.assign({}, tool.info)
            const type = tool.info.type || 'Default'
            proto.type = `${tool.use_for}:${type}`
            this.merge_presets(proto, preset[tool.use_for])
            this.merge_presets(proto, preset[proto.type])
            delete proto.mods
            list.push(proto)

            for (const mod in tool.info.mods) {
                let mp = Object.assign({}, proto)
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

    merge_presets(proto, preset) {
        if (!preset) return

        for (const k in preset) {
            if (k === 'settings') {
                Object.assign(proto[k], preset[k])
            } else {
                proto[k] = preset[k]
            }
        }
    }

    drawing_mode_off() {
        this.tv.$set(this.data, 'drawingMode', false)
        this.tv.$set(this.data, 'tool', 'Cursor')
    }

    // Place a new tool
    build_tool(grid_id) {

        const list = this.data.tools
        const type = this.data.tool
        const proto = list.find(x => x.type === type)
        if (!proto) return

        const sett = Object.assign({}, proto.settings || {})
        const data = (proto.data || []).slice(0)

        if(!('legend' in sett)) sett.legend = false
        if(!('z-index' in sett)) sett['z-index'] = 100
        sett.$selected = true
        sett.$state = 'wip'

        const side = grid_id ? 'offchart' : 'onchart'
        const id = this.add(side, {
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
        const settings = args[0]
        delete settings.id

        //const grid_id = args[1]  // TODO var not used
        this.merge(`${args[3]}.settings`, settings)
    }

    // Lock the scrolling mechanism
    on_scroll_lock(flag) {
        this.tv.$set(this.data, 'scrollLock', flag)
    }

    // When new object is selected / unselected
    object_selected(args) {
        let q = this.data.selected
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

        if (args.length === 0) return

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

    // Clean-up unfinished business (tools)
    before_destroy() {
        const f = x => !x.settings.$state ||
            x.settings.$state === 'finished'
        this.data.onchart = this.data.onchart
            .filter(f)
        this.data.offchart = this.data.offchart
            .filter(f)
        this.drawing_mode_off()
        this.on_scroll_lock(false)
        this.object_selected([])
    }

}
