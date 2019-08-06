
// Main DataHelper class. A container for data,
// which works as a proxy and CRUD interface

import Vue from 'vue'

export default class DataCube {

    constructor(data) {
        this.data = data
        this.init()
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
            Vue.set(this.data, 'onchart', {})
        }

        if (!('offchart' in this.data)) {
            Vue.set(this.data, 'offchart', {})
        }
    }

    // Add new overlay
    add(side, overlay) {

    }

    // Remove an overlay by id
    remove() {

    }

    // Update data points (update or push
    // depending on new data point timestamp)
    update() {

    }

}
