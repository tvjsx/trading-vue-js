<template>
<div class="chart-box">
    <trading-vue :data="chart" :titleTxt = "title"
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
    props: ['tf', 'data', 'width', 'height'],
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
        }
    },
    data() {
        return {
            colors: {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
                colorTitle: '#333'
            }
        };
    }
};
</script>

<style>
.chart-box {
    border: 1px solid;
}
</style>
