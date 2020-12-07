
// Draws a segment, adds corresponding collision f-n

import Math2 from '../../stuff/math.js'
import Utils from '../../stuff/utils.js'

export default class Seg {

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

        this.comp.collisions.push(
            this.make([x1, y1], [x2, y2])
        )
    }

    // Collision function. x, y - mouse coord.
    make(p1, p2) {
        return (x, y) => {
            return Math2.point2seg(
                [x, y], p1, p2
            ) < this.T
        }
    }
}
