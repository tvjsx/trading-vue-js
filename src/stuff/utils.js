
import IndexedArray from 'arrayslicer'

export default {

    clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num
    },

    add_zero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i
    },

    // Start of the day (zero millisecond)
    day_start(t) {
        let start = new Date(t)
        start.setHours(0,0,0,0)
        return start.getTime()
    },

    // Start of the month
    month_start(t) {
        let date = new Date(t)
        let start = new Date(
            date.getFullYear(),
            date.getMonth(), 1
        )
        return start.getTime()
    },

    // Start of the year
    year_start(t) {
        let start = new Date(new Date(t).getFullYear(), 0, 1)
        return start.getTime()
    },

    // Nearest in array
    nearest_a(x, array) {
        let dist = Infinity
        let val = null
        let index = -1
        for (var i = 0; i < array.length; i++) {
            var xi = array[i]
            if (Math.abs(xi - x) < dist) {
                dist = Math.abs(xi - x)
                val = xi
                index = i
            }
        }
        return [index, val]
    },

    round(num, decimals = 8) {
        return parseFloat(num.toFixed(decimals))
    },

    // Strip? No, it's ugly floats in js
    strip(number) {
        return parseFloat(
            parseFloat(number).toPrecision(12)
        )
    },

    get_day(t) {
        return t ? new Date(t).getDate() : null
    },

    // Update array keeping the same reference
    overwrite(arr, new_arr) {
        arr.splice(0, arr.length, ...new_arr)
    },

    // Copy layout in reactive way
    copy_layout(obj, new_obj) {
        for (var k in obj) {
            if (Array.isArray(obj[k])) {
                // (some offchart indicators are added/removed)
                // we need to update layout in a reactive way
                if (obj[k].length !== new_obj[k].length) {
                    this.overwrite(obj[k], new_obj[k])
                    continue
                }
                for (var m in obj[k]) {
                    Object.assign(obj[k][m], new_obj[k][m])
                }
            } else {
                Object.assign(obj[k], new_obj[k])
            }
        }
    },

    // Checks if the ohlcv data is changed (given the new
    // and old dataset values)
    data_changed(n, p) {
        n = n.ohlcv || (n.chart ? n.chart.data : []) || []
        p = p.ohlcv || (p.chart ? p.chart.data : []) || []
        return n.length !== p.length && n[0] !== p[0]
    },

    // Detects candles interval
    detect_interval(ohlcv) {
        return ohlcv.slice(0, 99).reduce((a,x) =>
            [Math.min(x[0] - a[1]), x[0]])[0]
    },

    // Gets numberic part of overlay id (e.g 'EMA_1' = > 1)
    get_num_id(id) {
        return parseInt(id.split('_').pop())
    },

    // Fast filter. Really fast, like 10X
    fast_filter(arr, t1, t2) {
        if (!arr.length) return arr
        try {
            var ia = new IndexedArray(arr, "0")
            return ia.getRange(t1, t2)
        } catch(e) {
            // Something wrong with fancy slice lib
            // Fast fix: fallback to filter
            return arr.filter(x =>
                x[0] >= t1 && x[0] <= t2
            )
        }
    },

    now() { return (new Date()).getTime() },

    pause(delay) {
        return new Promise((rs, rj) => setTimeout(rs, delay))
    },

    // Limit crazy wheel delta values
    smart_wheel(delta) {
        let abs = Math.abs(delta)
        if (abs > 500) {
            return (200 + Math.log(abs)) * Math.sign(delta)
        }
        return delta
    },

    // Parse the original mouse event to find deltaX
    get_deltaX(event) {
        return event.originalEvent.deltaX / 12
    },

    // Parse the original mouse event to find deltaY
    get_deltaY(event) {
        return event.originalEvent.deltaY / 12
    }

}
