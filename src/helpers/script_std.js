
// Script std-lib (built-in functions)

import se from './script_engine.js'
import linreg from '../stuff/linreg.js'
import * as u from './script_utils.js'
import Sampler from './sampler.js'
import { Sym, ARR, TSS, NUM } from './symbol.js'

const BUF_INC = 5

export default class ScriptStd {

    constructor(env) {
        this.env = env
        this.se = se

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
                case 'sample':
                case '_index_tracking':
                case '_tsid':
                case '_i':
                case '_v':
                case '_add_i':
                case 'chart':
                case 'onchart':
                case 'offchart':
                case 'sym':
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

    /**
     * Creates a new time-series & records each x.
     * Returns  an array. Id is auto-genrated
     * @param {*} x - A variable to sample from
     * @return {TS} - New time-series
     */
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

    /**
     * Creates a new time-series & records each x.
     * Uses Sampler to aggregate the values
     * Return the an array. Id is auto-genrated
     * @param {*} x - A variable to sample from
     * @param {(number|string)} tf - Timeframe in ms or as a string
     * @return {TS} - New time-series
     */
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

    /**
     * Creates a new custom sampler.
     * Return the an array. Id is auto-genrated
     * @param {*} x - A variable to sample from
     * @param {string} type - Sampler type
     * @param {(number|string)} tf - Timeframe in ms or as a string
     * @return {TS} - New time-series
     */
    sample(x, type, tf, _id) {
        let ts = this.env.tss[_id]
        if (!ts) {
            ts = this.env.tss[_id] = [x]
            ts.__id__ = _id
            ts.__tf__ = u.tf_from_str(tf)
            ts.__fn__ = Sampler(type).bind(ts)
        } else {
            ts.__fn__(x)
        }
        return ts
    }

    /**
     * Replaces the variable if it's NaN
     * @param {*} x - The variable
     * @param {*} [v] - A value to replace with
     * @return {*} - New value
     */
    nz(x, v) {
        if (x == undefined || x !== x) {
            return v || 0
        }
        return x
    }

    /**
     * Is the variable NaN ?
     * @param {*} x - The variable
     * @return {boolean} - New value
     */
    na(x) {
        return x == undefined || x !== x
    }

    /** Replaces the var with NaN if Infinite
     * @param {*} x - The variable
     * @param {*} [v] - A value to replace with
     * @return {*} - New value
     */
    nf(x, v) {
        if (!isFinite(x)) {
            return v !== undefined ? v : NaN
        }
        return x
    }

    // Math operators on t-series and numbers

    /** Adds values / time-series
     * @param {(TS|*)} x - First input
     * @param {(TS|*)} y - Second input
     * @return {TS} - New time-series
     */
    add(x, y, _id) {
        // __id__ means this is a time-series
        let id = this._tsid(_id, `add`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y) ? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 + y0, id, x.__tf__)
    }

