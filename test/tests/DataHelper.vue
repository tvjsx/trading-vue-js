<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Utils from '../../src/stuff/utils.js'
import Const from '../../src/stuff/constants.js'
import DataCube from '../../src/helpers/datacube.js'

// Gettin' data through webpeck proxy
const URL = 'http://localhost:8080/api/v1/klines?symbol='

export default {
    name: 'DataHelper',
    description: 'Play with DataCube in console',
    components: {
        TradingVue
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()

        // Load the last data chunk:
        let now = Utils.now()
        this.load_chunk([now - Const.DAY, now]).then(data => {
            this.chart = new DataCube({ ohlcv: data })
            this.chart.onrange(this.load_chunk)
        })

    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        },
        async load_chunk(range) {
            const [t1, t2] = range
            const x = 'BTCUSDT'
            return this.parse_binance(await fetch(
                URL + `${x}&interval=15m&startTime=${t1}&endTime=${t2}`
            ).then(response => response.json()))
        },
        parse_binance(data) {
            if (!Array.isArray(data)) return []
            return data.map(x => {
                for (var i = 0; i < x.length; i++) {
                    x[i] = parseFloat(x[i])
                }
                return x.slice(0,6)
            })
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: {},
            width: window.innerWidth,
            height: window.innerHeight,
            colors: {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
            }
        };
    }
};
</script>
