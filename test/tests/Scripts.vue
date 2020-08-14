<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        :toolbar="true" :overlays="ov"
        ref="tv" :chart-config="{ DEFAULT_LEN: 300 }"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_scripts.json'
import DataCube from '../../src/helpers/datacube.js'
import ScriptOverlay from './Scripts/ScriptOverlay.vue'

export default {
    name: 'Scripts',
    icon: '',
    description: 'Supposed to be precisely calculated',
    early: true,
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
        window.ov = this.ov[0]
        window.test = this
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
            chart: new DataCube(JSON.parse(JSON.stringify(Data)), {
                scripts: true,
                //script_depth: 300
            }),
            width: window.innerWidth,
            height: window.innerHeight,
            ov: [ScriptOverlay]
        }
    }
}
</script>

<style>
</style>
