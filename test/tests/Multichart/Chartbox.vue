<template>
<div class="chart-box">
    <trading-vue :id="id" :data="chart" :titleTxt = "title"
            :width="width" :height="height"
            :color-title="colors.colorTitle"
            :color-back="colors.colorBack"
            :color-grid="colors.colorGrid"
            :color-text="colors.colorText">
    </trading-vue>
</div>
</template>

<script>
import TradingVue from '../../../src/TradingVue.vue'

export default {
    name: 'Chartbox',
    props: ['id', 'tf', 'data', 'width', 'height', 'night'],
    components: {
        TradingVue
    },
    mounted() {

    },
    methods: {

    },
    computed: {
        chart() {
            return { ohlcv: this.$props.data }
        },
        title() {
            return 'Bitcoin ' + this.$props.tf
        },
        colors() {
            return this.$props.night ? {} : {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
                colorTitle: '#333'
            }
        },
    },
    data() {
        return {}
    }
};
</script>

<style>
.chart-box {
    border: 0.5px solid transparent;
}
</style>
