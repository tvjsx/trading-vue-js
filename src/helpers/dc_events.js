
// DataCube event handlers

import Utils from '../stuff/utils.js'
import Icons from '../stuff/icons.json'

export default class DCEvents {

    // Called when overalay emits 'custom-event'
    on_custom_event(event, args) {
        switch(event) {
            case 'register-tools':
                this.register_tools(args)
                break
            case 'tool-selected':
                this.tv.$set(this.data, 'tool', args[0])
                break
            default:
                console.log(event, args)
                break
        }
    }

    register_tools(tools) {

        if (this.data.tools) return
        let list = [{
            type: 'Cursor',
            icon: Icons['cursor.png']
        }]

        for (var tool of tools) {
            list.push({
                type: `${tool.use_for}:${tool.info.type}`,
                icon: tool.info.icon
            })
            for (var mod in tool.info.mods) {
                list.push({
                    type: `${tool.use_for}:${mod}`,
                    icon: tool.info.mods[mod].icon
                })
            }
        }

        this.tv.$set(this.data, 'tools', list)

        if (!this.data.tool) {
            this.tv.$set(this.data, 'tool', 'Cursor')
        }
    }
}
