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
                        def: 14, range: [10,200, 5],
                        text: 'EMA start length'
                    },
                    xxx: { def: ["#35a776", "#64c89d", "#e54150", "#e5717c"]}
                },
                conf: {
                    'renderer': 'Splines'
                },
                init: `
                    console.log('init script')
                `,
                update: `
                    return mfi(add(add(close, high), low), length)[0]
                `
            }
        }
    }
}
</script>
