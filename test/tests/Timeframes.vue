<template>
<div>
    <trading-vue :data="chart" :width="this.width" :height="this.height"
            :toolbar="true"
            :index-based="index_based"
            :color-back="colors.colorBack"
            :color-grid="colors.colorGrid"
            :color-text="colors.colorText"
            ref="tradingVue">
    </trading-vue>
    <span class="log-scale">
        <input type="checkbox" v-model="log_scale">
        <label>Log Scale</label>
    </span>
    <span class="gc-mode" style="top: 80px; right: 80px">
        <input type="checkbox" v-model="index_based">
        <label>Index Based</label>
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
            this.chart.set('chart.data', this.charts[tf.name])
            this.$refs.tradingVue.resetChart()
            this.log_scale = false
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
        window.dc = this.chart
        window.tv = this.$refs.tradingVue
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
            log_scale: false,
            index_based: false
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
@media only screen and (max-device-width: 480px) {
    .tf-selector {
        top: 50px;
        right: 140px;
        max-width: 140px;
        font: 12px -apple-system,BlinkMacSystemFont,
            Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,
            Fira Sans,Droid Sans,Helvetica Neue,
            sans-serif;
    }
    .log-scale, .gc-mode {
        right: 50px !important;
    }
}
</style>
