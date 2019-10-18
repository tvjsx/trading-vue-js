
// Usuful stuff for creating tools. Include as mixin

export default {
    methods: {
        init_tool() {
            // Collision functions (float, float) => bool,
            this.collisions = []
            this.pins = []

            this.mouse.on('mousedown', e => {
                if (this.collisions.every(f => f(
                    this.mouse.x, this.mouse.y,
                ))) {
                    this.$emit('tool-selected')
                }
            })

            this.mouse.on('mousemove', e => {
                if (this.collisions.every(f => f(
                    this.mouse.x, this.mouse.y,
                ))) {
                    this.show_pins = true
                } else {
                    this.show_pins = false
                }
            })
        },
        render_pins(ctx) {
            if (this.show_pins) {
                this.pins.forEach(x => x.draw(ctx))
            }
        }
    }
}
