
// Script engine, aka 🌴 Script Engine
// Fuck yeah

import ScriptEnv from './script_env.js'
import Utils from '../stuff/utils.js'
import TS from './script_ts.js'

const DEF_LIMIT = 5  // default buff length
const WAIT_EXEC = 10 // ms

class ScriptEngine {
    constructor() {
        this.map = {}
        this.data = {}
        this.exec_id = null
        this.queue = []
        this.sett = {}
        this.state = {}
    }

    exec_all() {

        clearTimeout(this.exec_id)

        // Wait for the data
        if (!this.data.ohlcv) return

        // Execute queue after all scripts & data are loaded
        this.exec_id = setTimeout(() => {

            this.init_state()
            this.re_init_map()

            // TODO: remove script event

            while (this.queue.length) {
                this.exec(this.queue.pop())
            }

            if (Object.keys(this.map).length) {
                this.run()
            }

            this.send_state()

        }, WAIT_EXEC)
    }

    exec(s) {

        let id = `g${s.grid_id}_${s.layer_id}`

        if (!s.src.conf) s.src.conf = {}

        if (s.src.init) {
            s.src.init_src = this.get_raw_src(s.src.init)
        }
        if (s.src.update) {
            s.src.upd_src = this.get_raw_src(s.src.update)
        }

        s.env = new ScriptEnv(s, {
            open: this.open,
            high: this.high,
            low: this.low,
            close: this.close,
            vol: this.vol,
            ohlcv: this.data.ohlcv,
            t: () => this.t,
            iter: () => this.iter,
        })

        this.map[id] = s

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

    send_state() {
        this.onmessage('engine-state', {
            scripts: Object.keys(this.map).length,
            last_perf: this.perf
        })
    }

    re_init_map() {
        for (var id in this.map) {
            this.exec(this.map[id])
        }
    }

    get_raw_src(f) {
        if (typeof f === 'string') return f
        let src = f.toString()
        return src.slice(
            src.indexOf("{") + 1,
            src.lastIndexOf("}")
        )
    }

    run() {

        console.log('Run Scripts')

        var t1 = Utils.now()

        try {

            for (var id in this.map) {
                this.onmessage('exec-started', id)
                this.map[id].env.init()
            }

            let ohlcv = this.data.ohlcv
            for (var i = this.start(ohlcv); i < ohlcv.length; i++) {
                this.iter = i
                this.t = ohlcv[i][0]
                this.step(ohlcv[i])

                for (var id in this.map) this.map[id].env.step()

                this.limit()
            }
        } catch(e) {
            console.log(e)
        }

        this.perf = Utils.now() - t1
        console.log('Perf',  this.perf)

        this.onmessage('overlay-data', this.format_map())

        // DEBUG
        //console.log(this.env.tss)
        /*if (script.src.conf.renderer) {
            this.dc.set(`Skrrr Exec.type`, script.src.conf.renderer)
        }
        this.dc.set(`Skrrr Exec.data`, this.env.data)*/



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
        let depth = this.sett.scriptDepth
        return depth ?
            Math.max(ohlcv.length - depth, 0) : 0
    }

    format_map() {
        let res = []
        for (var id in this.map) {
            let x = this.map[id]
            res.push({ id: id, data: x.env.data })
        }
        return res
    }
}

export default new ScriptEngine()
