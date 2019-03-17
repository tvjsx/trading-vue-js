// Cursor updater: calculates current values for
// OHLCV and all other indicators

import Utils from '../../stuff/utils.js'

class CursorUpdater {

    constructor(comp) {
        this.comp = comp, this.grids = comp._layout.grids,
        this.cursor = comp.cursor
    }

    sync(e) {

        this.cursor.grid_id = e.grid_id

        for (var grid of this.grids) {
            const c = this.cursor_data(grid, e)
            if (!this.cursor.locked) {
                this.cursor.t = c.t
                if(c.values) {
                    this.comp.$set(this.cursor.values, grid.id, c.values)
                }
            }
            if (grid.id !== e.grid_id) continue
            this.cursor.x = c.x
            this.cursor.y = c.y
            this.cursor.y$ = c.y$
        }
    }

    overlay_data(grid, e) {

        const s = grid.id === 0 ? 'main_section' : 'sub_section'
        let data = this.comp[s].data

        // Split offchart data between offchart grids
        if (grid.id > 0) data = [data[grid.id - 1]]

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
    // TODO: switch to screen2t() method for ohlcv
    cursor_data(grid, e) {

        const data = this.comp.main_section.sub

        let xs = data.map((x, i) => grid.startx + i * grid.px_step)
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

}

export default CursorUpdater
