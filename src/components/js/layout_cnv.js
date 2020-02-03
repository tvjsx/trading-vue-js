// Claculates postions and sizes for candlestick
// and volume bars for the given subset of data

import Utils from '../../stuff/utils.js'

export function layout_cnv(self) {

    const $p = self.$props
    const sub = $p.data
    const t2screen = $p.layout.t2screen
    const layout = $p.layout

    const candles = []
    const volume = []

    // The volume bar height is determined as a percentage of
    // the chart's height (VOLSCALE)
    const maxv = Math.max(...sub.map(x => x[5]))
    const vs = $p.config.VOLSCALE * layout.height / maxv

    // Subset interval against main interval
    const [interval2, ratio] = new_interval(layout, $p, sub)
    const px_step2 = layout.px_step * ratio

    const splitter = px_step2 > 5 ? 1 : 0
    let prev = null

    // A & B are current chart transformations:
    // A === scale,  B === Y-axis shift
    for (let i = 0; i < sub.length; i++) {
        const p = sub[i]
        const mid = t2screen(p[0]) + 1

        // Clear volume bar if there is a time gap
        if (sub[i-1] && p[0] - sub[i-1][0] > interval2) {
            prev = null
        }

        const x1 = prev || Math.floor(mid - px_step2 * 0.5)
        const x2 = Math.floor(mid + px_step2 * 0.5) - 0.5

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

    const $p = self.$props
    const sub = $p.data
    const t2screen = $p.layout.t2screen
    const layout = $p.layout

    const volume = []

    // Detect data second dimention size:
    const dim = sub[0] ? sub[0].length : 0

    // Support special volume data (see API book), or OHLCV
    // Data indices:
    self._i1 = dim < 6 ? 1 : 5
    self._i2 = dim < 6 ? (p => p[2]) : (p => p[4] >= p[1])

    const maxv = Math.max(...sub.map(x => x[self._i1]))
    const volscale = self.volscale || $p.config.VOLSCALE
    const vs = volscale * layout.height / maxv

    // Subset interval against main interval
    const [interval2, ratio] = new_interval(layout, $p, sub)
    const px_step2 = layout.px_step * ratio

    const splitter = px_step2 > 5 ? 1 : 0
    let prev = null

    // A & B are current chart tranformations:
    // A === scale,  B === Y-axis shift
    for (let i = 0; i < sub.length; i++) {
        const p = sub[i]
        const mid = t2screen(p[0]) + 1

        // Clear volume bar if there is a time gap
        if (sub[i-1] && p[0] - sub[i-1][0] > interval2) {
            prev = null
        }
        const x1 = prev || Math.floor(mid - px_step2 * 0.5)
        const x2 = Math.floor(mid + px_step2 * 0.5) - 0.5

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
