
// Webworker interface

// Compiled webworker (see webpack/ww_plugin.js)
import worker from './tmp/ww$$$.json'
import Utils from '../stuff/utils.js'

import {} from './script_ww.js' // For webworker-loader to find the ww

class WebWork {

    constructor() {
        this.tasks = {}
        this.onevent = () => {}
        this.start()
    }

    start() {
        if (this.worker) this.worker.terminate()
        // URL.createObjectURL
        window.URL = window.URL || window.webkitURL
        var blob
        try {
            blob = new Blob(worker, {type: 'application/javascript'})
        } catch (e) {
            // Backwards-compatibility
            window.BlobBuilder = window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder
            blob = new BlobBuilder()
            blob.append(response)
            blob = blob.getBlob()
        }
        this.worker = new Worker(URL.createObjectURL(blob))
        this.worker.onmessage = e => this.onmessage(e)
    }

    send(msg, tx_keys) {
        if (tx_keys) {
            let tx_objs = tx_keys.map(k => msg.data[k])
            this.worker.postMessage(msg, tx_objs)
        } else {
            this.worker.postMessage(msg)
        }
    }

    onmessage(e) {
        if (e.data.id in this.tasks) {
            this.tasks[e.data.id](e.data.data)
            delete this.tasks[e.data.id]
        } else {
            this.onevent(e)
        }
    }

    // Execute a task
    async exec(type, data, tx_keys) {
        return new Promise((rs, rj) => {
            let id = Utils.uuid()
            this.send({ type, id, data }, tx_keys)
            this.tasks[id] = res => {
                rs(res)
            }
        })
    }

    // Execute a task, but just do it,
    // not waiting for the result
    just(type, data, tx_keys) {
        let id = Utils.uuid()
        this.send({ type, id, data }, tx_keys)
    }

    async relay(event) {
        return new Promise((rs, rj) => {
            this.send(event, event.tx_keys)
            this.tasks[event.id] = res => {
                rs(res)
            }
        })
    }

    destroy() {
        if (this.worker) this.worker.terminate()
    }
}

export default WebWork
