<script>
// Channel renderer. (Keltner, Bollinger)
// TODO: allow color transparency
// TODO: improve performance: draw in one solid chunk
import Overlay from '../../mixins/overlay.js'

export default {
    name: 'Channel',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.1' }
        },
        /*draw(ctx) {
            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color
            ctx.fillStyle = this.back_color

            for (var i = 0; i < this.$props.data.length - 1; i++) {


                let p1 = this.mapp(this.$props.data[i])
                let p2 = this.mapp(this.$props.data[i+1])

                if (!p2) continue
                if (p1.y1 !== p1.y1) continue // Fix NaN

                // Background
                ctx.beginPath()
                ctx.moveTo(p1.x, p1.y1)
                ctx.lineTo(p2.x + 0.1, p2.y1)
                ctx.lineTo(p2.x + 0.1, p2.y3)
                ctx.lineTo(p1.x, p1.y3)
                ctx.fill()

                // Lines
                ctx.beginPath()
                ctx.moveTo(p1.x, p1.y1)
                ctx.lineTo(p2.x, p2.y1)
                if (this.show_mid) {
                    ctx.moveTo(p1.x, p1.y2)
                    ctx.lineTo(p2.x, p2.y2)
                }
                ctx.moveTo(p1.x, p1.y3)
                ctx.lineTo(p2.x, p2.y3)
                ctx.stroke()

            }
        },*/

        draw(ctx) {
            // Background
            const data = this.data
            const layout = this.layout
            ctx.beginPath()
            ctx.fillStyle = this.back_color
            for (var i = 0; i < data.length; i++) {
                let p = data[i]
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1] || undefined)
                ctx.lineTo(x, y)
            }
            for (var i = data.length - 1; i >= 0; i--) {
                let p = data[i]
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[3] || undefined)
                ctx.lineTo(x, y)
            }
            ctx.fill()

            // Lines
            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color

            // Top line
            ctx.beginPath()
            for (var i = 0; i < data.length; i++) {
                let p = data[i]
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1] || undefined)
                ctx.lineTo(x, y)
            }
            ctx.stroke()
            // Bottom line
            ctx.beginPath()
            for (var i = 0; i < data.length; i++) {
                let p = data[i]
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[3] || undefined)
                ctx.lineTo(x, y)
            }
            ctx.stroke()
            // Middle line
            if (!this.show_mid) return
            ctx.beginPath()
            for (var i = 0; i < data.length; i++) {
                let p = data[i]
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[2] || undefined)
                ctx.lineTo(x, y)
            }
            ctx.stroke()
        },

        mapp(p) {
            const layout = this.$props.layout
            return p && {
                x:  layout.t2screen(p[0]),
                y1: layout.$2screen(p[1]),
                y2: layout.$2screen(p[2]),
                y3: layout.$2screen(p[3])
            }
        },
        use_for() { return ['Channel', 'KC', 'BB'] },
        data_colors() { return [this.color, this.color, this.color] }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        line_width() {
            return this.sett.lineWidth || 0.75
        },
        color() {
            const n = this.$props.num % 5
            return this.sett.color || this.COLORS[n]
        },
        show_mid() {
            return 'showMid' in this.sett ? this.sett.showMid : true
        },
        back_color() {
            return this.sett.backColor || this.color + '11'
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
