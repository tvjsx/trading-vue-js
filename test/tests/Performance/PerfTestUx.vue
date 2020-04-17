<script>
import Overlay from '../../../src/mixins/overlay.js'
import Ux from './Ux.vue'

export default {
    name: 'PertTestUx',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        init() {

            this.$emit('new-interface', {
                target: 'grid',
                component: Ux,
                pin: ['50px', '70px'],
                pin_position: '0,0',
            })

        },
        draw(ctx) { },
        use_for() { return ['PerfTestUx'] }
    }
}
</script>
