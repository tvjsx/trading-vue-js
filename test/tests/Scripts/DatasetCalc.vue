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
                    trades: { type: 'Trades' },
                    src1m: { type: 'Data1m' }
                },
                init: `
                    console.log('init script')
                    sym(src1m, { main:true, window: tf })
                    console.log(src1m)
                `,
                update: `
                    //offchart(rsi(close, 14), 'RSI', {type: 'RSI'})
                    //let [m, h, l] = bb(close, 20, 2)
                    //onchart([h[0], m[0], l[0]], 'BB', {type:'BB'})
                    onchart(sma(close,100), 'SMA, 100')
                `,
                post: `
                `
            }
        }
    }
}
</script>
