<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        @scrolling-test="scrolling_test"
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
    icon: '🔥',
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
                    this.set_result('Rendering test', this.avg + ' ms')
                }, 0)
            } else {
                clearInterval(this.loop_id)
            }
        },
        average_dt(dt) {
            this.dts.push([Date.now(), dt])
            for (var dti of this.dts) {
                if (Date.now() - dti[0] > 10000) this.dts.shift()
                else break
            }
            this.avg = this.dts.reduce((a, b) => [0, a[1] + b[1]])[1] /
                       this.dts.length

            this.avg = Utils.round(this.avg, 1)

        },
        set_result(name, result) {
            this.chart.merge('PerfTestUx.settings', {
                [name]: result
            })
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()

        var stats = this.stats = new Stats()
        stats.showPanel( 1 ) // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild( stats.dom )
        stats.domElement.style.right = '65px'
        stats.domElement.style.top = '55px'
        stats.domElement.style.left = null

        let grid = this.search(this, '<Grid>')
        this.grid = grid
        // Inject stats.js

        let f = grid.renderer.change_range
        let self = this

        grid.renderer.change_range = function() {
            let t1 = ( performance || Date ).now();
            stats.begin()
            f.call(this)
            let t2 = stats.end()
            self.average_dt(t2 - t1)
        }
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
        document.body.removeChild(this.stats.domElement)
        this.scrolling_test(false)
    },
    data() {
        return {
            chart: new DataCube(Data),
            width: window.innerWidth,
            height: window.innerHeight,
            overlays: [PerfTestUx],
            dts: []
        }
    }
}
</script>

<style>

</style>
