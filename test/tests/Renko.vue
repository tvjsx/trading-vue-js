<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        ref="tvjs"
        :chart-config="{DEFAULT_LEN: 200}"
        :toolbar="true"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText"
        :overlays="overlays">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_renko.json'
import DataCube from '../../src/helpers/datacube.js'
import Illuminati from './shared/illuminati.js'
import Eye from './shared/Eye.vue'

export default {
    name: 'Renko',
    description: 'Just Renko, what did you expect?',
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
        window.dc = this.chart
        window.tv = this.$refs.tvjs
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
            overlays: [Eye]
        }
    }
}
</script>

<style>

</style>
