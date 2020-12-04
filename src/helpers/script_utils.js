
import Const from '../stuff/constants.js'

const FDEFS = /(function |)([$A-Z_][0-9A-Z_$\.]*)[\s]*?\((.*?)\)/gmi
const SBRACKETS = /([$A-Z_][0-9A-Z_$\.]*)[\s]*?\[([^"^\[^\]]+?)\]/gmi
const TFSTR = /(\d+)(\w*)/gm

const BUF_INC = 5
var tf_cache = {}

export function f_args(src) {
    FDEFS.lastIndex = 0

    var m = FDEFS.exec(src)
    if (m) {
        let fkeyword = m[1].trim()
        let fname = m[2].trim()
        let fargs = m[3].trim()

        return fargs.split(',').map(x => x.trim())
    }
    return []
}
export function f_body(src) {
    return src.slice(
        src.indexOf("{") + 1,
        src.lastIndexOf("}")
    )
}

export function wrap_idxs(src, pre = '') {

    SBRACKETS.lastIndex = 0
    let changed = false

    do {
        var m = SBRACKETS.exec(src)

        if (m) {

            let vname = m[1].trim()
            let vindex = m[2].trim()
            if (vindex === '0' || parseInt(vindex) < BUF_INC) {
                continue
            }
            switch(vname) {
                case 'let':
                case 'var':
                case 'return':
                    continue
            }

            //let wrap = `${pre}_v(${vname}, ${vindex})[${vindex}]`
            let wrap = `${vname}[${pre}_i(${vindex}, ${vname})]`
            src = src.replace(m[0], wrap)
            changed = true
        }
    } while (m)

    return changed ? src : src
}

// Get all module helper classes
export function make_module_lib(mod) {
    let lib = {}
    for (var k in mod) {
        if (k === 'main' || k === 'id') continue
        let a = f_args(mod[k])
        lib[k] = new Function(a, f_body(mod[k]))
    }
    return lib
}

export function get_raw_src(f) {
    if (typeof f === 'string') return f
    let src = f.toString()
    return src.slice(
        src.indexOf("{") + 1,
        src.lastIndexOf("}")
    )
}

// Get tf in ms from pairs such (`15`, `m`)
export function tf_from_pair(num, pf) {
    var mult = 1
    switch (pf) {
        case 's': mult = Const.SECOND; break
        case 'm': mult = Const.MINUTE; break
        case 'H': mult = Const.HOUR; break
        case 'D': mult = Const.DAY; break
        case 'W': mult = Const.WEEK; break
        case 'M': mult = Const.MONTH; break
        case 'Y': mult = Const.YEAR; break
    }
    return parseInt(num) * mult
}

export function tf_from_str(str) {

    if (typeof str === 'number') return str
    if (tf_cache[str]) return tf_cache[str]

    TFSTR.lastIndex = 0
    let m = TFSTR.exec(str)
    if (m) {
        tf_cache[str] = tf_from_pair(m[1], m[2])
        return tf_cache[str]
    }
    return undefined
}

export function get_fn_id(pre, id) {
    return pre + '-' + id.split('<-').pop()
}

// Apply filter for all new overlays
export function ovf(obj, f) {
    var nw = {}
    for (var id in obj) {
        nw[id] = {}
        for (var k in obj[id]) {
            if (k === 'data') continue
            nw[id][k] = obj[id][k]
        }
        nw[id].data = f(obj[id].data)
    }
    return nw
}

// Return index of the next element in
// dataset (since t). Impl: simple binary search
// TODO: optimize (remember the penultimate
// iteration and start from there)
export function nextt(data, t, ti = 0) {

    let i0 = 0
    let iN = data.length - 1

    while (i0 <= iN) {
        var mid = Math.floor((i0 + iN) / 2)
        if (data[mid][ti] === t) {
            return mid
        } else if (data[mid][ti] < t) {
            i0 = mid + 1
        } else {
            iN = mid - 1
        }
    }

    return t < data[mid][ti] ? mid : mid + 1

}

// Estimated size of datasets
export function size_of_dss(data) {
    let bytes = 0
    for (var id in data) {
        if (data[id].data && data[id].data[0]) {
            let s0 = size_of(data[id].data[0])
            bytes += s0 * data[id].data.length
        }
    }
    return bytes
}


// Used to measure the size of dataset
export function size_of(object) {
    var list = [], stack = [object], bytes = 0
    while (stack.length) {
        var value = stack.pop()
        var type = typeof value
        if (type === 'boolean') {
            bytes += 4
        } else if (type === 'string') {
            bytes += value.length * 2
        } else if (type === 'number') {
            bytes += 8
        } else if (type === 'object' &&
            list.indexOf(value) === -1) {
            list.push(value)
            for(var i in value) {
                stack.push(value[i])
            }
        }
    }
    return bytes
}

// Update onchart/offchart
export function update(data, val) {
    const i = data.length - 1
    const last = data[i]
    if (!last || val[0] > last[0]) {
        data.push(val)
    } else {
        data[i] = val
    }
}

export function now() {
    return (new Date()).getTime()
}
