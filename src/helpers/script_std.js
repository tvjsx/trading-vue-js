
// Script std-lib (built-in functions)

import se from './script_engine.js'
import linreg from '../stuff/linreg.js'

export default class ScriptStd {

    constructor(env) {
        this.env = env

        this.SWMA = [1/6, 2/6, 2/6, 1/6]
        this.STDEV_EPS = 1e-10
        this.STDEV_Z = 1e-4
    }

    // Generate the next timeseries id
    _tsid(prev, next) {
        return `${prev}<-${next}`
    }

    // Wait for a value !== undefined
    nw(x) {
        if (x === undefined || x !== x) {
            // Skip a dependend indicators + don't
            // add the current value to the final output
            // TODO: only when ts starts?
            se.skip = true
        }
        return x
    }

    // Skip undefined values
    ns(x) {
        if (x === undefined || x !== x) {
            // Skip a dependend indicators + don't
            // add the current value to the final output
            se.skip = true
        }
        return x
    }

    nz(x, v) {
        if (x === undefined || x !== x) {
            return v || 0
        }
        return x
    }

    na(x) {
        return x === undefined || x !== x
    }

    // Creates a new time-series & records each x.
    // Return the an array. Id is auto-genrated
    ts(x, _id) {
        let ts = this.env.tss[_id]
        if (!ts) {
            ts = this.env.tss[_id] = [x]
            ts.__id__ = _id
        } else {
            ts[0] = x
        }
        return ts
    }

    abs(x) {
        return Math.abs(x)
    }

    acos(x) {
        return Math.acos(x)
    }

    // Emits an event
    signal(type, data = {}) {
        // TODO: this
    }

    // Emits an event if cond === true
    signalif(cond, type, data = {}) {
        if (cond) {
        // TODO: this
        }
    }

    alma(src, len, offset, sigma, _id) {
        let id = this._tsid(_id, `alma(${len},${offset},${sigma})`)
        let m = Math.floor(offset * (len - 1))
        let s = len / sigma
        let norm = 0
        let sum = 0
        for (var i = 0; i < len; i++) {
            let w = Math.exp(-1 * Math.pow(i - m, 2) / (2 * Math.pow(s, 2)))
            norm = norm + w
            sum = sum + src[len - i - 1] * w
        }
        return this.ts(sum / norm, id)
    }

    asin(x) {
        return Math.asin(x)
    }

    atan(x) {
        return Math.atan(x)
    }

    atr(len, _id) {
        let id = this._tsid(_id, `atr(${len})`)
        let high = this.env.shared.high
        let low = this.env.shared.low
        let close = this.env.shared.close
        let tr = this.ts(0, id)
        tr[0] = this.na(high[1]) ? high[0] - low[0] :
            Math.max(
                Math.max(
                    high[0] - low[0],
                    Math.abs(high[0] - close[1])
                ),
                Math.abs(low[0] - close[1])
            )
        return this.rma(tr, len, id)
    }

    avg(...args) {
        let sum = 0
        for (var i = 0; i < args.length; i++) {
            sum += args[i]
        }
        return sum / args.length
    }

    // Candles since the event occured (cond === true)
    since(cond) {
        // TODO: this
    }

    bb(src, len, mult, _id) {
        let id = this._tsid(_id, `bb(${len},${mult})`)
        let basis = this.sma(src, len, id)
        let dev = this.stdev(src, len, id)[0] * mult
        return [
            basis,
            this.ts(basis[0] + dev, id + '1'),
            this.ts(basis[0] - dev, id + '2')
        ]
    }

    // Tuple version, faster
    bb2() {
        // TODO: this
    }

    bbw(src, len, mult, _id) {
        let id = this._tsid(_id, `bbw(${len},${mult})`)
        let basis = this.sma(src, len, id)[0]
        let dev = this.stdev(src, len, id)[0] * mult
        return this.ts(2 * dev / basis, id)
    }

    bool(x) {
        return !!x
    }

    cci(src, len, _id) {
        // TODO: Not exactly precise, but pretty damn close
        let id = this._tsid(_id, `cci(${len})`)
        let ma = this.sma(src, len, id)
        let dev = this.dev(src, len, id)
        let cci = (src[0] - ma[0]) / (0.015 * dev[0])
        return this.ts(cci, id)
    }

    ceil(x) {
        return Math.ceil(x)
    }

    // x[0] - x[len]
    change(src, len = 1, _id) {
        let id = this._tsid(_id, `change(${len})`)
        return this.ts(src[0] - src[len], id)
    }

