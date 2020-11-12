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
import CodeIcon from './LegendButtons/code3.json'


export default {
    name: 'LegendButtons',
    description: 'Legend buttons test (click the button, see console)',
    props: ['night'],
    components: {
        TradingVue
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        },
        on_button_click(event) {
            if (event.button === 'display') {
                let d = this.chart[event.type][event.dataIndex]
                if (d) {
                    if (!('display' in d.settings)) {
                        this.$set(
                            d.settings, 'display', true
                        )
                    }
                    this.$set(
                        d.settings, 'display', !d.settings.display
                    )
                }
            }
            console.log(event)
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
            buttons: [
                'display', 'settings', 'remove',
                {
                    name: 'code',
                    icon: CodeIcon
                }
            ]
        }
    }
}
</script>

<style>

</style>
