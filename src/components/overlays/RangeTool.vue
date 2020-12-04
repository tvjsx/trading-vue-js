<script>
// Price/Time measurment tool

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
            return { author: 'C451', version: '2.0.1' }
        },
        tool() {
            return {
                // Descriptor for the tool
                group: 'Measurements', icon: Icons['price_range.png'],
                type: 'Price',
                hint: 'Price Range',
                data: [],     // Default data
                settings: {}, // Default settings
                mods: {
                    'Time': {
                        // Rewrites the default setting fields
                        icon: Icons['time_range.png'],
                        settings: { price: false, time: true }
                    },
                    'PriceTime': {
                        // Rewrites the default setting fields
                        icon: Icons['price_time.png'],
                        settings: { price: true, time: true }
                    },
                    'ShiftMode': {
                        // Rewrites the default setting fields
                        settings: {
                            price: true, time: true,
                            shiftMode: true
                        },
                        hidden: true
                    }
                }
            }
        },
        // Called after overlay mounted
        init() {
            // First pin is settled at the mouse position
            this.pins.push(new Pin(this, 'p1', {
                hidden: this.shift
            }))
            // Second one is following mouse until it clicks
            this.pins.push(new Pin(this, 'p2', {
                state: 'tracking',
                hidden: this.shift
            }))
            this.pins[1].on('settled', () => {
                // Call when current tool drawing is finished
                // (Optionally) reset the mode back to 'Cursor'
                this.set_state('finished')
                this.$emit('drawing-mode-off')
                // Deselect the tool in shiftMode
                if (this.shift) this._$emit('custom-event', {
                    event: 'object-selected', args: []
                })
            })
        },
        draw(ctx) {
            if (!this.p1 || !this.p2) return

            const dir = Math.sign(this.p2[1] - this.p1[1])
            const layout = this.$props.layout
            const xm = layout.t2screen((this.p1[0] + this.p2[0]) * 0.5)

            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color

            // Background
            ctx.fillStyle = this.back_color
            let x1 = layout.t2screen(this.p1[0])
            let y1 = layout.$2screen(this.p1[1])
            let x2 = layout.t2screen(this.p2[0])
            let y2 = layout.$2screen(this.p2[1])
            ctx.fillRect(x1, y1, x2 - x1, y2 - y1)

            if (this.price) this.vertical(ctx, x1, y1, x2, y2, xm)
            if (this.time) this.horizontal(ctx, x1, y1, x2, y2, xm)

            this.draw_value(ctx, dir, xm, y2)

            this.render_pins(ctx)

        },
        vertical(ctx, x1, y1, x2, y2, xm) {

            const layout = this.$props.layout
            const dir = Math.sign(this.p2[1] - this.p1[1])

            ctx.beginPath()

            if (!this.shift) {
                // Top
                new Seg(this, ctx).draw(
                    [this.p1[0], this.p2[1]],  [this.p2[0], this.p2[1]]
                )
                // Bottom
                new Seg(this, ctx).draw(
                    [this.p1[0], this.p1[1]],  [this.p2[0], this.p1[1]]
                )
            }

            // Vertical Arrow
            ctx.moveTo(xm - 4, y2 + 5 * dir)
            ctx.lineTo(xm, y2)
            ctx.lineTo(xm + 4, y2 + 5 * dir)

            ctx.stroke()

            // Vertical Line
            ctx.beginPath()
            ctx.setLineDash([5, 5])
            new Seg(this, ctx).draw(
                [(this.p1[0] + this.p2[0]) * 0.5,  this.p2[1]],
                [(this.p1[0] + this.p2[0]) * 0.5,  this.p1[1]]
            )
            ctx.stroke()
            ctx.setLineDash([])

        },
        horizontal(ctx, x1, y1, x2, y2, xm) {

            const layout = this.$props.layout
            const xdir = Math.sign(this.p2[0] - this.p1[0])
            const ym = (
                layout.$2screen(this.p1[1]) +
                layout.$2screen(this.p2[1])
            ) / 2

            ctx.beginPath()

            if (!this.shift) {
                // Left
                new Seg(this, ctx).draw(
                    [this.p1[0], this.p1[1]],  [this.p1[0], this.p2[1]]
                )
                // Right
                new Seg(this, ctx).draw(
                    [this.p2[0], this.p1[1]],  [this.p2[0], this.p2[1]]
                )
            }

            // Horizontal Arrow
            ctx.moveTo(x2 - 5 * xdir, ym - 4)
            ctx.lineTo(x2, ym)
            ctx.lineTo(x2 - 5 * xdir, ym + 4)

            ctx.stroke()

            // Horizontal Line
            ctx.beginPath()
            ctx.setLineDash([5, 5])
            ctx.moveTo(x1, ym)
            ctx.lineTo(x2, ym)
            ctx.stroke()
            ctx.setLineDash([])

        },
        // WTF? I know dude, a lot of shitty code here
        draw_value(ctx, dir, xm, y) {
            ctx.font = this.new_font
            // Price delta (anf percent)
            let d$ = (this.p2[1] - this.p1[1]).toFixed(this.prec)
            let p = (100 * (this.p2[1] / this.p1[1] - 1)).toFixed(this.prec)
            // Map interval to the actual tf (in ms)
            let f = t => this.layout.ti_map.smth2t(t)
            let dt = f(this.p2[0]) - f(this.p1[0])
            let tf = this.layout.ti_map.tf
            // Bars count (through the candle index)
            let f2 = t => {
                let c = this.layout.c_magnet(t)
                let cn = this.layout.candles ||
                    this.layout.master_grid.candles
                return cn.indexOf(c)
            }
            // Bars count (and handling the negative values)
            let b = f2(this.p2[0]) - f2(this.p1[0])
            // Format time delta
            // Format time delta
            let dtstr = this.t2str(dt)
            let text = []
            if (this.price) text.push(`${d$}  (${p}%)`)
            if (this.time) text.push(`${b} bars, ${dtstr}`)
            text = text.join('\n')
            // "Multiple" fillText
            let lines = text.split('\n')
            let w = Math.max(
                ...lines.map(x => ctx.measureText(x).width + 20),
                100)
            let n = lines.length
            let h = 20 * n
            ctx.fillStyle = this.value_back
            ctx.fillRect(xm - w * 0.5, y - (10+h) * dir, w, h * dir)
            ctx.fillStyle = this.value_color
            ctx.textAlign = 'center'
            lines.forEach((l, i) => {
                ctx.fillText(l, xm, y + (dir > 0 ? 20*i-20*n+5 : 20*i+25))
            })
        },
        // Formats time from ms to `1D 12h` for example
        t2str(t) {
            let sign = Math.sign(t)
            let abs = Math.abs(t)
            let tfs = [
                [1000, 's', 60],
                [60000, 'm', 60],
                [3600000, 'h', 24],
                [86400000, 'D', 7],
                [604800000, 'W', 4],
                [2592000000, 'M', 12],
                [31536000000, 'Y', Infinity],
                [Infinity, 'Eternity', Infinity]
            ]
            for (var i = 0; i < tfs.length; i++) {
                tfs[i][0] = Math.floor(abs / tfs[i][0])
                if (tfs[i][0] === 0) {
                    let p1 = tfs[i - 1]
                    let p2 = tfs[i - 2]
                    let txt = sign < 0 ? '-' : ''
                    if (p1) {
                        txt += p1.slice(0,2).join('')
                    }
                    let n2 = p2 ? p2[0] - p1[0] * p2[2] : 0
                    if (p2 && n2) {
                        txt += ' '
                        txt += `${n2}${p2[1]}`
                    }
                    return txt
                }
            }
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
                this.$props.colors.cross
        },
        back_color() {
            return this.sett.backColor || '#9b9ba316'
        },
        value_back() {
            return this.sett.valueBack || '#9b9ba316'
        },
        value_color() {
            return this.sett.valueColor ||
                this.$props.colors.text
        },
        prec() {
            return this.sett.precision || 2
        },
        new_font() {
            return '12px ' + this.$props.font.split('px').pop()
        },
        price() {
            return 'price' in this.sett ? this.sett.price : true
        },
        time() {
            return 'time' in this.sett ? this.sett.time : false
        },
        shift() {
            return this.sett.shiftMode
        }
    },
    data() {
        return {}
    }

}
</script>
