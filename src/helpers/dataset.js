
// Dataset proxy between vuejs & WebWorker

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

    }

    // Watch for the changes of descriptors
    static watcher(n, p) {

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
        for (var req of types) {
            let ds = Object.values(dc.dss || {})
                .find(x => x.type === req.type)
            if (ds && ds.data) {
                base[ds.id] = {
                    id: ds.id,
                    type: ds.type,
                    data: ds.data
                }
            }
        }
        // TODO: Data request callback ?

        return base
    }

    // Set data (overwrite the whole dataset)
    set(data) {
        this.dc.ww.just('dataset-op', {
            id: this.id,
            type: 'set',
            data: data
        })
    }

    // Update with new data
    update() {

    }

    // Send to WW a chunk to merge
    merge() {

    }

    // Remove the ds from WW
    remove() {

    }

}

// Dataset reciever (created on WW)

export class DatasetWW {
    constructor(id, data) {
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

    // On dataset operation
    op(op) {
        switch(op.type) {
            case 'set':
                this.data = op.data
                break
        }
    }
}
