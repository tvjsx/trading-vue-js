<template>
<span style="width: 100%">
    <trading-vue :data="chart"
            :width="this.width - pane"
            :height="this.height"
            :toolbar="true" :overlays="ov"
            ref="tv" :chart-config="{ DEFAULT_LEN: 300 }"
            :color-back="colors.colorBack"
            :color-grid="colors.colorGrid"
            :color-text="colors.colorText">
    </trading-vue>

    <codepane :colors="{}" :width="pane"
        :height="height" :src="src"
        @src-changed="src_changed"/>
</span>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_scripts.json'
import DataCube from '../../src/helpers/datacube.js'
import ScriptOverlay from './Scripts/ScriptOverlay.vue'
import Codepane from './Scripts/Codepane.vue'

const DEF_SRC =
`// === Script calculation object ===
// update() function should set this[0]
// or return the current data point
// init() called once before updates
// To change the renderer rewrite:
// 'tests/Scripts/ScriptOverlay.vue'
// Std lib is in 'helpers/script_std.js'
// See examples in 'tvjs-overlays' repo
// Enjoy the bugs 😎
return {
    props: {
        start: { def: 10, text: 'Start Length' },
        number: { def: 5, text: 'Number of Lines' },
        step: { def: 10, text: 'Length Step' }
    },
    conf: {
        renderer: 'Splines'
    },
    init: \`
        console.log('init script')
        this.state = 1
    \`,
    update: \`
        this.state++
        this[0] = []
        for (var i = 0; i < number; i++) {
            let l = start + i * step
            this[0].push(ema(close, l)[0])
        }
    \`,
    post: \`// After the updates\`
}
`

export default {
    name: 'Scripts',
    icon: '',
    description: 'Supposed to be precisely calculated',
    early: true,
    props: ['night'],
    components: {
        TradingVue, Codepane
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        },
        src_changed(text) {
            this.src = text
            ov.methods.calc = new Function('', `${text}\n`)
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
        window.dc = this.chart
        window.tv = this.$refs.tv
        window.ov = this.ov[0]
        window.test = this
    },
    computed: {
        colors() {
            return this.$props.night ? {} : {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333'
            }
        },
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: new DataCube(JSON.parse(JSON.stringify(Data)), {
                scripts: true,
                //script_depth: 300
            }),
            width: window.innerWidth,
            height: window.innerHeight,
            pane: Math.floor(window.innerWidth * 0.35),
            ov: [ScriptOverlay],
            src: DEF_SRC
        }
    }
}
</script>

<style>
</style>
