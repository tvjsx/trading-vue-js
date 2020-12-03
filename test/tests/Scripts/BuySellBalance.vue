<script>

import Overlay from '../../../src/mixins/overlay.js'

export default {
    name: 'BuySellBalance',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        use_for() { return ['BuySellBalance'] },
        draw(ctx) {
            if (!this.data.length) return
            for (var i0 = 0; i0 < this.data.length; i0++) {
                if (typeof this.data[i0][1] === 'number') break
            }
            if (!this.data[i0]) return
            const layout = this.$props.layout
            let x0 = layout.t2screen(this.data[i0][0])
            let xN = layout.t2screen(this.data[this.data.length-1][0])
            let top = layout.$2screen(1)
            let mid = layout.$2screen(0.5)
            let bot = layout.$2screen(0)

            // Sells
            /*ctx.beginPath()
            var grd = ctx.createLinearGradient(0, 0, 0, layout.height)
            grd.addColorStop(0, "#ed2f7822")
            grd.addColorStop(0.5, "#ed2f7800")
            ctx.fillStyle = grd
            ctx.moveTo(x0, top)
            for (var i = i0; i < this.data.length; i++) {
                let p = this.data[i]
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1])
                ctx.lineTo(x, y)
            }
            ctx.lineTo(xN, top)
            ctx.fill()*/

            // Buys
            ctx.beginPath()
            var grd = ctx.createLinearGradient(0, layout.height, 0, 0)
            grd.addColorStop(0, "#2f74ed22")
            grd.addColorStop(0.5, "#2f74ed00")
            ctx.fillStyle = grd
            ctx.moveTo(x0, bot)
            for (var i = i0; i < this.data.length; i++) {
                let p = this.data[i]
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1])
                ctx.lineTo(x, y)
            }
            ctx.lineTo(xN, bot)
            ctx.fill()

            // Middle line
            ctx.beginPath()
            ctx.lineWidth = 1.5
            ctx.strokeStyle = '#2579f7'
            for (var i = i0; i < this.data.length; i++) {
                let p = this.data[i]
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1])
                ctx.lineTo(x, y)
            }
            ctx.stroke()

            ctx.strokeStyle = '#eeeeee88'
            ctx.lineWidth = 1
            ctx.setLineDash([5]) // Will be removed after draw()
            ctx.beginPath()

            // Dash line
            ctx.moveTo(0, mid)
            ctx.lineTo(layout.width, mid)

            // Lower band
            ctx.moveTo(0, mid)
            ctx.lineTo(layout.width, mid)

            ctx.stroke()
        },
        y_range() {
            return [1, 0, false]
        },
        calc() {
            return {
                props: {
                    lookback: {
                        def: 1, text: 'Lookback (candles)'
                    }
                },
                data: {
                    trades: { type: 'Trades' }
                },
                update: `
                    let balance = sym(trades, {
                        aggtype: arr => {
                            var buys = 0, sells = 0
                            arr.forEach(x => {
                                if (x[1]) buys += x[2]
                                else sells += x[2]
                            })
                            return nf(buys / (buys + sells))
                        },
                        window: lookback * tf
                    })
                    return balance.close
                `
            }
        }
    }
}
</script>
