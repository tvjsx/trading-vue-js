<script>

import Overlay from '../../../src/mixins/overlay.js'

export default {
    name: 'EMAx6',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        use_for() { return ['EMAx6'] },
        calc() {
            return {
                props: {
                    length: {
                        def: 20, range: [10,200, 5],
                        text: 'EMA start length'
                    }
                },
                conf: {
                    'renderer': 'Splines',
                    'plugin1.setting1': 1000 // WIP
                },
                init: `
                    console.log('init script')
                `,
                update: `
                    this[0] = []
                    for (var l = length; l <= length + 50; l += 10) {
                        this[0].push(ema(close, l)[0])
                    }
                    //let [mid, hi, lo] = bb(close, 20, 2)
                    //onchart([hi, mid, lo], 'BB', {type:'BB'})
                    offchart(rsi(close, 14), 'RSI, 14', {type:'RSI'})
                `
            }
        }
    }
}
</script>
