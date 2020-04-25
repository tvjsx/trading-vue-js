<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        :toolbar="true"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_btc.json'
import DataCube from '../../src/helpers/datacube.js'

export default {
    name: 'Simple',
    description: 'Should display everything okay',
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
        // TODO: simplify the data setup
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
            height: window.innerHeight
        };
    }
};
</script>

<style>

</style>
