
// Parse non-default symbols, e.g. close1D, hlc3
// & inject the corresponding TSs or samplers

import TS from './script_ts.js'
import Sampler from './sampler.js'
import se from './script_engine.js'
import * as u from './script_utils.js'
import ScriptStd from './script_std.js'

const SYMTF = /(open|high|low|close|vol)(\d+)(\w*)/gm
const FNSTD = /(a?tr|kcw?|dmi|sar|supertrend|wpr)(\d+?\w*)\s*\(/gm
const SYMSTD = /(?:hl2|hlc3|ohlc4)/gm

export default {

    parse(s) {
        let ss = s.src
        let all = `${ss.init_src}\n${ss.upd_src}\n${ss.post_src}`

        SYMTF.lastIndex = 0
        FNSTD.lastIndex = 0
        SYMSTD.lastIndex = 0

        do {
            var m = SYMTF.exec(all)
            if (m) {
                if (m[0] in se.tss) continue
                let ts = se.tss[m[0]] = TS(m[0], [])
                ts.__tf__ = u.tf_from_pair(m[2], m[3])
                ts.__fn__ = Sampler(m[1], true).bind(ts)
            }
        } while (m)

        do {
            var m = SYMSTD.exec(all)
            if (m) {
                if (m[0] in se.tss) continue
                this.parse_ts_sym(m[0])
            }
        } while (m)

        do {
            var m = FNSTD.exec(all)
            if (m) {
                let fn = m[1] + m[2]
                let tf = m[2]
                if (fn in se.std_plus) continue
                switch(m[1]){
                    case 'tr':
                        this.deps(['high', 'low', 'close'], m[2])
                        se.std_plus[fn] = function(fixnan = false, _id) {
                            return this.tr(fixnan, _id, tf)
                        }
                        break
                    case 'atr':
                        this.deps(['high', 'low', 'close'], m[2])
                        se.std_plus[fn] = function(len, _id) {
                            return this.atr(len, _id, tf)
                        }
                        break
                    case 'kc':
                        this.deps(['high', 'low', 'close'], m[2])
                        se.std_plus[fn] = function(src, len, mult,
                            use_tr = true, _id) {
                            return this.kc(src, len, mult, use_tr, _id, tf)
                        }
                        break
                    case 'kcw':
                        this.deps(['high', 'low', 'close'], m[2])
                        se.std_plus[fn] = function(src, len, mult,
                            use_tr = true, _id) {
                            return this.kcw(src, len, mult, use_tr, _id, tf)
                        }
                        break
                    case 'dmi':
                        this.deps(['high', 'low', 'close'], m[2])
                        se.std_plus[fn] = function(len, smooth, _id) {
                            return this.dmi(len, smooth, _id, tf)
                        }
                        break
                    case 'sar':
                        this.deps(['high', 'low', 'close'], m[2])
                        se.std_plus[fn] = function(start, inc, max, _id) {
                            return this.sar(start, inc, max, _id, tf)
                        }
                        break
                    case 'supertrend':
                        this.deps(['high', 'low', 'close'], m[2])
                        se.std_plus[fn] = function(factor, atrlen, _id) {
                            return this.supertrend(factor, atrlen, _id, tf)
                        }
                        break
                    case 'wpr':
                        this.deps(['high', 'low', 'close'], m[2])
                        se.std_plus[fn] = function(len, _id) {
                            return this.wpr(len, _id, tf)
                        }
                        break
                }
            }
        } while (m)
    },

    parse_ts_sym(sym, tf) {
        switch(sym) {
            // Timeseries
            case 'hl2':
                se.tss['hl2'] = TS('hl2', [])
                se.tss['hl2'].__fn__ = () => {
                    return (
                        se.high[0] +
                        se.low[0]) * 0.5
                }
                break
            case 'hlc3':
                se.tss['hlc3'] = TS('hlc3', [])
                se.tss['hlc3'].__fn__ = () => {
                    return (
                        se.high[0] +
                        se.low[0] +
                        se.close[0]) / 3
                }
                break
            case 'ohlc4':
                se.tss['ohlc4'] = TS('ohlc4', [])
                se.tss['ohlc4'].__fn__ = () => {
                    return (
                        se.open[0] +
                        se.high[0] +
                        se.low[0] +
                        se.close[0]) * 0.25
                }
                break
        }
    },
    deps(types, tf) {
        for (var type of types) {
            let sym = type + tf
            if (sym in se.tss) continue
            let ts = se.tss[sym] = TS(sym, [])
            ts.__tf__ = u.tf_from_str(tf)
            ts.__fn__ = Sampler(type, true).bind(ts)
        }
    }
}
