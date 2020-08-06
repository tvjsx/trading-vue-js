
// Web-worker

import se from './script_engine.js'

// Forward

self.onmessage = e => {

    switch(e.data.type) {

        case 'update-settings':

            se.sett = e.data.data

            break

        case 'exec-script':

            if (!se.data.ohlcv) {
                self.postMessage({ type: 'request-data' })
            }

            se.queue.push(e.data.data)
            se.exec_all()

            break

        case 'upload-data':

            if (e.data.data.ohlcv) {
                se.data.ohlcv = e.data.data.ohlcv
                se.exec_all()
            }

            break

    }

}

// Backward

se.onmessage = (type, data) => {

    switch(type) {

        case 'overlay-data':

            self.postMessage({type, data})

            break

    }

}
