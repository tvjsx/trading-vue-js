
// Script environment. Packs everything that
// needed for a script execution together:
// script src, standart functions, input data,
// other overlays & dependencies

import ScriptStd from './script_std.js'
import se from './script_engine.js'
import * as u from './script_utils.js'
import TS from './script_ts.js'

const FDEFS1 = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*?\s*)\)/mi
const FDEFS2 = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*\s*)\)/gmis
const DEF_LIMIT = 5

export default class ScriptEnv {

    constructor(s, data) {

        this.std = se.std_inject(new ScriptStd(this))
        this.id = s.uuid
        this.src = s
        this.output = TS('output', [])
        this.data = []
        this.tss = {}
        this.syms = {}
        this.shared = data
        this.output.box_maker = this.make_box(s.src)
        this.onchart = {}
        this.offchart = {}
    }

    build() {
        this.output.box_maker(this, this.shared, se)
        delete this.output.box_maker
    }

    init() {
        this.output.init()
    }

    step(unshift = true) {
        if (unshift) this.unshift()
        let v = this.output.update()
        this.copy(v, unshift)
        this.limit()
    }

    unshift() {
        this.output.unshift(undefined)
        // Update all temp symbols
        for (var id in this.tss) {
            if (this.tss[id].__tf__) continue
            this.tss[id].unshift(undefined)
        }
    }

    // Limit env.output length
    limit() {
        let out = this.output
        out.length = out.__len__ || DEF_LIMIT
        for (var id in this.tss) {
            let ts = this.tss[id]
            //console.log(ts.__id__, ts.__len__)
            ts.length = ts.__len__ || DEF_LIMIT
        }
    }

    // Copy the recent value to the direct buff
    copy(v, unshift = true) {
        let off = this.output.__offset__
        if (v != undefined) {
            this.output[0] = v.__id__ ? v[0] : v
            off = off || v.__offset__
        }
        let val = this.output[0]
        let t = se.t
        if (off) t += off * se.tf
        if (val == null || !val.length) {
            // Number / object
            var point = [t, val]
        } else {
            // Array
            point = [t, ...val]
        }
        if (unshift) {
            this.data.push(point)
        } else {
            this.data[this.data.length - 1] = point
        }
    }

    // A small sandbox for a particular script
    // TODO: add support of 'Source' prop type (open, high, hl2 ...)
    make_box(src) {

        let proto = Object.getPrototypeOf(this.std)
        let std = ``
        for (var k of Object.getOwnPropertyNames(proto)) {
            if (k === 'constructor') continue
            std += `const std_${k} = self.std.${k}.bind(self.std)\n`
        }

        let props = ``
        for (var k in src.props || {}) {
            if (src.props[k].val !== undefined) {
                var val = src.props[k].val
            } else if (this.src.sett[k] !== undefined) {
                val = this.src.sett[k]
            } else {
                val = src.props[k].def
            }
            props += `var ${k} = ${JSON.stringify(val)}\n`
        }
        // TODO: add argument values to _id

        let tss = ``
        for (var k in this.shared) {
            if (this.shared[k] && this.shared[k].__id__) {
                tss += `const ${k} = shared.${k}\n`
            }
        }

        // Datasets
        let dss = ``
        for (var k in src.data || {}) {
            let id = se.match_ds(this.id, src.data[k].type)
            if (!this.shared.dss[id]) {
                let T = src.data[k].type
                console.warn(`Dataset '${T}' is undefined`)
                continue
            }
            dss += `const ${k} = shared.dss['${id}'].data\n`
        }

        try {
            return Function('self,shared,se', `
                'use strict';

                // Built-in functions (aliases)
                ${std}

                // Modules (API / interfaces)
                ${this.make_modules()}

                // Timeseries
                ${tss}

                // Direct data ts
                const data = self.data
                const ohlcv = shared.dss.ohlcv.data
                ${dss}

                // Script's properties (init)
                ${props}

                // Globals
                const settings = self.src.sett
                const tf = shared.tf
                const range = shared.range

                this.init = (_id = 'root') => {
                    ${this.prep(src.init_src)}
                }

                this.update = (_id = 'root') => {
                    const t = shared.t()
                    const iter = shared.iter()
                    ${this.prep(src.upd_src)}
                }

                this.post = (_id = 'root') => {
                    ${this.prep(src.post_src)}
                }
            `)
        } catch(e) {
            return Function('self,shared', `
                'use strict';
                this.init = () => {}
                this.update = () => {}
                this.post = () => {}
            `)
        }
    }

