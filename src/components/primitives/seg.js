
// Draws a segment, adds corresponding collision f-n

import Math2 from '../../stuff/math.js'

export default class Seg {

    // Overlay ref, canvas ctx
    constructor(overlay, ctx) {
        this.ctx = ctx
        this.comp = overlay
        this.T = overlay.$props.config.TOOL_COLL
    }

    // p1[x1, y1], p2[x2, y2] (in pixels)
    draw(p1, p2) {
        this.ctx.moveTo(p1[0], p1[1])
        this.ctx.lineTo(p2[0], p2[1])

        this.comp.collisions.push(
            this.make(p1, p2)
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
