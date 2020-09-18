<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        ref="tv"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_grids.json'
import Utils from '../../src/stuff/utils.js'

export default {
    name: 'GridSettings',
    description: 'Custom grid heights',
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
        window.tv = this.$refs.tv
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
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
    data() {
        return {
            chart: Data,
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
}
</script>
