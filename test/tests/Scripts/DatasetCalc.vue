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
                props: {
                    k: { def: 10, text: 'Sampling window X TF' },
                    ds: { def: '1m', text: 'Select dataset' }
                },
                data: {
                    trades: { type: 'Trades' },
                    src1m: { type: 'Data1m' }
                },
                init: `
                    console.log('init script')
                    if (ds === '1m') {
                        sym(src1m, { main:true, window: tf * k })
                    } else {
                        sym(trades, { main:true, window: tf * k })
                    }
                `,
                update: `
                    //offchart(rsi(close, 14), 'RSI', {type: 'RSI'})
                    //let [m, h, l] = bb(close, 20, 2)
                    //onchart([h[0], m[0], l[0]], 'BB', {type:'BB'})

                    onchart(sma(close,100), 'SMA, 100')
                    onchart(sym('1D').open[0], 'sym1D open')
                    onchart(open1D[0], 'open1D')
                    onchart(sym('1D').close[0], 'sym1D close')
                    onchart(close1D[0], 'close1D')

                    offchart(vol1D[0])
                    offchart(sym('1D').vol[0], 'V')
                `,
                post: `
                    console.log(se)
                `
            }
        }
    }
}
</script>
