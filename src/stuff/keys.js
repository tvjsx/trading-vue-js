// Keyboard event handler for overlay

export default class Keys {

    constructor(comp) {
        this.comp = comp
        this.map = {}
        this.listeners = 0
        this.keymap = {}
    }

    on(name, handler) {
        if (!handler) return
        this.map[name] = this.map[name] || []
        this.map[name].push(handler)
        this.listeners++
    }

    // Called by grid.js
    emit(name, event) {
        if (name in this.map) {
            for (var f of this.map[name]) {
                f(event)
            }
        }
        if (name === 'keydown') {
            if (!this.keymap[event.key]) {
                this.emit(event.key)
            }
            this.keymap[event.key] = true
        }
        if (name === 'keyup') {
            this.keymap[event.key] = false
        }
    }

    pressed(key) {
        return this.keymap[key]
    }

}
