
// Script std-lib (built-in functions)

import se from './script_engine.js'
import linreg from '../stuff/linreg.js'
import * as u from './script_utils.js'

const BUF_INC = 5

export default class ScriptStd {

    constructor(env) {
        this.env = env

        this.SWMA = [1/6, 2/6, 2/6, 1/6]
        this.STDEV_EPS = 1e-10
        this.STDEV_Z = 1e-4

        this._index_tracking()

    }

    // Wrap every index with index-tracking function
    // That way we will know exact index ranges
    _index_tracking() {
        let proto = Object.getPrototypeOf(this)
        let std = ``
        for (var k of Object.getOwnPropertyNames(proto)) {
            switch(k) {
                case 'constructor':
                case 'ts':
                case '_index_tracking':
                case '_tsid':
                case '_i':
                case '_v':
                case '_add_i':
                    continue

            }
            let f = this._add_i(k, this[k].toString())
            if (f) this[k] = f
        }

    }

    // Add index tracking to the function
    _add_i(name, src) {
        let args = u.f_args(src)
        src = u.f_body(src)
        let src2 = u.wrap_idxs(src, 'this.')
        if (src2 !== src) {
            return new Function (...args, src2)
        }
        return null
    }

    // Generate the next timeseries id
    _tsid(prev, next) {
        // TODO: prev presence check
        return `${prev}<-${next}`
    }

    // Index-tracker
    _i(i, x) {
        // If an object is actually a timeseries
        if (x != undefined && x === x && x.__id__) {
            // Increase TS buff length
            if (!x.__len__ || i >= x.__len__) {
                x.__len__ = i + BUF_INC
            }
        }
        return i
    }

    // Index-tracker (object-based)
    _v(x, i) {
         //console.log('!!!!', x.__id__)

        // If an object is actually a timeseries
        if (x != undefined && x === x && x.__id__) {
            // Increase TS buff length
            if (!x.__len__ || i >= x.__len__) {
                x.__len__ = i + BUF_INC
                //console.log(x.__id__, x.__len__)
            }
        }
        return x
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

    // Wait for a value !== undefined
    nw(x) {
        /*if (x == undefined || x !== x) {
            // Skip a dependend indicators + don't
            // add the current value to the final output
            // TODO: only when ts starts?
            se.skip = true
        }
        return x*/
    }

    // Skip undefined values
    ns(x) {
        if (x == undefined || x !== x) {
            // Skip a dependend indicators + don't
            // add the current value to the final output
            se.skip = true
        }
        return x
    }

    nz(x, v) {
        if (x == undefined || x !== x) {
            return v || 0
        }
        return x
    }

    na(x) {
        return x == undefined || x !== x
    }

    // Math operators on t-series and numbers
    add(x, y, _id) {
        // __id__ means this is a time-series
        let id = this._tsid(_id, `add`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y) ? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 + y0, id)
    }

