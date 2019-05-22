<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        :legend-buttons="buttons"
        v-on:legend-button-click="on_button_click"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Data from '../data/data_buttons.json'
import Utils from '../../src/stuff/utils.js'

export default {
    name: 'LegendButtons',
    description: 'Legend buttons test (click the button!)',
    components: {
        TradingVue
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        },
        on_button_click(event) {
            alert(`${event.overlay}: ${event.button}`)
            console.log(event)
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
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: {}, // Data will be here,
            width: window.innerWidth,
            height: window.innerHeight,
            colors: {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
            },
            buttons: [
                'display', 'settings', 'remove'
            ]
        };
    }
};
</script>

<style>

</style>
