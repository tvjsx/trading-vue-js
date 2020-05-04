// Claculates postions and sizes for candlestick
// and volume bars for the given subset of data

import Utils from '../../stuff/utils.js'

export function layout_cnv(self) {

    let $p = self.$props
    let sub = $p.data
    let t2screen = $p.layout.t2screen
    let layout = $p.layout

    let candles = []
    let volume = []

    // The volume bar height is determined as a percentage of
    // the chart's height (VOLSCALE)
    let maxv = Math.max(...sub.map(x => x[5]))
    let vs =  $p.config.VOLSCALE * layout.height / maxv
    var x1, x2, w, avg_w, mid, prev = undefined

    // Subset interval against main interval
    var [interval2, ratio] = new_interval(layout, $p, sub)
    let px_step2 = layout.px_step * ratio

    let splitter = px_step2 > 5 ? 1 : 0

    // A & B are current chart tranformations:
    // A === scale,  B === Y-axis shift
    for (var i = 0; i < sub.length; i++) {
        let p = sub[i]
        mid = t2screen(p[0]) + 1

        // Clear volume bar if there is a time gap
        if (sub[i-1] && p[0] - sub[i-1][0] > interval2) {
            prev = null
        }

        x1 = prev || Math.floor(mid - px_step2 * 0.5)
        x2 = Math.floor(mid + px_step2 * 0.5) - 0.5

        // TODO: add log scale support
        candles.push({
            x: mid,
            w: layout.px_step * $p.config.CANDLEW * ratio,
            o: Math.floor(p[1] * layout.A + layout.B),
            h: Math.floor(p[2] * layout.A + layout.B),
            l: Math.floor(p[3] * layout.A + layout.B),
            c: Math.floor(p[4] * layout.A + layout.B),
            raw: p
        })

        volume.push({
            x1: x1,
            x2: x2,
            h: p[5] * vs,
            green: p[4] >= p[1],
            raw: p
        })
        prev = x2 + splitter
    }

    return { candles, volume }

}

export function layout_vol(self) {

    let $p = self.$props
    let sub = $p.data
    let t2screen = $p.layout.t2screen
    let layout = $p.layout

    let volume = []

    // Detect data second dimention size:
    let dim = sub[0] ? sub[0].length : 0

    // Support special volume data (see API book), or OHLCV
    // Data indices:
    self._i1 = dim < 6 ? 1 : 5
    self._i2 = dim < 6 ? (p => p[2]) : (p => p[4] >= p[1])

    let maxv = Math.max(...sub.map(x => x[self._i1]))
    let volscale = self.volscale || $p.config.VOLSCALE
    let vs = volscale * layout.height / maxv
    var x1, x2, mid, prev = undefined

    // Subset interval against main interval
    var [interval2, ratio] = new_interval(layout, $p, sub)
    let px_step2 = layout.px_step * ratio

    let splitter = px_step2 > 5 ? 1 : 0

    // A & B are current chart tranformations:
    // A === scale,  B === Y-axis shift
    for (var i = 0; i < sub.length; i++) {
        let p = sub[i]
        mid = t2screen(p[0]) + 1

        // Clear volume bar if there is a time gap
        if (sub[i-1] && p[0] - sub[i-1][0] > interval2) {
            prev = null
        }
        x1 = prev || Math.floor(mid - px_step2 * 0.5)
        x2 = Math.floor(mid + px_step2 * 0.5) - 0.5

        volume.push({
            x1: x1,
            x2: x2,
            h: p[self._i1] * vs,
            green: self._i2(p),
            raw: p
        })
        prev = x2 + splitter
    }
    return volume

}

function new_interval(layout, $p, sub) {
    // Subset interval against main interval
    if (!layout.ti_map.ib) {
        var interval2 = $p.tf || Utils.detect_interval(sub)
        var ratio = interval2 / $p.interval
    } else {
        if ($p.tf) {
            var ratio = $p.tf / layout.ti_map.tf
            var interval2 = ratio
        } else {
            var interval2 = Utils.detect_interval(sub)
            var ratio = interval2 / $p.interval
        }
    }
    return [interval2, ratio]
}
