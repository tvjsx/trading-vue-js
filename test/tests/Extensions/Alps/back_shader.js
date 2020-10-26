
// Background shader

import ALPS from './alps.json'

export default class BackShader {

    constructor() {
        this.target = 'grid' // Where to apply ('sidebar|botbar|grid')
        this.name = 'BackShader'
        this.id = 'BackShader'
        this.zIndex = -1
        this.owner = null // Skin / extension

        this.ALPS = new Image()
        this.ALPS.src = ALPS
    }

    draw(ctx, props) {
        //if (props.layout.id !== 0) return
        let dpr = window.devicePixelRatio || 1
        ctx.globalAlpha = 0.55
        if (props.layout.id !== 0) ctx.globalAlpha = 0.35
        let cw = ctx.canvas.width / dpr
        let ch = ctx.canvas.height / dpr
        let x = props.layout.width * 0.5
        let y = props.layout.height * 0.5
        let k = this.ALPS.width / this.ALPS.height
        let kk = cw / ch
        let dx = props.meta.last ?
            (props.meta.last[0] - props.range[1]) / props.tf : 0
        dx = (dx % cw) * 1.25
        dx /= dpr
        let zz = (1 / props.sub.length) * dpr
        let hh = 1 + zz
        let cx = -cw * zz * 0.5
        let cy = -ch * zz * 0.5 - props.layout.offset
        //1.025 + Math.sin(dx * 0.01) / 50

        if (kk >= k) {
            var tw = cw
            var th = cw / k
        } else {
            var tw = ch * k
            var th = ch
        }


        ctx.drawImage(this.ALPS,
            0, 0, this.ALPS.width, this.ALPS.height,
            dx + cx, cy, tw * hh, th * hh)
        // Inverted to the left
        ctx.scale(-1, 1)
        ctx.drawImage(this.ALPS,
            0, 0, this.ALPS.width, this.ALPS.height,
            -dx - cx, cy, tw * hh, th * hh)
        // Inverted to the right
        ctx.drawImage(this.ALPS,
            0, 0, this.ALPS.width, this.ALPS.height,
            -tw*2 - dx + cx * 3, cy,
            tw * hh, th * hh)

    }
}
