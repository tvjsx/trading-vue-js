
// Usuful stuff for creating tools. Include as mixin

import Keys from '../stuff/keys.js'

export default {
    methods: {
        init_tool() {
            // Collision functions (float, float) => bool,
            this.collisions = []
            this.pins = []

            this.mouse.on('mousemove', e => {
                if (this.collisions.some(f => f(
                    this.mouse.x, this.mouse.y,
                ))) {
                    this.show_pins = true
                } else {
                    this.show_pins = false
                }
            })

            this.mouse.on('mousedown', e => {
                if (e.defaultPrevented) return
                if (this.collisions.some(f => f(
                    this.mouse.x, this.mouse.y,
                ))) {
                    if (!this.selected) {
                        this.$emit('object-selected')
                    }
                    e.preventDefault()
                    this.pins.forEach(x => x.mousedown(e, true))
                }
            })

            this.keys = new Keys(this)
            this.keys.on('Delete', this.remove_tool)
            this.keys.on('Backspace', this.remove_tool)

            this.show_pins = true
        },
        render_pins(ctx) {
            if (this.selected || this.show_pins) {
                this.pins.forEach(x => x.draw(ctx))
            }
        },
        set_state(name) {
            this.$emit('change-settings', {
                 $state: name
            })
        },
        watch_uuid(n, p) {
            // If layer $uuid is changed, then re-init
            // pins & collisions
            if (n.$uuid !== p.$uuid) {
                for (var p of this.pins) p.re_init()
                // TODO: coliisions
            }
        },
        pre_draw() {
            // Delete all collision functions before
            // the draw() call and let primitives set
            // them again
            this.collisions = []
        },
        remove_tool() {
            if (this.selected) this.$emit('remove-tool')
        }
    },
    computed: {
        // Settings starting with $ are reserved
        selected() {
            return this.$props.settings.$selected
        },
        state() {
            return this.$props.settings.$state
        },
    }
}
