<template>
<span>
    <trading-vue :data="chart" :width="this.width" :height="this.height"
            :index-based="index_based"
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
import Data from '../data/data_aapl.json'
import Utils from '../../src/stuff/utils.js'

export default {
    name: 'Stocks',
    description: 'Should correctly display dates and hide weekend gaps',
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
        setTimeout(() => {
            // Async data setup
            this.$set(this, 'chart', Data)
        }, 0)
        this.onResize()
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
            chart: {}, // Data will be here,
            width: window.innerWidth,
            height: window.innerHeight,
            index_based: true
        };
    }
};
</script>

<style>
</style>