    cmo(src, len, _id) {
        let id = this._tsid(_id, `cmo(${len})`)
        let mom = this.change(src, 1, id)

        let g = this.ts(mom[0] >= 0 ? mom[0] : 0.0, id+"g")
        let l = this.ts(mom[0] >= 0 ? 0.0 : -mom[0], id+"l")

        let sm1 = this.sum(g, len, id+'1')[0]
        let sm2 = this.sum(l, len, id+'2')[0]

        return this.ts(100 * (sm1 - sm2) / (sm1 + sm2), id)
    }

    cog(src, len, _id) {
        let id = this._tsid(_id, `cmo(${len})`)
        let sum = this.sum(src, len, id)[0]
        let num = 0
        for (var i = 0; i < len; i++) {
            num += src[i] * (i + 1)
        }
        return this.ts(-num / sum, id)
    }

    // correlation
    corr() {
        // TODO: this
    }

    cos(x) {
        return Math.cos(x)
    }

    cross(src1, src2, _id) {
        let id = this._tsid(_id, `cross`)
        let x = (src1[0] > src2[0]) !== (src1[1] > src2[1])
        return this.ts(x, id)
    }

    crossover(src1, src2, _id) {
        let id = this._tsid(_id, `crossover`)
        let x = (src1[0] > src2[0]) && (src1[1] <= src2[1])
        return this.ts(x, id)
    }

    crossunder(src1, src2, _id) {
        let id = this._tsid(_id, `crossunder`)
        let x = (src1[0] < src2[0]) && (src1[1] >= src2[1])
        return this.ts(x, id)
    }

    cum(src, _id) {
        let id = this._tsid(_id, `cum`)
        let res = this.ts(0, id)
        res[0] = this.nz(src[0]) + this.nz(res[1])
        return res
    }

    dayofmonth(time) {
        return new Date(time || se.t).getUTCDate()
    }

    dayofweek(time) {
        return new Date(time || se.t).getUTCDay() + 1
    }

