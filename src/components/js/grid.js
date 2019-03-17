// Grid.js listens to various user-generated events,
// emits Vue-events if something has changed (e.g. range)
// Think of it as an I/O system for Grid.vue

import * as Hammer from 'hammerjs'
import Hamster from 'hamsterjs'
import Const from '../../stuff/constants.js'
import Candle from './candle.js'
import Volbar from './volbar.js'
import Utils from '../../stuff/utils.js'

const { BOTBAR } = Const.ChartConfig

export default class Grid {

    constructor(canvas, comp) {

        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.comp = comp
        this.$p = comp.$props
        this.data = this.$p.sub
        this.range = this.$p.range
        this.id = this.$p.grid_id
        this.layout = this.$p.layout.grids[this.id]
        this.interval = this.$p.interval

        this.listeners()
        this.overlays = []

    }

    listeners() {

        var hamster = Hamster(this.canvas)
        hamster.wheel((event, delta) => this.mousezoom(-delta * 50))

        var mc = new Hammer.Manager(this.canvas)
        mc.add(new Hammer.Pan({
            direction: Hammer.DIRECTION_HORIZONTAL
        }))
        mc.add(new Hammer.Tap())
        mc.add(new Hammer.Pinch())
        mc.get('pinch').set({ enable: true })

        mc.on('panstart', event => {
            this.drug = {
                x: event.center.x,
                y: event.center.y,
                r: this.range.slice(),
                t: this.range[1] - this.range[0]
            }
            this.comp.$emit('cursor-changed', {
                grid_id: this.id,
                x: event.center.x, y: event.center.y
            })
            this.comp.$emit('cursor-locked', true)
        })

        mc.on('panmove', event => {
            if (this.drug) {
                this.mousedrug(this.drug.x + event.deltaX)
                this.comp.$emit('cursor-changed', {
                    grid_id: this.id,
                    x: event.center.x, y: event.center.y
                })
            }
        })

        mc.on('panend', event => {
            this.drug = null
            this.comp.$emit('cursor-locked', false)
        })

        mc.on('tap', event => {
            this.comp.$emit('cursor-changed', {
                grid_id: this.id,
                x: event.center.x, y: event.center.y
            })
            this.update()
        })

        mc.on('pinchstart', event =>  {
            this.pinch = {
                t: range[1] - range[0],
                r: range.slice()
            }
        })

        mc.on('pinchend', event =>  {
            this.pinch = null
        })

        mc.on('pinch', event => {
            if (this.pinch) this.pinchzoom(event.scale)
        })
    }

    mousemove(e) {
        this.comp.$emit('cursor-changed', {
            grid_id: this.id, x: event.pageX, y: event.pageY
        })
        if (!this.drug) this.update()
    }

    mouseout(e) {
        this.comp.$emit('cursor-changed', {})
    }

    mouseup(e) {
        this.drug = null
    //    this.pinch = null
        this.comp.$emit('cursor-locked', false)
    }

    mousedown(e) {
        this.comp.$emit('cursor-locked', true)
    }

    new_layer(layer) {
        if (layer.name === 'crosshair') {
            this.crosshair = layer
        } else {
            this.overlays.push(layer)
        }
    }

    update() {

        // Update reference to the grid
        this.layout = this.$p.layout.grids[this.id]

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.grid()

        if (this.layout.volume) this.volume()

        // TODO: implemet layers rendering order
        this.overlays.forEach(l => {
            this.ctx.save()
            l.renderer.draw(this.ctx)
            this.ctx.restore()
        })

        if (this.layout.candles) this.candles()

        if (this.crosshair) {
            this.crosshair.renderer.draw(this.ctx)
        }
    }

    // Actually draws the grid (for real)
    grid() {

        this.ctx.strokeStyle = this.$p.colors.colorGrid
        this.ctx.beginPath()

        const ymax = this.layout.height
        for (var [x, p] of this.layout.xs) {

            this.ctx.moveTo(x - 0.5, 0)
            this.ctx.lineTo(x - 0.5, ymax)

        }

        for (var [y, y$] of this.layout.ys) {

            this.ctx.moveTo(0, y - 0.5)
            this.ctx.lineTo(this.layout.width, y - 0.5)

        }

        this.ctx.stroke()

        if (this.$p.grid_id) this.upper_border()

    }

    upper_border() {
        this.ctx.strokeStyle = this.$p.colors.colorScale
        this.ctx.beginPath()
        this.ctx.moveTo(0, 0.5)
        this.ctx.lineTo(this.layout.width, 0.5)
        this.ctx.stroke()
    }

    // Actually draws candles
    // TODO: let user to overwrite. Let them create Mountain Dew
    // candles and Snoop-dogg volume bars! (see. BitmexRekt)
    candles() {
        for (var c of this.layout.candles) {
            let candle = new Candle(this, c)
        }
    }

    volume() {
        for (var c of this.layout.volume) {
            let volbar = new Volbar(this, c)
        }
    }

    mousezoom(delta) {

        // TODO: mouse zooming is a little jerky,
        // needs to follow f(mouse_wheel_speed) and
        // if speed is low, scroll shoud be slower
        if (delta < 0 && this.data.length <= 25) return
        if (delta > 0 && this.data.length > 1000) return

        let k = this.interval / 1000
        this.range[0] -= delta * k * this.data.length

        // TODO: BUG: while scrolling you may notice that
        // the left part of the indicator data is not
        // loaded immediately. (until you move the cursor)
        // Need to investigate. Solution: check reactivity,
        // it is probably lost.
        this.change_range()

    }

    mousedrug(x) {

        let delta = this.drug.t * (this.drug.x - x) / this.layout.width

        this.range[0] = this.drug.r[0] + delta
        this.range[1] = this.drug.r[1] + delta

        this.change_range()

    }

    pinchzoom(scale) {

        if (scale > 1 && this.data.length <= 25) return
        if (scale < 1 && this.data.length > 1000) return

        let t = this.pinch.t
        let nt = t * 1 / scale

        this.range[0] = this.pinch.r[0] - (nt - t) * 0.5
        this.range[1] = this.pinch.r[1] + (nt - t) * 0.5

        this.change_range()

    }

    change_range() {

        // TODO: better way to limit the view. Problem:
        // when you are at the dead end of the data,
        // and keep scrolling,
        // the chart continues to scale down a little.
        // Solution: I don't know yet

        let l = this.data.length - 1
        let data = this.data
        let range = this.range

        range[0] = Utils.clamp(
            range[0],
            -Infinity, data[l][0] - this.interval * 5.5,
        )

        range[1] = Utils.clamp(
            range[1],
            data[0][0] + this.interval * 5.5, Infinity
        )

        // TODO: IMPORTANT scrolling is jerky The Problem caused
        // by the long round trip of 'range-changed' event.
        // First it propagates up to update layout in Chart.vue,
        // then it moves back as watch() update. It takes 1-5 ms.
        // And because the delay is different each time we see
        // the lag. No smooth movement and it's annoying.
        // Solution: we could try to calc the layout immediatly
        // somewhere here. Still will hurt the sidebar & bottombar
        this.comp.$emit('range-changed', range)
    }

}
