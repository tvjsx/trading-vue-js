
// Price bar & price line (shader)

export default class Price {

    constructor(comp) {
        this.comp = comp
        this.data = comp.$props.data
    }

    // Defines an inline shader (has access to both
    // target & overlay's contexts)
    init_shader() {

        const layout = this.comp.$props.layout
        const config = this.comp.$props.config
        const comp = this.comp
        const last_bar = () => this.last_bar()

        this.comp.$emit('new-shader', {
            target: 'sidebar', draw: ctx => {

                if (!last_bar()) return

                const bar = last_bar()
                const w = ctx.canvas.width
                const h = config.PANHEIGHT
                const lbl = bar.price.toFixed(layout.prec)
                ctx.fillStyle = bar.color

                const x = -0.5
                const y = bar.y - h * 0.5 - 0.5
                const a = 7
                ctx.fillRect(x - 0.5, y, w + 1, h)
                ctx.fillStyle = comp.$props.colors.colorTextHL
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

        const layout = this.comp.$props.layout
        const last = this.comp.$props.meta.last

        const dir = last[4] >= last[1]
        const color = dir ? this.green() : this.red()
        const y = layout.$2screen(last[4]) + (dir ? 1 : 0)

        ctx.strokeStyle = color
        ctx.setLineDash([1, 1])
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(layout.width, y)
        ctx.stroke()
        ctx.setLineDash([])
    }

    last_bar() {

        if (!this.data.length) return undefined

        let layout = this.comp.$props.layout
        const last = this.data[this.data.length - 1]
        //let y = layout.$2screen(last[4])  // TODO var not used
        const cndl = layout.c_magnet(last[0])

        return {
            y: Math.floor(cndl.c) - 0.5,
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
