<script>
// Line drawing tool

import Overlay from '../../mixins/overlay.js'
import Tool from '../../mixins/tool.js'
import Icons from '../../stuff/icons.json'
import Pin from '../primitives/pin.js'
import Seg from '../primitives/seg.js'

export default {
    name: 'RangeTool',
    mixins: [Overlay, Tool],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        tool() {
            return {
                // Descriptor for the tool
                group: 'Measurements', icon: Icons['price_range.png'],
                type: 'Price',
                hint: 'Price Range',
                data: [],     // Default data
                settings: {}  // Default settings
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

            // Top
            new Seg(this, ctx).draw(
                [this.p1[0], this.p2[1]],  [this.p2[0], this.p2[1]]
            )
            // Bottom
            new Seg(this, ctx).draw(
                [this.p1[0], this.p1[1]],  [this.p2[0], this.p1[1]]
            )
            ctx.stroke()

            // Vertical
            ctx.beginPath()
            ctx.setLineDash([5, 5])
            new Seg(this, ctx).draw(
                [(this.p1[0] + this.p2[0]) * 0.5,  this.p2[1]],
                [(this.p1[0] + this.p2[0]) * 0.5,  this.p1[1]]
            )
            ctx.stroke()
            ctx.setLineDash([])
            this.render_pins(ctx)

        },
        use_for() { return ['RangeTool'] },
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
            return this.sett.color ||
                this.$props.colors.colorCross
        }
    },
    data() {
        return {}
    }

}
</script>
