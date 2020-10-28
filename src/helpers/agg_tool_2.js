// Tick aggregation

import Utils from '../stuff/utils.js'

export default class AggTool {

    constructor(dc, int = 100) {

        this.symbols = {}
        this.int = int // Itarval in ms
        this.dc = dc
        this.st_id = null

    }

    push(sym, upd, tf) {

        // Start auto updates
        if (!this.st_id) {
            this.st_id = setTimeout(() => this.update())
        }

        tf = parseInt(tf)
        let old = this.symbols[sym]
        let t = Utils.now()

        if (!old) {

            this.symbols[sym] = { upd, t }

        } else if (upd[0] >= old.upd[0] + tf) {

            // Refine the previous data point
            this.refine(sym, old.upd.slice())

            this.symbols[sym] = { upd, t }

        } else {

            // Tick updates the current
            this.symbols[sym].upd = upd
            this.symbols[sym].t = t
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
                    out.ohlcv = upd
                    break
                default:
                    var data = this.dc.get_one(`${sym}`)
                    if (!data) continue
                    this.dc.fast_merge(data, upd, false)
                    break
            }
        }
        this.dc.ww.just('update-data', out)
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

    clear() {
        this.symbols = {}
    }

}
