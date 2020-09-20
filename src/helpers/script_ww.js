
// Web-worker

import se from './script_engine.js'
import Utils from '../stuff/utils.js'
import * as u from './script_utils.js'

var data_requested = false

// DC => WW

self.onmessage = async e => {
    //console.log('Worker got:', e.data.type)
    switch(e.data.type) {

        case 'update-dc-settings':

            se.sett = e.data.data

            break

        case 'exec-script':

            if (!se.data.ohlcv && !data_requested) {
                data_requested = true
                self.postMessage({ type: 'request-data' })
            }
            se.tf = e.data.data.tf
            se.queue.push(e.data.data.s)
            se.exec_all()

            break

        case 'exec-all-scripts':

            if (!se.data.ohlcv && !data_requested) {
                data_requested = true
                self.postMessage({ type: 'request-data' })
            }
            
            se.tf = e.data.data.tf
            se.exec_all()

            break

        case 'upload-data':

            if (e.data.data.ohlcv) {
                self.postMessage({ type: 'data-uploaded' })

                await Utils.pause(1)

                se.data.ohlcv = e.data.data.ohlcv
                data_requested = false
                se.exec_all()
            }

            break

        case 'upload-module':

            let lib = u.make_module_lib(e.data.data)
            se.mods[e.data.data.id] = new (
                new Function(
                    'mod', 'se', 'lib',
                    u.f_body(e.data.data.main)
                )
            )(e.data.data.id, se, lib)

            break

        case 'module-event':
            // TODO: this
            break

        case 'update-data':

            if (e.data.data.ohlcv) {

                se.update(e.data.data.ohlcv)

            }

            break

        case 'update-ov-settings':

            se.exec_sel(e.data.data)

            break

        case 'remove-scripts':

            se.remove_scripts(e.data.data)

            break
    }

}

// WW => DC

se.send = (type, data) => {

    switch(type) {

        case 'overlay-data':
        case 'overlay-update':
        case 'engine-state':
        case 'change-overlay':
        case 'module-data':

            self.postMessage({type, data})

            break

    }

}
