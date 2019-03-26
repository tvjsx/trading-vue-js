import Const from '../../stuff/constants.js'
import Utils from '../../stuff/utils.js'

import layout_fn from './layout_fn.js'

const { DAY, WEEK, MONTH, TIMESCALES, $SCALES } = Const
const {
    SBMIN,
    EXPAND,
    CANDLEW,
    GRIDX,
    GRIDY,
    BOTBAR,
    VOLSCALE
} = Const.ChartConfig

// master_grid - ref to the master grid
function GridMaker(id, params, master_grid = null) {

    let {
        sub, interval, range, ctx, $p, layers_meta, height, y_t
    } = params

    var self = {}
    var lm = layers_meta[id]
    var y_range_fn = null
    if (lm && Object.keys(lm).length) {
        // Gets last y_range fn()
        y_range_fn = lm[Object.keys(lm).length - 1].y_range
    }

    // Calc vertical ($/₿) range
    function calc_$range() {

        if (!master_grid) {
            // $ candlestick range
            var hi = Math.max(...sub.map(x => x[2]))
            var lo = Math.min(...sub.map(x => x[3]))

        } else {
            // Offchart indicator range
            // TODO: make two types of values: numbers and strings,
            // and calculate range only with numbers.
            // Thus, we can allow meta data to be added
            // e.g. [<timestamp>, 3000, "buy"]
            const dim = sub[0] ? sub[0].length : 0
            let arr = []
            for (var i = 1; i < dim; i++) {
                arr.push(...sub.map(x => x[i]).filter(Number))
            }
            var hi = Math.max(...arr)
            var lo = Math.min(...arr)
            if (y_range_fn) { [hi, lo] = y_range_fn(hi, lo) }
        }
        // Expand a lil
        var [xpn, zk] = calc_zoom()
        self.$_hi = hi + (hi - lo) * (xpn + zk) + 0
        self.$_lo = lo - (hi - lo) * (xpn + zk) + 0

    }

    function calc_zoom() {
        let zoom = y_t ? y_t.zoom : 1
        let zk = y_t ? (1 / zoom - 1) / 2  : 0
        let xpn = Math.min(EXPAND / zoom, EXPAND)
        return [xpn, zk]
    }

    function calc_sidebar() {

        if (sub.length < 2) {
            self.prec = 0
            self.sb = SBMIN
            return
        }

        // Gets formated levels (their lengths),
        // calculates max and measures the sidebar length
        // from it:

        self.prec = calc_precision(sub)
        let subn = sub.filter(x => typeof x[1] === 'number')
        let lens = subn.map(x => x[1].toFixed(self.prec).length)
        let str = '0'.repeat(Math.max(...lens)) + '    '

        self.sb = ctx.measureText(str).width
        self.sb = Math.max(Math.floor(self.sb), SBMIN)

    }

    // Calculate $ precision for the Y-axis
    function calc_precision(data) {

        var max_r = 0, max_l = 0

        // Get max lengths of integer and fractional parts
        data.forEach(x => {
            var [l, r] = x[1].toString().split('.')

            if (r && r.length > max_r) {
                max_r = r.length
            }
            if (l && l.length > max_l) {
                max_l = l.length
            }
        })

        // Select precision scheme depending
        // on the left and right part lengths
        //
        let even = max_r - max_r % 2 + 2

        if (max_l === 1) {
            return Math.min(8, Math.max(2, even))
        }
        if (max_l <= 2) {
            return Math.min(4, Math.max(2, even))
        }

        return 2

    }

    function calc_positions() {

        if (sub.length < 2) return

        let dt = range[1] - range[0]

        // A pixel space available to draw on (x-axis)
        self.spacex = $p.width - self.sb

        // Candle capacity
        let capacity = dt / interval
        self.px_step = self.spacex / capacity

        // px / time ratio
        let r = self.spacex / dt
        self.startx = (sub[0][0] - range[0]) * r

        // Candle Y-transform: (A = scale, B = shift)
        self.A = - height / (self.$_hi - self.$_lo)
        self.B = - self.$_hi * self.A
    }

    // Select nearest good-loking t step (m is target scale)
    function time_step() {
        let xrange = range[1] - range[0]
        let m = xrange * (GRIDX / $p.width)
        let s = TIMESCALES
        return Utils.nearest_a(m, s)[1]
    }

    // Select nearest good-loking $ step (m is target scale)
    function dollar_step() {
        let yrange = self.$_hi - self.$_lo
        let m = yrange * (GRIDY / height)
        let p = parseInt(yrange.toExponential().split('e')[1])
        let d = Math.pow(10, p)
        let s = $SCALES.map(x => x * d)

        // TODO: center the range (look at RSI for eaxmple,
        // it looks ugly when "80" is near the top)
        return Utils.strip(Utils.nearest_a(m, s)[1])
    }

    // TODO: build several grid lines outside of
    // the data area (to fill the space)
    function grid_x() {

        // If this is a subgrid, no need to calc a timeline,
        // we just borrow it from the master_grid
        if (!master_grid) {

            self.t_step = time_step()
            self.xs = []

            // TODO: IMPORTANT missing candles. Will not work
            // Solution: use t2sreen() to convert timestamps
            // to screen coordinates. Also need to check how
            // the whole thing works with missing data points.
            for (var i = 0; i < sub.length; i++) {
                let p = sub[i]
                if (p[0] % self.t_step === 0) {
                    let x = Math.floor(self.startx + i * self.px_step)
                    self.xs.push([x, p])
                }
            }

        } else {

            self.t_step = master_grid.t_step
            self.px_step = master_grid.px_step
            self.startx = master_grid.startx
            self.xs = master_grid.xs

        }
    }

    function grid_y() {

        self.$_step = dollar_step()
        self.ys = []

        let y1 = self.$_lo - self.$_lo % self.$_step
        for (var y$ = y1; y$ <= self.$_hi; y$ += self.$_step) {
            let y = Math.floor(y$ * self.A + self.B)
            if (y > height) continue
            self.ys.push([y, Utils.strip(y$)])
        }

    }

    function apply_sizes() {
        self.width = $p.width - self.sb
        self.height = height
    }

    calc_sidebar()

    return {
        // First we need to calculate max sidebar width
        // (among all grids). Then we can actually make
        // them
        create: () => {
            calc_$range()
            calc_positions()
            grid_x()
            grid_y()
            apply_sizes()

            // Link to the master grid (candlesticks)
            if (master_grid) {
                self.master_grid = master_grid
            }

            // Here we add some helpful functions for
            // plugin creators
            return layout_fn(self, range)

        },
        get_layout: () => self,
        set_sidebar: v => self.sb = v,
        get_sidebar: () => self.sb,
    }
}

export default GridMaker
