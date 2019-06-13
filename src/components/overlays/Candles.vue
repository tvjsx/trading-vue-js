<script>
// Renedrer for candlesticks + volume (optional)
// It can be used as the main chart or an indicator

import Overlay from '../../mixins/overlay.js'
import { layout_cnv } from '../js/layout_cnv.js'
import Candle from '../js/candle_ext.js'
import Volbar from '../js/volbar_ext.js'

export default {
    name: 'Candles',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },

        draw(ctx) {

            // Candles & Volume layouts
            let cnv = layout_cnv(this.$props)

            for (var c of cnv.candles) {
                new Candle(this, ctx, c)
            }

            if (!this.show_volume) return

            for (var v of cnv.volume) {
                new Volbar(this, ctx, v)
            }

        },
        use_for() { return ['Candles'] },
        //data_colors() { return [this.color] }
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
        colorCandleUp() {
            return this.sett.colorCandleUp ||
            this.$props.colors.colorCandleUp
        },
        colorCandleDw() {
            return this.sett.colorCandleDw ||
            this.$props.colors.colorCandleDw
        },
        colorWickUp() {
            return this.sett.colorWickUp ||
            this.$props.colors.colorWickUp
        },
        colorWickDw() {
            return this.sett.colorWickDw ||
            this.$props.colors.colorWickDw
        },
        colorWickSm() {
            return this.sett.colorWickSm ||
            this.$props.colors.colorWickSm
        }
    },
    data() {
        return {

        }
    }

}
</script>
