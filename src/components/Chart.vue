<template>
    <!-- Chart components combined together -->
    <div class="trading-vue-chart">
        <grid-section v-for="(grid, i) in this._layout.grids"
            :key="grid.id"
            v-bind:common="section_props(i)"
            v-bind:grid_id="i"
            v-on:range-changed="range_changed"
            v-on:cursor-changed="cursor_changed"
            v-on:cursor-locked="cursor_locked"
            v-on:layer-meta-props="layer_meta_props">
        </grid-section>
        <botbar v-bind="botbar_props"></botbar>
    </div>
</template>

<script>

import Const from '../stuff/constants.js'
import Context from '../stuff/context.js'
import Layout from './js/layout.js'
import Utils from '../stuff/utils.js'
import CursorUpdater from './js/updater.js'
import Grid from './Grid.vue'
import GridSection from './Section.vue'
import Botbar from './Botbar.vue'
import Sidebar from './Sidebar.vue'

export default {
    name: 'Chart',
    props: [
        'title_txt', 'data', 'width', 'height', 'font', 'colors',
        'overlays'
    ],
    components: {
        Grid,
        GridSection,
        Botbar,
        Sidebar,
    },
    created() {

        // Context for text measurements
        this.ctx = new Context(this.$props)

        // Initial layout (All measurments for the chart)
        this.init_range()
        this.sub = this.subset()
        this._layout = new Layout(this)

        // Updates current cursor values
        this.updater = new CursorUpdater(this)

    },
    methods: {
        range_changed(r) {
            // Overwite & keep the original references
            Utils.overwrite(this.range, r)
            const sub = this.subset()
            Utils.overwrite(this.sub, sub)
            const lay = new Layout(this)
            Utils.copy_layout(this._layout, lay)

        },
        cursor_changed(e) {
            this.updater.sync(e)
        },
        cursor_locked(state) {
            this.cursor.locked = state
        },
        calc_interval() {
            if (this.ohlcv.length < 2) return
            this.interval = Utils.detect_interval(this.ohlcv)
        },
        default_range() {
            const dl = Const.ChartConfig.DEFAULT_LEN
            const ml = Const.ChartConfig.MINIMUM_LEN + 0.5
            const l = this.ohlcv.length - 1

            if (this.ohlcv.length < 2) return
            if (this.ohlcv.length < dl) {
                var s = 0, d = ml
            } else {
                var s = l - dl, d = 0.5
            }

            Utils.overwrite(this.range, [
                this.ohlcv[s][0] - this.interval * d,
                this.ohlcv[l][0] + this.interval * ml
            ])
        },
        subset() {
            return this.ohlcv.filter(x =>
                x[0] >= this.range[0] - this.interval &&
                x[0] <= this.range[1]
            )
        },
        common_props() {
            return {
                title_txt: this.$props.title_txt,
                layout: this._layout,
                sub: this.sub,
                range: this.range,
                interval: this.interval,
                cursor: this.cursor,
                colors: this.$props.colors,
                font: this.$props.font
            }
        },
        overlay_subset(source) {
            return source.map(d => ({
                type: d.type,
                name: d.name,
                data: d.data.filter(x =>
                    x[0] >= this.range[0] - this.interval &&
                    x[0] <= this.range[1]
                ),
                settings: d.settings
            }))
        },
        section_props(i) {
            return i === 0 ?
                this.main_section : this.sub_section
        },
        init_range() {
            this.calc_interval()
            this.default_range()
        },
        layer_meta_props(d) {
            // TODO: check reactivity when layout is changed
            if (!(d.grid_id in this.layers_meta)) {
                this.$set(this.layers_meta, d.grid_id, {})
            }
            this.$set(this.layers_meta[d.grid_id],
                Utils.get_num_id(d.layer_id), d)

            // Rerender
            const lay = new Layout(this)
            Utils.copy_layout(this._layout, lay)
        }
    },
    computed: {
        // Component-specific props subsets:
        main_section() {
            let p = Object.assign({}, this.common_props())
            p.data = this.overlay_subset(this.onchart)
            p.overlays = this.$props.overlays
            return p
        },
        sub_section() {
            let p = Object.assign({}, this.common_props())
            p.data = this.overlay_subset(this.offchart)
            p.overlays = this.$props.overlays
            return p
        },
        botbar_props() {
            let p = Object.assign({}, this.common_props())
            p.width = p.layout.botbar.width
            p.height = p.layout.botbar.height
            p.rerender = this.rerender
            return p
        },
        offsub() {
            return this.overlay_subset(this.offchart)
        },
        // Datasets: candles, onchart, offchart indicators
        ohlcv() {
            return this.$props.data.ohlcv || []
        },
        onchart() {
            return this.$props.data.onchart || []
        },
        offchart() {
            return this.$props.data.offchart || []
        }
    },
    data() {
        return {
            // Current data slice
            sub: [],

            // Time range
            range: [],

            // Candlestick interval
            interval: 0,

            // Crosshair states
            cursor: {
                x: null, y: null, t: null, y$: null,
                grid_id: null, locked: false, values: {}
            },

            // A trick to re-render botbar
            rerender: 0,

            // Layers meta-props (changing behaviour)
            layers_meta: {}
        }
    },
    watch: {
        width() {
            const lay = new Layout(this)
            Utils.copy_layout(this._layout, lay)
        },
        height() {
            const lay = new Layout(this)
            Utils.copy_layout(this._layout, lay)
        },
        data: {
            handler: function() {
                if (!this.sub.length) this.init_range()
                const sub = this.subset()
                Utils.overwrite(this.sub, sub)
                const lay = new Layout(this)
                Utils.copy_layout(this._layout, lay)
                Utils.overwrite(this.range, this.range)
                this.rerender++
            },
            deep: true
        }
    }
}

</script>

<style></style>
