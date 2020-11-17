
// Draws a ray, adds corresponding collision f-n

import Line from './line.js'

export default class Ray extends Line {
    constructor(overlay, ctx) {
        super(overlay, ctx)
        this.ray = true
    }
}
