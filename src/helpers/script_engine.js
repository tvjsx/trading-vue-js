
// Script engine, aka 🌴 Script Engine
// Fuck yeah

import ScriptEnv from './script_env.js'
import Utils from '../stuff/utils.js'
import TS from './script_ts.js'

const DEF_LIMIT = 5   // default buff length
const WAIT_EXEC = 10  // ms

class ScriptEngine {

    constructor() {
        this.map = {}
        this.data = {}
        this.exec_id = null
        this.queue = []
        this.delta_queue = []
        this.sett = {}
        this.state = {}
    }

    exec_all() {

        clearTimeout(this.exec_id)

        // Wait for the data
        if (!this.data.ohlcv) return

        // Execute queue after all scripts & data are loaded
        this.exec_id = setTimeout(async () => {

            if (!this.init_state(Object.keys(this.map))) {
                return
            }
            this.re_init_map()

            // TODO: 'remove-script' event

            while (this.queue.length) {
                this.exec(this.queue.shift())
            }

            if (Object.keys(this.map).length) {
                await this.run()
                this.check_queues()
            }

            this.send_state()

        }, WAIT_EXEC)
    }

    // Exec selected
    async exec_sel(delta) {

        // Wait for the data
        if (!this.data.ohlcv) return

        let sel = Object.keys(delta).filter(x => x in this.map)

        if (!this.init_state(sel)) {
            this.delta_queue.push(delta)
            return
        }

        for (var id in delta) {
            if (!this.map[id]) continue

            let props = this.map[id].src.props
            for (var k in props) {
                if (k in delta[id]) {
                    props[k].val = delta[id][k]
                }
            }

            this.exec(this.map[id])

        }

        await this.run(sel)
        this.check_queues()
        this.send_state()

    }

    exec(s) {

        let id = s.id || `g${s.grid_id}_${s.layer_id}`

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

    init_state(sel) {

        let task = sel.join(',')

        // Stop previous run only if the task is the same
        if (this.running) {
            this._restart = (task === this.task)
            return false
        }

        // Inverted arrays
        this.open = TS('open', [])
        this.high = TS('high', [])
        this.low = TS('low', [])
        this.close = TS('close', [])
        this.vol = TS('vol', [])
        this.iter = 0
        this.t = 0
        this.skip = false // skip the step
        this.running = true
        this.task = task

        return true
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

    async run(sel) {

        console.log('Run Scripts')

        var t1 = Utils.now()
        sel = sel || Object.keys(this.map)

        try {

            for (var id of sel) {
                this.map[id].env.init()
                this.init_conf(id)
            }

            let ohlcv = this.data.ohlcv
            for (var i = this.start(ohlcv); i < ohlcv.length; i++) {

                // Make a pause to read new WW msg
                if (i % 100 === 0) await Utils.pause(0)
                if (this.restarted()) return

                this.iter = i
                this.t = ohlcv[i][0]
                this.step(ohlcv[i])

                // TEST:
                //for (var k = 1; k < 1000000; k++) {}

                for (var id of sel) this.map[id].env.step()

                this.limit()
            }
        } catch(e) {
            console.log(e)
        }

        this.perf = Utils.now() - t1
        console.log('Perf',  this.perf)

        this.running = false

        this.onmessage('overlay-data', this.format_map(sel))
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

    check_queues() {

        console.log('Queue=', this.queue.length)
        console.log('Delata queue=', this.delta_queue.length)

        // Check if there are any new scripts (recieved during
        // the current run)
        if (this.queue.length) {
            this.exec_all()
        }
        // Check if there are any new settings deltas (...)
        else if (this.delta_queue.length) {
            this.exec_sel(this.delta_queue.pop())
            this.delta_queue = []
        }
    }

    format_map(sel) {
        sel = sel || Object.keys(this.map)
        let res = []
        for (var id of sel) {
            let x = this.map[id]
            res.push({ id: id, data: x.env.data })
        }
        return res
    }

    init_conf(id) {
        /*if (this.map[id].src.conf.renderer) {
            this.onmessage('change-overlay', {
                id: id,
                fileds: {
                    type: this.map[id].src.conf.renderer
                }
            })
        }*/
    }

    restarted() {
        if (this._restart) {
            this._restart = false
            this.running = false
            this.perf = 0
            console.log('Restarted')
            return true
        }
        return false
    }
}

export default new ScriptEngine()
