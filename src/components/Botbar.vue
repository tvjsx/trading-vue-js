<script>
// The bottom bar (yep, that thing with a bunch of dates)

import Botbar from './js/botbar.js'
import Canvas from '../mixins/canvas.js'

export default {
    name: 'Botbar',
    props: [
        'sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'font',
        'width', 'height', 'rerender', 'tv_id', 'config', 'shaders',
        'timezone'
    ],
    mixins: [Canvas],
    mounted() {
        const el = this.$refs['canvas']
        this.renderer = new Botbar(el, this)
        this.setup()
        this.redraw()
    },
    render(h) {
        const sett = this.$props.layout.botbar
        return this.create_canvas(h, 'botbar', {
            position: {
                x: 0,
                y: sett.offset || 0
            },
            attrs: {
                rerender: this.$props.rerender,
                width: sett.width,
                height: sett.height,
            },
            style: {
                backgroundColor: this.$props.colors.back
            },
        })
    },
    computed: {
        bot_shaders() {
            return this.$props.shaders
                .filter(x => x.target === 'botbar')
        }
    },
    watch: {
        range: {
            handler: function() { this.redraw() },
            deep: true
        },
        cursor: {
            handler: function() { this.redraw() },
            deep: true
        },
        rerender() {
            this.$nextTick(() => this.redraw())
        }
    }
}

</script>
<style>
.trading-vue-botbar {
    position: relative !important;
}
</style>
