<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
    :overlays="overlays"
>
<!-- GRUG EDITION
    :color-back="colors.colorBack"
    :color-candle-up="colors.colorCandleUp"
    :color-candle-dw="colors.colorCandleDw"
    :color-wick-up="colors.colorCandleUp+'88'"
    :color-wick-dw="colors.colorCandleDw+'88'"
    :color-vol-up="colors.colorVolUp"
-->
</trading-vue>
</template>

<script>
import TradingVue from './TradingVue.vue'
import Data from '../data/data.json'
import Utils from './stuff/utils.js'

import Grin from './examples/overlays/Grin.vue'

export default {
    name: 'app',
    components: {
        TradingVue
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight
        }
    },
    created() {
        const interval =
            this.chart.ohlcv[1][0] - this.chart.ohlcv[0][0]

/*

        // TODO: make reactive
         setTimeout(() =>  {
             //this.$delete(this.chart, 'offchart')
         }, 2500)

         setTimeout(() => {
             let i = this.chart.offchart.length
             this.$set(this.chart.offchart, i, {
                 "name": "TEST, 25",
                 "type": "EMA",
                 "data": [
                     [
                     1552100000000,
                     55.50096226662831
                    ],
                     [
                     1552132800000,
                     57.50096226662831
                 ]],
                 "settings": {}
             })
         }, 2500)

         setTimeout(() => {
             let i = this.chart.onchart.length
             this.$set(this.chart.onchart, i, {
                 "name": "XXX, 25",
                 "type": "EMA",
                 "data": [[
                     1552120700000,
                     4000
                 ],
                 [
                     1552132800000,
                     4000
                 ]],
                 "settings": {}
             })
         }, 5000)

         setTimeout(() => {
             let i = this.chart.onchart.length
             this.$set(this.chart.onchart, i, {
                 "name": "XXX, 25",
                 "type": "EMA",
                 "data": [[
                     1552120700000,
                     4000
                 ],
                 [
                     1552132800000,
                     4000
                 ]],
                 "settings": {}
             })
         }, 7000)

         setTimeout(() => {
             let i = this.chart.onchart.length
             this.$set(this.chart.onchart, i, {
                 "name": "XXX, 25",
                 "type": "EMA",
                 "data": [[
                     1552120700000,
                     4000
                 ],
                 [
                     1552132800000,
                     4000
                 ]],
                 "settings": {}
             })
         }, 9000)
*/
        /*setInterval(() => {
            // Emulator of BIG pump
            const l = this.chart.ohlcv.length - 1
            let val = this.chart.ohlcv[l]
            val[4] += Math.random() * 10 - 4.2
            if (Math.random() < 0.01) val[4] -= Math.random() * 50
            if (Math.random() < 0.01) val[4] += Math.random() * 50
            val[2] = Math.max(val[4], val[2])
            val[3] = Math.min(val[4], val[3])
            val[5] += Math.random() * 50
            // Change
            this.chart.ohlcv.splice(l, 1, val)
        }, 100)
        setInterval(() => {
            const l = this.chart.ohlcv.length - 1
            let val = this.chart.ohlcv[l]
            let valn = []
            valn[0] = val[0] + interval
            valn[1] = val[4]
            valn[2] = val[4]
            valn[3] = val[4]
            valn[4] = val[4]
            valn[5] = 0
            // Push
            this.chart.ohlcv.splice(l+1, 0, valn)
        }, 1000) */

        this.overlays = []

    },
    mounted() {
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: Data,
            width: window.innerWidth,
            height: window.innerHeight,
            colors: {
                colorBack: '#0b1725',
                colorCandleUp: '#c2a07f',
                colorCandleDw: '#e54150',
                colorVolUp: '#bd9e9742'
            }
        };
    }
};
</script>

<style>
html,
body {
    background-color: #000;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
