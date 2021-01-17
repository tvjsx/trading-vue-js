<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from './TradingVue.vue'
import Data from '../data/data.json'
import DataCube from '../src/helpers/datacube.js'

export default {
    name: 'app',
    components: {
        TradingVue
    },
    methods: {
        onResize() {
            this.width = window.innerWidth
            this.height = window.innerHeight
        },
        keydown(e) {
            if (e.keyCode == 39) {
                // ArrowRight
                this.move(1)
            } else if (e.keyCode == 37) {
                // ArrowLeft
                this.move(-1)
            }
        },
        mousedown(e) {
            var evtobj = window.event ? event : e
            if (evtobj.ctrlKey) {
                this.selectedCandleTimestamp = this.chart.tv.getCursor().t
            }
        },
        move(direction) {
            let ez = x => x<.5 ? 2*x*x : -1+(2*x)*x

            if (direction > 0) {
                let tN = this.chart.tv.$refs.chart.last_candle[0]
                let t0 = this.chart.tv.getRange()[1]
                let t1 = tN + this.chart.tv.$refs.chart.interval * 5
    
                let len = t1 - t0
                let step = len / 1000
                let t = t0
    
                let f = () => {
                    if (t >= t1) return this.chart.tv.goto(t1)
                    this.chart.tv.goto(t)
                    t += step
                    setTimeout(f)
                }
                f()
            } else {
                let tN = this.chart.data.chart.data[0][0]
                let t0 = this.chart.tv.getRange()[1]
                let t1 = tN + this.chart.tv.$refs.chart.interval * 50
    
                let len = t0 - t1
                let step = len / 1000
                let t = t0
    
                let f = () => {
                    if (t <= t1) return this.chart.tv.goto(t1)
                    this.chart.tv.goto(t)
                    t -= step
                    setTimeout(f)
                }
                f()
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        window.addEventListener('keydown', this.keydown)
        window.addEventListener('mousedown', this.mousedown)
        window.dc = this.chart

        /**
         * The following code is for setting the initial range i.e. zoom level and the points which will be shown by default.
         * startingTimestamp and endingTimestamp might come from an external source.
         * I've added sample values for testing.
         */
        // let startingTimestamp = 1558015200000
        // let endingTimestamp = 1558688400000
        // Wait until chart is fully loaded
        // this.$nextTick(() =>
        //     this.chart.tv.$refs.chart.setRange(startingTimestamp, endingTimestamp)
        // )
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
        window.removeEventListener('keydown', this.keydown)
        window.removeEventListener('mousedown', this.mousedown)
    },
    data() {
        return {
            chart: new DataCube(Data),
            width: window.innerWidth,
            height: window.innerHeight,
            colors: {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
            },
            selectedCandleTimestamp: 0,
        };
    }
};
</script>

<style>
html,
body {
    background-color: #000;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
