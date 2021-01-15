<template>
<div>
    <trading-vue :data="chart" :width="this.width" :height="this.height"
            ref="tv" skin="Alps"
            :toolbar="true" :overlays="overlays"
            :extensions="extensions"
            @data-len-changed="on_data"
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
    <div class="datasets">
        <div class="dataset" v-for="ds of dss"
            @click="ondsclick(ds)"
            :style="{
                background: `url(${icon})`,
                backgroundSize: 'cover'
            }">
            {{ds}}
        </div>
    </div>
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
import Icon from './Datasets/ds.json'

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
        },
        ondsclick(ds) {
            this.dschanged = true
            this.chart.merge('Calculations.settings', { ds })
        },
        on_data(data) {
            if (!this.dschanged) return
            let tL = this.chart.get_one('chart.data').slice(-1)[0][0]
            this.$refs.tv.goto(tL + this.$refs.tv.$refs.chart.interval)
            this.dschanged = false
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
                    settings: { k: parseInt(this.wk || 1) }
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
            tfs: {'5m': {}, '15m': {}, '1H': {}},
            dss: ['1m', 'hf'],
            icon: Icon
        }
    }
}
</script>

<style scoped>
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
    border-radius: 30px;
}
.datasets {
    position: absolute;
    width: 100px;
    top: 12px;
    right: 400px;
    display: flex;
    grid-column-gap: 10px;
    grid-template-columns: 1fr;
}
.dataset {
    font-size: 0.75em;
    width: 23px;
    height: 25px;
    color: #fff;
    line-height: 5.5em;
    text-align: center;
    user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px 2px black;
}
</style>
