<template>
<div>
    <trading-vue :data="chart" :width="this.width" :height="this.height"
            :toolbar="true"
            :color-back="colors.colorBack"
            :color-grid="colors.colorGrid"
            :color-text="colors.colorText"
            ref="tradingVue">
    </trading-vue>
    <span class="log-scale">
        <input type="checkbox" v-model="log_scale">
        <label>Log Scale</label>
    </span>
    <tf-selector :charts="charts" v-on:selected="on_selected">
    </tf-selector>
</div>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import TfSelector from './Timeframes/TFSelector.vue'
import Data from '../data/data_tf.json'
import Utils from '../../src/stuff/utils.js'
import DataCube from '../../src/helpers/datacube.js'


export default {
    name: 'Timeframes',
    description: 'Should display correct dates for every timeframe',
    props: ['night'],
    components: {
        TradingVue, TfSelector
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        },
        on_selected(tf) {
            // TODO: This does not update the interval:
            // this.chart.set('chart.data', this.charts[tf.name])

            // Works only with a full update:
            this.chart = new DataCube({
                ohlcv: this.charts[tf.name]
            })
            this.$refs.tradingVue.resetChart()
            this.log_scale = false
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
        window.DataCube = this.chart // Debug
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
            charts: Data,
            chart: new DataCube({}),
            width: window.innerWidth,
            height: window.innerHeight,
            log_scale: false
        };
    },
    watch: {
        log_scale(value) {
            if (this.chart.data.chart) {
                this.$set(this.chart.data.chart, 'grid', {
                    logScale: value
                })
            }
        }
    }
}
</script>

<style>
.log-scale {
    position: absolute;
    top: 60px;
    right: 80px;
    color: #888;
    font: 11px -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif
}
</style>