    dev(src, len, _id) {
        let id = this._tsid(_id, `dev(${len})`)
        let mean = this.sma(src, len, id)[0]
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum += Math.abs(src[i] - mean)
        }
        return this.ts(sum / len, id)
    }

    dmi(len, smooth, _id) {
        // TODO: this
    }

    // Tuple version, faster
    dmi2(len, smooth, _id) {
        // TODO: this
    }

    ema(src, len, _id) {
        let id = this._tsid(_id, `ema(${len})`)
        let a = 2 / (len + 1)
        let ema = this.ts(id, 0)
        ema[0] = this.na(ema[1]) ?
            this.sma(src, len, id)[0] :
            a * src[0] + (1 - a) * this.nz(ema[1])
        return ema
    }

    exp(x) {
        return Math.exp(x)
    }

    falling(src, len) {
        // TODO: this
    }

    fixnan(x) {
        // TODO: this
    }

    floor(x) {
        Math.floor(x)
    }

    highest(src, len, _id) {
        let id = this._tsid(_id, `highest(${len})`)
        let high = -Infinity
        for (var i = 0; i < len; i++) {
            if (src[i] > high) high = src[i]
        }
        return this.ts(high, id)
    }

    highestbars(src, len) {
        // TODO: this
    }

    hma(src, len) {
        // TODO: this
    }

    hour(time) {
        return new Date(time || t).getUTCHours()
    }

    iff(cond, x, y) {
        return cond ? x : z
    }

    kc(src, len, mult, use_tr = true) {
        // TODO: this
    }

    kcw(src, len, mult, use_tr = true) {
        // TODO: this
    }

    linreg(src, len, offset = 0, _id) {
        let id = this._tsid(_id, `highest(${len})`)

        let lr = linreg(src, len, offset)

        return this.ts(lr, id)
    }

    log(x) {
        Math.log(x)
    }

    log10(x) {
        Math.log10(x)
    }

    lowest(src, len, _id) {
        let id = this._tsid(_id, `lowest(${len})`)
        let low = Infinity
        for (var i = 0; i < len; i++) {
            if (src[i] < low) low = src[i]
        }
        return this.ts(low, id)
    }

    lowestbars(src, len) {
        // TODO: this
    }

    macd(source, fastlen, slowlen, siglen) {
        // TODO: this
    }

    max(...args) {
        return Math.max(...args)
    }

    // max_bars_back
    buffsize(src, len) {
        // TODO: this
    }

    mfi(src, len) {
        // TODO: this
    }

    min(...args) {
        return Math.min(...args)
    }

    minute() {
        return new Date(time || se.t).getUTCMinutes()
    }

    mom(src, len) {
        // TODO: this
    }

    month(time) {
        return new Date(time || se.t).getUTCMonth()
    }

    offset() {
        // TODO: this
    }

    // percentile_linear_interpolation
    linearint() {
        // TODO: this
    }

    // percentile_nearest_rank
    nearestrank() {
        // TODO: this
    }

    percentrank() {
        // TODO: this
    }

    pivothigh(src, left, right) {
        // TODO: this
    }

    pivotlow(src, left, right) {
        // TODO: this
    }

    pow(x) {
        return Math.pow(x)
    }

    rising(src, len) {
        // TODO: this
    }

    rma(src, len, _id) {
        let id = this._tsid(_id, `rma(${len})`)
        let a = len
        let sum = this.ts(0, id)
        sum[0] = this.na(sum[1]) ?
            this.sma(src, len, id)[0] :
            (src[0] + (a - 1) * this.nz(sum[1])) / a
        return sum
    }

    roc(src, len) {
        // TODO: this
    }

    round(x) {
        return Math.round(x)
    }

    rsi(src, len) {
        // TODO: this
    }

    sar(start, inc, max) {
        // TODO: this
    }

    second(time) {
        return new Date(time || se.t).getUTCSeconds()
    }

    sign(x) {
        return Math.sign(x)
    }

    sin(x) {
        return Math.sin(x)
    }

    sma(src, len, _id) {
        let id = this._tsid(_id, `sma(${len})`)
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum = sum + src[i]
        }
        return this.ts(sum / len, id)
    }

    sqrt(x) {
        return Math.sqrt(x)
    }

    stdev(src, len, _id) {

        let sumf = (x, y) => {
            let res = x + y
            if (Math.abs(res) <= this.STDEV_EPS) {
                return 0
            }
            else if (Math.abs(res) > this.STDEV_Z) {
                return res
            } else {
                return 15 // wtf?
            }
        }

        let id = this._tsid(_id, `stdev(${len})`)
        let avg = this.sma(src, len, id)
        let sqd = 0
        for (var i = 0; i < len; i++) {
            let sum = sumf(src[i], -avg[0])
            sqd += sum * sum
        }
        return this.ts(Math.sqrt(sqd / len), id)
    }

    stoch(src, high, low, len) {
        // TODO: this
    }

    sum(src, len, _id) {
        let id = this._tsid(_id, `sum(${len})`)
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum = sum + src[i]
        }
        return this.ts(sum, id)
    }

    supertrend(factor, atrlen) {
        // TODO: this
    }

    swma(src, _id) {
        let id = this._tsid(_id, `swma`)
        let sum = src[3] * this.SWMA[0] + src[2] * this.SWMA[1] +
                  src[1] * this.SWMA[2] + src[0] * this.SWMA[3]
        return this.ts(sum, id)
    }

    tan(x) {
        return Math.tan(x)
    }

    time() {
        // TODO: this
    }

    timestamp() {
        // TODO: this
    }

    tr(fixnan = false, _id) {
        // TODO: this
        let id = this._tsid(_id, `tr(${fixnan})`)
        let high = this.env.shared.high
        let low = this.env.shared.low
        let close = this.env.shared.close
        let res = 0
        if (this.na(close[1]) && fixnan) {
            res = high[0] - low[0]
        } else {
            res = Math.max(
                high[0] - low[0],
                Math.abs(high[0] - close[1]),
                Math.abs(low[0] - close[1])
            )
        }

        return this.ts(res, id)

    }

    tsi() {
        // TODO: this
    }

    valuewhen() {
        // TODO: this
    }

    variance(src, len) {
        // TODO: this
    }

    vwap(src) {
        // TODO: this
    }

    vwma(src, len) {
        // TODO: this
    }

    weekofyear() {
        // TODO: this
    }

    wma(src, len, _id) {
        let id = this._tsid(_id, `wma(${len})`)
        let norm = 0
        let sum = 0
        for (var i = 0; i < len; i++) {
            let w = (len - i) * len
            norm += w
            sum += src[i] * w
        }
        return this.ts(sum / norm, id)
    }

    wpr(len) {
        // TODO: this
    }

    year(time) {
        return new Date(time || se.t).getUTCFullYear()
    }

}
