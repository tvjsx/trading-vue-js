<script>

import Overlay from '../../mixins/overlay.js'

export default {
    name: 'Trades',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.2' }
        },
        draw(ctx) {
            const layout = this.$props.layout
            const data = this.$props.data
            ctx.lineWidth = 1.5
            ctx.strokeStyle = 'black'
            for (var k = 0, n = data.length; k < n; k++) {
                let p = data[k]
                ctx.fillStyle = p[1] ? this.buy_color : this.sell_color
                ctx.beginPath()
                let x = layout.t2screen(p[0]) // x - Mapping
                let y = layout.$2screen(p[2]) // y - Mapping
                ctx.arc(x, y, this.marker_size + 0.5, 0, Math.PI * 2, true)
                ctx.fill()
                ctx.stroke()

                if (this.show_label && p[3]) {
                    this.draw_label(ctx, x, y, p)
                }
            }
        },

        draw_label(ctx, x, y, p) {

            ctx.fillStyle = this.label_color
            ctx.font = this.new_font
            ctx.textAlign = 'center'
            ctx.fillText(p[3], x, y - 25)
        },
        use_for() { return ['Trades'] },

        // Defines legend format (values & colors)
        legend(values) {
            switch (values[1]) {
                case 0:
                    var pos = 'Sell'
                    break
                case 1:
                    pos = 'Buy'
                    break
                default:
                    pos = 'Unknown'
            }

            return [
                {
                    value: pos
                },
                {
                    value: values[2].toFixed(4),
                    color: this.$props.colors.text
                }
            ].concat(values[3] ? [
                {
                    value: values[3]
                }
            ] : [])
        }


    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        default_font() {
            return '12px ' + this.$props.font.split('px').pop()
        },
        buy_color() {
            return this.sett.buyColor || '#63df89'
        },
        sell_color() {
            return this.sett.sellColor || '#ec4662'
        },
        label_color() {
            return this.sett.labelColor || '#999'
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
    }
}
</script>
