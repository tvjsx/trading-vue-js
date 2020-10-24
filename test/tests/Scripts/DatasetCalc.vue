<script>

// Calculation of the main chart & other indicators for
// Datasets.vue example

import Overlay from '../../../src/mixins/overlay.js'

export default {
    name: 'DatasetCalc',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        use_for() { return ['DatasetCalc'] },
        draw() {}, // No rendering
        calc() {
            return {
                props: {},
                data: {
                    trades: { type: 'Trades' }
                },
                init: `
                    console.log('init script')
                    sym(trades, { main:true })
                    console.log(ohlcv)
                `,
                update: `
                `,
                post: `
                    console.log(ohlcv)
                `
            }
        }
    }
}
</script>
