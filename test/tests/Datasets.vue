<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        ref="tv"
        :toolbar="true" :overlays="overlays"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_skybtc_trades.json'
import DataCube from '../../src/helpers/datacube.js'
import DatasetCalc from './Scripts/DatasetCalc.vue'

export default {
    name: 'Datasets',
    description: 'Dataset testing app. Checks uploading, ops, updates',
    props: ['night'],
    components: {
        TradingVue
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
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
                    data: []
                }],
                datasets: [{
                    // Using datasets to build candles & all indicators
                    type: 'Trades',
                    id: 'skybtc-trades',
                    data: Data
                }]
                // Prevent from executing scripts
                // on the main data change
            }, { data_change_exec: false }),
            width: window.innerWidth,
            height: window.innerHeight,
            overlays: [DatasetCalc]
        }
    }
}
</script>

<style>

</style>
