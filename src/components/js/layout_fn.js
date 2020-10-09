// Layout functional interface

import Utils from '../../stuff/utils.js'
import math from '../../stuff/math.js'

export default function(self, range) {

    const ib = self.ti_map.ib
    const dt = range[1] - range[0]
    const r = self.spacex / dt
    const ls = self.grid.logScale || false

    Object.assign(self, {
        // Time to screen coordinates
        t2screen: t => {
            if (ib) t = self.ti_map.smth2i(t)
            return Math.floor((t - range[0]) * r) - 0.5
        },
        // $ to screen coordinates
        $2screen: y => {
            if (ls) y = math.log(y)
            return Math.floor(y * self.A + self.B) - 0.5
        },
        // Time-axis nearest step
        t_magnet: t => {
            if (ib) t = self.ti_map.smth2i(t)
            const cn = self.candles || self.master_grid.candles
            const arr = cn.map(x => x.raw[0])
            const i = Utils.nearest_a(t, arr)[0]
            if (!cn[i]) return
            return Math.floor(cn[i].x) - 0.5
        },
        // Screen-Y to dollar value (or whatever)
        screen2$: y => {
            if (ls) return math.exp((y - self.B) / self.A)
            return (y - self.B) / self.A
        },
        // Screen-X to timestamp
        screen2t: x => {
            // TODO: most likely Math.floor not needed
            // return Math.floor(range[0] + x / r)
            return range[0] + x / r
        },
        // $-axis nearest step
        $_magnet: price => { },
        // Nearest candlestick
        c_magnet: t => {
            const cn = self.candles || self.master_grid.candles
            const arr = cn.map(x => x.raw[0])
            const i = Utils.nearest_a(t, arr)[0]
            return cn[i]
        },
        // Nearest data points
        data_magnet: t => {  /* TODO: implement */ }
    })

    return self

}
