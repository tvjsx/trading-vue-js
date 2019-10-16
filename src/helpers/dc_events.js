
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
                this.tv.$set(this.data, 'tool', args[0])
                if (args[0] === 'Cursor') {
                    this.tv.$set(this.data, 'drawingMode', false)
                }
                break
            case 'drawing-mode-on':
                // TODO: Tools for offchart grids
                if (this.data.tool !== 'Cursor') {
                    console.log('drawing-mode-on', args[0])
                    this.tv.$set(this.data, 'drawingMode', true)
                }
                break
            case 'drawing-mode-off':
                console.log('drawing-mode-off')
                this.tv.$set(this.data, 'drawingMode', false)
                this.tv.$set(this.data, 'tool', 'Cursor')
                break
            default:
                console.log(event, args)
                break
        }
    }

    register_tools(tools) {

        if (this.data.tools) return //TODO: merging with user-defined toolset
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
}
