
// DataCube event handlers

import Utils from '../stuff/utils.js'
import Icons from '../stuff/icons.json'

export default class DCEvents {

    // Called when overalay/tv emits 'custom-event'
    on_custom_event(event, args) {
        switch(event) {
            case 'register-tools': this.register_tools(args)
                break
            case 'tool-selected':
                if (args[0].split(':')[0] === 'System') {
                    this.system_tool(args[0].split(':')[1])
                    break
                }
                this.tv.$set(this.data, 'tool', args[0])
                if (args[0] === 'Cursor') {
                    this.tv.$set(this.data, 'drawingMode', false)
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
                this.tv.$set(this.data, 'drawingMode', false)
                this.tv.$set(this.data, 'tool', 'Cursor')
                break
            case 'change-settings': this.change_settings(args)
                break
            case 'scroll-lock': this.on_scroll_lock(args[0])
                break
            case 'object-selected': this.object_selected(args)
                break
            default: console.log(event, args)
                break
        }

    }

    // Combine all tools and their mods
    register_tools(tools) {

        //TODO: merging with user-defined toolset
        if (this.data.tools) return
        let list = [{
            type: 'Cursor', icon: Icons['cursor.png']
        }]

        for (var tool of tools) {
            var proto = Object.assign({}, tool.info)
            proto.type = `${tool.use_for}:${tool.info.type}`
            delete proto.mods
            list.push(proto)
            for (var mod in tool.info.mods) {
                var mp = Object.assign({}, proto)
                mp = Object.assign(mp, tool.info.mods[mod])
                mp.type = `${tool.use_for}:${mod}`
                list.push(mp)
            }
        }

        this.tv.$set(this.data, 'tools', list)
        this.tv.$set(this.data, 'tool', 'Cursor')

    }

    // Place a
    build_tool(grid_id) {
        // TODO: Tools for offchart grids (grid_id > 0).
        // Currently 1 offchart overlay === 1 new grid,
        // need to find a way to stack offchart overlays.
        if (grid_id !== 0) {
            this.tv.$set(this.data, 'drawingMode', false)
            this.tv.$set(this.data, 'tool', 'Cursor')
            return
        }

        let list = this.data.tools
        let type = this.data.tool
        let proto = list.find(x => x.type === type)
        if (!proto) return

        let sett = Object.assign({}, proto.settings || {})
        let data = (proto.data || []).slice()

        if(!('legend' in sett)) sett.legend = false
        if(!('z-index' in sett)) sett['z-index'] = 100
        sett.$selected = true
        sett.$state = 'wip'

        let id = this.add('onchart', {
            name: proto.name,
            type: type.split(':')[0],
            settings: sett,
            data: data
        })

        this.tv.$set(this.data, 'selected', id)
        this.add_trash_icon()
    }

    // Remove selected / Remove all, etc
    system_tool(type) {
        switch (type) {
            case 'Remove':
                if (this.data.selected) {
                    this.del(this.data.selected)
                }
                break
        }
    }

    // Apply new overlay settings
    change_settings(args) {
        let settings = args[0]
        delete settings.id
        let grid_id = args[1]
        let q = this.layer_query(args[1], args[2])

        // TODO: Tools for offchart grids
        if (grid_id !== 0) return

        this.merge(`${q}.settings`, settings)

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

        var q = this.layer_query(args[0], args[1])
        this.tv.$set(this.data, 'selected', q)
        this.merge(`${q}.settings`, {
            $selected: true
        })
        this.add_trash_icon()
    }

    // Form query for given grid and layer id
    layer_query(grid_id, id) {
        let side = grid_id ? 'offchart' : 'onchart'
        return `${side}.${id.replace('_', '')}`
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
        const type = 'System:Remove'
        this.data.tools =
            this.data.tools.filter(x => x.type !== type)
    }
}
