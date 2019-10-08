
<template>
    <!-- Main component  -->
    <div class="trading-vue" v-bind:id="id"
         :style="{
            color: this.colorText, font: this.font,
            width: this.width+'px',
            height: this.height+'px'}">
        <toolbar v-if="toolbar"
            v-bind="chart_props"
            v-bind:config="chart_config">
        </toolbar>
        <chart :key="reset"
            ref="chart"
            v-bind="chart_props"
            v-bind:tv_id="id"
            v-bind:config="chart_config"
            v-on:custom-event="custom_event"
            v-on:legend-button-click="legend_button">
        </chart>
    </div>
</template>

<script>

import Const from './stuff/constants.js'
import Chart from './components/Chart.vue'
import Toolbar from './components/Toolbar.vue'

export default {
    name: 'TradingVue',
    components: {
        Chart, Toolbar
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
        colorTbBack: {
            type: String
        },
        colorTbBorder: {
            type: String,
        },
        font: {
            type: String,
            default: Const.ChartConfig.FONT
        },
        toolbar: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object,
            required: true
        },
        // Your overlay classes here
        overlays: {
            type: Array,
            default: function () { return [] }
        },
        // Overwrites ChartConfig values,
        // see constants.js
        chartConfig: {
            type: Object,
            default: function () { return {} }
        },
        legendButtons: {
            type: Array,
            default: function () { return [] }
        }
    },
    computed: {
        // Copy a subset of TradingVue props
        chart_props() {
            let offset = this.$props.toolbar ?
                this.chart_config.TOOLBAR : 0
            let chart_props = {
                title_txt: this.$props.titleTxt,
                overlays: this.$props.overlays,
                data: this.decubed,
                width: this.$props.width - offset,
                height: this.$props.height,
                font: this.$props.font,
                buttons: this.$props.legendButtons,
                toolbar: this.$props.toolbar,
                colors: {}
            }
            for (var k in this.$props) {
                if (k.indexOf('color') === 0) {
                    chart_props.colors[k] = this.$props[k]
                }
            }
            return chart_props
        },
        chart_config() {
            return Object.assign({},
                Const.ChartConfig,
                this.$props.chartConfig,
            )
        },
        decubed() {
            let data = this.$props.data
            if (data.data !== undefined) {
                // DataCube detected
                data.init_tvjs(this)
                return data.data
            } else {
                return data
            }
        }
    },
    data() {
        return { reset: 0 }
    },
    methods: {
        resetChart(resetRange = true) {
            this.reset++
            let range = this.getRange()
            if (!resetRange && range[0] && range[1]) {
                this.$nextTick(() => this.setRange(...range))
            }
        },
        goto(t) {
            this.$refs.chart.goto(t)
        },
        setRange(t1, t2) {
            this.$refs.chart.setRange(t1, t2)
        },
        getRange() {
            return this.$refs.chart.range
        },
        getCursor() {
            return this.$refs.chart.cursor
        },
        legend_button(event) {
            this.$emit('legend-button-click', event)
        },
        custom_event(d) {
            this.$emit(d.event, ...d.args)
            let data = this.$props.data
            if (data.tv) {
                // If the data object is DataCube
                data.on_custom_event(d.event, d.args)
            }
        },
        set_loader(dc) {
            this.$refs.chart.$off('range-changed')
            if (dc) this.$refs.chart.$on('range-changed',
                r => dc.range_changed(
                    r, this.$refs.chart.interval
                )
            )
        }
    }
}
</script>
