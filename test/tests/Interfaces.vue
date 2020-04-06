<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        :overlays="overlays"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_ux.json'
import SplineUx from './interfaces/SplineUx.vue'

export default {
    name: 'Simple',
    description: 'Html indicator interfaces: static & interactive',
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
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: Data, // Data will be here,
            width: window.innerWidth,
            height: window.innerHeight,
            overlays: [SplineUx],
            colors: {
                //colorBack: '#fff',
                //colorGrid: '#eee',
                //colorText: '#333',
            }
        };
    }
};
</script>

<style>

</style>
