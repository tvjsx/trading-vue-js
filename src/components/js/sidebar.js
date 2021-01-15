import * as Hammer from 'hammerjs'
import Utils from '../../stuff/utils.js'
import math from '../../stuff/math.js'

var PANHEIGHT

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
        let mc = this.mc = new Hammer.Manager(this.canvas)
        mc.add(new Hammer.Pan({
            direction: Hammer.DIRECTION_VERTICAL,
            threshold: 0
        }))

        mc.add( new Hammer.Tap({
            event: 'doubletap',
            taps: 2,
            posThreshold: 50
        }))

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
                mid: math.log_mid(this.y_range, this.layout.height),
                A: this.layout.A,
                B: this.layout.B
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

        var points = this.layout.ys
        var x, y, w, h, side = this.side
        var sb = this.layout.sb

        //this.ctx.fillStyle = this.$p.colors.back
        this.ctx.font = this.$p.font

        switch(side) {
            case 'left':
                x = 0
                y = 0
                w = Math.floor(sb)
                h = this.layout.height

                //this.ctx.fillRect(x, y, w, h)
                this.ctx.clearRect(x, y, w, h)

                this.ctx.strokeStyle = this.$p.colors.scale

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
                //this.ctx.fillRect(x, y, w, h)
                this.ctx.clearRect(x, y, w, h)

                this.ctx.strokeStyle = this.$p.colors.scale

                this.ctx.beginPath()
                this.ctx.moveTo(x + 0.5, 0)
                this.ctx.lineTo(x + 0.5, h)
                this.ctx.stroke()
                break
        }

        this.ctx.fillStyle = this.$p.colors.text
        this.ctx.beginPath()

        for (var p of points) {

            if (p[0] > this.layout.height) continue

            var x1 = side === 'left' ? w - 0.5 : x - 0.5
            var x2 = side === 'left' ? x1 - 4.5 : x1 + 4.5

            this.ctx.moveTo(x1, p[0] - 0.5)
            this.ctx.lineTo(x2, p[0] - 0.5)

            var offst = side === 'left' ? - 10 : 10
            this.ctx.textAlign = side === 'left' ? 'end' : 'start'
            let d = this.layout.prec
            this.ctx.fillText(p[1].toFixed(d), x1 + offst, p[0] + 4)
        }

        this.ctx.stroke()

        if (this.$p.grid_id) this.upper_border()

        this.apply_shaders()

        if (this.$p.cursor.y && this.$p.cursor.y$) this.panel()

    }

    apply_shaders() {
        let layout = this.$p.layout.grids[this.id]
        let props = {
            layout: layout,
            cursor: this.$p.cursor
        }
        for (var s of this.$p.shaders) {
            this.ctx.save()
            s.draw(this.ctx, props)
            this.ctx.restore()
        }
    }

    upper_border() {
        this.ctx.strokeStyle = this.$p.colors.scale
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

        let lbl = this.$p.cursor.y$.toFixed(this.layout.prec)
        this.ctx.fillStyle = this.$p.colors.panel

        let panwidth = this.layout.sb + 1

        let x = - 0.5
        let y = this.$p.cursor.y - PANHEIGHT * 0.5 - 0.5
        let a = 7
        this.ctx.fillRect(x - 0.5, y, panwidth, PANHEIGHT)
        this.ctx.fillStyle = this.$p.colors.textHL
        this.ctx.textAlign = 'left'
        this.ctx.fillText(lbl, a, y + 15)

    }

    calc_zoom(event) {
        let d = this.drug.y - event.center.y
        let speed = d > 0 ? 3 : 1
        let k = 1 + speed * d / this.layout.height
        return Utils.clamp(this.drug.z * k, 0.005, 100)
    }

    // Not the best place to calculate y-range but
    // this is the simplest solution I found up to
    // date
    calc_range(diff1 = 1, diff2 = 1) {

        let z = this.zoom / this.drug.z
        let zk = (1 / z - 1) / 2

        let range = this.y_range.slice()
        let delta = range[0] - range[1]

        if (!this.layout.grid.logScale) {
            range[0] = range[0] + delta * zk * diff1
            range[1] = range[1] - delta * zk * diff2
        } else {

            let px_mid = this.layout.height / 2
            let new_hi = px_mid - px_mid * (1/z)
            let new_lo = px_mid + px_mid * (1/z)

            // Use old mapping to get a new range
            let f = y => math.exp((y - this.drug.B) / this.drug.A)

            let copy = range.slice()
            range[0] = f(new_hi)
            range[1] = f(new_lo)

        }

        return range
    }

    rezoom_range(delta, diff1, diff2) {

        if (!this.$p.y_transform || this.$p.y_transform.auto) return

        this.zoom = 1.0
        // TODO: further work (improve scaling ratio)
        if (delta < 0) delta /= 3.75  // Btw, idk why 3.75, but it works
        delta *= 0.25
        this.y_range = [
            this.layout.$_hi,
            this.layout.$_lo
        ]
        this.drug = {
            y: 0,
            z: this.zoom,
            mid: math.log_mid(this.y_range, this.layout.height),
            A: this.layout.A,
            B: this.layout.B
        }
        this.zoom = this.calc_zoom({
            center: {
                y: delta * this.layout.height
            }
        })

        this.comp.$emit('sidebar-transform', {
            grid_id: this.id,
            zoom: this.zoom,
            auto: false,
            range: this.calc_range(diff1, diff2),
            drugging: true
        })
        this.drug = null
        this.comp.$emit('sidebar-transform', {
            grid_id: this.id,
            drugging: false
        })
    }

    destroy() {
        if (this.mc) this.mc.destroy()
    }

    mousemove() { }
    mouseout() { }
    mouseup() { }
    mousedown() { }

}