    // Make definitions for modules
    make_modules() {
        let s = ``
        for (var id in se.mods) {
            if (!se.mods[id].api) continue
            s += `const ${id} = se.mods['${id}'].api[self.id]`
            s += '\n'
        }
        return s
    }

    // Preprocess the update function.
    // Replace functions with the full arguments list +
    // generate & add tsid
    // TODO: implement recursive prepping (with js syntax parser)
    prep(src) {

        // console.log('Before -----> \n', src)

        let h = this.src.use_for[0] // TODO: add props here
        src = '\t\t  let _pref = `${_id}<-'+h+'<-`\n' + src

        FDEFS2.lastIndex = 0
        let call_id = 0 // Function call id (to make each call unique)

        do {
            var m = FDEFS2.exec(src)
            if (m) {
                let fkeyword = m[1].trim()
                let fname = m[2]
                let fargs = m[3]

                if (fkeyword === 'function') {
                    // TODO: add _ids to inline functions
                } else {
                    let off = m.index + m[0].indexOf('(')
                    if (this.std[fname]) {
                        src = this.postfix(src, m, ++call_id)
                        //console.log(src)
                        off+=4 // 'std_'
                    }
                    // Quick fix
                    FDEFS2.lastIndex = off
                }
            }
        } while (m)

        // console.log('After ----->\n', u.wrap_idxs(src))

        return u.wrap_idxs(src, 'std_')
    }

    // Postfix function calls with ts _ids
    postfix(src, m, call_id) {

        let target = this.get_args(this.fdef(m[2])).length
        let m0 = this.parentheses(m[0]) // First closed pair
        let args = this.get_args_2(m0)
        for (var i = args.length; i < target; i++) {
            args.push('void 0')
        }

        // Add an unique time-series id
        args.push(`_pref+"f${call_id}"`)

        return src.replace(m0, `std_${m[2]}(${args.join(', ')})`)

    }

    parentheses(str) {
        var count = 0, first = false
        for (var i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                count++
                first = true
            } else if (str[i] === ')') {
                count--
            }
            if (first && count === 0) {
                return str.substr(0, i+1)
            }
        }
        return str
    }

    // Get the function definition
    // TODO: add support of modules
    fdef(fname) {
        return this.std[fname].toString()
    }

    // Get args in the function's definition
    get_args(src) {
        let reg = this.regex_clone(FDEFS1)
        reg.lastIndex = 0

        let m = reg.exec(src)
        if (!m[3].trim().length) return []
        let arr = m[3].split(',')
            .map(x => x.trim())
            .filter(x => x !== '_id' && x !== '_tf')
        return arr
    }

    get_args_2(str) {
        let parts = []
        let c = 0
        let s = 0
        var q1 = false, q2 = false, q3 = false
        let part
        for (var i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                c++
                if (!part) part = [i+1]
            }
            if (str[i] === ')') c--
            if (str[i] === '[') s++
            if (str[i] === ']') s--
            if (str[i] === "'") q1 = !q1
            if (str[i] === '"') q2 = !q2
            if (str[i] === '`') q3 = !q3
            if (str[i] === ',' && c === 1 && !s && !q1 && !q2 && !q3) {
                if (part) {
                    part[1] = i
                    parts.push(part)
                    part = [i+1]
                }
            }
            if (c === 0 && part) {
                part[1] = i
                parts.push(part)
                part = null
            }
        }
        return parts.map(x => str.slice(...x))
            .filter(x => /[^\s]+/.exec(x))
    }

    regex_clone(rex) {
        return new RegExp(rex.source, rex.flags)
    }

    send_modify(upd) {
        se.send('modify-overlay', {
            uuid: this.id,
            fields: upd
        })
    }
}
