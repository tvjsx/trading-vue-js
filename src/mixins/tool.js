
// Usuful stuff for creating tools. Include as mixin

export default {
    methods: {
        init_tool() {
            // Collision functions (float, float) => bool,
            this.collisions = []
            this.pins = []

            this.mouse.on('mousemove', e => {
                if (this.collisions.every(f => f(
                    this.mouse.x, this.mouse.y,
                ))) {
                    this.show_pins = true
                } else {
                    this.show_pins = false
                }
            })

            this.mouse.on('mousedown', e => {
                if (this.collisions.length &&
                    this.collisions.every(f => f(
                    this.mouse.x, this.mouse.y,
                ))) {
                    this.$emit('object-selected')
                }
            })

            this.show_pins = true
        },
        render_pins(ctx) {
            if (this.show_pins) {
                this.pins.forEach(x => x.draw(ctx))
            }
        },
        set_state(name) {
            this.$emit('change-settings', {
                 $state: name
            })
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
