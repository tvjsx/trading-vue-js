
// Sends all dc.sett changes to the web-worker

export default function(sett, ww) {

    const h = {
        get: function(sett, k) {
            return sett[k]
        },
        set: function(sett, k, v) {
            sett[k] = v
            ww.just('update-dc-settings', sett)
            return true
        }
    }

    ww.just('update-dc-settings', sett)

    return new Proxy(sett, h)
}
