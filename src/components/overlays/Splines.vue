<script>
// Channel renderer. (Keltner, Bollinger)
import Overlay from '../../mixins/overlay.js'

export default {
    name: 'Splines',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        draw(ctx) {
            const layout = this.$props.layout
            for (var i = 0; i < this.lines_num; i++) {

                ctx.strokeStyle = this.clrx[i]
                ctx.lineWidth = this.widths[i] || this.line_width
                ctx.beginPath()

                for (var p of this.$props.data) {
                    let x = layout.t2screen(p[0])
                    let y = layout.$2screen(p[i+1])
                    ctx.lineTo(x, y)
                }
                ctx.stroke()
            }
        },
        use_for() { return ['Splines', 'DMI'] },
        data_colors() { return this.clrx }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        line_width() {
            return this.sett.lineWidth || 0.75
        },
        widths() {
            return this.sett.lineWidths || []
        },
        clrx() {
            let colors = this.sett.colors || []
            let n = this.$props.num
            if (!colors.length) {
                for (var i = 0; i < this.lines_num; i++) {
                    colors.push(this.COLORS[(n + i) % 5])
                }
            }
            return colors
        },
        lines_num() {
            if (!this.$props.data[0]) return 0
            return this.$props.data[0].length - 1
        }
    },
    data() {
        return {
            COLORS:
            [
                '#42b28a', '#5691ce', '#612ff9',
                '#d50b90', '#ff2316'
            ]
        }
    }
}

</script>
