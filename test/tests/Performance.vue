<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        :chart-config="{DEFAULT_LEN: 1000}"
        :overlays="overlays" ref="tvjs"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_perf.json'
import Utils from '../../src/stuff/utils.js'
import DataCube from '../../src/helpers/datacube.js'
import PerfTestUx from './Performance/PerfTestUx.vue'

export default {
    name: 'Performance',
    description: 'Several performance tests',
    props: ['night'],
    components: {
        TradingVue
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        },
        search(comp, name) {
            if (comp._name === name) {
                return comp
            } else {
                for (var c of comp.$children) {
                    let res = this.search(c, name)
                    if (res) return res
                }
            }
            return null
        },
        scrolling_test(start = true) {
            if (start) {
                var [t1, t2] = this.$refs.tvjs.getRange()
                this.loop_id = setInterval(() => {
                    let t = new Date().getTime()
                    this.$refs.tvjs.goto(t2 + Math.sin(t/1000) * 100000000)
                    this.grid.renderer.change_range()
                }, 0)
            } else {
                clearInterval(this.loop_id)
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()

        var stats = new Stats()
        stats.showPanel( 1 ) // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild( stats.dom )

        let grid = this.search(this, '<Grid>')
        this.grid = grid
        // Inject stats.js

        let f = grid.renderer.change_range

        grid.renderer.change_range = function() {
            stats.begin()
            f.call(this)
            stats.end()
        }

        this.scrolling_test()
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

        this.scrolling_test(false)
    },
    data() {
        return {
            chart: new DataCube(Data),
            width: window.innerWidth,
            height: window.innerHeight,
            overlays: [PerfTestUx]
        }
    }
}
</script>

<style>

</style>
