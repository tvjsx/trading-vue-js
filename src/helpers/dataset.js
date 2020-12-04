
// Dataset proxy between vuejs & WebWorker

import { now } from './script_utils.js'

export default class Dataset {

    constructor(dc, desc) {

        // TODO: dataset url arrow fn tells WW
        // to load the ds directly from web

        this.type = desc.type
        this.id = desc.id
        this.dc = dc

        // Send the data to WW
        if (desc.data) {
            this.dc.ww.just('upload-data', {
                [this.id]: desc
            })
            // Remove the data from the descriptor
            delete desc.data
        }

        let proto = Object.getPrototypeOf(this)
        Object.setPrototypeOf(desc, proto)
        Object.defineProperty(desc, 'dc', {
            get() { return dc }
        })

    }

    // Watch for the changes of descriptors
    static watcher(n, p) {
        let nids = n.map(x => x.id)
        let pids = p.map(x => x.id)

        for (var id of nids) {
            if (!pids.includes(id)) {
                let ds = n.filter(x => x.id === id)[0]
                this.dss[id] = new Dataset(this, ds)
            }
        }

        for (var id of pids) {
            if (!nids.includes(id) && this.dss[id]) {
                this.dss[id].remove()
            }
        }
    }

    // Make an object for data transfer
    static make_tx(dc, types) {

        let main = dc.data.chart.data
        let base = {}
        if (types.find(x => x.type === 'OHLCV')) {
            base = { ohlcv: main }
        }

        // TODO: add more sophisticated search
        // (using 'script.datasets' paramerter)
        /*for (var req of types) {
            let ds = Object.values(dc.dss || {})
                .find(x => x.type === req.type)
            if (ds && ds.data) {
                base[ds.id] = {
                    id: ds.id,
                    type: ds.type,
                    data: ds.data
                }
            }
        }*/
        // TODO: Data request callback ?

        return base
    }

    // Set data (overwrite the whole dataset)
    set(data, exec = true) {
        this.dc.ww.just('dataset-op', {
            id: this.id,
            type: 'set',
            data: data,
            exec: exec
        })
    }

    // Update with new data (array of data points)
    update(arr) {
        this.dc.ww.just('update-data', {
            [this.id]: arr
        })
    }

    // Send WW a chunk to merge. The merge algo
    // here is simpler than in DC. It just adds
    // data at the beginning or/and the end of ds
    merge(data, exec = true) {
        this.dc.ww.just('dataset-op', {
            id: this.id,
            type: 'mrg',
            data: data,
            exec: exec
        })
    }

    // Remove the ds from WW
    remove(exec = true) {
        this.dc.del(`datasets.${this.id}`)
        this.dc.ww.just('dataset-op', {
            id: this.id,
            type: 'del',
            exec: exec
        })
        delete this.dc.dss[this.id]
    }

    // Fetch data from WW
    async data() {
        let ds = await this.dc.ww.exec(
            'get-dataset',
            this.id
        )
        if (!ds) return
        return ds.data
    }

}

// Dataset reciever (created on WW)

export class DatasetWW {

    constructor(id, data) {
        this.last_upd = now()
        this.id = id
        if (Array.isArray(data)) {
            // Regular array
            this.data = data
            if (id === 'ohlcv') this.type = 'OHLCV'
        } else {
            // Dataset descriptor
            this.data = data.data
            this.type = data.type
        }
    }

    // Update from 'update-data' event
    // TODO: ds size limit (in MB / data points)
    static update_all(se, data) {
        for (var k in data) {
            if (k === 'ohlcv') continue
            let id = k.split('.')[1] || k
            if (!se.data[id]) continue
            let arr = se.data[id].data
            let iN = arr.length - 1
            let last = arr[iN]

            for (var dp of data[k]) {
                if (!last || dp[0] > last[0]) {
                    arr.push(dp)
                }
            }
            se.data[id].last_upd = now()
        }
    }

    merge(data) {
        let len = this.data.length
        if (!len) {
            this.data = data
            return
        }
        let t0 = this.data[0][0]
        let tN = this.data[len - 1][0]
        let l = data.filter(x => x[0] < t0)
        let r = data.filter(x => x[0] > tN)
        this.data = l.concat(this.data, r)
    }

    // On dataset operation
    op(se, op) {
        this.last_upd = now()
        switch(op.type) {
            case 'set':
                this.data = op.data
                se.recalc_size()
                break
            case 'del':
                delete se.data[this.id]
                se.recalc_size()
                break
            case 'mrg':
                this.merge(op.data)
                se.recalc_size()
                break
        }
    }
}
