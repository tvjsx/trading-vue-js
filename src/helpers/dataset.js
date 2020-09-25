
// Dataset proxy between vuejs & WebWorker

export default class Dataset {

    constructor(dc, desc) {

        this.name = desc.name
        this.id = desc.id
        this.dc = dc

        // Send the data to WW
        if (desc.data) {
            this.dc.ww.just('upload-data', {
                [this.id]: desc.data
            })
            // Remove the data from the descriptor
            delete desc.data
        }

    }

    // Watch for the changes of descriptors
    static watcher(n, p) {

    }

    // Make an object for data transfer
    static make_tx(dc, ids) {
        let main = dc.data.chart.data

        let base = {}
        if (ids.includes('ohlcv')) {
            base = { ohlcv: main }
        }

        // TODO: Send datasets 

        return base
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
