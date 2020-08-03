
// Script engine, aka 🌴 Script Engine
// Fuck yeah

import ScriptEnv from './script_env.js'
import Utils from '../stuff/utils.js'
import TS from './script_ts.js'

const DEF_LIMIT = 5

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
        this.open = TS('open', [])
        this.high = TS('high', [])
        this.low = TS('low', [])
        this.close = TS('close', [])
        this.vol = TS('vol', [])
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

            this.env.init()

            let ohlcv = this.data.chart.data
            for (var i = this.start(ohlcv); i < ohlcv.length; i++) {
                this.iter = i
                this.t = ohlcv[i][0]
                this.step(ohlcv[i])

                this.env.step()


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
    }


    limit() {
        this.open.length = this.open.__len__ || DEF_LIMIT
        this.high.length = this.high.__len__ || DEF_LIMIT
        this.low.length = this.low.__len__ || DEF_LIMIT
        this.close.length = this.close.__len__ || DEF_LIMIT
        this.vol.length = this.vol.__len__ || DEF_LIMIT
    }

    start(ohlcv) {
        let depth = this.dc.sett.scriptDepth
        return depth ?
            Math.max(ohlcv.length - depth, 0) : 0
    }
}

export default new ScriptEngine()
