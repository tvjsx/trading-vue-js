export default class Hint {

    constructor(comp, params) {
        this.t = params.t
        this.y$ = params.y$
        this.w = params.w,
        this.h = params.h,
        this.text = params.text
        this.comp = comp
    }

    draw(ctx) {

        let x = this.comp.layout.t2screen(this.t)
        let y = this.comp.layout.$2screen(this.y$) - 50

        ctx.fillStyle = '#66666666'
        ctx.fillRect(
            x - this.w / 2 - 11.5,
            y - this.h - 11.5,
            this.w + 22,
            this.h + 12)

        ctx.lineWidth = 0.75
        ctx.fillStyle = '#fff'
        ctx.fillRect(
            x - this.w / 2 - 10.5,
            y - this.h - 10.5,
            this.w + 20,
            this.h + 10)
        ctx.textAlign = 'left'

        ctx.font = this.comp.$props.font

        ctx.fillStyle = '#333'
        this.text.split('\n').forEach((txt, i) => {
            ctx.fillText(
                txt,
                x - this.w / 2 + 10,
                y - this.h + i * 18 + 12
            )
        })

    }
}
