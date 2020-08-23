// Cursor updater: calculates current values for
// OHLCV and all other indicators

import Utils from '../../stuff/utils.js'

class CursorUpdater {

    constructor(comp) {
        this.comp = comp, this.grids = comp._layout.grids,
        this.cursor = comp.cursor
    }

    sync(e) {
        // TODO: values not displaying if a custom grid id is set:
        // grid: { id: N }
        this.cursor.grid_id = e.grid_id
        let once = true
        for (var grid of this.grids) {
            const c = this.cursor_data(grid, e)
            if (!this.cursor.locked) {
                // TODO: find a better fix to invisible cursor prob
                if (once) {
                    this.cursor.t = this.cursor_time(grid, e, c)
                    if (this.cursor.t) once = false
                }
                if(c.values) {
                    this.comp.$set(this.cursor.values, grid.id, c.values)
                }
            }
            if (grid.id !== e.grid_id) continue
            this.cursor.x = grid.t2screen(this.cursor.t)
            this.cursor.y = c.y
            this.cursor.y$ = c.y$
        }
    }

    overlay_data(grid, e) {

        const s = grid.id === 0 ? 'main_section' : 'sub_section'
        let data = this.comp[s].data

        // Split offchart data between offchart grids
        if (grid.id > 0) {
            // Sequential grids
            let d = data.filter(x => x.grid.id === undefined)
            // grids with custom ids (for merging)
            let m = data.filter(x => x.grid.id === grid.id)
            data = [d[grid.id - 1], ...m]
        }

        const t = grid.screen2t(e.x)
        let ids = {}, res = {}
        for (var d of data) {
            let ts = d.data.map(x => x[0])
            let i = Utils.nearest_a(t, ts)[0]
            d.type in ids ? (ids[d.type]++) : (ids[d.type] = 0)
            res[`${d.type}_${ids[d.type]}`] = d.data[i]
        }
        return res

    }

    // Nearest datapoints
    cursor_data(grid, e) {

        const data = this.comp.main_section.sub

        let xs = data.map(x => grid.t2screen(x[0]) + 0.5)
        let i = Utils.nearest_a(e.x, xs)[0]
        if (!xs[i]) return {}
        return {
            x: Math.floor(xs[i]) - 0.5,
            y: Math.floor(e.y - 2) - 0.5 - grid.offset,
            y$: grid.screen2$(e.y - 2 - grid.offset),
            t: (data[i] || [])[0],
            values: Object.assign({
                ohlcv: grid.id === 0 ? data[i] : undefined
            },
            this.overlay_data(grid, e))
        }
    }

    // Get cursor t-position (extended)
    cursor_time(grid, mouse, candle) {
        let t = grid.screen2t(mouse.x)
        let r = Math.abs((t - candle.t) / this.comp.interval)
        let sign = Math.sign(t - candle.t)
        if (r >= 0.5) {
            // Outside the data range
            let n = Math.round(r)
            return candle.t + n * this.comp.interval * sign
        }
        // Inside the data range
        return candle.t
    }

}

export default CursorUpdater
