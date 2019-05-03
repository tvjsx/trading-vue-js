<template>
<div class="trading-vue-legend"
     v-bind:style="calc_style">
    <div v-if="grid_id === 0"
         class="trading-vue-ohlcv"
        :style = "{ 'max-width': common.width + 'px' }">
        <span class="t-vue-title"
             :style="{ color: common.colors.colorTitle }">
              {{common.title_txt}}
        </span>
        O<span class="t-vue-lspan" >{{ohlcv[0]}}</span>
        H<span class="t-vue-lspan" >{{ohlcv[1]}}</span>
        L<span class="t-vue-lspan" >{{ohlcv[2]}}</span>
        C<span class="t-vue-lspan" >{{ohlcv[3]}}</span>
        V<span class="t-vue-lspan" >{{ohlcv[4]}}</span>
    </div>
    <div class="t-vue-ind" v-for="ind of this.indicators">
        <span class="t-vue-iname">{{ind.name}}</span>
        <span class="t-vue-ivalues">
            <span class="t-vue-lspan t-vue-ivalue"
                  v-for="v of ind.values" :style="{ color: v.color }">
                {{v.value}}
            </span>
        </span>
        <span v-if="ind.unk" class="t-vue-unknown">
            (Unknown type)
        </span>
    </div>
</div>
</template>
<script>
export default {
    name: 'ChartLegend',
    props: [
        'common', 'values', 'grid_id', 'meta_props'
    ],
    computed: {
        ohlcv() {
            if (!this.$props.values || !this.$props.values.ohlcv) {
                return Array(6).fill('n/a')
            }
            const prec = this.layout.prec

            return [
                this.$props.values.ohlcv[1].toFixed(prec),
                this.$props.values.ohlcv[2].toFixed(prec),
                this.$props.values.ohlcv[3].toFixed(prec),
                this.$props.values.ohlcv[4].toFixed(prec),
                this.$props.values.ohlcv[5] ?
                    this.$props.values.ohlcv[5].toFixed(2):
                    'n/a'
            ]
        },
        indicators() {
            const values = this.$props.values
            const f = this.format
            var types = {}
            return this.json_data
                .filter(x =>  x.settings.legend !== false).map(x => {
                    if (!(x.type in types)) types[x.type] = 0
                    const id = x.type + `_${types[x.type]++}`
                    return {
                        name: x.name || id,
                        values: values ? f(id, values) : this.n_a(1),
                        unk: !(id in (this.$props.meta_props || {}))
                    }
            })
        },
        calc_style() {
            let top = this.layout.height > 150 ? 10 : 5
            return {
                top: `${this.layout.offset + top}px`,
            }
        },
        layout() {
            const id = this.$props.grid_id
            return this.$props.common.layout.grids[id]
        },
        json_data() {
            return this.$props.common.data
        }
    },
    methods: {
        format(id, values) {
            let meta = this.$props.meta_props[id] || {}
            // Matches Overlay.data_colors with the data values
            // (see Spline.vue)
            if (!values[id]) return this.n_a(1)

            // Custom formatter
            if (meta.legend) return meta.legend(values[id])

            return values[id].slice(1).map((x, i) => {
                const cs = meta.data_colors ? meta.data_colors() : []
                if (typeof x == 'number') {
                    // Show 8 digits for small values
                    x = x.toFixed(x > 0.001 ? 4 : 8)
                }
                return {
                    value: x,
                    color: cs ? cs[i] : undefined
                }
            })
        },
        n_a(len) {
            return Array(len).fill({ value: 'n/a' })
        }
    }
}
</script>
<style>
.trading-vue-legend {
    position: relative;
    z-index: 100;
    font-size: 1.25em;
    margin-left: 10px;
    pointer-events: none;
}
.trading-vue-ohlcv {
    pointer-events: none;
    margin-bottom: 0.5em;
}
.t-vue-lspan {
    font-variant-numeric: tabular-nums;
    font-weight: 100;
    font-size: 0.95em;
    color: #999999; /* TODO: move => params */
    margin-left: 0.1em;
    margin-right: 0.2em;
}
.t-vue-title {
    margin-right: 0.25em;
    font-size: 1.45em;
    font-weight: 200;
}
.t-vue-ind {
    margin-left: 0.2em;
    margin-bottom: 0.5em;
    font-weight: 200;
    font-size: 1.0em;
}
.t-vue-ivalue {
    margin-left: 0.5em;
}
.t-vue-unknown {
    color: #999999; /* TODO: move => params */
}
</style>
