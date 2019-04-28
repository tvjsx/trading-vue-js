<script>

import Overlay from '../../../src/mixins/overlay.js'

export default {
    name: 'Earnings',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        draw(ctx) {
            let layout = this.$props.layout
            ctx.lineWidth = 0.75
            this.$props.data.forEach((p, i) => {
                ctx.beginPath()
                let x = layout.t2screen(p[0]) // x - Mapping
                // TODO: implement cs_magnet
                let y = layout.$2screen(158) - 20  // y - Mapping
                let is_hover = this.hover(x, y)

                ctx.strokeStyle = '#44c667'
                ctx.fillStyle = is_hover ? '#44c667' : '#44c66733'

                ctx.arc(x, y, 15.5, 0, Math.PI * 2, true)
                ctx.fill()
                ctx.stroke()
                this.draw_label(ctx, x, y + 5, 'E', is_hover)
                ctx.beginPath()
                ctx.strokeStyle = '#999'
                ctx.lineWidth = 0.75
                ctx.setLineDash([5, 5])
                ctx.moveTo(x, y + 16)
                ctx.lineTo(x, this.layout.height)
                ctx.stroke()
            })
        },

        draw_label(ctx, x, y, p, is_hover) {
            ctx.fillStyle = is_hover ? '#fff' : '#44c667'
            ctx.textAlign = 'center'
            ctx.font = this.new_font
            ctx.fillText(p, x, y)
        },
        use_for() { return ['Earnings'] },

        mousemove(event) {
            this.mouse.x = event.layerX
            this.mouse.y = event.layerY
        },

        hover(x, y) {
            return (
                (x - this.mouse.x) * (x - this.mouse.x) +
                (y - this.mouse.y) * (y - this.mouse.y)
            ) < 240
        }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        new_font() {
            return '16px ' + this.$props.font.split('px').pop()
        },
    },
    data() {
        return {
            mouse: { x: undefined, y: undefined }
        }
    }
}
</script>
