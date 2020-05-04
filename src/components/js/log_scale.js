
// Log-scale mode helpers

// TODO: all-negative numbers (sometimes wrong scaling)

import math from '../../stuff/math.js'

export default {

    candle(self, mid, p, $p) {
        return {
            x: mid,
            w: self.px_step * $p.config.CANDLEW,
            o: Math.floor(math.log(p[1]) * self.A + self.B),
            h: Math.floor(math.log(p[2]) * self.A + self.B),
            l: Math.floor(math.log(p[3]) * self.A + self.B),
            c: Math.floor(math.log(p[4]) * self.A + self.B),
            raw: p
        }
    },

    expand(self, height) {
        // expand log scale
        let A = - height / (math.log(self.$_hi) - math.log(self.$_lo))
        let B = - math.log(self.$_hi) * A

        let top = -height * 0.1
        let bot = height * 1.1

        self.$_hi = math.exp((top - B) / A)
        self.$_lo = math.exp((bot - B) / A)
    }

}
