<script>

// Data section splitters (with labels)

import Overlay from '../../mixins/overlay.js'

export default {
    name: 'Splitters',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.1' }
        },
        draw(ctx) {
            let layout = this.$props.layout
            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.line_color

            this.$props.data.forEach((p, i) => {
                ctx.beginPath()
                let x = layout.t2screen(p[0]) // x - Mapping
                ctx.setLineDash([10, 10])
                ctx.moveTo(x, 0)
                ctx.lineTo(x, this.layout.height)
                ctx.stroke()
                if (p[1]) this.draw_label(ctx, x, p)
            })
        },

        draw_label(ctx, x, p) {

            let side = p[2] ? 1 : -1
            x += 2.5 * side

            ctx.font = this.new_font

            let pos = p[4] || this.y_position
            let w = ctx.measureText(p[1]).width + 10
            let y = this.layout.height * (1.0 - pos)

            y = Math.floor(y)

            ctx.fillStyle = p[3] || this.flag_color

            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + 10 * side, y - 10 * side)
            ctx.lineTo(x + (w + 10) * side, y - 10 * side)
            ctx.lineTo(x + (w + 10) * side, y + 10 * side)
            ctx.lineTo(x + 10 * side, y + 10 * side)
            ctx.closePath()
            ctx.fill()

            ctx.fillStyle = this.label_color
            ctx.textAlign = side < 0 ? 'right' : 'left'
            ctx.fillText(p[1], x + 15 * side, y + 4)
        },
        use_for() { return ['Splitters'] }

    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        new_font() {
            return this.sett.font ||
            '12px ' + this.$props.font.split('px').pop()
        },
        flag_color() {
            return this.sett.flagColor || '#4285f4'
        },
        label_color() {
            return this.sett.labelColor || '#fff'
        },
        line_color() {
            return this.sett.lineColor || '#4285f4'
        },
        line_width() {
            return this.sett.lineWidth || 1.0
        },
        y_position() {
            return this.sett.yPosition || 0.9
        }
    },
    data() {
        return {}
    }
}

</script>
