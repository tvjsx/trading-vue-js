<script>

import Overlay from '../../../src/mixins/overlay.js'

export default {
    name: 'ScriptOverlay',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
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

        use_for() { return ['ScriptOverlay', 'EMA', 'SMA'] },
        data_colors() { return [this.color] },
        calc() {
            return {
                props: {
                    length: { def: 50, range: [2, 200, 1] }
                },
                init() {
                    this.extf = function(a, b=500, flag = true) {
                        return 1
                    }
                },
                update(length) {

                    function regf(a = 7, b = 2000) {

                    }

                    let f = (a, b = 1000) => {
                        return a + b
                    }

                    let xxx = ts (1)

                    let yyy = ts (1)

                    let ya = this.extf(123)

                    let zzz = f(

                        1,
                        2

                    )

                    stoch(1)

                    bb()

                    return wma(close, 10)[0]
                }
            }
        }
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
