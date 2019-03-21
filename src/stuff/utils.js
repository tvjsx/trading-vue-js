
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
        return start.getTime() === t
    },

    // Start of the month
    month_start(t) {
        let date = new Date(t)
        let start = new Date(
            date.getFullYear(),
            date.getMonth(), 1
        )
        return start.getTime() === t
    },

    // Start of the year
    year_start(t) {
        let start = new Date(new Date(t).getFullYear(), 0, 1)
        return start.getTime() === t
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

    // Detects candles interval
    detect_interval(ohlcv) {
        // If second candle is missing it will still work
        let l = ohlcv.length - 1;
        let i1 = ohlcv[1][0] - ohlcv[0][0]
        let i2 = ohlcv[l][0] - ohlcv[l-1][0]
        return Math.min(i1, i2)
    }
}
