
// Usuful stuff for creating tools. Include as mixin

import Keys from '../stuff/keys.js'
import Utils from '../stuff/utils.js'

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
                if (this.drag) this.drag_update()
            })

            this.mouse.on('mousedown', e => {
                if (Utils.default_prevented(e)) return
                if (this.collisions.some(f => f(
                    this.mouse.x, this.mouse.y,
                ))) {
                    if (!this.selected) {
                        this.$emit('object-selected')
                    }
                    this.start_drag()
                    e.preventDefault()
                    this.pins.forEach(x => x.mousedown(e, true))
                }
            })
            this.mouse.on('mouseup', e => {
                this.drag = null
                this.$emit('scroll-lock', false)
            })

            this.keys = new Keys(this)
            this.keys.on('Delete', this.remove_tool)
            this.keys.on('Backspace', this.remove_tool)

            this.show_pins = false
            this.drag = null
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
                this.collisions = []
                this.show_pins = false
                this.drag = null
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
        },
        start_drag() {
            this.$emit('scroll-lock', true)
            let cursor = this.$props.cursor
            this.drag = { t: cursor.t, y$: cursor.y$ }
            this.pins.forEach(x => x.rec_position())
        },
        drag_update() {
            let dt = this.$props.cursor.t - this.drag.t
            let dy = this.$props.cursor.y$ - this.drag.y$
            this.pins.forEach(x => x.update_from(
                [x.t1 + dt, x.y$1 + dy], true
            ))
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
