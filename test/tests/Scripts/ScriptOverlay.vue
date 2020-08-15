<script>

import Overlay from '../../../src/mixins/overlay.js'

export default {
    name: 'ScriptOverlay',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        use_for() { return ['ScriptOverlay'] },
        calc() {
            return {
                props: {
                    length: {
                        def: 20, range: [10,200, 5],
                        text: 'EMA start length'
                    }
                },
                conf: {
                    'renderer': 'Splines'
                },
                init: `
                    console.log('init script')
                `,
                update: `
                    let [macdLine, signalLine, histLine] = macd(close, 12, 26, 9)
                    return histLine[0]
                `
            }
        }
    }
}
</script>
