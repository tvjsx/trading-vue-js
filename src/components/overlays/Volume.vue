<script>
// Standalone renedrer for the volume

import Overlay from '../../mixins/overlay.js'
import { layout_vol } from '../js/layout_cnv.js'
import Volbar from '../js/volbar_ext.js'

export default {
    name: 'Volume',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
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
        legend(values) {
            const color = values[2] ?
                this.colorVolUpLegend :
                this.colorVolDwLegend

            return [{
                value: values[1], color
            }]
        }
    },

    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        colorVolUp() {
            return this.sett.colorVolUp ||
            this.$props.colors.colorVolUp
        },
        colorVolDw() {
            return this.sett.colorVolDw ||
            this.$props.colors.colorVolDw
        },
        colorVolUpLegend() {
            return this.sett.colorVolUpLegend ||
            this.$props.colors.colorCandleUp
        },
        colorVolDwLegend() {
            return this.sett.colorVolDwLegend ||
            this.$props.colors.colorCandleDw
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
