// Claculates postions and sizes for candlestick
// and volume bars for the given subset of data

export function layout_cnv($p) {
console.log('here')
    let sub = $p.data
    let t2screen = $p.layout.t2screen
    let layout = $p.layout

    let candles = []
    let volume = []

    // The volume bar height is determined as a percentage of
    // the chart's height (VOLSCALE)
    let maxv = Math.max(...sub.map(x => x[5]))
    let vs = $p.config.VOLSCALE * layout.height / maxv
    var x1, x2, mid, prev = undefined

    let splitter = layout.px_step > 5 ? 1 : 0

    // A & B are current chart tranformations:
    // A === scale,  B === Y-axis shift
    for (var i = 0; i < sub.length; i++) {
        let p = sub[i]
        mid = t2screen(p[0]) + 1
        candles.push({
            x: mid,
            w: layout.px_step * $p.config.CANDLEW,
            o: p[1] * layout.A + layout.B,
            h: p[2] * layout.A + layout.B,
            l: p[3] * layout.A + layout.B,
            c: p[4] * layout.A + layout.B,
            raw: p
        })
        // Clear volume bar if there is a time gap
        if (sub[i-1] && p[0] - sub[i-1][0] > $p.interval) {
            prev = null
        }
        x1 = prev || Math.floor(mid - layout.px_step * 0.5)
        x2 = Math.floor(mid + layout.px_step * 0.5) - 0.5
        volume.push({
            x1: x1,
            x2: x2,
            h: p[5] * vs,
            green: p[4] > p[1],
            raw: p
        })
        prev = x2 + splitter
    }

    return { candles, volume }

}
