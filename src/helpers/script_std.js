
// Script std-lib (built-in functions)

import se from './script_engine.js'

export default class ScriptStd {

    constructor(env) {
        this.env = env

        this.SWMA = [1/6, 2/6, 2/6, 1/6]
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
    ts(x, id) {
        let ts = this.env.tss[id]
        if (!ts) {
            ts = this.env.tss[id] = [x]
            ts.__id__ = id
        } else {
            ts[0] = x
        }
        return ts
    }

    // Generate the next timeseries id
    _tsid(args, next) {
        let prev = args[args.length - 1]
        return `${prev}<-${next}`
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

    alma() {
        // TODO: this
    }

    asin(x) {
        return Math.asin(x)
    }

    atan(x) {
        return Math.atan(x)
    }

    atr() {
        // TODO: this
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

    bb() {
        // TODO: this
    }

    // Tuple version, faster
    bb2() {
        // TODO: this
    }

    bbw() {
        // TODO: this
    }

    bool(x) {
        return !!x
    }

    cci() {
        // TODO: this
    }

    ceil(x) {
        return Math.ceil(x)
    }

    // x[0] - x[len]
    change(src, len = 1) {
        // TODO: this
    }

    cmo() {
        // TODO: this
    }

    cog() {
        // TODO: this
    }

    // correlation
    corr() {
        // TODO: this
    }

    cos(x) {
        return Math.cos(x)
    }

    cross(x, y) {
        // TODO: this
    }

    crossover(x, y) {
        // TODO: this
    }

    crossunder(x, y) {
        // TODO: this
    }

    cum() {
        // TODO: this
    }

    dayofmonth(time) {
        return new Date(time || se.t).getUTCDate()
    }

    dayofweek(time) {
        return new Date(time || se.t).getUTCDay() + 1
    }

    dev() {
        // TODO: this
    }

    dmi(len, smooth) {
        // TODO: this
    }

    // Tuple version, faster
    dmi2(len, smooth) {
        // TODO: this
    }

    ema() {
        // TODO: this
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

    highest(src, len) {
        let id = this._tsid(arguments, `highest(${len})`)
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

    linreg(src, len, offset) {
        // TODO: this
    }

    log(x) {
        Math.log(x)
    }

    log10(x) {
        Math.log10(x)
    }

    lowest(src, len) {
        let id = this._tsid(arguments, `lowest(${len})`)
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

    rma(src, len) {
        // TODO: this
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

    sma(src, len) {
        let id = this._tsid(arguments, `sma(${len})`)
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum = sum + src[i]
        }
        return this.ts(sum / len, id)
    }

    sqrt(x) {
        return Math.sqrt(x)
    }

    stdev(src, len) {
        // TODO: this
    }

    stoch(src, high, low, len) {
        // TODO: this
    }

    sum(src, len) {
        let id = this._tsid(arguments, `sum(${len})`)
        let sum = 0
        for (var i = 0; i < len; i++) {
            sum = sum + src[i]
        }
        return this.ts(sum, id)
    }

    supertrend(factor, atrlen) {
        // TODO: this
    }

    swma(src) {
        let id = this._tsid(arguments, `swma`)
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

    tr(fixnan = false) {
        // TODO: this
        //max(high - low, abs(high - close[1]), abs(low - close[1]))
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

    wma(src, len) {
        // TODO: this
    }

    wpr(len) {
        // TODO: this
    }

    year(time) {
        return new Date(time || se.t).getUTCFullYear()
    }

}
