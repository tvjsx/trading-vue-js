
// Controller for the extension. Setups all things,
// handles events, serves as a hub between different
// widgets/components

import Utils  from  '../../../../src/stuff/utils.js'
import EventBus from './event_bus.js'
import Button from './Button.vue'

var event_bus = null

export default class Main {

    constructor(tv, dc) {
        this.widgets = {}
        this.tv = tv
        this.dc = dc

        let id = `Button-${Utils.uuid2()}`

        // Create a new widget instance
        this.tv.$set(this.widgets, id, {
            id: id,
            cls: Button,
            data: {}
        })

        this.bus = Main.bus()
    }

    // Communication between the controller &
    // widgets/components
    static bus() {
        if (!event_bus) event_bus = new EventBus()
        return event_bus
    }

    // Listening to the Chart.vue hooks &
    // other events
    update(e) {
        switch (e.event) {
            case '?chart-data':
            case '?chart-resize':
                this.bus.send('update')
                break
            case 'chart-reset':
                this.bus.send('reset')
                break
        }
    }
}
