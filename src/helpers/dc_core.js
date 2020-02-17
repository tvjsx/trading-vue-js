
// DataCube private methods

import Utils from '../stuff/utils.js'
import DCEvents from './dc_events.js'

export default class DCCore extends DCEvents {

    // Set TV instance (once). Called by TradingVue itself
    init_tvjs($root) {
        if (!this.tv) {
            this.tv = $root
            this.init_data()
            this.update_ids()
        }
    }

    // Init Data Structure v1.1
    init_data($root) {

        if (!('chart' in this.data)) {
            this.tv.$set(this.data, 'chart', {
                type: 'Candles',
                data: this.data.ohlcv || []
            })
        }

        if (!('onchart' in this.data)) {
            this.tv.$set(this.data, 'onchart', [])
        }

        if (!('offchart' in this.data)) {
            this.tv.$set(this.data, 'offchart', [])
        }

        if (!this.data.chart.settings) {
            this.tv.$set(this.data.chart,'settings', {})
        }

        // Remove ohlcv cuz we have Data v1.1
        delete this.data.ohlcv

    }

    // Range change callback (called by TradingVue)
    async range_changed(range, tf, check=false) {

        if (!this.loader) return
        if (!this.loading) {
            let first = this.data.chart.data[0][0]
            if (range[0] < first) {
                this.loading = true
                await Utils.pause(250) // Load bigger chunks
                range = range.slice()  // copy
                range[0] = Math.floor(range[0])
                range[1] = Math.floor(first)
                let prom = this.loader(range, tf, d => {
                    // Callback way
                    this.chunk_loaded(d)
                })
                if (prom && prom.then) {
                    // Promise way
                    this.chunk_loaded(await prom)
                }
            }
        }
        if (!check) this.last_chunk = [range, tf]
    }

    // A new chunk of data is loaded
    // TODO: bulletproof fetch
    chunk_loaded(data) {

        // Updates only candlestick data, or
        if (Array.isArray(data)) {
            this.merge('chart.data', data)
        } else {
            // Bunch of overlays, including chart.data
            for (var k in data) {
                this.merge(k, data[k])
            }
        }

        this.loading = false
        if (this.last_chunk) {
            this.range_changed(...this.last_chunk, true)
            this.last_chunk = null
        }

    }

    // Update ids for all overlays
    update_ids() {
        this.data.chart.id = `chart.${this.data.chart.type}`

        for (const on_off of ['onchart', 'offchart']) {
            const type_counts = {}
            for (const ov of this.data[on_off]) {
                if (!type_counts.hasOwnProperty(ov.type)) {
                    type_counts[ov.type] = 0
                }
                const index = type_counts[ov.type]++
                ov.id = `${on_off}.${ov.type}${index}`
                if (!ov.name) ov.name = ov.type + ` ${index}`
                if (!ov.settings) ov.settings = {}
            }
        }
    }

    // Updates all overlays with given values.
    update_overlays(data, t) {
        for (var k in data) {
            if (k === 'price' || k === 'volume' ||
                k === 'candle') {
                continue
            }
            if (!Array.isArray(data[k])) {
                var val = [data[k]]
            } else {
                val = data[k]
            }
            if (!k.includes('.data')) k += '.data'
            this.merge(k, [[t, ...val]])
        }
    }

    // Returns array of objects matching query.
    // Object contains { parent, index, value }
    // TODO: query caching
    get_by_query(query, chuck) {

        let tuple = query.split('.')

        switch (tuple[0]) {
            case 'chart':
                var result = this.chart_as_piv(tuple)
                break
            case 'onchart':
            case 'offchart':
                result = this.query_search(query, tuple)
                break
            default:
                /* Should get('.') return also the chart? */
                /*let ch = this.chart_as_query([
                    'chart',
                    tuple[1]
                ])*/
                let on = this.query_search(query, [
                    'onchart',
                    tuple[0],
                    tuple[1]
                ])
                let off = this.query_search(query, [
                    'offchart',
                    tuple[0],
                    tuple[1]
                ])
                result = [/*ch[0],*/ ...on, ...off]
                break
        }

        return result.filter(x => !x.v.locked || chuck)
    }

    chart_as_piv(tuple) {
        let field = tuple[1]
        if (field) return [{
            p: this.data.chart,
            i: field,
            v: this.data.chart[field]
        }]
        else return [{
            p: this.data,
            i: 'chart',
            v: this.data.chart
        }]
    }

