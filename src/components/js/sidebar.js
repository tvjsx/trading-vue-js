import * as Hammer from 'hammerjs'
import Utils from '../../stuff/utils.js'
import math from '../../stuff/math.js'

let PANHEIGHT

export default class Sidebar {

    constructor(canvas, comp, side = 'right') {
        PANHEIGHT = comp.config.PANHEIGHT

        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.comp = comp
        this.$p = comp.$props
        this.data = this.$p.sub
        this.range = this.$p.range
        this.id = this.$p.grid_id
        this.layout = this.$p.layout.grids[this.id]

        this.side = side
        this.listeners()
    }

    listeners() {
        const mc = new Hammer.Manager(this.canvas)
        mc.add(new Hammer.Pan({
            direction: Hammer.DIRECTION_VERTICAL,
            threshold: 1
        }))

        mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );

        mc.on('panstart', event => {
            if (this.$p.y_transform) {
                this.zoom = this.$p.y_transform.zoom
            } else {
                this.zoom = 1.0
            }
            this.y_range = [
                this.layout.$_hi,
                this.layout.$_lo
            ]
            this.drug = {
                y: event.center.y,
                z: this.zoom,
                mid: math.log_mid(this.y_range, this.layout.height)
            }
        })

        mc.on('panmove', event => {
            if (this.drug) {
                this.zoom = this.calc_zoom(event)
                this.comp.$emit('sidebar-transform', {
                    grid_id: this.id,
                    zoom: this.zoom,
                    auto: false,
                    range: this.calc_range(),
                    drugging: true
                })
                this.update()
            }
        })

        mc.on('panend', () => {
            this.drug = null
            this.comp.$emit('sidebar-transform', {
                grid_id: this.id,
                drugging: false
            })
        })

        mc.on('doubletap', () => {
            this.comp.$emit('sidebar-transform', {
                grid_id: this.id,
                zoom: 1.0,
                auto: true
            })
            this.zoom = 1.0
            this.update()
        })

        // TODO: Do later for mobile version
    }

    update() {

        // Update reference to the grid
        this.layout = this.$p.layout.grids[this.id]

        const points = this.layout.ys
        let x, y, w, h, side = this.side
        const sb = this.layout.sb

        this.ctx.fillStyle = this.$p.colors.colorBack
        this.ctx.font = this.$p.font

        switch(side) {
            case 'left':
                x = 0
                y = 0
                w = Math.floor(sb)
                h = this.layout.height

                this.ctx.fillRect(x, y, w, h)

                this.ctx.strokeStyle = this.$p.colors.colorScale

                this.ctx.beginPath()
                this.ctx.moveTo(x + 0.5, 0)
                this.ctx.lineTo(x + 0.5, h)
                this.ctx.stroke()

                break
            case 'right':
                x = 0
                y = 0
                w = Math.floor(sb)
                h = this.layout.height
                this.ctx.fillRect(x, y, w, h)

                this.ctx.strokeStyle = this.$p.colors.colorScale

                this.ctx.beginPath()
                this.ctx.moveTo(x + 0.5, 0)
                this.ctx.lineTo(x + 0.5, h)
                this.ctx.stroke()
                break
        }

        this.ctx.fillStyle = this.$p.colors.colorText
        this.ctx.beginPath()

        for (const p of points) {

            if (p[0] > this.layout.height) continue

            const x1 = side === 'left' ? w - 0.5 : x - 0.5
            const x2 = side === 'left' ? x1 - 4.5 : x1 + 4.5

            this.ctx.moveTo(x1, p[0] - 0.5)
            this.ctx.lineTo(x2, p[0] - 0.5)

            const offset = side === 'left' ? -10 : 10
            this.ctx.textAlign = side === 'left' ? 'end' : 'start'
            const d = this.layout.prec
            this.ctx.fillText(p[1].toFixed(d), x1 + offset, p[0] + 4)
        }

        this.ctx.stroke()

        if (this.$p.grid_id) this.upper_border()

        this.apply_shaders()

        if (this.$p.cursor.y && this.$p.cursor.y$) this.panel()
    }

    apply_shaders() {
        for (const s of this.$p.shaders) {
            this.ctx.save()
            s.draw(this.ctx)
            this.ctx.restore()
        }
    }

    upper_border() {
        this.ctx.strokeStyle = this.$p.colors.colorScale
        this.ctx.beginPath()
        this.ctx.moveTo(0, 0.5)
        this.ctx.lineTo(this.layout.width, 0.5)
        this.ctx.stroke()
    }

    // A gray bar behind the current price
    panel() {

        if (this.$p.cursor.grid_id !== this.layout.id) {
            return
        }

        const lbl = this.$p.cursor.y$.toFixed(this.layout.prec)
        this.ctx.fillStyle = this.$p.colors.colorPanel

        const panwidth = this.layout.sb + 1

        const x = -0.5
        const y = this.$p.cursor.y - PANHEIGHT * 0.5 - 0.5
        const a = 7

        this.ctx.fillRect(x - 0.5, y, panwidth, PANHEIGHT)
        this.ctx.fillStyle = this.$p.colors.colorTextHL
        this.ctx.textAlign = 'left'
        this.ctx.fillText(lbl, a, y + 15)
    }

    calc_zoom(event) {
        const d = this.drug.y - event.center.y
        const speed = d > 0 ? 3 : 1
        const k = 1 + speed * d / this.layout.height

        return Utils.clamp(this.drug.z * k, 0.005, 100)
    }

    // Not the best place to calculate y-range but
    // this is the simplest solution I found up to
    // date
    calc_range() {
        const z = this.zoom / this.drug.z
        const zk = (1 / z - 1) / 2

        const range = this.y_range.slice(0)
        const delta = range[0] - range[1]

        if (!this.layout.grid.logScale) {
            range[0] = range[0] + delta * zk
            range[1] = range[1] - delta * zk
        } else {
            let copy = range.slice()
            range[0] = range[0] + delta * zk
            range[1] = math.re_range(copy, range[0], this.drug.mid)
        }

        return range
    }

    mousemove() { }
    mouseout() { }
    mouseup() { }
    mousedown() { }

}
