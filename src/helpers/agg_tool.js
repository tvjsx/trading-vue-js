// Tick aggregation

import Utils from '../stuff/utils.js'

export default class AggTool {

    constructor(dc, int = 100) {

        this.symbols = {}
        this.int = int // Itarval in ms
        this.dc = dc
        this.st_id = null
        this.data_changed = false

    }

    push(sym, upd, tf) {

        // Start auto updates
        if (!this.st_id) {
            this.st_id = setTimeout(() => this.update())
        }

        tf = parseInt(tf)
        let old = this.symbols[sym]
        let t = Utils.now()
        let isds = sym.includes('datasets.')
        this.data_changed = true

        if (!old) {

            this.symbols[sym] = { upd, t, data: [] }

        } else if (upd[0] >= old.upd[0] + tf && !isds) {

            // Refine the previous data point
            this.refine(sym, old.upd.slice())

            this.symbols[sym] = { upd, t, data: [] }

        } else {

            // Tick updates the current
            this.symbols[sym].upd = upd
            this.symbols[sym].t = t

        }

        if (isds) {
            this.symbols[sym].data.push(upd)
        }

    }

    update() {
        let out = {}
        for (var sym in this.symbols) {
            let upd = this.symbols[sym].upd
            switch (sym) {
                case 'ohlcv':
                    var data = this.dc.data.chart.data
                    this.dc.fast_merge(data, upd)
                    out.ohlcv = data.slice(-2)
                    break
                default:
                    if (sym.includes('datasets.')) {
                        this.update_ds(sym, out)
                        continue
                    }
                    var data = this.dc.get_one(`${sym}`)
                    if (!data) continue
                    this.dc.fast_merge(data, upd, false)
                    break
            }
        }
        // TODO: fill gaps
        if (this.data_changed) {
            this.dc.ww.just('update-data', out)
            this.data_changed = false
        }
        setTimeout(() => this.update(), this.int)
    }

    refine(sym, upd) {
        if (sym === 'ohlcv') {
            var data = this.dc.data.chart.data
            this.dc.fast_merge(data, upd)
        } else {
            var data = this.dc.get_one(`${sym}`)
            if (!data) return
            this.dc.fast_merge(data, upd, false)
        }
    }

    update_ds(sym, out) {
        let data = this.symbols[sym].data
        if (data.length) {
            out[sym] = data
            this.symbols[sym].data = []
        }
    }

    clear() {
        this.symbols = {}
    }

}
