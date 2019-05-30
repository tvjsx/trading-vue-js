
import Const from '../../stuff/constants.js'
import Utils from '../../stuff/utils.js'

const { MINUTE15, HOUR, DAY, WEEK, YEAR, MONTHMAP } = Const

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

        for (var p of this.layout.botbar.xs) {

            let lbl = this.format_date(p[1][0])

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
        if (this.$p.cursor.x && this.$p.cursor.t) this.panel()

    }

    panel() {

        let lbl = this.format_cursor_x()
        this.ctx.fillStyle = this.$p.colors.colorPanel

        let measure = this.ctx.measureText(lbl + '    ')
        let panwidth = Math.floor(measure.width)
        let cursor = this.nearest()
        let x = Math.floor(cursor - panwidth * 0.5)
        let y = - 0.5
        let panheight = this.comp.config.PANHEIGHT
        this.ctx.fillRect(x, y, panwidth, panheight + 0.5)

        this.ctx.fillStyle = this.$p.colors.colorTextHL
        this.ctx.textAlign = 'center'
        this.ctx.fillText(lbl, cursor, y + 16)

    }

    // TODO: implement time zones
    format_date(t) {

        let d = new Date(t)

        if (Utils.year_start(t) === t) return d.getFullYear()
        if (Utils.month_start(t) === t) return MONTHMAP[d.getMonth()]
        if (Utils.day_start(t) === t) return d.getDate()

        let h = Utils.add_zero(d.getHours())
        let m = Utils.add_zero(d.getMinutes())
        return h + ":" + m

    }

    format_cursor_x() {

        let t = this.$p.cursor.t
        let ti = this.$p.interval
        let d = new Date(t)

        if (ti === YEAR) {
            return d.getFullYear()
        }

        if (ti < YEAR) {
            var yr = '`' + `${d.getFullYear()}`.slice(-2)
            var mo = MONTHMAP[d.getMonth()]
            var dd = '01'
        }
        if (ti <= WEEK) dd = d.getDate()
        let date = `${dd} ${mo} ${yr}`
        let time = ''

        if (ti < DAY) {
            let h = Utils.add_zero(d.getHours())
            let m = Utils.add_zero(d.getMinutes())
            time = h + ":" + m
        }

        return `${date}  ${time}`

    }

    // Highlights the begining of a time interval
    // TODO: improve. Problem: let's say we have a new month,
    // but if there is no grid line in place, there
    // will be no month name on t-axis. Sad.
    // Solution: manipulate the grid, skew it, you know
    lbl_highlight(t) {

        let ti = this.$p.interval

        if (t === 0) return true
        if (Utils.month_start(t) === t) return true
        if (Utils.day_start(t) === t) return true
        if (ti <= MINUTE15 && t % HOUR === 0) return true

        return false

    }

    // Nearest data object (when locked)
    nearest() {
        if (this.$p.cursor.locked) {
            let t = this.$p.cursor.values[0].ohlcv[0]
            let x = Math.floor(this.grid_0.t_magnet(t))
            return x
        }
        return this.$p.cursor.x
    }


    mousemove() { }
    mouseout() { }
    mouseup() { }
    mousedown() { }

}
