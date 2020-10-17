
// Script std-lib (built-in functions)

import se from './script_engine.js'
import linreg from '../stuff/linreg.js'
import * as u from './script_utils.js'
import Sampler from './sampler.js'

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
                case 'tstf':
                case '_index_tracking':
                case '_tsid':
                case '_i':
                case '_v':
                case '_add_i':
                case 'onchart':
                case 'offchart':
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
        // If an object is actually a timeseries
        if (x != undefined && x === x && x.__id__) {
            // Increase TS buff length
            if (!x.__len__ || i >= x.__len__) {
                x.__len__ = i + BUF_INC
            }
        }
        return x
    }

    // Creates a new time-series & records each x.
    // Return the an array. Id is auto-genrated
    ts(x, _id, _tf) {
        if (_tf) return this.tstf(x, _tf, _id)
        let ts = this.env.tss[_id]
        if (!ts) {
            ts = this.env.tss[_id] = [x]
            ts.__id__ = _id
        } else {
            ts[0] = x
        }
        return ts
    }

    // Creates a new time-series & records each x.
    // Uses Sampler to aggregate the values
    // Return the an array. Id is auto-genrated
    tstf(x, tf, _id) {
        let ts = this.env.tss[_id]
        if (!ts) {
            ts = this.env.tss[_id] = [x]
            ts.__id__ = _id
            ts.__tf__ = u.tf_from_str(tf)
            ts.__fn__ = Sampler('close').bind(ts)
        } else {
            ts.__fn__(x)
        }
        return ts
    }

    // Replace if NaN
    nz(x, v) {
        if (x == undefined || x !== x) {
            return v || 0
        }
        return x
    }

    // Is NaN ?
    na(x) {
        return x == undefined || x !== x
    }

    // Replace with NaN if Infinite
    nf(x, v) {
        if (!isFinite(x)) {
            return v !== undefined ? v : NaN
        }
        return x
    }

    // Math operators on t-series and numbers
    add(x, y, _id) {
        // __id__ means this is a time-series
        let id = this._tsid(_id, `add`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y) ? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 + y0, id, x.__tf__)
    }

    sub(x, y, _id) {
        let id = this._tsid(_id, `sub`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y)? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 - y0, id, x.__tf__)
    }

    mult(x, y, _id) {
        let id = this._tsid(_id, `mult`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y)? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 * y0, id, x.__tf__)
    }

    div(x, y, _id) {
        let id = this._tsid(_id, `div`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y)? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 / y0, id, x.__tf__)
    }

    neg(x, _id) {
        let id = this._tsid(_id, `neg`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        return this.ts(-x0, id, x.__tf__)
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

    // Arnaud Legoux Moving Average
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
        return this.ts(sum / norm, id, src.__tf__)
    }

    asin(x) {
        return Math.asin(x)
    }

    atan(x) {
        return Math.atan(x)
    }

    // Average True Range
    atr(len, _id, _tf) {
        let tfs = _tf || ''
        let id = this._tsid(_id, `atr(${len})`)
        let high = this.env.shared[`high${tfs}`]
        let low = this.env.shared[`low${tfs}`]
        let close = this.env.shared[`close${tfs}`]
        let tr = this.ts(0, id, _tf)
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
        args.pop() // Remove _id
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

    // Bollinger Bands
    bb(src, len, mult, _id) {
        let id = this._tsid(_id, `bb(${len},${mult})`)
        let basis = this.sma(src, len, id)
        let dev = this.stdev(src, len, id)[0] * mult
        return [
            basis,
            this.ts(basis[0] + dev, id + '1', src.__tf__),
            this.ts(basis[0] - dev, id + '2', src.__tf__)
        ]
    }

    // Bollinger Bands Width
    bbw(src, len, mult, _id) {
        let id = this._tsid(_id, `bbw(${len},${mult})`)
        let basis = this.sma(src, len, id)[0]
        let dev = this.stdev(src, len, id)[0] * mult
        return this.ts(2 * dev / basis, id, src.__tf__)
    }

    bool(x) {
        return !!x
    }

    // Commodity Channel Index
    cci(src, len, _id) {
        // TODO: Not exactly precise, but pretty damn close
        let id = this._tsid(_id, `cci(${len})`)
        let ma = this.sma(src, len, id)
        let dev = this.dev(src, len, id)
        let cci = (src[0] - ma[0]) / (0.015 * dev[0])
        return this.ts(cci, id, src.__tf__)
    }

    ceil(x) {
        return Math.ceil(x)
    }

    // x[0] - x[len]
    change(src, len = 1, _id) {
        let id = this._tsid(_id, `change(${len})`)
        return this.ts(src[0] - src[len], id, src.__tf__)
    }

    // Chande Momentum Oscillator
    cmo(src, len, _id) {
        let id = this._tsid(_id, `cmo(${len})`)
        let mom = this.change(src, 1, id)

        let g = this.ts(mom[0] >= 0 ? mom[0] : 0.0, id+"g", src.__tf__)
        let l = this.ts(mom[0] >= 0 ? 0.0 : -mom[0], id+"l", src.__tf__)

        let sm1 = this.sum(g, len, id+'1')[0]
        let sm2 = this.sum(l, len, id+'2')[0]

        return this.ts(100 * (sm1 - sm2) / (sm1 + sm2), id, src.__tf__)
    }

    // Center of Gravity
    cog(src, len, _id) {
        let id = this._tsid(_id, `cmo(${len})`)
        let sum = this.sum(src, len, id)[0]
        let num = 0
        for (var i = 0; i < len; i++) {
            num += src[i] * (i + 1)
        }
        return this.ts(-num / sum, id, src.__tf__)
    }

    // Correlation
    corr() {
        // TODO: this
    }

    cos(x) {
        return Math.cos(x)
    }

    cross(src1, src2, _id) {
        let id = this._tsid(_id, `cross`)
        let x = (src1[0] > src2[0]) !== (src1[1] > src2[1])
        return this.ts(x, id, src1.__tf__)
    }

    crossover(src1, src2, _id) {
        let id = this._tsid(_id, `crossover`)
        let x = (src1[0] > src2[0]) && (src1[1] <= src2[1])
        return this.ts(x, id, src1.__tf__)
    }

    crossunder(src1, src2, _id) {
        let id = this._tsid(_id, `crossunder`)
        let x = (src1[0] < src2[0]) && (src1[1] >= src2[1])
        return this.ts(x, id, src1.__tf__)
    }

    cum(src, _id) {
        let id = this._tsid(_id, `cum`)
        let res = this.ts(0, id, src.__tf__)
        res[0] = this.nz(src[0]) + this.nz(res[1])
        return res
    }

    dayofmonth(time) {
        return new Date(time || se.t).getUTCDate()
    }

    dayofweek(time) {
        return new Date(time || se.t).getUTCDay() + 1
    }

    // Deviation from SMA
    dev(src, len, _id) {
        let id = this._tsid(_id, `dev(${len})`)
        let mean = this.sma(src, len, id)[0]
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum += Math.abs(src[i] - mean)
        }
        return this.ts(sum / len, id, src.__tf__)
    }

    // Directional Movement Index ADX, +DI, -DI
    dmi(len, smooth, _id, _tf) {
        let id = this._tsid(_id, `dmi(${len},${smooth})`)
        let tfs = _tf || ''
        let high = this.env.shared[`high${tfs}`]
        let low = this.env.shared[`low${tfs}`]
        let up = this.change(high, 1, id+'1')[0]
        let down = this.neg(this.change(low, 1, id+'2'), id)[0]

        let plusDM = this.ts(100 * (
            this.na(up) ? NaN :
            (up > down && up > 0 ? up : 0)), id+'3', _tf
        )
        let minusDM = this.ts(100 * (
            this.na(down) ? NaN :
            (down > up && down > 0 ? down : 0)), id+'4', _tf
        )

        let trur = this.rma(this.tr(false, id, _tf), len, id+'5')
        let plus = this.div(
            this.rma(plusDM, len, id+'6'), trur, id+'8')
        let minus = this.div(
            this.rma(minusDM, len, id+'7'), trur, id+'9')
        let sum = this.add(plus, minus, id+'10')[0]
        let adx = this.rma(
            this.ts(100 * Math.abs(plus[0] - minus[0]) /
            (sum === 0 ? 1 : sum), id+'11', _tf),
            smooth, id+'12'
        )
        return [adx, plus, minus]
    }

    // Exponential Moving Average with alpha = 2 / (y + 1)
    ema(src, len, _id) {
        let id = this._tsid(_id, `ema(${len})`)
        let a = 2 / (len + 1)
        let ema = this.ts(0, id, src.__tf__)
        ema[0] = this.na(ema[1]) ?
            this.sma(src, len, id)[0] :
            a * src[0] + (1 - a) * this.nz(ema[1])
        return ema
    }

    exp(x) {
        return Math.exp(x)
    }

    falling(src, len, _id) {
        let id = this._tsid(_id, `falling(${len})`)
        let bot = src[0]
        for (var i = 1; i < len + 1; i++) {
            if (bot >= src[i]) {
                return this.ts(false, id, src.__tf__)
            }
        }
        return this.ts(true, id, src.__tf__)
    }

    fixnan(x) {
        // TODO: this
    }

    /* TODO: think
    skipnan(x, _id) {
        let id = this._tsid(_id, `skipnan()`)
        return this.ts(true, id, src.__tf__)
    }*/

    floor(x) {
        Math.floor(x)
    }

    highest(src, len, _id) {
        let id = this._tsid(_id, `highest(${len})`)
        let high = -Infinity
        for (var i = 0; i < len; i++) {
            if (src[i] > high) high = src[i]
        }
        return this.ts(high, id, src.__tf__)
    }

    highestbars(src, len) {
        // TODO: this
    }

    // Hull Moving Average
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
        return cond ? x : y
    }

    // Keltner Channels
    kc(src, len, mult, use_tr = true, _id, _tf) {

        let id = this._tsid(_id, `kc(${len},${mult},${use_tr})`)
        let tfs = _tf || ''
        let high = this.env.shared[`high${tfs}`]
        let low = this.env.shared[`low${tfs}`]
        let basis = this.ema(src, len, id+'1')

        let range = use_tr ?
            this.tr(false, id+'2', _tf) :
            this.ts(high[0] - low[0], id+'3', src.__tf__)
        let ema = this.ema(range, len, id+'4')

        return [
            basis,
            this.ts(basis[0] + ema[0] * mult, id+'5', src.__tf__),
            this.ts(basis[0] - ema[0] * mult, id+'6', src.__tf__)
        ]
    }

    // Keltner Channels Width
    kcw(src, len, mult, use_tr = true, _id, _tf) {
        let id = this._tsid(_id, `kcw(${len},${mult},${use_tr})`)
        let kc = this.kc(src, len, mult, use_tr, `kcw`, _tf)
        return this.ts((kc[1][0] - kc[2][0]) / kc[0][0], id, src.__tf__)
    }

    // Linear Regression
    linreg(src, len, offset = 0, _id) {
        let id = this._tsid(_id, `linreg(${len})`)

        src.__len__ = Math.max(src.__len__ || 0, len)
        let lr = linreg(src, len, offset)

        return this.ts(lr, id, src.__tf__)
    }

    log(x) {
        return Math.log(x)
    }

    log10(x) {
        return Math.log10(x)
    }

    lowest(src, len, _id) {
        let id = this._tsid(_id, `lowest(${len})`)
        let low = Infinity
        for (var i = 0; i < len; i++) {
            if (src[i] < low) low = src[i]
        }
        return this.ts(low, id, src.__tf__)
    }

    lowestbars(src, len) {
        // TODO: this
    }

    // Moving Average Convergence/Divergence
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
        args.pop() // Remove _id
        return Math.max(...args)
    }

    // max_bars_back
    buffsize(src, len) {
        // TODO: this
    }

    // Money Flow Index
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
        return this.ts(res, id, src.__tf__)
    }

    min(...args) {
        args.pop() // Remove _id
        return Math.min(...args)
    }

    minute() {
        return new Date(time || se.t).getUTCMinutes()
    }

    // Momentum
    mom(src, len, _id) {
        let id = this._tsid(_id, `mom(${len})`)
        return this.ts(src[0] - src[len], id, src.__tf__)
    }

    month(time) {
        return new Date(time || se.t).getUTCMonth()
    }

    // Display data point as the main chart
    chart() {
        // TODO: this
    }

    // Display data point on the main chart
    onchart(x, name, sett = {}, _id) {
        let off = 0
        name = name || u.get_fn_id('Onchart', _id)
        if (x && x.__id__) {
            off = x.__offset__ || 0
            x = x[0]
        }
        if (Array.isArray(x) && x[0] && x[0].__id__) {
            off = x[0].__offset__ || 0
            x = x.map(x => x[0])
        }
        if (!this.env.onchart[name]) {
            let type = sett.type
            delete sett.type
            sett.$synth = true
            sett.skipNaN = true
            let post = Array.isArray(x) ? 's': ''
            this.env.onchart[name] = Object.assign({
                name: name,
                type: type || 'Spline' + post,
                data: [],
                settings: sett
            }, sett)
        }
        off *= se.tf
        let v = Array.isArray(x) ?
            [se.t + off, ...x] : [se.t + off, x]
        this.env.onchart[name].data.push(v)
    }

    // Create a new offchart overlay and put
    // the point there
    offchart(x, name, sett = {}, _id) {
        name = name || u.get_fn_id('Offchart', _id)
        let off = 0
        if (x && x.__id__) {
            off = x.__offset__ || 0
            x = x[0]
        }
        if (Array.isArray(x) && x[0] && x[0].__id__) {
            off = x[0].__offset__ || 0
            x = x.map(x => x[0])
        }
        if (!this.env.offchart[name]) {
            let type = sett.type
            delete sett.type
            sett.$synth = true
            sett.skipNaN = true
            let post = Array.isArray(x) ? 's': ''
            this.env.offchart[name] = Object.assign({
                name: name,
                type: type || 'Spline' + post,
                data: [],
                settings: sett
            }, sett)
        }
        off *= se.tf
        let v = Array.isArray(x) ?
            [se.t + off, ...x] : [se.t + off, x]
        this.env.offchart[name].data.push(v)
    }

    // Returns true when the candle(<tf>) is being closed
    onclose(tf) {
        return (se.t + se.tf) % u.tf_from_str(tf) === 0
    }

    // Send settings update
    // (can be called from init(), update() or post())
    settings(upd) {
        this.env.send_modify({ settings: upd })
    }

    offset(src, num, _id) {
        if (src.__id__) {
            src.__offset__ = num
            return src
        }
        let id = this._tsid(_id, `offset(${num})`)
        let out = ts(src, id)
        out.__offset__ = num
        return out
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

    pivothigh(src, left, right, _id) {
        let id = this._tsid(_id, `pivothigh(${left},${right})`)

        let len = left + right + 1
        let top = src[right]
        for (var i = 0; i < len; i++) {
            if (top <= src[i] && i !== right) {
                return this.ts(NaN, id, src.__tf__)
            }
        }
        return this.ts(top, id, src.__tf__)
    }

    pivotlow(src, left, right, _id) {
        let id = this._tsid(_id, `pivotlow(${left},${right})`)

        let len = left + right + 1
        let bot = src[right]
        for (var i = 0; i < len; i++) {
            if (bot >= src[i] && i !== right) {
                return this.ts(NaN, id, src.__tf__)
            }
        }
        return this.ts(bot, id, src.__tf__)
    }

    pow(x) {
        return Math.pow(x)
    }

    rising(src, len, _id) {
        let id = this._tsid(_id, `rising(${len})`)
        let top = src[0]
        for (var i = 1; i < len + 1; i++) {
            if (top <= src[i]) {
                return this.ts(false, id, src.__tf__)
            }
        }
        return this.ts(true, id, src.__tf__)
    }

    // Exponentially MA with alpha = 1 / length
    // Used in RSI
    rma(src, len, _id) {
        let id = this._tsid(_id, `rma(${len})`)
        let a = len
        let sum = this.ts(0, id, src.__tf__)
        sum[0] = this.na(sum[1]) ?
            this.sma(src, len, id)[0] :
            (src[0] + (a - 1) * this.nz(sum[1])) / a
        return sum
    }

    // Rate of Change
    roc(src, len, _id) {
        let id = this._tsid(_id, `roc(${len})`)
        return this.ts(
            100 * (src[0] - src[len]) / src[len], id, src.__tf__
        )
    }

    round(x) {
        return Math.round(x)
    }

    // Relative Strength Index
    rsi(x, y, _id) {
        // Check if y is a timeseries
        if (!this.na(y) && y.__id__) {
            var id = this._tsid(_id, `rsi(x,y)`)
            var rsi = 100 - 100 / (1 + this.div(x, y, id)[0])
        } else {
            var id = this._tsid(_id, `rsi(${y})`)
            let ch = this.change(x, 1, _id)[0]
            let pc = this.ts(Math.max(ch, 0), id+'1', x.__tf__)
            let nc = this.ts(-Math.min(ch, 0), id+'2', x.__tf__)
            let up = this.rma(pc, y, id+'3')[0]
            let down = this.rma(nc, y, id+'4')[0]
            var rsi = down === 0 ? 100 : (
                up === 0 ? 0 : (100 - (100 / (1 + up / down)))
            )
        }
        return this.ts(rsi, id+'5', x.__tf__)
    }

    // Parabolic SAR
    sar(start, inc, max, _id, _tf) {
        // Source: Parabolic SAR by imuradyan
        // TODO: simplify the code
        // TODO: fix the custom TF mode
        let id = this._tsid(_id, `sar(${start},${inc},${max})`)
        let tfs = _tf || ''
        let high = this.env.shared[`high${tfs}`]
        let low = this.env.shared[`low${tfs}`]
        let close = this.env.shared[`close${tfs}`]

        let minTick = 0 //1e-7
        let out = this.ts(undefined, id+'1', _tf)
        let pos = this.ts(undefined, id+'2', _tf)
        let maxMin = this.ts(undefined, id+'3', _tf)
        let acc = this.ts(undefined, id+'4', _tf)
        let n = _tf ? out.__len__ - 1 : se.iter
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

    // Simple Moving Average
    sma(src, len, _id) {
        let id = this._tsid(_id, `sma(${len})`)
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum = sum + src[i]
        }
        return this.ts(sum / len, id, src.__tf__)
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
        return this.ts(Math.sqrt(sqd / len), id, src.__tf__)
    }

    // Stochastic
    stoch(src, high, low, len, _id) {
        let id = this._tsid(_id, `sum(${len})`)
        let x = 100 * (src[0] - this.lowest(low, len)[0])
        let y = this.highest(high, len)[0] - this.lowest(low, len)[0]
        return this.ts(x / y, id, src.__tf__)
    }

    sum(src, len, _id) {
        let id = this._tsid(_id, `sum(${len})`)
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum = sum + src[i]
        }
        return this.ts(sum, id, src.__tf__)
    }

    // Supertrend
    supertrend(factor, atrlen, _id, _tf) {
        let id = this._tsid(_id, `supertrend(${factor},${atrlen})`)
        let tfs = _tf || ''
        let high = this.env.shared[`high${tfs}`]
        let low = this.env.shared[`low${tfs}`]
        let close = this.env.shared[`close${tfs}`]
        let hl2 = (high[0] + low[0]) * 0.5

        let atr = factor * this.atr(atrlen, id+'1', _tf)[0]

        let ls = this.ts(hl2 - atr, id+'2', _tf)
        let ls1 = this.nz(ls[1], ls[0])
        ls[0] = close[1] > ls1 ? Math.max(ls[0], ls1) : ls[0]

        let ss = this.ts(hl2 + atr, id+'3', _tf)
        let ss1 = this.nz(ss[1], ss)
        ss[0] = close[1] < ss1 ? Math.min(ss[0], ss1) : ss[0]

        let dir = this.ts(1, id+'4', _tf)
        dir[0] = this.nz(dir[1], dir[0])
        dir[0] = dir[0] === -1 && close[0] > ss1 ? 1 :
            (dir[0] === 1 && close[0] < ls1 ? -1 : dir[0])

        let plot = this.ts(dir[0] === 1 ? ls[0] : ss[0], id+'5', _tf)
        return [plot, this.neg(dir, id+'6')]
    }

    // Symmetrically Weighted Moving Average
    swma(src, _id) {
        let id = this._tsid(_id, `swma`)
        let sum = src[3] * this.SWMA[0] + src[2] * this.SWMA[1] +
                  src[1] * this.SWMA[2] + src[0] * this.SWMA[3]
        return this.ts(sum, id, src.__tf__)
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

    // True Range
    tr(fixnan = false, _id, _tf) {
        let id = this._tsid(_id, `tr(${fixnan})`)
        let tfs = _tf || ''
        let high = this.env.shared[`high${tfs}`]
        let low = this.env.shared[`low${tfs}`]
        let close = this.env.shared[`close${tfs}`]
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

        return this.ts(res, id, _tf)

    }

    // True strength index
    tsi(src, short, long, _id) {
        let id = this._tsid(_id, `tsi(${short},${long})`)
        let m = this.change(src, 1, id+'0')
        let m_abs = this.ts(Math.abs(m[0]), id+'1', src.__tf__)
        let tsi = (
            this.ema(this.ema(m, long, id+'1'), short, id+'2')[0] /
            this.ema(this.ema(m_abs, long, id+'3'), short, id+'4')[0]
        )
        return this.ts(tsi, id, src.__tf__)
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

    // Volume Weighted Moving Average
    vwma(src, len, _id) {
        let id = this._tsid(_id, `vwma(${len})`)
        let vol = this.env.shared.vol
        let sxv = this.ts(src[0] * vol[0], id+'1', src.__tf__)
        let res =
            this.sma(sxv, len, id+'2')[0] /
            this.sma(vol, len, id+'3')[0]
        return this.ts(res, id+'4', src.__tf__)
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
        return this.ts(sum / norm, id, src.__tf__)
    }

    // Williams %R
    wpr(len, _id, _tf) {
        let id = this._tsid(_id, `wpr(${len})`)
        let tfs = _tf || ''
        let high = this.env.shared[`high${tfs}`]
        let low = this.env.shared[`low${tfs}`]
        let close = this.env.shared[`close${tfs}`]

        let hh = this.highest(high, len, id)
        let ll = this.lowest(low, len, id)

        let res = (hh[0] - close[0]) / (hh[0] - ll[0])
        return this.ts(-res * 100 , id, _tf)
    }

    year(time) {
        return new Date(time || se.t).getUTCFullYear()
    }

}
