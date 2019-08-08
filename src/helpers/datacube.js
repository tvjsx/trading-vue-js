
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
            ...
            DataCube.hide('.')
            DataCube.show('offchart')
            DataCube.merge('RSI.settings', { color: 'green' })
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

        if (!this.data.chart.settings) {
            Vue.set(this.data.chart,'settings', {})
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
            if (!ov.settings) ov.settings = {}

        }
        count = {}
        for (var ov of this.data.offchart) {
            if (count[ov.type] === undefined) {
                count[ov.type] = 0
            }
            let i = count[ov.type]++
            ov.id = `offchart.${ov.type}${i}`
            if (!ov.name) ov.name = ov.id
            if (!ov.settings) ov.settings = {}
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

            let i = obj.i !== undefined ?
                obj.i :
                obj.p.indexOf(obj.v)

            if (i !== -1) {
                Vue.set(obj.p, i, data)
            }
        }

        this.update_ids()

    }

    // Merge object or array (reactively)
    merge(query, data) {

        let objects = this.get_by_query(query)

        for (var obj of objects) {
            if (Array.isArray(obj.v)) {

                if (!Array.isArray(data)) continue

                // If array is timeseries, merge it by timestamp
                // else merge by item index

                // ...

            } else if (typeof obj.v === 'object') {

                // The only way to get Vue to update all stuff
                // reactively is to create a brand new object.
                // TODO: Is there a simpler approach?
                let new_obj = {}
                Object.assign(new_obj, obj.v)
                Object.assign(new_obj, data)
                Vue.set(obj.p, obj.i, new_obj)

            }
        }

        this.update_ids()

    }

    // Remove an overlay by query (id/type/name/...)
    del(query) {

        let objects = this.get_by_query(query)

        for (var obj of objects) {

            // Find current index of the field (if not defined)
            let i = obj.i !== undefined ?
                obj.i : obj.p.indexOf(obj.v)

            if (i >= 0) {
                Vue.delete(obj.p, i)
            }

        }

        this.update_ids()
    }


    // Show indicator
    show(query) {
        if (query === 'offchart' || query === 'onchart') {
             query += '.'
        } else if (query === '.') {
            query = ''
        }
        this.merge(query + '.settings', { display: true })
    }

    // Hide indicator
    hide(query) {
        if (query === 'offchart' || query === 'onchart') {
             query += '.'
        } else if (query === '.') {
             query = ''
        }
        this.merge(query + '.settings', { display: false })
    }

    // Returns array of objects matching query.
    // Object contains { parent, index, value }
    // TODO: query caching
    get_by_query(query) {

        let tuple = query.split('.')

        switch (tuple[0]) {
            case 'chart':
                return this.chart_as_piv(tuple)
            case 'onchart':
            case 'offchart':
                return this.query_search(query, tuple)
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
                return [/*ch[0],*/ ...on, ...off]

        }

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
