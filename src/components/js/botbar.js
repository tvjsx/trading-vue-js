
import Const from '../../stuff/constants.js'
import Utils from '../../stuff/utils.js'

const { MINUTE15, MINUTE, HOUR, DAY, WEEK, YEAR, MONTHMAP } = Const

export default class Botbar {

    constructor(canvas, comp) {

        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.comp = comp
        this.$p = comp.$props
        this.data = this.$p.sub
        this.range = this.$p.range
        this.layout = this.$p.layout
    }

    update() {

        this.grid_0 = this.layout.grids[0]

        const width = this.layout.botbar.width
        const height = this.layout.botbar.height

        const sb = this.layout.grids[0].sb

        this.ctx.fillStyle = this.$p.colors.colorBack
        this.ctx.font = this.$p.font
        this.ctx.fillRect(0, 0, width, height)

        this.ctx.strokeStyle = this.$p.colors.colorScale

        this.ctx.beginPath()
        this.ctx.moveTo(0, 0.5)
        this.ctx.lineTo(Math.floor(width + 1), 0.5)
        this.ctx.stroke()

        this.ctx.fillStyle = this.$p.colors.colorText
        this.ctx.beginPath()

        for (const p of this.layout.botbar.xs) {

            const lbl = this.format_date(p[1][0])

            if (p[0] > width - sb) continue

            this.ctx.moveTo(p[0] - 0.5, 0)
            this.ctx.lineTo(p[0] - 0.5, 4.5)

            if (!this.lbl_highlight(p[1][0])) {
                this.ctx.globalAlpha = 0.85
            }
            this.ctx.textAlign = 'center'
            this.ctx.fillText(lbl, p[0], 18)
            this.ctx.globalAlpha = 1
        }

        this.ctx.stroke()
        this.apply_shaders()
        if (this.$p.cursor.x && this.$p.cursor.t !== undefined)
            this.panel()
    }

    apply_shaders() {
        for (const s of this.$p.shaders) {
            this.ctx.save()
            s.draw(this.ctx)
            this.ctx.restore()
        }
    }

    panel() {
        const lbl = this.format_cursor_x()
        this.ctx.fillStyle = this.$p.colors.colorPanel

        const measure = this.ctx.measureText(lbl + '    ')
        const panwidth = Math.floor(measure.width)
        const cursor = this.$p.cursor.x
        const x = Math.floor(cursor - panwidth * 0.5)
        const y = -0.5
        const panheight = this.comp.config.PANHEIGHT

        this.ctx.fillRect(x, y, panwidth, panheight + 0.5)

        this.ctx.fillStyle = this.$p.colors.colorTextHL
        this.ctx.textAlign = 'center'
        this.ctx.fillText(lbl, cursor, y + 16)
    }

    // TODO: implement time zones
    format_date(t) {
        t = this.grid_0.ti_map.i2t(t)

        t += new Date(t).getTimezoneOffset() * MINUTE
        const d = new Date(t)

        if (Utils.year_start(t) === t) return d.getFullYear()
        if (Utils.month_start(t) === t) return MONTHMAP[d.getMonth()]
        if (Utils.day_start(t) === t) return d.getDate()

        const h = Utils.add_zero(d.getHours())
        const m = Utils.add_zero(d.getMinutes())
        return h + ':' + m
    }

    format_cursor_x() {
        const ti = this.$p.interval
        let t = this.$p.cursor.t
        t = this.grid_0.ti_map.i2t(t)
        t += new Date(t).getTimezoneOffset() * MINUTE
        const d = new Date(t)

        if (ti === YEAR) {
            return d.getFullYear()
        }

        let mo_yr, dd;
        if (ti < YEAR) {
            mo_yr = MONTHMAP[d.getMonth()] + ' `' + d.getFullYear().toString().slice(-2)
            dd = '01'
        }

        if (ti <= WEEK) dd = d.getDate()
        let time = '', date = ''

        if (dd !== undefined) date += dd;
        if (mo_yr !== undefined) date += date.length === 0 ? mo_yr : ' ' + mo_yr

        if (ti < DAY) {
            const h = Utils.add_zero(d.getHours())
            const m = Utils.add_zero(d.getMinutes())
            time = h + ':' + m
            if (date.length !== 0) date += '  '  // TODO: can date even be unset?
        }

        return date + time
    }

    // Highlights the begining of a time interval
    // TODO: improve. Problem: let's say we have a new month,
    // but if there is no grid line in place, there
    // will be no month name on t-axis. Sad.
    // Solution: manipulate the grid, skew it, you know
    lbl_highlight(t) {

        const ti = this.$p.interval

        if (t === 0) return true
        if (Utils.month_start(t) === t) return true
        if (Utils.day_start(t) === t) return true

        return ti <= MINUTE15 && t % HOUR === 0;
    }

    mousemove() { }
    mouseout() { }
    mouseup() { }
    mousedown() { }

}
