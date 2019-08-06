
// Main DataHelper class. A container for data,
// which works as a proxy and CRUD interface

import Vue from 'vue'

export default class DataCube {

    constructor(data = {}) {
        this.data = data
        this.init()
        this.update_ids()


        /*console.log(this.get_by_query('onchart.EMA0'))
        console.log(this.get_by_query('Keltner'))
        console.log(this.get_by_query('chart.data'))
        console.log(this.get_by_query('offchart.RSI'))
        console.log(this.get_by_query('offchart.RSI.data'))
        console.log(this.get_by_query('DI'))
        console.log(this.get_by_query('Splines0.data'))
        console.log(this.get_by_query('Segment.settings'))*/

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
        }
        count = {}
        for (var ov of this.data.offchart) {
            if (count[ov.type] === undefined) {
                count[ov.type] = 0
            }
            let i = count[ov.type]++
            ov.id = `offchart.${ov.type}${i}`
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

    // Remove an overlay by query (id/type/name/...)
    remove(query) {

        let objects = this.get_by_query(query)

        for (var obj of objects) {
            if (!obj || !obj.id) continue
            let side = obj.id.split('.')[0]

            switch (side) {
                case 'onchart':
                case 'offchart':
                    let i = this.data[side].indexOf(obj)
                    if (i >= 0) {
                        Vue.delete(this.data[side], i)
                    }
                    break;
            }
        }
    }

    // Update data points (update or push
    // depending on new data point timestamp)
    update(query, data) {



    }

    // Show indicator
    show() {

    }

    // Hide indicator
    hide() {

    }

    // Returns array of objects matching query
    get_by_query(query) {

        let tuple = query.split('.')

        switch (tuple[0]) {
            case 'chart':
                let field = tuple[1]
                return field ?
                    [this.data.chart[field]] :
                    [this.data.chart]
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
            x => x.id === query ||
                 x.id.includes(path) ||
                 x.name === query ||
                 x.name.includes(path)
            )

        if (field) {
            return arr.map(x => x[field])
        }

        return arr
    }

}
