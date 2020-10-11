// Grid.js listens to various user-generated events,
// emits Vue-events if something has changed (e.g. range)
// Think of it as an I/O system for Grid.vue

import * as Hammer from 'hammerjs'
import Hamster from 'hamsterjs'
import Utils from '../../stuff/utils.js'
import math from '../../stuff/math.js'

// Grid is good.
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
        this.cursor = comp.$props.cursor
        this.offset_x = 0
        this.offset_y = 0
        this.deltas = 0 // Wheel delta events

        this.listeners()
        this.overlays = []

    }

    listeners() {

        this.hm = Hamster(this.canvas)
        this.hm.wheel((event, delta) => this.mousezoom(-delta * 50, event))

        let mc = this.mc = new Hammer.Manager(this.canvas)
        mc.add(new Hammer.Pan({ threshold: 0}))
        mc.add(new Hammer.Tap())
        mc.add(new Hammer.Pinch())
        mc.get('pinch').set({ enable: true })

        mc.on('panstart', event => {
            if (this.cursor.scroll_lock) return
            let tfrm = this.$p.y_transform
            this.drug = {
                x: event.center.x + this.offset_x,
                y: event.center.y + this.offset_y,
                r: this.range.slice(),
                t: this.range[1] - this.range[0],
                o: tfrm ?
                    (tfrm.offset || 0) : 0,
                y_r: tfrm && tfrm.range ?
                    tfrm.range.slice() : undefined,
                B: this.layout.B
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
                this.mousedrag(
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

        let add = addEventListener
        add("gesturestart", this.gesturestart)
        add("gesturechange", this.gesturechange)
        add("gestureend", this.gestureend)

    }

    gesturestart(event) { event.preventDefault() }
    gesturechange(event) { event.preventDefault() }
    gestureend(event) { event.preventDefault() }

    mousemove(event) {

        this.comp.$emit('cursor-changed', {
            grid_id: this.id,
            x: event.layerX,
            y: event.layerY + this.layout.offset
        })
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
        this.propagate('mousedown', event)
        this.comp.$emit('cursor-locked', true)
        if (event.defaultPrevented) return
        this.comp.$emit('custom-event', {
            event: 'grid-mousedown', args: [this.id, event]
        })
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

    del_layer(id) {
        this.overlays = this.overlays.filter(x => x.id !== id)
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

        if (!this.layout) return

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.grid()

        if (this.$p.shaders.length) this.apply_shaders()

        let overlays = []
        overlays.push(...this.overlays)

        // z-index sorting
        overlays.sort((l1, l2) => l1.z - l2.z)

        overlays.forEach(l => {
            if (!l.display) return
            this.ctx.save()
            let r = l.renderer
            if (r.pre_draw) r.pre_draw(this.ctx)
            r.draw(this.ctx)
            if (r.post_draw) r.post_draw(this.ctx)
            this.ctx.restore()
        })

        if (this.crosshair) {
            this.crosshair.renderer.draw(this.ctx)
        }
    }

    apply_shaders() {
        let layout = this.$p.layout.grids[this.id]
        let props = {
            layout: layout,
            range: this.range,
            interval: this.interval,
            tf: layout.ti_map.tf,
            cursor: this.cursor,
            colors: this.$p.colors,
            sub: this.data,
            font: this.$p.font,
            config: this.$p.config,
            meta: this.$p.meta
        }
        for (var s of this.$p.shaders) {
            this.ctx.save()
            s.draw(this.ctx, props)
            this.ctx.restore()
        }
    }

    // Actually draws the grid (for real)
    grid() {

        this.ctx.strokeStyle = this.$p.colors.grid
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
        this.ctx.strokeStyle = this.$p.colors.scale
        this.ctx.beginPath()
        this.ctx.moveTo(0, 0.5)
        this.ctx.lineTo(this.layout.width, 0.5)
        this.ctx.stroke()
    }

    mousezoom(delta, event) {

        event.originalEvent.preventDefault()
        event.preventDefault()

        event.deltaX = event.deltaX || Utils.get_deltaX(event)
        event.deltaY = event.deltaY || Utils.get_deltaY(event)

        if (Math.abs(event.deltaX) > 0) {
            this.trackpad = true
            if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
                delta *= 0.1
            }
            this.trackpad_scroll(event)
        }

        if (this.trackpad) delta *= 0.032

        delta = Utils.smart_wheel(delta)

        // TODO: mouse zooming is a little jerky,
        // needs to follow f(mouse_wheel_speed) and
        // if speed is low, scroll shoud be slower
        if (delta < 0 && this.data.length <= this.MIN_ZOOM) return
        if (delta > 0 && this.data.length > this.MAX_ZOOM) return
        let k = this.interval / 1000
        let diff = delta * k * this.data.length
        let tl = this.comp.config.ZOOM_MODE === 'tl'
        if (event.originalEvent.ctrlKey || tl) {
            let offset = event.originalEvent.offsetX
            let diff1 = offset / (this.canvas.width-1) * diff
            let diff2 = diff - diff1
            this.range[0] -= diff1
            this.range[1] += diff2
        } else {
            this.range[0] -= diff
        }

        if (tl) {
            let offset = event.originalEvent.offsetY
            let diff1 = offset / (this.canvas.height-1) * 2
            let diff2 = 2 - diff1
            let z = diff / (this.range[1] - this.range[0])
            //rezoom_range(z, diff_x, diff_y)
            this.comp.$emit('rezoom-range', {
                grid_id: this.id, z, diff1, diff2
            })
        }

        this.change_range()

    }

    mousedrag(x, y) {

        let dt = this.drug.t * (this.drug.x - x) / this.layout.width

        let d$ = this.layout.$_hi - this.layout.$_lo
        d$ *= (this.drug.y - y) / this.layout.height
        let offset = this.drug.o + d$

        let ls = this.layout.grid.logScale

        if (ls && this.drug.y_r) {
            let dy = this.drug.y - y
            var range = this.drug.y_r.slice()
            range[0] = math.exp((0 - this.drug.B + dy) /
                this.layout.A)
            range[1] = math.exp(
                (this.layout.height - this.drug.B + dy) /
                this.layout.A)
        }

        if (this.drug.y_r && this.$p.y_transform &&
            !this.$p.y_transform.auto) {
            this.comp.$emit('sidebar-transform', {
                grid_id: this.id,
                range: ls ? (range || this.drug.y_r) : [
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

    trackpad_scroll(event) {

        let dt = this.range[1] - this.range[0]

        this.range[0] += event.deltaX * dt * 0.011
        this.range[1] += event.deltaX * dt * 0.011

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
            const mouse = layer.renderer.mouse
            const keys = layer.renderer.keys
            if (mouse.listeners) {
                mouse.emit(name, event)
            }
            if (keys && keys.listeners) {
                keys.emit(name, event)
            }
        }
    }

    destroy() {
        let rm = removeEventListener
        rm("gesturestart", this.gesturestart)
        rm("gesturechange", this.gesturechange)
        rm("gestureend", this.gestureend)
        if (this.mc) this.mc.destroy()
        if (this.hm) this.hm.unwheel()
    }
}
