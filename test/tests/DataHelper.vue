<template>
<!-- Real time data example -->
<span>
    <trading-vue :data="chart" :width="this.width" :height="this.height"
            :chart-config="{MIN_ZOOM:1}"
            ref="tvjs"
            :toolbar="true"
            :index-based="index_based"
            :overlays="overlays"
            :color-back="colors.colorBack"
            :color-grid="colors.colorGrid"
            :color-text="colors.colorText">
    </trading-vue>
    <span class="gc-mode">
        <input type="checkbox" v-model="index_based">
        <label>Index Based</label>
    </span>
</span>
</template>

<script>
import TradingVue from '../../src/TradingVue.vue'
import Utils from '../../src/stuff/utils.js'
import Const from '../../src/stuff/constants.js'
import DataCube from '../../src/helpers/datacube.js'
import Stream from './DataHelper/stream.js'
import ScriptOverlay from './Scripts/EMAx6.vue'
import BSB from './Scripts/BuySellBalance.vue'

// Gettin' data through webpeck proxy
const PORT = location.port
const URL = `http://localhost:${PORT}/api/v1/klines?symbol=`
const WSS = `ws://localhost:${PORT}/ws/btcusdt@aggTrade`

export default {
    name: 'DataHelper',
    icon: '⚡',
    description: 'Real-time updates. Play with DataCube in the console',
    props: ['night'],
    components: {
        TradingVue
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()

        // Load the last data chunk & init DataCube:
        let now = Utils.now()
        this.load_chunk([now - Const.HOUR4, now]).then(data => {
            this.chart = new DataCube({
                ohlcv: data['chart.data'],
                onchart: [{
                    type: 'EMAx6',
                    name: 'Multiple EMA',
                    data: []
                }],
                offchart: [{
                    type: 'BuySellBalance',
                    name: 'Buy/Sell Balance, $lookback',
                    data: [],
                    settings: {}
                }],
                datasets: [{
                    type: 'Trades',
                    id: 'binance-btcusdt',
                    data: []
                }]
            }, { aggregation: 100 })
            // Register onrange callback & And a stream of trades
            this.chart.onrange(this.load_chunk)
            this.$refs.tvjs.resetChart()
            this.stream = new Stream(WSS)
            this.stream.ontrades = this.on_trades
            window.dc = this.chart      // Debug
            window.tv = this.$refs.tvjs // Debug

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
            let [t1, t2] = range
            let x = 'BTCUSDT'
            let q = `${x}&interval=1m&startTime=${t1}&endTime=${t2}`
            let r = await fetch(URL + q).then(r => r.json())
            return this.format(this.parse_binance(r))
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
        format(data) {
            // Each query sets data to a corresponding overlay
            return {
                'chart.data': data
                // other onchart/offchart overlays can be added here,
                // but we are using Script Engine to calculate some:
                // see EMAx6 & BuySellBalance
            }
        },
        on_trades(trade) {
            this.chart.update({
                t: trade.T,     // Exchange time (optional)
                price: parseFloat(trade.p),   // Trade price
                volume: parseFloat(trade.q),  // Trade amount
                'datasets.binance-btcusdt': [ // Update dataset
                    trade.T,
                    trade.m ? 0 : 1,          // Sell or Buy
                    parseFloat(trade.q),
                    parseFloat(trade.p)
                ],
                // ... other onchart/offchart updates
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
            height: window.innerHeight,
            index_based: false,
            overlays: [ScriptOverlay, BSB]
        }
    }
}
</script>
