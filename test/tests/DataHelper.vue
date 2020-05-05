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
import Stream from './DataHelper/stream.js'

// Gettin' data through webpeck proxy
const PORT = location.port
const URL = `http://localhost:${PORT}/api/v1/klines?symbol=`
const WSS = `ws://localhost:${PORT}/ws/btcusdt@aggTrade`

export default {
    name: 'DataHelper',
    description: 'Play with DataCube in console',
    props: ['night'],
    components: {
        TradingVue
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()

        // Load the last data chunk & init DataCube:
        let now = Utils.now()
        this.load_chunk([now - Const.DAY, now]).then(data => {
            this.chart = new DataCube({
                ohlcv: data['chart.data'],
                onchart: [{
                    type: 'Spline',
                    name: 'SMA',
                    data: data['SMA.data']
                }]
            })
            // Register onrange callback & And a stream of trades
            this.chart.onrange(this.load_chunk)
            this.stream = new Stream(WSS)
            this.stream.ontrades = this.on_trades
            window.dc = this.chart // Debug
        })

    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        },
        // New data handler. Should return Promise, or
        // use callback: load_chunk(range, tf, callback)
        async load_chunk(range) {
            const [t1, t2] = range
            const x = 'BTCUSDT'
            return this.tech(
                    this.parse_binance(
                     await fetch(
                URL + `${x}&interval=15m&startTime=${t1}&endTime=${t2}`
            ).then(response => response.json())))
        },
        // Parse a specific exchange format
        parse_binance(data) {
            if (!Array.isArray(data)) return []
            return data.map(x => {
                for (var i = 0; i < x.length; i++) {
                    x[i] = parseFloat(x[i])
                }
                return x.slice(0,6)
            })
        },
        tech(data) {
            // Each query sets data to a corresponding overlay
            return {
                'chart.data': data,
                'SMA.data': this.sma(data)
            }
        },
        sma(data) {
            // Just an example of a simple indicator.
            // First, calculate SMA for the chunk, then
            // keep updating it for the whole OHLCV
            let ohlcv = this.chart.data ?
                this.chart.get_one('chart.data') : data

            let sma = []
            for (var i = 26; i < ohlcv.length; i++) {
                let buff = 0
                for (var k = i - 25; k <= i; k++) {
                    buff += ohlcv[k][4]
                }
                sma.push([ ohlcv[i][0], buff / 26 ])
            }

            return sma
        },
        on_trades(trade) {
            this.chart.update({
                price: parseFloat(trade.p),  // Trade price
                volume: parseFloat(trade.q), // Trade amount
                'SMA': this.sma().pop()[1]   // Last value of SMA
            })
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
        if (this.stream) this.stream.off()
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
            chart: {},
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
}
</script>
