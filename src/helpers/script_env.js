
// Script environment. Packs everything that
// needed for a script execution together:
// script src, standart functions, input data,
// other overlays & dependencies

import ScriptStd from './script_std.js'
import se from './script_engine.js'
import * as u from './script_utils.js'

const FDEFS = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*\s*)\)/gmi
const DEF_LIMIT = 5

export default class ScriptEnv {

    constructor(s, data) {

        this.std = new ScriptStd(this)
        this.src = s
        this.output = []
        this.data = []
        this.tss = {}
        this.shared = data
        this.output.box_maker = this.make_box(s.src)
        this.output.box_maker(this, data)
        delete this.output.box_maker

    }

    init() {
        this.output.init()
    }

    step(unshift = true) {
        if (unshift) this.unshift()
        let v = this.output.update()

        if (this.skip) {
            this.skip = false
            return
        }

        this.copy(v, unshift)
        this.limit()
    }

    unshift() {
        this.output.unshift(undefined)
        // Update all temp symbols
        for (var id in this.tss) {
            this.tss[id].unshift(undefined)
        }
    }

    // Limit env.output length
    limit() {
        this.output.length = 200 // DEF_LIMIT
        for (var id in this.tss) {
            let ts = this.tss[id]
            //console.log(ts.__id__, ts.__len__)
            ts.length = ts.__len__ || DEF_LIMIT
        }
    }

    // Copy the recent value to the direct buff
    copy(v, unshift = true) {
        if (v !== undefined) this.output[0] = v
        let val = this.output[0]
        if (val == null || !val.length) {
            // Number / object
            var point = [se.t, val]
        } else {
            // Array
            point = [se.t, ...val]
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

        for (var k in src.props) {
            let val = JSON.stringify(src.props[k].val)
            props += `var ${k} = ${val}\n`
        }
        // TODO: add argument values to _id
        // TODO: prefix all function by ns, e.g std_nz()

        return Function('self,shared', `
            'use strict';

            // Built-in functions (aliases)
            ${std}

            // Timeseries
            const open = shared.open
            const high = shared.high
            const low = shared.low
            const close = shared.close
            const vol = shared.vol

            // Direct data ts
            const data = self.data
            const ohlcv = shared.ohlcv

            // Script's properties (init)
            ${props}

            this.init = () => {
                ${src.init_src}
            }

            this.update = (_id = 'root') => {
                const t = shared.t()
                const iter = shared.iter()
                ${this.prep(src.upd_src)}
            }
        `)
    }

    // Preprocess the update function.
    // Replace functions with the full arguments list +
    // generate & add tsid
    // TODO: implement recursive prepping (with js syntax parser)
    prep(src) {

        //console.log('Before -----> \n', src)

        let h = this.src.use_for[0] // TODO: add props here
        src = '\t\t  let _pref = `${_id}<-'+h+'<-`\n' + src

        FDEFS.lastIndex = 0
        let call_id = 0 // Function call id (to make each call unique)

        do {
            var m = FDEFS.exec(src)
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
                        off+=4 // 'std_'
                    }
                    // Quick fix
                    FDEFS.lastIndex = off
                }
            }
        } while (m)

        // console.log('After ----->\n', u.wrap_idxs(src))

        return u.wrap_idxs(src)
    }

    // Postfix function calls with ts _ids
    postfix(src, m, call_id) {

        let target = this.get_args(this.fdef(m[2])).length
        let m0 = this.parentheses(m[0]) // First closed pair
        let args = this.get_args(m0)

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
        let reg = this.regex_clone(FDEFS)
        reg.lastIndex = 0

        let m = reg.exec(src)
        if (!m[3].trim().length) return []
        let arr = m[3].split(',')
            .map(x => x.trim())
            .filter(x => x !== '_id')
        return arr
    }

    regex_clone(rex) {
        return new RegExp(rex.source, rex.flags)
    }
}
