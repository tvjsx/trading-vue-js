
import Const from '../../stuff/constants.js'

export default class Candle {

    constructor(grid, data) {
        this.grid = grid
        this.ctx = grid.ctx
        this.$p = grid.$p
        this.draw(data)
    }

    draw(data) {

        const body_color = data.c <= data.o ?
            this.$p.colors.colorCandleUp :
            this.$p.colors.colorCandleDw

        const wick_color = data.c <= data.o ?
            this.$p.colors.colorWickUp :
            this.$p.colors.colorWickDw

        const wick_color_sm = this.$p.colors.colorWickSm

        let w = Math.max(data.w, 1)
        let hw = Math.max(Math.floor(w * 0.5), 1)
        let h = Math.abs(data.o - data.c)
        let max_h = data.c === data.o ? 1 : 2


        this.ctx.strokeStyle = w > 1 ? wick_color : wick_color_sm

        this.ctx.beginPath()
        this.ctx.moveTo(
            Math.floor(data.x) - 0.5,
            Math.floor(data.h)
        )
        this.ctx.lineTo(
            Math.floor(data.x) - 0.5,
            Math.floor(data.l)
        )

        this.ctx.stroke()

        if (data.w > 1.5) {

            this.ctx.fillStyle = body_color

            // TODO: Move common calculations to layout.js
            this.ctx.fillRect(
                Math.floor(data.x - hw -1),
                Math.floor(Math.min(data.o, data.c)),
                Math.floor(hw * 2 + 1),
                Math.floor(Math.max(h, max_h))
            )

        } else {

            this.ctx.strokeStyle = body_color

            this.ctx.beginPath()
            this.ctx.moveTo(
                Math.floor(data.x) - 0.5,
                Math.floor(Math.min(data.o, data.c)),
            )
            this.ctx.lineTo(
                Math.floor(data.x) - 0.5,
                Math.floor(Math.max(data.o, data.c)),
            )

            this.ctx.stroke()

        }

    }

}
