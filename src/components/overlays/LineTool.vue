<script>
// Line drawing tool

import Overlay from '../../mixins/overlay.js'
import Tool from '../../mixins/tool.js'
import Icons from '../../stuff/icons.json'
import Pin from '../primitives/pin.js'

export default {
    name: 'LineTool',
    mixins: [Overlay, Tool],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        tool() {
            return {
                // Descriptor for the tool
                group: 'Lines', icon: Icons['segment.png'],
                type: 'Segment',
                hint: 'This hint will be shown on hover',
                data: [],     // Default data
                settings: {}, // Default settings
                // Modifications
                mods: {
                    'Extended': {
                        // Rewrites the default setting fields
                        settings: { extended: true },
                        icon: Icons['extended.png']
                    }
                }
            }
        },
        // Called after overlay mounted
        init() {
            // First pin is settled at the mouse position
            this.pins.push(new Pin(this, 'p1'))
            // Second one is following mouse until it clicks
            this.pins.push(new Pin(this, 'p2', {
                state: 'tracking'
            }))
            this.pins[1].on('settled', () => {
                // Call when current tool drawing is finished
                // (Optionally) reset the mode back to 'Cursor'
                this.set_state('finished')
                this.$emit('drawing-mode-off')
            })
        },
        draw(ctx) {
            if (!this.p1 || !this.p2) return

            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color
            ctx.beginPath()

            const layout = this.$props.layout

            let x1 = layout.t2screen(this.p1[0])
            let y1 = layout.$2screen(this.p1[1])
            ctx.moveTo(x1, y1)

            let x2 = layout.t2screen(this.p2[0])
            let y2 = layout.$2screen(this.p2[1])
            ctx.lineTo(x2, y2)

            if (this.sett.extended) {
                this.draw_extended(ctx, [x1, y1], [x2, y2])
            }

            ctx.stroke()
            this.render_pins(ctx)
        },
        draw_extended(ctx, p1, p2) {

            let w = this.$props.layout.width
            let h = this.$props.layout.height
            // TODO: transform k (angle) to screen ratio
            // (this requires a new a2screen function)
            let k = (p2[1] - p1[1]) / (p2[0] - p1[0])
            let s = Math.sign(p2[0] - p1[0] || p2[1] - p1[1])
            let dx = w * s * 2
            let dy = w * k * s * 2
            if (dy === Infinity) { dx = 0, dy = h * s}

            ctx.moveTo(...p2)
            ctx.lineTo(p2[0] + dx, p2[1] + dy)
            ctx.moveTo(...p1)
            ctx.lineTo(p1[0] - dx, p1[1] - dy)

        },
        use_for() { return ['LineTool'] },
        data_colors() { return [this.color] }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        p1() {
            return this.$props.settings.p1
        },
        p2() {
            return this.$props.settings.p2
        },
        line_width() {
            return this.sett.lineWidth || 0.9
        },
        color() {
            return this.sett.color || '#42b28a'
        }
    },
    data() {
        return {}
    }

}
</script>
