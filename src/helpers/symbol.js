
// Symbol (contains several samplers, e.g. high, low, close...)

import * as u from './script_utils.js'
import se from './script_engine.js'
import TS from './script_ts.js'
import Sampler from './sampler.js'

const OHLCV = ['open', 'high', 'low', 'close', 'vol']

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
        this.tmap = {}

        this.tf = this.tf || se.tf
        if (this.main) this.tf = se.tf

        // Create a bunch of OHLCV samplers for
        // sparse data
        if (this.aggtype === 'ohlcv') {
            for (var id of OHLCV) {
                this[id] = TS(`${this.id}_${id}`, [])
                this[id].__fn__ = Sampler(id).bind(this[id])
                this[id].__tf__ = this.tf
            }
        }

        // Create regular TSs & just feed them with a
        // data points from the dataset
        // TODO: different TS configurations depending
        // on this.format
        if (this.aggtype === 'copy') {
            for (var id of OHLCV) {
                this[id] = TS(`${this.id}_${id}`, [])
                this[id].__tf__ = this.tf
            }
            for (var i = 0; i < this.data.length; i++) {
                this.tmap[this.data[i][0]] = i
            }
        }
        // Custom agg function (value calculated for the
        // current window)
        if (typeof this.aggtype === 'function') {
            this.close = TS(`${this.id}_close`, [])
            this.close.__fn__ = this.aggtype
            this.close.__tf__ = this.tf
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
        if(this.aggtype === 'ohlcv') {
            return this.update_ohlcv(x, t)
        } else if (this.aggtype === 'copy') {
            return this.update_copy(x, t)
        } else if (typeof this.aggtype === 'function') {
            return this.update_custom(x, t)
        }
    }

    update_ohlcv(x, t) {
        // Timestamp of the target candle, can be
        // current or the next (if we are sampling
        // the main chart)
        t = t || se.t
        let idx = this.idx
        switch (this.data_type) {
            case ARR:
                if (t > this.data[this.data.length-1][0]) return false
                let t0 = this.window ? t - this.window + this.tf : t
                let dt = t0 % this.tf
                t0 -= dt
                let i0 = u.nextt(this.data, t0)
                if (i0 >= this.data.length) return false
                let t1 = t + se.tf
                // Flush volume before the next window,
                // but not before a new candle
                if (t < this.vol.__t0__ + this.tf) this.vol[0] = 0
                let noevent = true
                for(var i = i0; i < this.data.length; i++) {
                    noevent = false
                    let dp = this.data[i]
                    if (dp[idx.time] >= t1) break
                    this.open.__fn__(dp[idx.open], t)
                    this.high.__fn__(dp[idx.high], t)
                    this.low.__fn__(dp[idx.low], t)
                    this.close.__fn__(dp[idx.close], t)
                    this.vol.__fn__(dp[idx.vol], t)
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
                // TODO: this
                break
            case NUM:
                // TODO: this
                break
        }
        return true
    }

    update_copy(x, t) {

        t = t || se.t

        // Assuming that we got an ohlcv dataset
        let i = this.tmap[t]
        let s = this.data[i]

        let ts0 = this.__t0__
        if (!ts0 || t >= ts0 + this.tf) {
            for (var k = 0; k < 5; k++) {
                let tsn = OHLCV[k]
                this[tsn].unshift(undefined)
            }
            this.__t0__ = t - t % this.tf
            let last = this.data.length - 1
            if (this.__t0__ === this.data[last][0]) {
                this.tmap[this.__t0__] = last
                s = this.data[last]
            }
        }

        if (s) {
            for (var k = 0; k < 5; k++) {
                let tsn = OHLCV[k]
                this[tsn][0] = s[k + 1]
            }
        } else if (this.fillgaps) {
            for (var k = 0; k < 5; k++) {
                let tsn = OHLCV[k]
                this[tsn][0] = this.close[1]
            }
        }
    }

    update_custom(x, t) {
        t = t || se.t
        let idx = this.idx
        switch (this.data_type) {
            case ARR:
                if (!this.data.length) return false
                if (t > this.data[this.data.length-1][0]) return false
                let t0 = this.window ? t - this.window + this.tf : t
                let dt = t0 % this.tf
                t0 -= dt
                let i0 = u.nextt(this.data, t0)
                if (i0 >= this.data.length) return false
                let t1 = t + se.tf

                let sub = []
                for(var i = i0; i < this.data.length; i++) {
                    let dp = this.data[i]
                    if (dp[idx.time] >= t1) break
                    sub.push(dp)
                }

                if (sub.length || this.fillgaps === false) {
                    var val = this.close.__fn__(sub) // TODO: prob a bug
                } else if (this.fillgaps !== false) {
                    val = this.close[0]
                }
                let ts0 = this.close.__t0__
                if (!ts0 || t >= ts0 + this.tf) {
                    this.close.unshift(val)
                    this.close.__t0__ = t - t % this.tf
                } else {
                    this.close[0] = val
                }
                break
            case TSS:
                // TODO: this
                break
            case NUM:
                // TODO: this
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
                break
            default:
                this.format = 'time:close'
                break
        }
        this.format.split(':').forEach((x, i) => {
            if (!x.length) return
            let list = x.split(',')
            list.forEach(y => idx[y] = i)
        })
        return idx
    }
}

export { Sym, ARR, TSS, NUM }
