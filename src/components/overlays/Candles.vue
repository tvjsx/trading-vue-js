<script>
// Renedrer for candlesticks + volume (optional)
// It can be used as the main chart or an indicator

import Overlay from '../../mixins/overlay.js'
import { layout_cnv } from '../js/layout_cnv.js'
import Candle from '../primitives/candle.js'
import Volbar from '../primitives/volbar.js'
import Price from '../primitives/price.js'

export default {
    name: 'Candles',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.2.1' }
        },
        init() {
            this.price = new Price(this)
        },
        draw(ctx) {

            // If data === main candlestick data
            // render as main chart:
            if (this.$props.sub === this.$props.data) {
                var cnv = {
                    candles: this.$props.layout.candles,
                    volume: this.$props.layout.volume,
                }
            // Else, as offchart / onchart indicator:
            } else {
                cnv = layout_cnv(this)
            }

            if (this.show_volume) {
                var cv = cnv.volume
                for (var i = 0, n = cv.length; i < n; i++) {
                    new Volbar(this, ctx, cv[i])
                }
            }

            var cc = cnv.candles
            for (var i = 0, n = cc.length; i < n; i++) {
                new Candle(this, ctx, cc[i])
            }

            if (this.price_line) this.price.draw(ctx)
        },
        use_for() { return ['Candles'] },

        // In case it's added as offchart overlay
        y_range() {
            var hi = -Infinity, lo = Infinity
            for (var i = 0, n = this.sub.length; i < n; i++) {
                let x = this.sub[i]
                if (x[2] > hi) hi = x[2]
                if (x[3] < lo) lo = x[3]
            }
            return [hi, lo]
        }
    },

    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        show_volume() {
            return 'showVolume' in this.sett ?
                this.sett.showVolume : true
        },
        price_line() {
            return 'priceLine' in this.sett ?
                this.sett.priceLine : true
        },
        colorCandleUp() {
            return this.sett.colorCandleUp ||
            this.$props.colors.candleUp
        },
        colorCandleDw() {
            return this.sett.colorCandleDw ||
            this.$props.colors.candleDw
        },
        colorWickUp() {
            return this.sett.colorWickUp ||
            this.$props.colors.wickUp
        },
        colorWickDw() {
            return this.sett.colorWickDw ||
            this.$props.colors.wickDw
        },
        colorWickSm() {
            return this.sett.colorWickSm ||
            this.$props.colors.wickSm
        },
        colorVolUp() {
            return this.sett.colorVolUp ||
            this.$props.colors.volUp
        },
        colorVolDw() {
            return this.sett.colorVolDw ||
            this.$props.colors.volDw
        }
    },
    data() {
        return { price: {} }
    }

}
</script>
