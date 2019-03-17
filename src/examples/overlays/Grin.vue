<script>
// Grin

// Adds all necessary stuff for you.
import Overlay from '../../mixins/overlay.js'

export default {
    name: 'Grin',
    mixins: [Overlay],
    methods: {
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
        // $props.settings -> indicator custom settings
        //  E.g. colors, line thickness, etc. You define it.
        // ~
        // Finally, let's make the canvas dirty!
        draw(ctx) {
            ctx.lineWidth = 3
            ctx.strokeStyle = 'yellow'
            ctx.beginPath()
            ctx.arc(75, 85, 50, 0, Math.PI * 2, true) // Outer circle
            ctx.moveTo(110, 85)
            ctx.arc(75, 85, 35, 0, Math.PI, false)  // Mouth (clockwise)
            ctx.moveTo(65, 75)
            ctx.arc(60, 75, 5, 0, Math.PI * 2, true)  // Left eye
            ctx.moveTo(95, 75)
            ctx.arc(90, 75, 5, 0, Math.PI * 2, true)  // Right eye
            ctx.stroke()
        },

        // For all data with these types overlay will be
        // added to the renderer list. And '$props.data'
        // will have the corresponding values. If you want to
        // redefine the default behviour for a prticular
        // indicator (let's say EMA),
        // just create a new overlay with the same type:
        // e.g. use_for() { return ['EMA'] }.
        use_for() { return ['Spline', 'EMA', 'SMA', 'TEMA'] }
    },
    data() {
        // Define internal setting & constants here
        return {}
    }

}
</script>
