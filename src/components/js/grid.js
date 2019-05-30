// Grid.js listens to various user-generated events,
// emits Vue-events if something has changed (e.g. range)
// Think of it as an I/O system for Grid.vue

import * as Hammer from 'hammerjs'
import Hamster from 'hamsterjs'
import Candle from './candle.js'
import Volbar from './volbar.js'
import Utils from '../../stuff/utils.js'
import Layer from '../../stuff/layer.js'

export default class Grid {

    constructor(canvas, comp) {

        this.MIN_ZOOM = comp.config.MIN_ZOOM
        this.MAX_ZOOM = comp.config.MAX_ZOOM

        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.comp = comp
        this.$p = comp.$props
        this.data = this.$p.sub
        this.range = this.$p.range
        this.id = this.$p.grid_id
        this.layout = this.$p.layout.grids[this.id]
        this.interval = this.$p.interval
        this.offset_x = 0
        this.offset_y = 0

        this.listeners()
        this.overlays = []

    }

    listeners() {

        var hamster = Hamster(this.canvas)
        hamster.wheel((event, delta) => this.mousezoom(-delta * 50, event))

        var mc = new Hammer.Manager(this.canvas)
        mc.add(new Hammer.Pan())
        mc.add(new Hammer.Tap())
        mc.add(new Hammer.Pinch())
        mc.get('pinch').set({ enable: true })

        mc.on('panstart', event => {
            this.drug = {
                x: event.center.x + this.offset_x,
                y: event.center.y + this.offset_y,
                r: this.range.slice(),
                t: this.range[1] - this.range[0],
                o: this.$p.y_transform ?
                    (this.$p.y_transform.offset || 0) : 0,
                y_r: this.$p.y_transform ?
                    this.$p.y_transform.range.slice() : undefined
            }
            this.comp.$emit('cursor-changed', {
                grid_id: this.id,
                x: event.center.x + this.offset_x,
                y: event.center.y + this.offset_y
            })
            this.comp.$emit('cursor-locked', true)
        })

        mc.on('panmove', event => {
            if (this.drug) {
                this.mousedrug(
                    this.drug.x + event.deltaX,
                    this.drug.y + event.deltaY,
                )
                this.comp.$emit('cursor-changed', {
                    grid_id: this.id,
                    x: event.center.x + this.offset_x,
                    y: event.center.y + this.offset_y
                })
            }
        })

        mc.on('panend', () => {
            this.drug = null
            this.comp.$emit('cursor-locked', false)
        })

        mc.on('tap', event => {
            this.comp.$emit('cursor-changed', {
                grid_id: this.id,
                x: event.center.x + this.offset_x,
                y: event.center.y + this.offset_y
            })
            this.update()
        })

        mc.on('pinchstart', () =>  {
            this.pinch = {
                t: this.range[1] - this.range[0],
                r: this.range.slice()
            }
        })

        mc.on('pinchend', () =>  {
            this.pinch = null
        })

        mc.on('pinch', event => {
            if (this.pinch) this.pinchzoom(event.scale)
        })
    }

    mousemove(event) {
        this.comp.$emit('cursor-changed', {
            grid_id: this.id,
            x: event.layerX,
            y: event.layerY + this.layout.offset
        })
        if (!this.drug) this.update()
        // TODO: Temp solution, need to implement
        // a proper way to get the chart el offset
        this.offset_x = event.layerX - event.pageX
            + window.scrollX
        this.offset_y = event.layerY - event.pageY
            + this.layout.offset
            + window.scrollY

        this.propagate('mousemove', event)
    }

    mouseout(event) {
        this.comp.$emit('cursor-changed', {})
        this.propagate('mouseout', event)
    }

    mouseup(event) {
        this.drug = null
    //    this.pinch = null
        this.comp.$emit('cursor-locked', false)
        this.propagate('mouseup', event)
    }

    mousedown(event) {
        this.comp.$emit('cursor-locked', true)
        this.propagate('mousedown', event)
    }

    click(event) {
        this.propagate('click', event)
    }

    new_layer(layer) {
        if (layer.name === 'crosshair') {
            this.crosshair = layer
        } else {
            this.overlays.push(layer)
        }
        this.update()
    }

    show_hide_layer(event) {
        let l = this.overlays.filter(x => x.id === event.id)
        if (l.length) l[0].display = event.display
    }

    update() {

        // Update reference to the grid
        // TODO: check what happens if data changes interval
        this.layout = this.$p.layout.grids[this.id]
        this.interval = this.$p.interval

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.grid()

        let overlays = []
        if (this.layout.volume) overlays.push(this.v_layer())
        if (this.layout.candles) overlays.push(this.c_layer())
        overlays.push(...this.overlays)

        // z-index sorting
        overlays.sort((l1, l2) => l1.z - l2.z)

        overlays.forEach(l => {
            if (!l.display) return
            this.ctx.save()
            l.renderer.draw(this.ctx)
            this.ctx.restore()
        })

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
    c_layer() {
        return new Layer('Candles', 0, () => {
            for (var c of this.layout.candles) {
                new Candle(this, c)
            }
        })
    }
    v_layer() {
        return new Layer('Volume', -100, () => {
            for (var c of this.layout.volume) {
                new Volbar(this, c)
            }
        })
    }

    mousezoom(delta, event) {

        // TODO: mouse zooming is a little jerky,
        // needs to follow f(mouse_wheel_speed) and
        // if speed is low, scroll shoud be slower
        if (delta < 0 && this.data.length <= this.MIN_ZOOM) return
        if (delta > 0 && this.data.length > this.MAX_ZOOM) return

        let k = this.interval / 1000
        this.range[0] -= delta * k * this.data.length

        // TODO: BUG: while scrolling you may notice that
        // the left part of the indicator data is not
        // loaded immediately. (until you move the cursor)
        // Need to investigate. Solution: check reactivity,
        // it is probably lost.
        this.change_range()

        event.preventDefault()

    }

    mousedrug(x, y) {

        let dt = this.drug.t * (this.drug.x - x) / this.layout.width

        let d$ = this.layout.$_hi - this.layout.$_lo
        d$ *= (this.drug.y - y) / this.layout.height
        let offset = this.drug.o + d$

        if (this.$p.y_transform && !this.$p.y_transform.auto) {
            this.comp.$emit('sidebar-transform', {
                grid_id: this.id,
                range: [
                    this.drug.y_r[0] - offset,
                    this.drug.y_r[1] - offset,
                ]
            })
        }

        this.range[0] = this.drug.r[0] + dt
        this.range[1] = this.drug.r[1] + dt

        this.change_range()

    }

    pinchzoom(scale) {

        if (scale > 1 && this.data.length <= this.MIN_ZOOM) return
        if (scale < 1 && this.data.length > this.MAX_ZOOM) return

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

        if (!this.range.length || this.data.length < 2) return

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

    // Propagate mouse event to overlays
    propagate(name, event) {
        for (var layer of this.overlays) {
            if (layer.renderer[name]) {
                layer.renderer[name](event)
            }
        }
    }
}
