
// Draws a line, adds corresponding collision f-n

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

    // p1[t, $], p2[t, $] (time-price coordinates)
    draw(p1, p2) {

        const layout = this.comp.$props.layout

        let x1 = layout.t2screen(p1[0])
        let y1 = layout.$2screen(p1[1])
        let x2 = layout.t2screen(p2[0])
        let y2 = layout.$2screen(p2[1])

        this.ctx.moveTo(x1, y1)
        this.ctx.lineTo(x2, y2)

        let w = layout.width
        let h = layout.height
        // TODO: transform k (angle) to screen ratio
        // (this requires a new a2screen function)
        let k = (y2 - y1) / (x2 - x1)
        let s = Math.sign(x2 - x1 || y2 - y1)
        let dx = w * s * 2
        let dy = w * k * s * 2
        if (dy === Infinity) { dx = 0, dy = h * s}

        this.ctx.moveTo(x2, y2)
        this.ctx.lineTo(x2 + dx, y2 + dy)
        if (!this.ray) {
            this.ctx.moveTo(x1, y1)
            this.ctx.lineTo(x1 - dx, y1 - dy)
        }

        this.comp.collisions.push(
            this.make([x1, y1], [x2, y2])
        )
    }

    // Collision function. x, y - mouse coord.
    make(p1, p2) {
        let f = this.ray ?
            Math2.point2ray.bind(Math2) :
            Math2.point2line.bind(Math2)
        return (x, y) => {
            return f(
                [x, y], p1, p2
            ) < this.T
        }
    }
}
