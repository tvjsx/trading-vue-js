<script>
// R S I . Because we love it

// Adds all necessary stuff for you.
import Overlay from '../../mixins/overlay.js'

export default {
    name: 'Range',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.1' }
        },
        // Here goes your code. You are provided with:
        // { All stuff is reactive }
        // $props.layout -> positions of all chart elements +
        //  some helper functions (see layout_fn.js)
        // $props.interval -> candlestick time interval
        // $props.sub -> current subset of candlestick data
        // $props.data -> your indicator's data subset.
        //  Comes "as is", should have the following format:
        //  [[<timestamp>, ... ], ... ]
        // $props.colors -> colors (see TradingVue.vue)
        // $props.cursor -> current position of crosshair
        // $props.settings -> indicator's custom settings
        //  E.g. colors, line thickness, etc. You define it.
        // $props.num -> indicator's layer number (of All
        // layers in the current grid)
        // $props.id -> indicator's id (e.g. EMA_0)
        // ~
        // Finally, let's make the canvas dirty!
        draw(ctx) {

            const layout = this.$props.layout
            const upper = layout.$2screen(this.sett.upper || 70)
            const lower = layout.$2screen(this.sett.lower || 30)
            const data = this.$props.data

            // RSI values

            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color
            ctx.beginPath()

            for (var k = 0, n = data.length; k < n; k++) {
                let p = data[k]
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1])
                ctx.lineTo(x, y)
            }

            ctx.stroke()

            ctx.strokeStyle = this.band_color
            ctx.setLineDash([5]) // Will be removed after draw()
            ctx.beginPath()

            // Fill the area between the bands
            ctx.fillStyle = this.back_color
            ctx.fillRect(0, upper, layout.width, lower - upper)

            // Upper band
            ctx.moveTo(0, upper)
            ctx.lineTo(layout.width, upper)

            // Lower band
            ctx.moveTo(0, lower)
            ctx.lineTo(layout.width, lower)

            ctx.stroke()
        },

        // For all data with these types overlay will be
        // added to the renderer list. And '$props.data'
        // will have the corresponding values. If you want to
        // redefine the default behviour for a prticular
        // indicator (let's say EMA),
        // just create a new overlay with the same type:
        // e.g. use_for() { return ['EMA'] }.
        use_for() { return ['Range', 'RSI'] },

        // Colors for the legend, should have the
        // same dimention as a data point (excl. timestamp)
        data_colors() { return [this.color] },

        // Y-Range tansform. For example you need a fixed
        // Y-range for an indicator, you can do it here!
        // Gets estimated range, @return you favorite range
        y_range(hi, lo) {
            return [
                Math.max(hi, this.sett.upper || 70),
                Math.min(lo, this.sett.lower || 30)
            ]
        }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        line_width() {
            return this.sett.lineWidth || 0.75
        },
        color() {
            return this.sett.color || '#ec206e'
        },
        band_color() {
            return this.sett.bandColor || '#ddd'
        },
        back_color() {
            return this.sett.backColor || '#381e9c16'
        }
    }

}
</script>
