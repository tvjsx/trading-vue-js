import Math2 from '../../stuff/math.js'
import Utils from '../../stuff/utils.js'

export default class Line {

    // Overlay ref, canvas ctx
    constructor(overlay, ctx) {
        this.ctx = ctx
        this.comp = overlay
        this.T = overlay.$props.config.TOOL_COLL
        if (Utils.is_mobile) this.T *= 2
    }

    // p1[t, $] (time-price coordinates)
    draw(p1) {
        const layout = this.comp.$props.layout

        let x1 = layout.t2screen(p1[0])
        let y1 = layout.$2screen(p1[1])

        // Extend the line to infinity (practically, to the canvas edges)
        let w = layout.width
        let dx = w * 2 // Extend far beyond the canvas width

        this.ctx.beginPath()
        this.ctx.moveTo(-dx, y1)
        this.ctx.lineTo(w + dx, y1)
        this.ctx.stroke()

        this.comp.collisions.push(
            this.make([-dx, y1], [w + dx, y1])
        )
    }

    // Collision function. x, y - mouse coord.
    make(p1, p2) {
        return (x, y) => {
            return Math2.point2line([x, y], p1, p2) < this.T
        }
    }
}
