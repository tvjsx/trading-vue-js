
export default class VolbarExt {

    constructor(overlay, ctx, data) {
        this.ctx = ctx
        this.$p = overlay.$props
        this.self = overlay
        this.style = data.raw[6] || this.self
        this.draw(data)
    }

    draw(data) {
        const y0 = this.$p.layout.height
        const w = data.x2 - data.x1
        const h = Math.floor(data.h)

        this.ctx.fillStyle = data.green ?
            this.style.colorVolUp :
            this.style.colorVolDw

        this.ctx.fillRect(
            Math.floor(data.x1),
            Math.floor(y0 - h - 0.5),
            Math.floor(w),
            Math.floor(h + 1)
        )
    }
}
