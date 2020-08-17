<script>
/**
 * PercentRangeOverlay
 * Format: [<entry timestamp>, Entry Price, <exit timestamp>, Exit Price, Long:1 | Short: 0]
 *
 * */
import Overlay from '../../../src/mixins/overlay.js'

export default {
    name: 'RangeTrades',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'arunavo', version: '1.0.0' }
        },
        draw(ctx) {
            for (var p of this.$props.data){
                let dir = Math.sign(p[4] - p[2])

                ctx.lineWidth = this.line_width
                ctx.strokeStyle = this.color
                ctx.beginPath()

                // Background
                ctx.fillStyle = this.back_color //p[5] ? this.buy_color : this.sell_color
                const layout = this.$props.layout
                let x1 = layout.t2screen(p[1])
                let y1 = layout.$2screen(p[2])
                let x2 = layout.t2screen(p[3])
                let y2 = layout.$2screen(p[4])

                ctx.rect(x1, y1, x2 - x1, y2 - y1)
                // Arrow
                let xm = layout.t2screen((p[1] + p[3])*0.5)
                // let ym = layout.$2screen((p[2] + p[4])*0.5)  // Use this if you want text in mid
                ctx.moveTo(xm - 4, y2 + 5 * dir)
                ctx.lineTo(xm, y2)
                ctx.lineTo(xm + 4, y2 + 5 * dir)
                ctx.stroke()
                // Vertical
                ctx.beginPath()
                ctx.setLineDash([5, 5])

                ctx.stroke()
                ctx.setLineDash([])
                this.draw_value(ctx, dir, xm, y2, p)
            }
        },
        draw_value(ctx, dir, xm, y, p) {
            ctx.font = this.new_font
            let d$ = (p[4] - p[2]).toFixed(this.prec)
            let pct = (100 * (p[4] / p[2] - 1)).toFixed(this.prec)
            let text = `${d$}  (${pct}%)`
            let w = Math.max(ctx.measureText(text).width + 20, 100)
            ctx.fillStyle = this.value_back
            ctx.fillRect(xm - w * 0.5, y - 30 * dir, w, 20 * dir)
            ctx.fillStyle = this.value_color
            ctx.textAlign = 'center'
            ctx.fillText(text, xm, y + (dir > 0 ? -15 : 25))
        },
        use_for() { return ['RangeTrades'] },
        // Defines legend format (values & colors)
        legend(values) {
            switch (values[5]) {
                case 0:
                    var pos = 'Short'
                    break
                case 1:
                    pos = 'Long'
                    break
                default:
                    pos = 'Unknown'
            }
            return [
                {
                    value: pos
                },
                {
                    value: 'Entry: ' + values[2].toFixed(4),
                    color: this.$props.colors.colorText
                },
                {
                    value: 'Exit: ' + values[4].toFixed(4),
                    color: this.$props.colors.colorText
                }
            ]
        }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        default_font() {
            //console.log(this.$props.font.split('px').pop())
            return '12px ' + this.$props.font.split('px').pop()
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
        buy_color() {
            return this.sett.buyColor || '#9b63df89'
        },
        sell_color() {
            return this.sett.sellColor || '#9bec4662'
        },
        label_color() {
            return this.sett.labelColor || '#333'
        },
        marker_size() {
            return this.sett.markerSize || 5
        },
        show_label() {
            return this.sett.showLabel !== false
        },
        new_font() {
            return this.sett.font || this.default_font
        }
    },
    data() {
        return {}
    }
}
</script>
