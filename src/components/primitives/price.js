
// Price bar & price line (shader)

export default class Price {

    constructor(comp) {
        this.comp = comp
        this.data = comp.$props.data
    }

    // Defines an inline shader (has access to both
    // target & overlay's contexts)
    init_shader() {

        let layout = this.comp.$props.layout
        let config = this.comp.$props.config
        let comp = this.comp
        let last = () => this.last
        let last_y = () => this.last_y()
        let color = () => this.color

        this.comp.$emit('new-shader', {
            target: 'sidebar', draw: ctx => {

                if (!last()) return

                let green = comp.colorCandleUp
                let red = comp.colorCandleDw
                let w = ctx.canvas.width
                let h = config.PANHEIGHT

                let lbl = last().toFixed(layout.prec)
                ctx.fillStyle = color()

                let x = - 0.5
                let y = last_y() - h * 0.5 - 0.5
                let a = 5 
                ctx.fillRect(x - 0.5, y, w + 1, h)
                ctx.fillStyle = 'white'
                ctx.textAlign = 'left'
                ctx.fillText(lbl, a, y + 16)

            }
        })
        this.shader = true
    }

    // Regular draw call for overaly
    draw(ctx) {
        if (!this.data.length) return this.last = null
        if (!this.shader) this.init_shader()

        let layout = this.comp.$props.layout
        let last = this.data[this.data.length - 1]
        let green = this.comp.colorCandleUp
        let red = this.comp.colorCandleDw

        this.last = last[4]
        this.color = last[4] >= last[1] ? green : red

        ctx.strokeStyle = this.color
        ctx.setLineDash([1, 1])
        ctx.beginPath()
        ctx.moveTo(0, this.last_y())
        ctx.lineTo(layout.width, this.last_y())
        ctx.stroke()
        ctx.setLineDash([])
    }

    last_y() {

        if (!this.data.length) return undefined

        let layout = this.comp.$props.layout
        let last = this.data[this.data.length - 1]
        let y = layout.$2screen(last[4])
        let cndl = layout.c_magnet(last[0])
        let s = cndl.c >= cndl.o ? 1 : 1
        return Math.floor(cndl.c) - s - 0.5
    }

}
