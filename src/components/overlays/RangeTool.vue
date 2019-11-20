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

            let dir = Math.sign(this.p2[1] - this.p1[1])

            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color
            ctx.beginPath()

            // Background
            ctx.fillStyle = this.back_color
            const layout = this.$props.layout
            let x1 = layout.t2screen(this.p1[0])
            let y1 = layout.$2screen(this.p1[1])
            let x2 = layout.t2screen(this.p2[0])
            let y2 = layout.$2screen(this.p2[1])
            ctx.fillRect(x1, y1, x2 - x1, y2 - y1)

            // Top
            new Seg(this, ctx).draw(
                [this.p1[0], this.p2[1]],  [this.p2[0], this.p2[1]]
            )
            // Bottom
            new Seg(this, ctx).draw(
                [this.p1[0], this.p1[1]],  [this.p2[0], this.p1[1]]
            )

            // Arrow
            let xm = layout.t2screen((this.p1[0] + this.p2[0]) * 0.5)
            ctx.moveTo(xm - 4, y2 + 5 * dir)
            ctx.lineTo(xm, y2)
            ctx.lineTo(xm + 4, y2 + 5 * dir)

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

            this.draw_value(ctx, dir, xm, y2)

            this.render_pins(ctx)

        },
        draw_value(ctx, dir, xm, y) {
            ctx.font = this.new_font
            let d$ = (this.p2[1] - this.p1[1]).toFixed(this.prec)
            let p = (100 * (this.p2[1] / this.p1[1] - 1)).toFixed(this.prec)
            let text = `${d$}  (${p}%)`
            let w = Math.max(ctx.measureText(text).width + 20, 100)
            ctx.fillStyle = this.value_back
            ctx.fillRect(xm - w * 0.5, y - 30 * dir, w, 20 * dir)
            ctx.fillStyle = this.value_color
            ctx.textAlign = 'center'
            ctx.fillText(text, xm, y + (dir > 0 ? -15 : 25))

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
        },
        back_color() {
            return this.sett.backColor || '#9b9ba316'
        },
        value_back() {
            return this.sett.valueBack || '#9b9ba316'
        },
        value_color() {
            return this.sett.valueColor ||
                this.$props.colors.colorText
        },
        prec() {
            return this.sett.precision || 2
        },
        new_font() {
            return '12px ' + this.$props.font.split('px').pop()
        },
    },
    data() {
        return {}
    }

}
</script>
