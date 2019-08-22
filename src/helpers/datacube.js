
// Main DataHelper class. A container for data,
// which works as a proxy and CRUD interface

import DCCore from './dc_core.js'

// Interface methods. Private methods in dc_core.js
export default class DataCube extends DCCore {

    constructor(data = {}) {

        super()
        this.data = data

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
                this.tv.$set(obj.p, i, data)
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
                // If array is a timeseries, merge it by timestamp
                // else merge by item index
                if (obj.v[0] && obj.v[0].length >= 2) {
                    this.merge_ts(obj, data)
                } else {
                    this.merge_objects(obj, data, [])
                }
            } else if (typeof obj.v === 'object') {
                this.merge_objects(obj, data)
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

            if (i !== -1) {
                this.tv.$delete(obj.p, i)
            }

        }

        this.update_ids()
    }

    // Lock overlays from being pulled by query_search
    // TODO: subject to review
    lock(query) {
        let objects = this.get_by_query(query)
        objects.forEach(x => {
            if (x.v && x.v.id && x.v.type) {
                x.v.locked = true
            }
        })
    }

    // Unlock overlays from being pulled by query_search
    //
    unlock(query) {
        let objects = this.get_by_query(query, true)
        objects.forEach(x => {
            if (x.v && x.v.id && x.v.type) {
                x.v.locked = false
            }
        })
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

    // Set data loader callback
    onrange(callback) {
        this.loader = callback
        this.tv.set_loader(callback ? this : null)
    }

}
