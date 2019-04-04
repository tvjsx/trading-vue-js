<script>

import Overlay from '../../mixins/overlay.js'

export default {
    name: 'Trades',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        draw(ctx) {
            let layout = this.$props.layout
            ctx.lineWidth = 1.5
            ctx.strokeStyle = 'black'
            for (var i in this.$props.data) {

                let p = this.$props.data[i]
                let prev = this.$props.data[i - 1]

                ctx.fillStyle = p[1] ? this.buy_color : this.sell_color
                ctx.beginPath()
                let x = layout.t2screen(p[0]) // x - Mapping
                let y = layout.$2screen(p[2]) // y - Mapping
                ctx.arc(x, y, this.marker_size + 0.5, 0, Math.PI * 2, true)
                ctx.fill()
                ctx.stroke()

                if (this.show_label && p[3]) {
                    this.draw_label(ctx, x, y, p, prev)
                }
            }
        },

        draw_label(ctx, x, y, p) {

            ctx.fillStyle = this.label_color
            ctx.font = this.new_font
            ctx.textAlign = 'center'
            ctx.fillText(p[3], x, y - 25)
        },

        // TODO: dynamic data_colors
        use_for() { return ['Trades'] }

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
        buy_color() {
            return this.sett.buyColor || '#63df89'
        },
        sell_color() {
            return this.sett.sellColor || '#ec4662'
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
    }
}
</script>
