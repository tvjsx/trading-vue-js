
// Bar object for Bars overlay

export default class CandleExt {

    constructor(overlay, ctx, data) {
        this.ctx = ctx
        this.self = overlay
        this.style = data.raw[6] || this.self
        this.draw(data)
    }

    draw(data) {
        const green = data.raw[4] >= data.raw[1]
        const body_color = green ?
            this.style.colorCandleUp :
            this.style.colorCandleDw

        const wick_color = green ?
            this.style.colorWickUp :
            this.style.colorWickDw

        let w = Math.max(data.w, 1)
        let hw = Math.max(Math.floor(w * 0.8), 1)

        this.ctx.lineWidth = 2
        const correction = 0.5
        hw = hw - correction

        // wick
        this.ctx.strokeStyle = wick_color;
        this.ctx.beginPath();
        this.ctx.moveTo(
            Math.floor(data.x)-correction,
            Math.floor(data.h)
        )
        this.ctx.lineTo(
            Math.floor(data.x)-correction,
            Math.floor(data.l)
        )
        this.ctx.stroke();

        // open
        this.ctx.strokeStyle = body_color;
        this.ctx.beginPath();
        this.ctx.moveTo(
            Math.floor(data.x) - hw,
            Math.floor(data.o)
        )
        this.ctx.lineTo(
            Math.floor(data.x)-correction,
            Math.floor(data.o)
        )
        this.ctx.stroke();

        // close
        this.ctx.beginPath();
        this.ctx.moveTo(
            Math.floor(data.x)-correction,
            Math.floor(data.c)
        )
        this.ctx.lineTo(
            Math.floor(data.x) + hw,
            Math.floor(data.c)
        )
        this.ctx.stroke();

    }

}
