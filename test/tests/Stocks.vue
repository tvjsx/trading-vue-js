<template>
<span>
    <trading-vue :data="chart" :width="this.width" :height="this.height"
            ref="tvjs"
            :timezone="parseInt(timezone)"
            :index-based="index_based"
            :overlays="overlays"
            :color-back="colors.colorBack"
            :color-grid="colors.colorGrid"
            :color-text="colors.colorText">
    </trading-vue>
    <span class="gc-mode">
        <input type="checkbox" v-model="index_based">
        <label>Index Based</label>
    </span>
    <span class="timezone">
        <input type="number" min="-12" max="12"
            v-model="timezone">
        <label>Timezone</label>
    </span>
</span>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_earn.json'
//import Data from '../data/data_aapl_1h.json'
//import Data from '../data/data_fresh.json'
//import Data from '../data/data_fresh_1D.json'
import DataCube from '../../src/helpers/datacube.js'
import Utils from '../../src/stuff/utils.js'
import Earnings from './Stocks/Earnings.vue'
import Illuminati from './shared/illuminati.js'
import Eye from './shared/Eye.vue'

export default {
    name: 'Stocks',
    description: 'Should display marker hints (click earnings icon)',
    props: ['night'],
    mixins: [Illuminati],
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
        window.tv = this.$refs.tvjs
        window.dc = this.chart
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
            chart: new DataCube(Data),
            width: window.innerWidth,
            height: window.innerHeight,
            overlays: [Earnings, Eye],
            index_based: true,
            timezone: 0
        };
    }
}
</script>

<style>
.timezone {
    position: absolute;
    top: 35px;
    right: 70px;
    color: #888;
    background: inherit;
    font: 11px -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif
}
.timezone input {
    color: #4285f4;
    background: inherit;
    border: 1px dotted #808080;
    border-radius: 3px;
    text-align: end;
}
</style>