    sub(x, y, _id) {
        let id = this._tsid(_id, `sub`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y)? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 - y0, id)
    }

    mult(x, y, _id) {
        let id = this._tsid(_id, `mult`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y)? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 * y0, id)
    }

    div(x, y, _id) {
        let id = this._tsid(_id, `div`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y)? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 / y0, id)
    }

    neg(x, _id) {
        let id = this._tsid(_id, `neg`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        return this.ts(-x0, id)
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
        let id = this._tsid(_id, `dmi(${len},${smooth})`)
        let high = this.env.shared.high
        let low = this.env.shared.low
        let up = this.change(high, 1, id+'1')[0]
        let down = this.neg(this.change(low, 1, id+'2'), id)[0]

        let plusDM = this.ts(100 * (
            this.na(up) ? NaN :
            (up > down && up > 0 ? up : 0)), id+'3'
        )
        let minusDM = this.ts(100 * (
            this.na(down) ? NaN :
            (down > up && down > 0 ? down : 0)), id+'4'
        )

        let trur = this.rma(this.tr(false, id), len, id+'5')
        let plus = this.div(
            this.rma(plusDM, len, id+'6'), trur, id+'8')
        let minus = this.div(
            this.rma(minusDM, len, id+'7'), trur, id+'9')
        let sum = this.add(plus, minus, id+'10')[0]
        let adx = this.rma(
            this.ts(100 * Math.abs(plus[0] - minus[0]) /
            (sum === 0 ? 1 : sum), id+'11'),
            smooth, id+'12'
        )
        return [adx, plus, minus]
    }

    // Tuple version, faster
    dmi2(len, smooth, _id) {
        // TODO: this
    }

    ema(src, len, _id) {
        let id = this._tsid(_id, `ema(${len})`)
        let a = 2 / (len + 1)
        let ema = this.ts(0, id)
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

    hma(src, len, _id) {
        let id = this._tsid(_id, `hma(${len})`)
        let len2 = Math.floor(len/2)
        let len3 = Math.round(Math.sqrt(len))

        let a = this.mult(this.wma(src, len2, id+'1'), 2, id)
        let b = this.wma(src, len, id+'2')
        let delt = this.sub(a, b, id+'3')

        return this.wma(delt, len3, id+'4')
    }

    hour(time) {
        return new Date(time || t).getUTCHours()
    }

    iff(cond, x, y) {
        return cond ? x : z
    }

    kc(src, len, mult, use_tr = true, _id) {

        let id = this._tsid(_id, `kc(${len},${mult},${use_tr})`)
        let high = this.env.shared.high
        let low = this.env.shared.low
        let basis = this.ema(src, len, id+'1')

        let range = use_tr ?
            this.tr(false, id+'2') :
            this.ts(high[0] - low[0], id+'3')
        let ema = this.ema(range, len, id+'4')

        return [
            basis,
            this.ts(basis[0] + ema[0] * mult, id+'5'),
            this.ts(basis[0] - ema[0] * mult, id+'6')
        ]
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

    macd(src, fast, slow, sig, _id) {
        let id = this._tsid(_id, `macd(${fast}${slow}${sig})`)
        let fast_ma = this.ema(src, fast, id+'1')
        let slow_ma = this.ema(src, slow, id+'2')
        let macd = this.sub(fast_ma, slow_ma, id+'3')
        let signal = this.ema(macd, sig, id+'4')
        let hist = this.sub(macd, signal, id+'5')
        return [macd, signal, hist]
    }

    max(...args) {
        return Math.max(...args)
    }

    // max_bars_back
    buffsize(src, len) {
        // TODO: this
    }

    mfi(src, len, _id) {
        let id = this._tsid(_id, `mfi(${len})`)
        let vol = this.env.shared.vol
        let ch = this.change(src, 1, id+'1')[0]

        let ts1 = this.mult(vol, ch <= 0.0 ? 0.0 : src[0], id+'2')
        let ts2 = this.mult(vol, ch  >= 0.0 ? 0.0 : src[0], id+'3')

        let upper = this.sum(ts1, len, id+'4')
        let lower = this.sum(ts2, len, id+'5')

        let res = undefined
        if (!this.na(lower)) {
            res = this.rsi(upper, lower, id+'6')[0]
        }
        return this.ts(res, id)
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

    rsi(x, y, _id) {
        // Check if y is a timeseries
        if (!this.na(y) && y.__id__) {
            var id = this._tsid(_id, `rsi(x,y)`)
            var rsi = 100 - 100 / (1 + this.div(x, y, id)[0])
        } else {
            var id = this._tsid(_id, `rsi(${y})`)
            let ch = this.change(x, 1, _id)[0]
            let pc = this.ts(Math.max(ch, 0), id+'1')
            let nc = this.ts(-Math.min(ch, 0), id+'2')
            let up = this.rma(pc, y, id+'3')[0]
            let down = this.rma(nc, y, id+'4')[0]
            var rsi = down === 0 ? 100 : (
                up === 0 ? 0 : (100 - (100 / (1 + up / down)))
            )
        }
        return this.ts(rsi, id+'5')
    }

    sar(start, inc, max, _id) {
        // Source: Parabolic SAR by imuradyan
        // TODO: simplify the code
        let id = this._tsid(_id, `sar(${start},${inc},${max})`)

        let high = this.env.shared.high
        let low = this.env.shared.low
        let close = this.env.shared.close

        let minTick = 0 //1e-7
        let n = se.iter
        let out = this.ts(undefined, id+'1')
        let pos = this.ts(undefined, id+'2')
        let maxMin = this.ts(undefined, id+'3')
        let acc = this.ts(undefined, id+'4')
        let prev
        let outSet = false

        if (n >= 1) {
            prev = out[1]
            if (n === 1) {
                if (close[0] > close[1]) {
                    pos[0] = 1
                    maxMin[0] = Math.max(high[0], high[1])
                    prev = Math.min(low[0], low[1])
                } else {
                    pos[0] = -1
                    maxMin[0] = Math.min(low[0], low[1])
                    prev = Math.max(high[0], high[1])
                }
                acc[0] = start
            } else {
                pos[0] = pos[1]
                acc[0] = acc[1]
                maxMin[0] = maxMin[1]
            }
            if (pos[0] === 1) {
                if (high[0] > maxMin[0]) {
                    maxMin[0] = high[0]
                    acc[0] = Math.min(acc[0] + inc, max)
                }
                if (low[0] <= prev) {
                    pos[0] = -1
                    out[0] = maxMin[0]
                    maxMin[0] = low[0]
                    acc[0] = start
                    outSet = true
                }
            } else {
                if (low[0] < maxMin[0]) {
                    maxMin[0] = low[0]
                    acc[0] = Math.min(acc[0] + inc, max)
                }

                if (high[0] >= prev) {
                    pos[0] = 1
                    out[0] = maxMin[0]
                    maxMin[0] = high[0]
                    acc[0] = start
                    outSet = true
                }
            }

            if (!outSet) {
                out[0] = prev + acc[0] * (maxMin[0] - prev)

                if (pos[0] === 1)
                    if (out[0] >= low[0])
                        out[0] = low[0] - minTick


                if (pos[0] === -1)
                    if (out[0] <= high[0])
                        out[0] = high[0] + minTick
            }
        }
        return out
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

    stoch(src, high, low, len, _id) {
        let id = this._tsid(_id, `sum(${len})`)
        let x = 100 * (src[0] - this.lowest(low, len)[0])
        let y = this.highest(high, len)[0] - this.lowest(low, len)[0]
        return this.ts(x / y, id)
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
        throw 'Not implemented: supertrend()'
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

    time(res, sesh) {
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

    tsi(src, short, long, _id) {
        let id = this._tsid(_id, `tsi(${short},${long})`)
        let m = this.change(src, 1, id+'0')
        let m_abs = this.ts(Math.abs(m[0]), id+'1')
        let tsi = (
            this.ema(this.ema(m, long, id+'1'), short, id+'2')[0] /
            this.ema(this.ema(m_abs, long, id+'3'), short, id+'4')[0]
        )
        return this.ts(tsi, id)
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

    vwma(src, len, _id) {
        let id = this._tsid(_id, `vwma(${len})`)
        let vol = this.env.shared.vol
        let sxv = this.ts(src[0] * vol[0], id+'1')
        let res =
            this.sma(sxv, len, id+'2')[0] /
            this.sma(vol, len, id+'3')[0]
        return this.ts(res, id+'4')
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

    wpr(len, _id) {
        let id = this._tsid(_id, `wpr(${len})`)

        let high = this.env.shared.high
        let low = this.env.shared.low
        let close = this.env.shared.close

        let hh = this.highest(high, len, id)
        let ll = this.lowest(low, len, id)

        let res = (hh[0] - close[0]) / (hh[0] - ll[0])
        return this.ts(-res * 100 , id)
    }

    year(time) {
        return new Date(time || se.t).getUTCFullYear()
    }

}