    /** Subtracts values / time-series
     * @param {(TS|*)} x - First input
     * @param {(TS|*)} y - Second input
     * @return {TS} - New time-series
     */
    sub(x, y, _id) {
        let id = this._tsid(_id, `sub`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y)? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 - y0, id, x.__tf__)
    }

    /** Multiplies values / time-series
     * @param {(TS|*)} x - First input
     * @param {(TS|*)} y - Second input
     * @return {TS} - New time-series
     */
    mult(x, y, _id) {
        let id = this._tsid(_id, `mult`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y)? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 * y0, id, x.__tf__)
    }

    /** Divides values / time-series
     * @param {(TS|*)} x - First input
     * @param {(TS|*)} y - Second input
     * @return {TS} - New time-series
     */
    div(x, y, _id) {
        let id = this._tsid(_id, `div`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        let y0 = this.na(y)? NaN : (y.__id__ ? y[0] : y)
        return this.ts(x0 / y0, id, x.__tf__)
    }

    /** Returns a negative value / time-series
     * @param {(TS|*)} x - Input
     * @return {TS} - New time-series
     */
    neg(x, _id) {
        let id = this._tsid(_id, `neg`)
        let x0 = this.na(x) ? NaN : (x.__id__ ? x[0] : x)
        return this.ts(-x0, id, x.__tf__)
    }

    /** Absolute value
     * @param {number} x - Input
     * @return {number} - Absolute value
     */
    abs(x) {
        return Math.abs(x)
    }

    /** Arccosine function
     * @param {number} x - Input
     * @return {number} - Arccosine of x
     */
    acos(x) {
        return Math.acos(x)
    }

    /** Emits an event to DataCube
     * @param {string} type - Signal type
     * @param {*} data - Signal data
     */
    signal(type, data = {}) {
        if (this.se.shared.event !== 'update') return
        this.se.send('script-signal', { type, data })
    }

    /** Emits an event if cond === true
     * @param {(boolean|TS)} cond - The condition
     * @param {string} type - Signal type
     * @param {*} data - Signal data
     */
    signalif(cond, type, data = {}) {
        if (this.se.shared.event !== 'update') return
        if (cond && cond.__id__) cond = cond[0]
        if (cond) {
            this.se.send('script-signal', { type, data })
        }
    }

    /** Arnaud Legoux Moving Average
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} offset - Offset
     * @param {number} sigma - Sigma
     * @return {TS} - New time-series
     */
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

    /** Arcsine function
     * @param {number} x - Input
     * @return {number} - Arcsine of x
     */
    asin(x) {
        return Math.asin(x)
    }

    /** Arctangent function
     * @param {number} x - Input
     * @return {number} - Arctangent of x
     */
    atan(x) {
        return Math.atan(x)
    }

    /** Average True Range
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
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

    /** Average of arguments
     * @param {...number} args - Numeric values
     * @return {number}
     */
    avg(...args) {
        args.pop() // Remove _id
        let sum = 0
        for (var i = 0; i < args.length; i++) {
            sum += args[i]
        }
        return sum / args.length
    }

    /** Candles since the event occured (cond === true)
     * @param {(boolean|TS)} cond - the condition
     */
    since(cond, _id) {
        let id = this._tsid(_id, `since()`)
        if (cond && cond.__id__) cond = cond[0]
        let s = this.ts(undefined, id)
        s[0] = cond ? 0 : s[1] + 1
        return s
    }

    /** Bollinger Bands
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} mult - Multiplier
     * @return {TS[]} - Array of new time-series (3 bands)
     */
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

    /** Bollinger Bands Width
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} mult - Multiplier
     * @return {TS} - New time-series
     */
    bbw(src, len, mult, _id) {
        let id = this._tsid(_id, `bbw(${len},${mult})`)
        let basis = this.sma(src, len, id)[0]
        let dev = this.stdev(src, len, id)[0] * mult
        return this.ts(2 * dev / basis, id, src.__tf__)
    }

    /** Converts the variable to Boolean
     * @param {number} x The variable
     * @return {number}
     */
    bool(x) {
        return !!x
    }

    /** Commodity Channel Index
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    cci(src, len, _id) {
        // TODO: Not exactly precise, but pretty damn close
        let id = this._tsid(_id, `cci(${len})`)
        let ma = this.sma(src, len, id)
        let dev = this.dev(src, len, id)
        let cci = (src[0] - ma[0]) / (0.015 * dev[0])
        return this.ts(cci, id, src.__tf__)
    }

    /** Shortcut for Math.ceil()
     * @param {number} x The variable
     * @return {number}
     */
    ceil(x) {
        return Math.ceil(x)
    }

    /** Change: x[0] - x[len]
     * @param {TS} src - Input
     * @param {number} [len] - Length
     * @return {TS} - New time-series
     */
    change(src, len = 1, _id) {
        let id = this._tsid(_id, `change(${len})`)
        return this.ts(src[0] - src[len], id, src.__tf__)
    }

    /** Chande Momentum Oscillator
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    cmo(src, len, _id) {
        let id = this._tsid(_id, `cmo(${len})`)
        let mom = this.change(src, 1, id)

        let g = this.ts(mom[0] >= 0 ? mom[0] : 0.0, id+"g", src.__tf__)
        let l = this.ts(mom[0] >= 0 ? 0.0 : -mom[0], id+"l", src.__tf__)

        let sm1 = this.sum(g, len, id+'1')[0]
        let sm2 = this.sum(l, len, id+'2')[0]

        return this.ts(100 * (sm1 - sm2) / (sm1 + sm2), id, src.__tf__)
    }

    /** Center of Gravity
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
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

    /** Cosine function
     * @param {number} x - Input
     * @return {number} - Cosine of x
     */
    cos(x) {
        return Math.cos(x)
    }

    /** When one time-series crosses another
     * @param {TS} src1 - TS1
     * @param {TS} src2 - TS2
     * @return {TS} - New time-series
     */
    cross(src1, src2, _id) {
        let id = this._tsid(_id, `cross`)
        let x = (src1[0] > src2[0]) !== (src1[1] > src2[1])
        return this.ts(x, id, src1.__tf__)
    }

    /** When one time-series goes over another one
     * @param {TS} src1 - TS1
     * @param {TS} src2 - TS2
     * @return {TS} - New time-series
     */
    crossover(src1, src2, _id) {
        let id = this._tsid(_id, `crossover`)
        let x = (src1[0] > src2[0]) && (src1[1] <= src2[1])
        return this.ts(x, id, src1.__tf__)
    }

    /** When one time-series goes under another one
     * @param {TS} src1 - TS1
     * @param {TS} src2 - TS2
     * @return {TS} - New time-series
     */
    crossunder(src1, src2, _id) {
        let id = this._tsid(_id, `crossunder`)
        let x = (src1[0] < src2[0]) && (src1[1] >= src2[1])
        return this.ts(x, id, src1.__tf__)
    }

    /** Sum of all elements of src
     * @param {TS} src1 - Input
     * @return {TS} - New time-series
     */
    cum(src, _id) {
        let id = this._tsid(_id, `cum`)
        let res = this.ts(0, id, src.__tf__)
        res[0] = this.nz(src[0]) + this.nz(res[1])
        return res
    }

    /** Day of month, literally
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Day
     */
    dayofmonth(time) {
        return new Date(time || se.t).getUTCDate()
    }

    /** Day of week, literally
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Day
     */
    dayofweek(time) {
        return new Date(time || se.t).getUTCDay() + 1
    }

    /** Deviation from SMA
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    dev(src, len, _id) {
        let id = this._tsid(_id, `dev(${len})`)
        let mean = this.sma(src, len, id)[0]
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum += Math.abs(src[i] - mean)
        }
        return this.ts(sum / len, id, src.__tf__)
    }

    /** Directional Movement Index ADX, +DI, -DI
     * @param {number} len - Length
     * @param {number} smooth - Smoothness
     * @return {TS} - New time-series
     */
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

    /** Exponential Moving Average with alpha = 2 / (y + 1)
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    ema(src, len, _id) {
        let id = this._tsid(_id, `ema(${len})`)
        let a = 2 / (len + 1)
        let ema = this.ts(0, id, src.__tf__)
        ema[0] = this.na(ema[1]) ?
            this.sma(src, len, id)[0] :
            a * src[0] + (1 - a) * this.nz(ema[1])
        return ema
    }

    /** Shortcut for Math.exp()
     * @param {number} x The variable
     * @return {number}
     */
    exp(x) {
        return Math.exp(x)
    }

    /** Test if "src" TS is falling for "len" candles
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
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

    /** For a given series replaces NaN values with
     * previous nearest non-NaN value
     * @param {TS} src - Input time-series
     * @return {TS}
     */
    fixnan(src) {
        if (this.na(src[0])) {
            for (var i = 1; i < src.length; i++) {
                if (!this.na(src[i])) {
                    src[0] = src[i]
                    break
                }
            }
        }
        return src
    }

    /* TODO: think
    skipnan(x, _id) {
        let id = this._tsid(_id, `skipnan()`)
        return this.ts(true, id, src.__tf__)
    }*/

    /** Shortcut for Math.floor()
     * @param {number} x The variable
     * @return {number}
     */
    floor(x) {
        Math.floor(x)
    }

    /** Highest value for a given number of candles back
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    highest(src, len, _id) {
        let id = this._tsid(_id, `highest(${len})`)
        let high = -Infinity
        for (var i = 0; i < len; i++) {
            if (src[i] > high) high = src[i]
        }
        return this.ts(high, id, src.__tf__)
    }

    /** Highest value offset for a given number of bars back
     * @param {TS} src - Input
     * @param {number} len - Length
     */
    highestbars(src, len, _id) {
        let id = this._tsid(_id, `highestbars(${len})`)
        let high = -Infinity
        let hi = 0
        for (var i = 0; i < len; i++) {
            if (src[i] > high) { high = src[i], hi = i }
        }
        return this.ts(-hi, id, src.__tf__)
    }

    /** Hull Moving Average
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    hma(src, len, _id) {
        let id = this._tsid(_id, `hma(${len})`)
        let len2 = Math.floor(len/2)
        let len3 = Math.round(Math.sqrt(len))

        let a = this.mult(this.wma(src, len2, id+'1'), 2, id)
        let b = this.wma(src, len, id+'2')
        let delt = this.sub(a, b, id+'3')

        return this.wma(delt, len3, id+'4')
    }

    /** Returns hours of a given timestamp
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Hour
     */
    hour(time) {
        return new Date(time || se.t).getUTCHours()
    }

    /** Returns x or y depending on the condition
     * @param {(boolean|TS)} cond - Condition
     * @param {*} x - Frist value
     * @param {*} y - Second value
     * @return {*}
     */
    iff(cond, x, y) {
        if (cond && cond.__id__) cond = cond[0]
        return cond ? x : y
    }

    /** Keltner Channels
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} mult - Multiplier
     * @param {boolean} [use_tr] - Use true range
     * @return {TS[]} - Array of new time-series (3 bands)
     */
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

    /** Keltner Channels Width
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} mult - Multiplier
     * @param {boolean} [use_tr] - Use true range
     * @return {TS} - New time-series
     */
    kcw(src, len, mult, use_tr = true, _id, _tf) {
        let id = this._tsid(_id, `kcw(${len},${mult},${use_tr})`)
        let kc = this.kc(src, len, mult, use_tr, `kcw`, _tf)
        return this.ts((kc[1][0] - kc[2][0]) / kc[0][0], id, src.__tf__)
    }

    /** Linear Regression
     * @param {TS} src - Input
     * @param {number} len - Length
     * @param {number} offset - Offset
     * @return {TS} - New time-series
     */
    linreg(src, len, offset = 0, _id) {
        let id = this._tsid(_id, `linreg(${len})`)

        src.__len__ = Math.max(src.__len__ || 0, len)
        let lr = linreg(src, len, offset)

        return this.ts(lr, id, src.__tf__)
    }

    /** Shortcut for Math.log()
     * @param {number} x The variable
     * @return {number}
     */
    log(x) {
        return Math.log(x)
    }

    /** Shortcut for Math.log10()
     * @param {number} x The variable
     * @return {number}
     */
    log10(x) {
        return Math.log10(x)
    }

    /** Lowest value for a given number of candles back
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    lowest(src, len, _id) {
        let id = this._tsid(_id, `lowest(${len})`)
        let low = Infinity
        for (var i = 0; i < len; i++) {
            if (src[i] < low) low = src[i]
        }
        return this.ts(low, id, src.__tf__)
    }

    /** Lowest value offset for a given number of bars back
     * @param {TS} src - Input
     * @param {number} len - Length
     */
    lowestbars(src, len, _id) {
        let id = this._tsid(_id, `lowestbars(${len})`)
        let low = Infinity
        let li = 0
        for (var i = 0; i < len; i++) {
            if (src[i] < low) { low = src[i], li = i }
        }
        return this.ts(-li, id, src.__tf__)
    }

    /** Moving Average Convergence/Divergence
     * @param {TS} src - Input
     * @param {number} fast - Fast EMA
     * @param {number} slow - Slow EMA
     * @param {number} sig - Signal
     * @return {TS[]} - [macd, signal, hist]
     */
    macd(src, fast, slow, sig, _id) {
        let id = this._tsid(_id, `macd(${fast}${slow}${sig})`)
        let fast_ma = this.ema(src, fast, id+'1')
        let slow_ma = this.ema(src, slow, id+'2')
        let macd = this.sub(fast_ma, slow_ma, id+'3')
        let signal = this.ema(macd, sig, id+'4')
        let hist = this.sub(macd, signal, id+'5')
        return [macd, signal, hist]
    }

    /** Max of arguments
     * @param {...number} args - Numeric values
     * @return {number}
     */
    max(...args) {
        args.pop() // Remove _id
        return Math.max(...args)
    }

    /** Sends update to some overlay / main chart
     * @param {string} id - Overlay id
     * @param {Object} fields - Fields to be overwritten
     */
    modify(id, fields) {
        se.send('modify-overlay', { uuid:id, fields })
    }

    /** Sets the reverse buffer size for a given
     * time-series (default = 5, grows on demand)
     * @param {TS} src - Input
     * @param {number} len - New length
     */
    buffsize(src, len) {
        src.__len__ = len
    }

    /** Money Flow Index
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
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

    /** Min of arguments
     * @param {...number} args - Numeric values
     * @return {number}
     */
    min(...args) {
        args.pop() // Remove _id
        return Math.min(...args)
    }

    /** Returns minutes of a given timestamp
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Hour
     */
    minute(time) {
        return new Date(time || se.t).getUTCMinutes()
    }

    /** Momentum
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    mom(src, len, _id) {
        let id = this._tsid(_id, `mom(${len})`)
        return this.ts(src[0] - src[len], id, src.__tf__)
    }

    /** Month
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Day
     */
    month(time) {
        return new Date(time || se.t).getUTCMonth()
    }

    // Display data point as the main chart
    chart() {
        // TODO: this
    }

    // TODO: optionally enable scripts for $synth ovs
    // TODO: add indexBased option
    /** Display data point onchart
     * (create a new overlay in DataCube)
     * @param {(TS|TS[]|*)} x - Data point / TS / array of TS
     * @param {string} [name] - Overlay name
     * @param {Object} [sett] - Object with settings & OV type
     */
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
            this.env.onchart[name] = {
                name: name,
                type: type || 'Spline' + post,
                data: [],
                settings: sett,
                scripts: false,
                grid: sett.grid || {}
            }
        }
        off *= se.tf
        let v = Array.isArray(x) ?
            [se.t + off, ...x] : [se.t + off, x]
        u.update(this.env.onchart[name].data, v)
    }

    /** Display data point offchart
     * (create a new overlay in DataCube)
     * @param {(TS|TS[]|*)} x - Data point / TS / array of TS
     * @param {string} [name] - Overlay name
     * @param {Object} [sett] - Object with settings & OV type
     */
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
            this.env.offchart[name] = {
                name: name,
                type: type || 'Spline' + post,
                data: [],
                settings: sett,
                scripts: false,
                grid: sett.grid || {}
            }
        }
        off *= se.tf
        let v = Array.isArray(x) ?
            [se.t + off, ...x] : [se.t + off, x]
        u.update(this.env.offchart[name].data, v)
    }


    /** Returns true when the candle(<tf>) is being closed
     * (create a new overlay in DataCube)
     * @param {(number|string)} tf - Timeframe in ms or as a string
     * @return {boolean}
     */
    onclose(tf) {
        if (!this.env.shared.onclose) return false
        if (!tf) tf = se.tf
        return (se.t + se.tf) % u.tf_from_str(tf) === 0
    }

    /** Sends settings update
     * (can be called from init(), update() or post())
     * @param {Object} upd - Settings update (object to merge)
     */
    settings(upd) {
        this.env.send_modify({ settings: upd })
        Object.assign(this.env.src.sett, upd)
    }

    /** Shifts TS left or right by "num" candles
     * @param {number} num - Offset measured in candles
     * @return {TS} - New / existing time-series
     */
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

    /** The current time
     * @return {number} - timestamp
     */
    now() {
        return new Date().getTime()
    }

    percentrank() {
        // TODO: this
    }

    /** Returns price of the pivot high point
     * Tip: works best with `offset` function
     * @param {TS} src - Input
     * @param {number} left - left threshold, candles
     * @param {number} right - right threshold, candles
     * @return {TS} - New time-series
     */
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

    /** Returns price of the pivot low point
     * Tip: works best with `offset` function
     * @param {TS} src - Input
     * @param {number} left - left threshold, candles
     * @param {number} right - right threshold, candles
     * @return {TS} - New time-series
     */
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

    /** Shortcut for Math.pow()
     * @param {number} x The variable
     * @return {number}
     */
    pow(x) {
        return Math.pow(x)
    }

    /** Test if "src" TS is rising for "len" candles
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
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

    /** Exponentially MA with alpha = 1 / length
     * Used in RSI
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    rma(src, len, _id) {
        let id = this._tsid(_id, `rma(${len})`)
        let a = len
        let sum = this.ts(0, id, src.__tf__)
        sum[0] = this.na(sum[1]) ?
            this.sma(src, len, id)[0] :
            (src[0] + (a - 1) * this.nz(sum[1])) / a
        return sum
    }

    /** Rate of Change
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    roc(src, len, _id) {
        let id = this._tsid(_id, `roc(${len})`)
        return this.ts(
            100 * (src[0] - src[len]) / src[len], id, src.__tf__
        )
    }

    /** Shortcut for Math.round()
     * @param {number} x The variable
     * @return {number}
     */
    round(x) {
        return Math.round(x)
    }

    /** Relative Strength Index
     * @param {TS} x - First Input
     * @param {number|TS} y - Second Input
     * @return {TS} - New time-series
     */
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

    /** Parabolic SAR
     * @param {number} start - Start
     * @param {number} inc - Increment
     * @param {number} max - Maximum
     * @return {TS} - New time-series
     */
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

    /** Returns seconds of a given timestamp
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Hour
     */
    second(time) {
        return new Date(time || se.t).getUTCSeconds()
    }

    /** Shortcut for Math.sing()
     * @param {number} x The variable
     * @return {number}
     */
    sign(x) {
        return Math.sign(x)
    }

    /** Sine function
     * @param {number} x The variable
     * @return {number}
     */
    sin(x) {
        return Math.sin(x)
    }

    /** Simple Moving Average
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    sma(src, len, _id) {
        let id = this._tsid(_id, `sma(${len})`)
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum = sum + src[i]
        }
        return this.ts(sum / len, id, src.__tf__)
    }

    /** Shortcut for Math.sqrt()
     * @param {number} x The variable
     * @return {number}
     */
    sqrt(x) {
        return Math.sqrt(x)
    }

    /** Standard deviation
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    stdev(src, len, _id) {

        let sumf = (x, y) => {
            let res = x + y
            return res
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

    /** Stochastic
     * @param {TS} src - Input
     * @param {TS} high - TS of high
     * @param {TS} low - TS of low
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    stoch(src, high, low, len, _id) {
        let id = this._tsid(_id, `sum(${len})`)
        let x = 100 * (src[0] - this.lowest(low, len)[0])
        let y = this.highest(high, len)[0] - this.lowest(low, len)[0]
        return this.ts(x / y, id, src.__tf__)
    }

    /** Returns the sliding sum of last "len" values of the source
     * @param {TS} src - Input
     * @param {number} len - Length
     * @return {TS} - New time-series
     */
    sum(src, len, _id) {
        let id = this._tsid(_id, `sum(${len})`)
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum = sum + src[i]
        }
        return this.ts(sum, id, src.__tf__)
    }

    /** Supertrend Indicator
     * @param {number} factor - ATR multiplier
     * @param {number} atrlen - Length of ATR
     * @return {TS[]} - Supertrend line and direction of trend
     */
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

    /** Symmetrically Weighted Moving Average
     * @param {TS} src - Input
     * @return {TS} - New time-series
     */
    swma(src, _id) {
        let id = this._tsid(_id, `swma`)
        let sum = src[3] * this.SWMA[0] + src[2] * this.SWMA[1] +
                  src[1] * this.SWMA[2] + src[0] * this.SWMA[3]
        return this.ts(sum, id, src.__tf__)
    }

    /** Creates a new Symbol.
     * @param {*} x - Something, depends on arg variation
     * @param {*} y - Something, depends on arg variation
     * @return {Sym}
     * Argument variations:
     * <data>(Array), [<params>(Object)]
     * <ts>(TS), [<params>(Object)]
     * <point>(Number), [<params>(Object)]
     * <tf>(String) 1m, 5m, 1H, etc. (uses main OHLCV)
     * Params object: {
     *  id: <String>,
     *  tf: <String|Number>,
     *  aggtype: <String> (TODO: Type of aggregation)
     *  format: <String> (Data format, e.g. "time:price:vol")
     *  window: <String|Number> (Aggregation window)
     *  main <true|false> (Use as the main chart)
     * }
     */
    sym(x, y = {}, _id) {
        let id = y.id || this._tsid(_id, `sym`)
        y.id = id
        if (this.env.syms[id]) {
            this.env.syms[id].update(x)
            return this.env.syms[id]
        }

        switch(typeof x) {
            case 'object':
                var sym = new Sym(x, y)
                this.env.syms[id] = sym
                if (x.__id__) {
                    sym.data_type = TSS
                } else {
                    sym.data_type = ARR
                }

                break
            case 'number':
                sym = new Sym(null, y)
                sym.data_type = NUM
                break
            case 'string':
                y.tf = x
                sym = new Sym(se.data.ohlcv.data, y)
                sym.data_type = ARR
                break
        }

        this.env.syms[id] = sym
        return sym
    }

    /** Tangent function
     * @param {number} x The variable
     * @return {number}
     */
    tan(x) {
        return Math.tan(x)
    }

    time(res, sesh) {
        // TODO: this
    }

    timestamp() {
        // TODO: this
    }

    /** True Range
     * @param {TS} fixnan - Fix NaN values
     * @return {TS} - New time-series
     */
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

    /** True strength index
     * @param {TS} src - Input
     * @param {number} short - Short length
     * @param {number} long - Long length
     * @return {TS} - New time-series
     */
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

    variance(src, len) {
        // TODO: this
    }

    vwap(src) {
        // TODO: this
    }

    /** Volume Weighted Moving Average
     * @param {TS} src - Input
     * @param {number} len - length
     * @return {TS} - New time-series
     */
    vwma(src, len, _id) {
        let id = this._tsid(_id, `vwma(${len})`)
        let vol = this.env.shared.vol
        let sxv = this.ts(src[0] * vol[0], id+'1', src.__tf__)
        let res =
            this.sma(sxv, len, id+'2')[0] /
            this.sma(vol, len, id+'3')[0]
        return this.ts(res, id+'4', src.__tf__)
    }

    /** Week of year, literally
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Week
     */
    weekofyear(time) {
        let date = new Date(time || se.t)
        date.setUTCHours(0, 0, 0, 0)
        date.setDate(date.getUTCDate() + 3 - (date.getUTCDay() + 6) % 7)
        let week1 = new Date(date.getUTCFullYear(), 0, 4)
        return 1 + Math.round(
            ((date - week1) / 86400000 - 3 +
            (week1.getUTCDay() + 6) % 7) / 7
        )
    }

    /** Weighted moving average
     * @param {TS} src - Input
     * @param {number} len - length
     * @return {TS} - New time-series
     */
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

    /** Williams %R
     * @param {number} len - length
     * @return {TS} - New time-series
     */
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

    /** Year
     * @param {number} [time] - Time in ms (current t, if not defined)
     * @return {number} - Year
     */
    year(time) {
        return new Date(time || se.t).getUTCFullYear()
    }

}
