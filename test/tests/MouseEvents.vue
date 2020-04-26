<template>
<span>
    <trading-vue :data="chart" :width="this.width" :height="this.height"
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
</span>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_earn.json'
import Utils from '../../src/stuff/utils.js'
import Earnings from './MouseEvents/Earnings.vue'

export default {
    name: 'MouseEvents',
    description: 'Should display marker hints (click earnings icon)',
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
            chart: Data,
            width: window.innerWidth,
            height: window.innerHeight,
            overlays: [Earnings],
            index_based: true
        };
    }
}
</script>

<style>

</style>
