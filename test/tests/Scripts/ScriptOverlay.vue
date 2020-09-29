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
                    start: { def: 10, text: 'Start Length' },
                    number: { def: 5, text: 'Number of Lines' },
                    step: { def: 10, text: 'Length Step' }
                },
                conf: {
                    'renderer': 'Splines'
                },
                init: `
                    console.log('init script')
                `,
                update: `
                    this[0] = []
                    for (var i = 0; i < number; i++) {
                        let l = start + i * step
                        this[0].push(ema(close, l)[0])
                    }
                `,
                post: `
                    // After the updates
                `
            }
        }
    }
}
</script>
