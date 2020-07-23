
// Script engine, aka 🌴 Script Engine
// Fuck yeah

import ScriptEnv from './script_env.js'
import Utils from '../stuff/utils.js'

const DEF_LIMIT = 200

class ScriptEngine {
    constructor() {}

    init_data(dc) {
        this.dc = dc
        this.data = dc.data
    }

    register(scripts) {

        // DEBUG
        if (Utils.now() - this.__t < 1000) return
        this.__t = Utils.now()

        this.init_state()
        for (var s of scripts) {

            if (!s.conf) s.conf = {}

            if (s.src.init) {
                s.src.init_src = this.get_raw_src(s.src.init)
            }
            if (s.src.update) {
                s.src.upd_src = this.get_raw_src(s.src.update)
            }

            this.env = new ScriptEnv(s, {
                open: this.open,
                high: this.high,
                low: this.low,
                close: this.close,
                vol: this.vol,
                ohlcv: this.data.chart.data,
                t: () => this.t,
                iter: () => this.iter,
            })
        }
        var t1 = Utils.now()
        this.run(s)
        console.log('Perf', Utils.now() - t1)
    }

    init_state() {
        // Inverted arrays
        this.open = []
        this.high = []
        this.low = []
        this.close = []
        this.vol = []
        this.iter = 0
        this.t = 0
        this.skip = false // skip the step
    }

    get_raw_src(f) {
        if (typeof f === 'string') return f
        let src = f.toString()
        return src.slice(
            src.indexOf("{") + 1,
            src.lastIndexOf("}")
        )
    }

    run(script) {
        try {

            this.env.output.init()
            let ohlcv = this.data.chart.data
            for (var i = this.start(ohlcv); i < ohlcv.length; i++) {
                this.iter = i
                this.t = ohlcv[i][0]
                this.step(ohlcv[i])
                let v = this.env.output.update()

                if (this.skip) {
                    this.skip = false
                    continue
                }

                this.copy(v)
                this.limit()
            }
        } catch(e) {
            console.log(e)
        }
        // DEBUG
        //console.log(this.env.tss)
        if (script.src.conf.renderer) {
            this.dc.set(`Skrrr Exec.type`, script.src.conf.renderer)
        }
        this.dc.set(`Skrrr Exec.data`, this.env.data)

    }

    step(data) {
        this.open.unshift(data[1])
        this.high.unshift(data[2])
        this.low.unshift(data[3])
        this.close.unshift(data[4])
        this.vol.unshift(data[5])
        this.env.output.unshift(undefined)

        // Update all temp symbols
        for (var id in this.env.tss) {
            this.env.tss[id].unshift(undefined)
        }
    }

    // Copy the recent value to the direct buff
    copy(v) {
        if (v !== undefined) this.env.output[0] = v
        let val = this.env.output[0]
        if (val == null || !val.length) {
            // Number / object
            this.env.data.push([this.t, val])
        } else {
            // Array
            this.env.data.push([this.t, ...val])
        }
    }

    limit() {
        this.open.length = DEF_LIMIT
        this.high.length = DEF_LIMIT
        this.low.length = DEF_LIMIT
        this.close.length = DEF_LIMIT
        this.vol.length = DEF_LIMIT
        this.env.output.length = DEF_LIMIT
    }

    start(ohlcv) {
        let depth = this.dc.sett.scriptDepth
        return depth ?
            Math.max(ohlcv.length - depth, 0) : 0
    }
}

export default new ScriptEngine()
