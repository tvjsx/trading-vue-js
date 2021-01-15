// Time-index mapping (for non-linear t-axis)

import Utils from '../../stuff/utils.js'

const MAX_ARR = Math.pow(2, 32)

// 3 MODES of index calculation for overlays/subcharts:
// ::: indexSrc :::
// * "map"      -> use TI mapping functions to detect index
//                 (slowest, for stocks only. DEFAULT)
//
// * "calc"     -> calculate shift between sub & data
//                 (faster, but overlay data should be perfectly
//                  align with the main chart,
//                  1-1 candle/data point. Supports Renko)
//
// * "data"     -> overlay data should come with candle index
//                 (fastest, supports Renko)

export default class TI {

    constructor() {

        this.ib = false
    }

    init(params, res) {
        let {
            sub, interval, meta, $props:$p, interval_ms, sub_start, ib
        } = params

        this.ti_map = []
        this.it_map = []
        this.sub_i = []
        this.ib = ib
        this.sub = res
        this.ss = sub_start
        this.tf = interval_ms
        let start = meta.sub_start

        // Skip mapping for the regular mode
        if (this.ib) {
            this.map_sub(res)
        }
    }

    // Make maps for the main subset
    map_sub(res) {

        for (var i = 0; i < res.length; i++) {
            let t = res[i][0]
            let _i = (this.ss + i)
            this.ti_map[t] = _i
            this.it_map[_i] = t

            // Overwrite t with i
            let copy = [...res[i]]
            copy[0] = _i
            this.sub_i.push(copy)

        }

    }

    // Map overlay data
    // TODO: parse() called 3 times instead of 2 for 'spx_sample.json'
    parse(data, mode) {

        if (!this.ib || !this.sub[0] || mode === 'data') return data

        let res = []
        let k = 0 // Candlestick index

        if (mode === 'calc') {
            let shift = Utils.index_shift(this.sub, data)
            for (var i = 0; i < data.length; i++) {
                let _i = (this.ss + i)
                let copy = [...data[i]]
                copy[0] = _i + shift
                res.push(copy)
            }
            return res
        }

        // If indicator data starts after ohlcv, calc the first index
        if (data.length) {
            try {
                let k1 = Utils.fast_nearest(this.sub, data[0][0])[0]
                if (k1 !== null && k1 >= 0) k = k1
            } catch(e) { }
        }

        let t0 = this.sub[0][0]
        let tN = this.sub[this.sub.length - 1][0]

        for (var i = 0; i < data.length; i++) {
            let copy = [...data[i]]
            let tk = this.sub[k][0]
            let t = data[i][0]
            let index = this.ti_map[t]

            if (index === undefined) {

                // Linear extrapolation
                if (t < t0 || t > tN) {
                    index = this.ss + k - (tk - t) / this.tf
                    t = data[i+1] ? data[i+1][0] : undefined
                }

                // Linear interpolation
                else {
                    let tk2 = this.sub[k + 1][0]
                    index = tk === tk2 ?  this.ss + k :
                        this.ss + k + (t - tk) / (tk2 - tk)
                    t = data[i+1] ? data[i+1][0] : undefined
                }

            }
            // Race of data points & sub points (ohlcv)
            // (like turn based increments)
            while (k+1 < this.sub.length - 1 && t > this.sub[k+1][0]) {
                k++
                tk = this.sub[k][0]
            }
            copy[0] = index
            res.push(copy)
        }
        return res
    }

    // index => time
    i2t(i) {

        if (!this.ib || !this.sub.length) return i // Regular mode

        // Discrete mapping
        let res = this.it_map[i]
        if (res !== undefined) return res
        // Linear extrapolation
        else if (i >= this.ss + this.sub_i.length) {
            let di = i - (this.ss + this.sub_i.length) + 1
            let last = this.sub[this.sub.length - 1]
            return last[0] + di * this.tf
        }
        else if (i < this.ss) {
            let di = i - this.ss
            return this.sub[0][0] + di * this.tf
        }

        // Linear Interpolation
        let i1 = Math.floor(i) - this.ss
        let i2 = i1 + 1
        let len = this.sub.length

        if (i2 >= len) i2 = len - 1

        let sub1 = this.sub[i1]
        let sub2 = this.sub[i2]

        if (sub1 && sub2) {
            let t1 = sub1[0]
            let t2 = sub2[0]
            return t1 + (t2 - t1) * (i - i1 - this.ss)
        }
        return undefined

    }

    // Map or bypass depending on the mode
    i2t_mode(i, mode) {
        return mode === 'data' ? i : this.i2t(i)
    }

    // time => index
    // TODO: when switch from IB mode to regular tools
    // disappear (bc there is no more mapping)
    t2i(t) {

        if (!this.sub.length) return undefined

        // Discrete mapping
        let res = this.ti_map[t]
        if (res !== undefined) return res

        let t0 = this.sub[0][0]
        let tN = this.sub[this.sub.length - 1][0]

        // Linear extrapolation
        if (t < t0) {
            return this.ss - (t0 - t) / this.tf
        }

        else if (t > tN) {
            let k = this.sub.length - 1
            return this.ss + k - (tN - t) / this.tf
        }

        try {
            // Linear Interpolation
            let i = Utils.fast_nearest(this.sub, t)
            let tk = this.sub[i[0]][0]
            let tk2 = this.sub[i[1]][0]
            let k = (t - tk) / (tk2 - tk)
            return this.ss + i[0] + k * (i[1] - i[0])
        } catch(e) { }

        return undefined
    }

    // Auto detect: is it time or index?
    // Assuming that index-based mode is ON
    smth2i(smth) {
        if (smth > MAX_ARR) {
            return this.t2i(smth) // it was time
        } else {
            return smth // it was an index
        }
    }

    smth2t(smth) {
        if (smth < MAX_ARR) {
            return this.i2t(smth) // it was an index
        } else {
            return smth // it was time
        }
    }

    // Global Time => Index (uses all data, approx. method)
    // Used by tv.goto()
    gt2i(smth, ohlcv) {
        if (smth > MAX_ARR) {
            let E = 0.1 // Fixes the arrayslicer bug
            let [i1, i2] = Utils.fast_nearest(ohlcv, smth+E)
            if (typeof i1 === 'number') {
                return i1
            } else {
                return this.t2i(smth) // fallback
            }
        } else {
            return smth // it was an index
        }
    }

}
