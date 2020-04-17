<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        :chart-config="{DEFAULT_LEN: 120}"
        :overlays="overlays"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import DataCube from '../../src/helpers/datacube.js'
import Data from '../data/data_ux.json'
import SplineUx from './interfaces/SplineUx.vue'

export default {
    name: 'Interfaces',
    description: 'Html interfaces: static & interactive',
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
            chart: new DataCube(Data), // Data will be here,
            width: window.innerWidth,
            height: window.innerHeight,
            overlays: [SplineUx]
        }
    }
}
</script>

<style>

</style>
