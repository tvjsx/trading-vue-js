
// Symbol (contains several samplers, e.g. high, low, close...)

import * as u from './script_utils.js'
import se from './script_engine.js'
import TS from './script_ts.js'
import Sampler from './sampler.js'

const ARR = 0
const TSS = 1
const NUM = 2

export default class Sym {

    constructor(data, params) {

        this.id = params.id
        this.tf = u.tf_from_str(params.tf)
        this.format = params.format
        this.aggtype = params.aggtype || 'ohlcv'
        this.window = params.window
        this.fillgaps = params.fillgaps
        this.data = data
        this.data_type = ARR
        this.main = !!params.main
        this.idx = this.data_idx()

        this.tf = this.tf || se.tf
        if (this.main) this.tf = se.tf

        for (var id of ['open', 'high', 'low', 'close', 'vol']) {
            this[id] = TS(`${this.id}_${id}`, [])
            this[id].__fn__ = Sampler(id).bind(this[id])
            this[id].__tf__ = this.tf
        }

        if (this.main) {
            if (!this.tf) throw 'Main tf should be defined'
            se.custom_main = this
            let t0 = this.data[0][0]
            se.t = t0 - t0 % this.tf
            this.update(null, se.t)

            // First candle should be formed before any updates()
            se.data.ohlcv.data.length = 0
            se.data.ohlcv.data.push([
                se.t,
                this.open[0],
                this.high[0],
                this.low[0],
                this.close[0],
                this.vol[0]
            ])
        }

    }

    update(x, t) {
        // Timestamp of the target candle, can be
        // current or the next (if we are sampling
        // the main chart)
        t = t || se.t
        let idx = this.idx
        switch (this.data_type) {
            case ARR:
                let t0 = this.window ? t - this.window + this.tf : t
                let i0 = u.nextt(this.data, t0)
                if (i0 >= this.data.length) return false
                let t1 = t + this.tf
                let noevent = true
                for(var i = i0; i < this.data.length; i++) {
                    let dp = this.data[i]
                    if (dp[idx.time] >= t1) break
                    this.open.__fn__(dp[idx.open], t)
                    this.high.__fn__(dp[idx.high], t)
                    this.low.__fn__(dp[idx.low], t)
                    this.close.__fn__(dp[idx.close], t)
                    this.vol.__fn__(dp[idx.vol], t)
                    noevent = false
                }
                if (noevent) {
                    if (this.fillgaps === false && !this.main) return false
                    let last = this.close[0]
                    this.open.__fn__(last, t)
                    this.high.__fn__(last, t)
                    this.low.__fn__(last, t)
                    this.close.__fn__(last, t)
                    this.vol.__fn__(0, t)
                }
                break
            case TSS:

                break
            case NUM:

                break
        }
        return true
    }

    // Calculates data indices from the format
    data_idx() {
        let idx = {}
        switch(this.aggtype) {
            case 'ohlcv':
                // Trying to detect the format from the
                // first data point
                if (!this.format) {
                    let x0 = this.data[0]
                    if (!x0 || x0.length === 6) {
                        this.format = 'time:open:high:low:close:vol'
                    }
                    else if (x0.length === 3) {
                        this.format = 'time:open,high,low,close:vol'
                    }
                }
                this.format.split(':').forEach((x, i) => {
                    if (!x.length) return
                    let list = x.split(',')
                    list.forEach(y => idx[y] = i)
                })
                break
        }
        return idx
    }
}

export { Sym, ARR, TSS, NUM }
