
// Price bar & price line (shader)

export default class Price {

    constructor(comp) {
        this.comp = comp
    }

    // Defines an inline shader (has access to both
    // target & overlay's contexts)
    init_shader() {

        let layout = this.comp.$props.layout
        let config = this.comp.$props.config
        let comp = this.comp
        let last_bar = () => this.last_bar()

        this.comp.$emit('new-shader', {
            target: 'sidebar', draw: ctx => {

                let bar = last_bar()
                if (!bar) return

                let w = ctx.canvas.width
                let h = config.PANHEIGHT
                let lbl = bar.price.toFixed(layout.prec)
                ctx.fillStyle = bar.color

                let x = - 0.5
                let y = bar.y - h * 0.5 - 0.5
                let a = 7
                ctx.fillRect(x - 0.5, y, w + 1, h)
                ctx.fillStyle = comp.$props.colors.textHL
                ctx.textAlign = 'left'
                ctx.fillText(lbl, a, y + 15)

            }
        })
        this.shader = true
    }

    // Regular draw call for overaly
    draw(ctx) {
        if (!this.comp.$props.meta.last) return
        if (!this.shader) this.init_shader()

        let layout = this.comp.$props.layout
        let last = this.comp.$props.last

        let dir = last[4] >= last[1]
        let color = dir ? this.green() : this.red()
        let y = layout.$2screen(last[4]) + (dir ? 1 : 0)

        ctx.strokeStyle = color
        ctx.setLineDash([1, 1])
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(layout.width, y)
        ctx.stroke()
        ctx.setLineDash([])
    }

    last_bar() {

        if (!this.comp.data.length) return undefined
        let layout = this.comp.$props.layout
        let last = this.comp.data[this.comp.data.length - 1]
        let y = layout.$2screen(last[4])
        //let cndl = layout.c_magnet(last[0])
        return {
            y: y, //Math.floor(cndl.c) - 0.5,
            price: last[4],
            color: last[4] >= last[1] ? this.green() : this.red()
        }
    }

    last_price() {
        return this.comp.$props.meta.last ?
            this.comp.$props.meta.last[4] : undefined
    }

    green() {
        return this.comp.colorCandleUp
    }

    red() {
        return this.comp.colorCandleDw
    }

}
