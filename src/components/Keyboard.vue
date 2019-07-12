
<!-- Listens to native keyboard events,
     propagates to all KeyboardListeners -->

<script>

export default {
    name: 'Keyboard',
    created: function () {
        window.addEventListener('keydown', this.keydown)
        window.addEventListener('keyup', this.keyup)
        window.addEventListener('keypress', this.keypress)
        this._listeners = {}
    },
    beforeDestroy: function () {
        window.removeEventListener('keydown', this.keydown)
        window.removeEventListener('keyup', this.keyup)
        window.removeEventListener('keypress', this.keypress)
    },
    render(h) { return h() },
    methods: {
        keydown (event) {
            for (var id in this._listeners) {
                let l = this._listeners[id]
                if (l && l.keydown) {
                    l.keydown(event)
                } else {
                    console.warn(`No 'keydown' listener for ${id}`)
                }
            }
        },
        keyup (event) {
            for (var id in this._listeners) {
                let l = this._listeners[id]
                if (l && l.keyup) {
                    l.keyup(event)
                } else {
                    console.warn(`No 'keyup' listener for ${id}`)
                }
            }
        },
        keypress (event) {
            for (var id in this._listeners) {
                let l = this._listeners[id]
                if (l && l.keypress) {
                    l.keypress(event)
                } else {
                    console.warn(`No 'keypress' listener for ${id}`)
                }
            }
        },
        register(listener) {
            this._listeners[listener.id] = listener
        },
        remove(listener) {
            delete this._listeners[listener.id]
        },
    }
}

</script>
