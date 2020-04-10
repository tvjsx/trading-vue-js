<script>
// Spline + several test interfaces
// Adds all necessary stuff for you.
import Overlay from '../../../src/mixins/overlay.js'
import Ux1 from './Ux1.vue'
import Ux2 from './Ux2.vue'

export default {
    name: 'SplineUx',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        init() {
            this.$emit('new-interface', {
                target: 'grid',
                component: Ux1,
                pin: ['50%', '50%'],
                pin_position: '50%, 50%',
                show_pin: true,
                pointer_events: 'none'
            })
            /*this.$emit('new-interface', {
                target: 'grid',
                component: Ux1,
                pin: [1585936800000, 6600],
                pin_position: '50%,-20px',
                show_pin: true,
            })

            this.$emit('new-interface', {
                target: 'grid',
                component: Ux1,
                pin: [1585936800000 - 3600000 * 50, 6800],
                pin_position: '-20px,100%+20px',
                show_pin: true,
            })

            this.$emit('new-interface', {
                target: 'grid',
                component: Ux1,
                pin: [1585936800000 - 3600000 * 25, 6600],
                pin_position: '100%+20px,-20px',
                show_pin: true,
            })*/
        },
        draw(ctx) {
            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color
            ctx.beginPath()

            const layout = this.$props.layout
            const i = this.data_index

            for (var p of this.$props.data) {
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[i])
                ctx.lineTo(x, y)
            }
            ctx.stroke()
        },

        use_for() { return ['SplineUx'] },

        data_colors() { return [this.color] }
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
            const n = this.$props.num % 5
            return this.sett.color || this.COLORS[n]
        },
        data_index() {
            return this.sett.dataIndex || 1
        }
    },
    data() {
        return {
            COLORS:
            [
                '#42b28a', '#5691ce', '#612ff9',
                '#d50b90', '#ff2316'
            ]
        }
    }

}
</script>
