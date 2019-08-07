
// Main DataHelper class. A container for data,
// which works as a proxy and CRUD interface

import Vue from 'vue'

export default class DataCube {

    constructor(data = {}) {
        this.data = data
        this.init()
        this.update_ids()


        /* Examples of queries: (go to test #8) */
        /* Type in devtools:
            DataCube.get('onchart.EMA0') // Nope!
            DataCube.get('Keltner')      // By name
            DataCube.get_one('chart.data')
            DataCube.get('offchart.RSI')
            DataCube.get('offchart.RSI.data')
            DataCube.get('DI')
            DataCube.get('Splines0.data') // By index
            DataCube.get('Segment.settings')
            ...
            DataCube.set('.settings', { lineWidth: 2 })
            DataCube.add('offchart', { type: 'New', data: [] })
            DataCube.del('.')  // Fun !
        */

        // DEBUG
        window.DataCube = this

    }

    // Init Data Structure v1.1
    init() {
        if (!('chart' in this.data)) {
            Vue.set(this.data, 'chart', {
                type: 'Candles',
                data: this.data.ohlcv || []
            })
        }

        if (!('onchart' in this.data)) {
            Vue.set(this.data, 'onchart', [])
        }

        if (!('offchart' in this.data)) {
            Vue.set(this.data, 'offchart', [])
        }

        // Remove ohlcv cuz we have Data v1.1
        delete this.data.ohlcv
    }

    // Update ids for all overlays
    update_ids() {
        this.data.chart.id = `chart.${this.data.chart.type}`
        var count = {}
        for (var ov of this.data.onchart) {
            if (count[ov.type] === undefined) {
                count[ov.type] = 0
            }
            let i = count[ov.type]++
            ov.id = `onchart.${ov.type}${i}`
            if (!ov.name) ov.name = ov.id

        }
        count = {}
        for (var ov of this.data.offchart) {
            if (count[ov.type] === undefined) {
                count[ov.type] = 0
            }
            let i = count[ov.type]++
            ov.id = `offchart.${ov.type}${i}`
            if (!ov.name) ov.name = ov.id
        }
    }


    // Add new overlay
    add(side, overlay) {

        if (side !== 'onchart' && side !== 'offchart') {
            return
        }

        this.data[side].push(overlay)
        this.update_ids()

        return overlay.id
    }

    // Get all objects matching the query
    get(query) {
        return this.get_by_query(query).map(x => x.v)
    }

    // Get first object matching the query
    get_one(query) {
        return this.get_by_query(query).map(x => x.v)[0]
    }

    // Set data (reactively)
    set(query, data) {

        let objects = this.get_by_query(query)

        for (var obj of objects) {

            if (typeof obj.i === 'string') {

                Vue.set(obj.p, obj.i, data)

            } else {

                let i = obj.i !== undefined ?
                    i : obj.p.indexOf(obj.v)

                if (i >= 0) {
                    Vue.set(obj.p, i, data)
                }
            }
        }

        this.update_ids()

    }

    // Merge(or array) object or array (reactively)
    merge(query, data) {
        // ...
    }

    // Remove an overlay by query (id/type/name/...)
    del(query) {

        let objects = this.get_by_query(query)

        for (var obj of objects) {

            // Find current index of the field (if not defined)
            let i = obj.i !== undefined ?
                i : obj.p.indexOf(obj.v)

            if (i >= 0) {
                Vue.delete(obj.p, i)
            }

        }

        this.update_ids()
    }


    // Show indicator
    show() {
        // ...
    }

    // Hide indicator
    hide() {
        // ...
    }

    // Returns array of objects matching query.
    // Object contains { parent, index, value }
    // TODO: query caching
    get_by_query(query) {

        let tuple = query.split('.')

        switch (tuple[0]) {
            case 'chart':
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
            case 'onchart':
            case 'offchart':
                return this.query_search(query,tuple)
            default:
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
                return [...on, ...off]

        }

    }

    query_search(query, tuple) {

        let side = tuple[0]
        let path = tuple[1] || ''
        let field = tuple[2]

        let arr = this.data[side].filter(
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
            i: undefined,
            v: x
        }))
    }

}
