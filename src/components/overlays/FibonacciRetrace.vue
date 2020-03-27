<script>
// Line drawing tool

import Overlay from '../../mixins/overlay.js'
import Tool from '../../mixins/tool.js'
import Icons from '../../stuff/icons.json'
import Pin from '../primitives/pin.js'
import Seg from '../primitives/seg.js'

export default {
    name: 'FibonacciRetrace',
    mixins: [Overlay, Tool],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        tool() {
            return {
                // Descriptor for the tool
                group: 'Fibonacci', icon: Icons['fib.png'],
                type: 'Segment',
                hint: 'This hint will be shown on hover',
                data: [],     // Default data
                settings: {} // Default settings
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

            ctx.lineWidth = this.line_width*4
            ctx.strokeStyle = this.color
            ctx.beginPath()

            let xFrom = this.p1[0]
            let xTo = this.p2[0]
            let yTop = this.p1[1]
            let yBottom = this.p2[1]
            // Top
            new Seg(this, ctx).draw([xFrom, yBottom],  [xTo, yBottom])
            // Bottom
            new Seg(this, ctx).draw([xFrom, yTop],  [xTo, yTop])
            ctx.stroke()

            // Inside
            ctx.beginPath()
            ctx.lineWidth = this.line_width

            let delta = yTop - yBottom
            for(const m of [0.236, 0.382, 0.5, 0.618, 0.764]) {
                new Seg(this, ctx).draw([xFrom, yTop - delta*m],  [xTo, yTop - delta*m])
            }
            // Above
            for(const m of [1.236, 1.382, 1.5, 1.618, 1.764, 2.618, 4.236]) {
                new Seg(this, ctx).draw([xFrom, yBottom + delta*m],  [xTo, yBottom + delta*m])
            }
            // Below
            for(const m of [1.236, 1.382, 1.5, 1.618, 1.764, 2.618, 4.236]) {
                new Seg(this, ctx).draw([xFrom, yTop - delta*m],  [xTo, yTop - delta*m])
            }

            ctx.stroke()
            this.render_pins(ctx)

        },
        use_for() { return ['FibonacciRetrace'] },
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
