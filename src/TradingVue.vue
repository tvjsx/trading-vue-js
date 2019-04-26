
<template>
    <!-- Main component  -->
    <div class="trading-vue" v-bind:id="id"
        :style="{
            color: this.colorText, font: this.font,
            width: this.width+'px',
            height: this.height+'px'}">
        <!-- <toolbar> </toolbar> TODO: add drawing tools -->
        <chart v-bind="chart_props"></chart>
    </div>
</template>

<script>

import Const from './stuff/constants.js'
import Chart from './components/Chart.vue'

export default {
    name: 'TradingVue',
    components: {
        Chart
    },
    props: {
        titleTxt: {
            type: String,
            default: 'TradingVue.js'
        },
        id: {
            type: String,
            default: 'trading-vue-js'
        },
        width: {
            type: Number,
            default: 800
        },
        height: {
            type: Number,
            default: 421
        },
        colorTitle: {
            type: String,
            default: '#42b883'
        },
        colorBack: {
            type: String,
            default: '#121826'
        },
        colorGrid: {
            type: String,
            default: '#2f3240'
        },
        colorText: {
            type: String,
            default: '#dedddd'
        },
        colorTextHL: {
            type: String,
            default: '#fff'
        },
        colorScale: {
            type: String,
            default: '#838383'
        },
        colorCross: {
            type: String,
            default: '#8091a0'
        },
        colorCandleUp: {
            type: String,
            default: '#23a776'
        },
        colorCandleDw: {
            type: String,
            default: '#e54150'
        },
        colorWickUp: {
            type: String,
            default: '#23a77688'
        },
        colorWickDw: {
            type: String,
            default: '#e5415088'
        },
        colorWickSm: {
            type: String,
            default: '#bdbec0'
        },
        colorVolUp: {
            type: String,
            default: '#79999e42'
        },
        colorVolDw: {
            type: String,
            default: '#ef535042'
        },
        colorPanel: {
            type: String,
            default: '#565c68'
        },
        font: {
            typr: String,
            default: Const.ChartConfig.FONT
        },
        data: {
            type: Object,
            required: true
        },
        // Your overlay classes here
        overlays: {
            type: Array,
            default: function () { return [] }
        }
    },
    computed: {
        // Copy a subset of TradingVue props
        chart_props() {
            let chart_props = {
                title_txt: this.$props.titleTxt,
                overlays: this.$props.overlays,
                data : this.$props.data,
                width: this.$props.width,
                height: this.$props.height,
                font: this.$props.font,
                colors: {}
            }
            for (var k in this.$props) {
                if (k.indexOf('color') === 0) {
                    chart_props.colors[k] = this.$props[k]
                }
            }
            return chart_props
        }
    }
}
</script>
