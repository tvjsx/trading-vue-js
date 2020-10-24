
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
        this.aggtype = params.aggtype
        this.window = params.window
        this.data = data
        this.data_type = ARR
        this.main = !!params.main

        for (var id of ['open', 'high', 'low', 'close', 'vol']) {
            this[id] = TS(`${this.id}_${id}`, [])
            this[id].__fn__ = Sampler(id).bind(this[id])
            this[id].__tf__ = this.tf || se.tf
            if (this.main) this[id].__tf__ = se.tf
        }

        if (this.main) {
            if (!se.tf) throw 'Main tf should be defined'
            se.custom_main = this
            let t0 = this.data[0][0]
            se.t = t0 - t0 % se.tf
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
        switch (this.data_type) {
            case ARR:
                let t0 = this.window ? t - this.window + se.tf : t
                let i0 = u.nextt(this.data, t0)
                if (i0 >= this.data.length) return false
                let t1 = t + se.tf
                for(var i = i0; i < this.data.length - 1; i++) {
                    if (this.data[i + 1][0] >= t1) break
                    let price = this.data[i + 1][1] // TODO: calc index
                    let vol = this.data[i + 1][2]
                    this.open.__fn__(price, t)
                    this.high.__fn__(price, t)
                    this.low.__fn__(price, t)
                    this.close.__fn__(price, t)
                    this.vol.__fn__(vol, t)
                }
                break
            case TSS:

                break
            case NUM:

                break
        }
        return true
    }
}

export { Sym, ARR, TSS, NUM }
