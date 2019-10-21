// Mouse event handler for overlay

export default class Mouse {

    constructor(comp) {
        this.comp = comp
        this.map = {}
        this.listeners = 0
        this.pressed = false
        this.x = comp.$props.cursor.x
        this.y = comp.$props.cursor.y
        this.t = comp.$props.cursor.t
        this.y$ = comp.$props.cursor.y$
    }

    on(name, handler) {
        if (!handler) return
        this.map[name] = this.map[name] || []
        this.map[name].push(handler)
        this.listeners++
    }

    // Called by grid.js
    emit(name, event) {
        const l = this.comp.layout
        if (name in this.map) {
            for (var f of this.map[name]) {
                f(event)
            }
        }
        if (name === 'mousemove') {
            this.x = event.layerX
            this.y = event.layerY
            this.t = l.screen2t(this.x)
            this.y$ = l.screen2$(this.y)
        }
        if (name === 'mousedown') {
            this.pressed = true
        }
        if (name === 'mouseup') {
            this.pressed = false
        }
    }

}
