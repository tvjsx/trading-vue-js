<script>
// Standalone renedrer for the volume

import Overlay from '../../mixins/overlay.js'
import { layout_vol } from '../js/layout_cnv.js'
import Volbar from '../primitives/volbar.js'

export default {
    name: 'Volume',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.1.0' }
        },

        draw(ctx) {

            // TODO: volume average
            // TODO: Y-axis scaling

            for (var v of layout_vol(this)) {
                new Volbar(this, ctx, v)
            }

        },
        use_for() { return ['Volume'] },

        // Defines legend format (values & colors)
        // _i2 - detetected data index (see layout_cnv)
        legend(values) {

            let flag = this._i2 ?
                this._i2(values) : values[2]

            const color = flag ?
                this.colorVolUpLegend :
                this.colorVolDwLegend

            return [{
                value: values[this._i1 || 1], color
            }]
        },
        // When added as offchart overlay
        // If data is OHLCV => recalc y-range
        // _i1 - detetected data index (see layout_cnv)
        y_range(hi, lo) {
            if (this._i1 === 5) {
                let sub = this.$props.sub
                return [
                    Math.max(...sub.map(x => x[this._i1])),
                    Math.min(...sub.map(x => x[this._i1]))
                ]
            } else {
                return [hi, lo]
            }
        }
    },

    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        colorVolUp() {
            return this.sett.colorVolUp ||
            this.$props.colors.volUp
        },
        colorVolDw() {
            return this.sett.colorVolDw ||
            this.$props.colors.volDw
        },
        colorVolUpLegend() {
            return this.sett.colorVolUpLegend ||
            this.$props.colors.candleUp
        },
        colorVolDwLegend() {
            return this.sett.colorVolDwLegend ||
            this.$props.colors.candleDw
        },
        volscale() {
            return this.sett.volscale ||
            this.$props.grid_id > 0 ? 0.85 :
            this.$props.config.VOLSCALE
        }
    },
    data() {
        return {}
    }

}
</script>
