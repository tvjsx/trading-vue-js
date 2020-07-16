<template>
<span>
    <trading-vue :data="chart" :width="this.width" :height="this.height"
        :index-based="index_based"
        :toolbar="true"
        ref="tvjs"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
    </trading-vue>
    <span class="gc-mode">
        <input type="checkbox" v-model="index_based">
        <label>Index Based</label>
    </span>
</span>
</template>

<script>

import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_offchart.json'
import Utils from '../../src/stuff/utils.js'
import DataCube from '../../src/helpers/datacube.js'

export default {
    name: 'IndexBased',
    description: 'Index-based rendering mode',
    props: ['night'],
    components: {
        TradingVue
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        },
        add() {
            this.chart.merge('chart.data', Data.ohlcv.slice())
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
        window.tv = this.$refs.tvjs
        window.test = this
    },
    computed: {
        colors() {
            return this.$props.night ? {} : {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333'
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: window.dc = new DataCube(Data),
            width: window.innerWidth,
            height: window.innerHeight,
            index_based: true
        };
    }
};
</script>

<style>
.gc-mode {
    position: absolute;
    top: 10px;
    right: 70px;
    color: #888;
    font: 11px -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif
}
</style>
