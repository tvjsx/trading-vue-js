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

/* TODO: */

import TradingVue from '../../src/TradingVue.vue'
//import Data from '../data/data_offchart.json'
import Data from '../data/data_spx_sample.json'
//import Data from '../data/data_earn.json'
import Utils from '../../src/stuff/utils.js'
import DataCube from '../../src/helpers/datacube.js'


/*
Data.ohlcv.forEach((x, i) => {
    x[0] = i
})

Data.offchart.forEach(ov => {
    ov.data.forEach((x, i) => {
        x[0] = i
    })

})
*/


/*
let offsub = []

Data.ohlcv.forEach((x, i) => {
    let sum = 0
    for (var j = -12; j < 0; j++) {
        if (Data.ohlcv[i + j]) {
            sum += Data.ohlcv[i + j][4]
        }
    }
    offsub.push([x[0], sum / 12])
})*/


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
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
        window.tvjs = this.$refs.tvjs
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
