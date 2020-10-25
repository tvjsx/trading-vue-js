<template>
<div>
    <trading-vue :data="chart" :width="this.width" :height="this.height"
            ref="tv" skin="Alps"
            :toolbar="true" :overlays="overlays"
            :extensions="extensions"
            :color-back="colors.colorBack"
            :color-grid="colors.colorGrid"
            :color-text="colors.colorText">
    </trading-vue>
    <div class="sampler-window">
        <input type="range" min="1" max="24" value="1" class="slider"
            v-model="wk" @input="onwkinput">
        <label>TF x {{wk}}</label>
    </div>
    <tf-selector :charts="tfs" v-on:selected="on_selected">
    </tf-selector>
</div>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import TfSelector from './Timeframes/TFSelector.vue'
import Data from '../data/data_skybtc_trades.json'
import Data2 from '../data/data_btc_1m.json'
import DataCube from '../../src/helpers/datacube.js'
import DatasetCalc from './Scripts/DatasetCalc.vue'
import Alps from './Extensions/Alps/index.js'
export default {
    name: 'Datasets',
    description: 'Dataset testing app. Checks uploading, ops, updates',
    props: ['night'],
    components: {
        TradingVue, TfSelector
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        },
        onwkinput() {
            this.chart.merge('Calculations.settings', { k: this.wk })
        },
        on_selected(tf) {
            this.chart.set('chart.tf', tf.name)
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
        window.dc = this.chart
        window.tv = this.$refs.tv
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
            chart: new DataCube({
                chart: {
                    tf: '1H',
                    data: []
                },
                onchart: [{
                    name: 'Calculations',
                    type: 'DatasetCalc',
                    data: [],
                    settings: { k: parseInt(this.wk) }
                }],
                datasets: [{
                    // Using datasets to build candles & all indicators
                    type: 'Trades',
                    id: 'skybtc-trades',
                    data: Data
                }, {
                    type: 'Data1m',
                    id: 'btc-1m',
                    data: Data2.ohlcv
                }]
                // Prevent from executing scripts
                // on the main data change
            }, { data_change_exec: false }),
            width: window.innerWidth,
            height: window.innerHeight,
            overlays: [DatasetCalc],
            extensions: [Alps],
            wk: 1,
            tfs: {'5m': {}, '15m': {}, '1H': {}}
        }
    }
}
</script>

<style>
.sampler-window {
    position: absolute;
    top: 13px;
    right: 100px;
    text-align: center;
}
.slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 5px; /* Specified height */
    background: #ffffff33; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.9; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
    cursor: pointer;
}
.sampler-window label{
    text-align: center;
    color: #ffffffaa;
}
.tf-selector {
    background: #55586182;
    padding: 5px 10px;
    right: 300px;
    top: 12px;
}
</style>
