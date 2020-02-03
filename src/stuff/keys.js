// Keyboard event handler for overlay

export default class Keys {

    constructor(comp) {
        this.comp = comp
        this.map = {}
        this.listeners = 0
        this.keymap = {}
    }

    on(name, handler) {
        if (typeof handler !== 'function') return
        if (!this.map.hasOwnProperty(name)) {
            this.map[name] = [handler];
        } else {
            this.map[name].push(handler)
        }

        this.listeners++
    }

    // Called by grid.js
    emit(name, event) {
        if (this.map.hasOwnProperty(name)) {
            for (const f of this.map[name]) {
                f(event)
            }
        }
        if (name === 'keydown') {
            if (!this.keymap[event.key]) {
                this.emit(event.key)
            }
            this.keymap[event.key] = true
        } else if (name === 'keyup') {
            this.keymap[event.key] = false
        }
    }

    pressed(key) {
        return this.keymap[key]
    }

}