    query_search(query, [side, path = '', field]) {

        const arr = this.data[side].filter(
            x => x.id && x.name && (
                x.id === query ||
                x.id.includes(path) ||
                x.name === query ||
                x.name.includes(path)
            ))

        if (field) {
            return arr.map(x => ({
                p: x,
                i: field,
                v: x[field]
            }))
        }

        return arr.map(x => ({
            p: this.data[side],
            i: undefined,  // TODO: consider null for indicating non-values? what does vue think when undefined is passed?
            v: x
        }))
    }

    _merge_customizer = (obj_val, src_val, key) => {
        if (Array.isArray(obj_val) && obj_val[0] && obj_val[0].length >= 2 && isFinite(obj_val[0][0])) {
            return this.merge_ts(obj_val, src_val)
        }
    }

    merge_objects(obj, data) {
        const new_obj = Array.isArray(obj.v) ? [] : {}
        this.tv.$set(obj.p, obj.i, mergeWith(new_obj, obj.v, data, this._merge_customizer))
    }

    // Merge (possibly overlapping) time series;
    // Assume that both input arrays are pre-sorted
    merge_ts(obj, data) {

        if (!data.length) {
            return obj
        } else if (!obj.length) {
            return data
        }

        const r1 = [obj[0][0], obj[obj.length - 1][0]]
        const r2 = [data[0][0], data[data.length - 1][0]]

        const o = [  // Overlap
            Math.max(r1[0], r2[0]),
            Math.min(r1[1], r2[1])
        ]

        if (o[1] >= o[0]) {  // data overlaps

            const { od, d1, d2 } = this.ts_overlap(obj, data, o)

            obj.splice(...d1)
            data.splice(...d2)

            // Dst === Overlap === Src
            if (!obj.length && !data.length) {
                return od
            }

            // If src is totally contained in dst
            if (!data.length) { data = obj.splice(d1[0]) }

            // If dst is totally contained in src
            if (!obj.length) { obj = data.splice(d2[0]) }

            return this.combine(obj, od, data)

        } else {  // no overlap

            return this.combine(obj, [], data)
        }
    }

    // TODO: review performance, move to worker
    ts_overlap(arr1, arr2, [t1, t2]) {

        const filter_mutual_overlap = x => x[0] >= t1 && x[0] <= t2

        const arr1_overlap = arr1.filter(filter_mutual_overlap)
        const arr2_overlap = arr2.filter(filter_mutual_overlap)

        const ts = {}  // overlap range timestamp-to-datapoint map; note arr2 overrides timestamps of arr1

        for (const data_point of arr1_overlap) {
            ts[data_point[0]] = data_point
        }

        for (const data_point of arr2_overlap) {
            ts[data_point[0]] = data_point
        }

        const ts_sorted = Object.keys(ts).sort()

        // Indices of segments
        const arr1_overlap_start_index = arr1.indexOf(arr1_overlap[0])
        const arr1_overlap_end_index = arr1.indexOf(arr1_overlap[arr1_overlap.length - 1])
        const arr2_overlap_start_index = arr2.indexOf(arr2_overlap[0])
        const arr2_overlap_end_index = arr2.indexOf(arr2_overlap[arr2_overlap.length - 1])

        return {
            od: ts_sorted.map(x => ts[x]),  // normalized overlap range of full datapoints
            d1: [arr1_overlap_start_index, arr1_overlap_end_index - arr1_overlap_start_index + 1],
            d2: [arr2_overlap_start_index, arr2_overlap_end_index - arr2_overlap_start_index + 1]
        }
    }

    // Combine parts together:
    // (destination, overlap, source)
    combine(dst, o, src) {

        const last = arr => arr[arr.length - 1][0]
        const max_len_for_push = 100000

        if (!dst.length) { dst = o; o = [] }
        if (!src.length) { src = o; o = [] }

        // TODO: first if-block unreachable?
        if (src[0][0] >= dst[0][0] && last(src) <= last(dst)) {

            return Object.assign(dst, o)

        } else if (last(src) > last(dst)) {

            // Psh(...) is faster but can overflow the stack
            if (o.length < max_len_for_push && src.length < max_len_for_push) {
                dst.push(...o, ...src)
                return dst
            } else {
                return dst.concat(o, src)
            }

        } else if (src[0][0] < dst[0][0]) {

            // Push(...) is faster but can overflow the stack
            if (o.length < max_len_for_push && src.length < max_len_for_push) {
                src.push(...o, ...dst)
                return src
            } else {
                return src.concat(o, dst)
            }
        } else {
            return []
        }
    }

}
