
// Sends all dc.sett changes to the web-worker

import ww from './script_ww_api.js'

export default function(sett) {

    const h = {
        get: function(sett, k) {
            return sett[k]
        },
        set: function(sett, k, v) {
            sett[k] = v
            ww.just('update-settings', sett)
            return true
        }
    }

    ww.just('update-settings', sett)

    return new Proxy(sett, h)
}
