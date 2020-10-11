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

            // TODO: For some reason need to rebuild to see the changes here

            this.$emit('new-interface', {
                target: 'grid',
                component: Ux1,
                pin: [1585605600000, 6636], // Values can be: '100px', '50%', 'mouse', 'cursor'
                pin_position: '50%, 100% + 20px',
                show_pin: true,
                win_styling: false,
                inactive_btn_color: '#ffffff99',
                vars: {
                    p_text: 'Interface',
                    button_text: 'OKAY',
                    custom_back: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/d58c4258730099.5a0726f0f1616.gif)',
                    color: 'white'
                }
            })

            this.$emit('new-interface', {
                target: 'grid',
                component: Ux1,
                pin: [1585936800000, 6700],
                pin_position: '50%,100% + 20px',
                show_pin: true,
                win_header: false,
                vars: {
                    p_text: 'Interface.crypto',
                    button_text: 'OBEY'
                }
            })

            this.$emit('new-interface', {
                target: 'grid',
                component: Ux1,
                pin: [1585936800000 - 3600000 * 50, 6600],
                pin_position: '-20px,-20px',
                show_pin: true,
                vars: {
                    p_text: 'Interface.gov',
                    button_text: 'DO NOT OBEY'
                }
            })

            /*
            this.$emit('new-interface', {
                target: 'grid',
                component: Ux2,
                pin: ['mouse', 'mouse'],
                pin_position: '-20px,-20px',
                win_styling: false,
                win_header: false,
                pointer_events: 'none'
            })

            let schiff_id = this.last_ux_id

            this.$emit('new-interface', {
                target: 'grid',
                component: Ux2,
                pin: ['50%', '50%'],
                pin_position: '50%,50%',
                win_styling: false,
                win_header: false,
                pointer_events: 'none',
                vars: {
                    url: 'http://pngimg.com/uploads/gold/gold_PNG10998.png',
                    schiff_id
                }
            })*/

        },
        draw(ctx) {},

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
