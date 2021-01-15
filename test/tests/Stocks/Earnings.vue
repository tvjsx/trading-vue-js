<script>

import Overlay from '../../../src/mixins/overlay.js'
import Hint from './Hint.js'

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
                let y = layout.c_magnet(p[0]).h - 20  // y - Mapping
                let is_hover = this.hover(x, y)
                let h = (is_hover || this.selected)
                this.highlighted = is_hover ? p : null

                ctx.strokeStyle = '#44c667'
                ctx.fillStyle = h ? '#44c667' : '#44c66733'

                ctx.arc(x, y, 15.5, 0, Math.PI * 2, true)
                ctx.fill()
                ctx.stroke()
                this.draw_label(ctx, x, y + 5, 'E', h)
                ctx.beginPath()
                ctx.strokeStyle = '#999'
                ctx.lineWidth = 0.75
                ctx.setLineDash([5, 5])
                ctx.moveTo(x, y + 16)
                ctx.lineTo(x, this.layout.height)
                ctx.stroke()

                if (this.hint) this.hint.draw(ctx)
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

        mousedown(event) {
            if (this.highlighted) {
                if (!this.selected) {
                    this.selected = this.highlighted
                    // Pull candle data
                    let y$ = this.layout.c_magnet(this.selected[0]).raw[2]
                    this.hint = new Hint(this, {
                        t: this.selected[0],
                        y$: y$,
                        w: 150,
                        h: 65,
                        text:
                            `Estimate: ${this.selected[1]}\n` +
                            `Surprise: ${this.selected[3]}%\n` +
                            `${this.selected[2]}`
                    })
                } else {
                    this.selected = null
                    this.hint = null
                }
            }
            this.time_stamp = event.timeStamp
        },

        keydown(event) {
            if (event.key === "Escape") {
                this.selected = null
                this.hint = null
            }
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
            mouse: { x: undefined, y: undefined },
            highlighted: null,
            selected: null
        }
    }
}
</script>
