<template>
    <!-- Horizontal section: (grid + sidebar) -->
    <div class="trading-vue-section">
        <chart-legend
            v-bind:values="section_values"
            v-bind:grid_id="grid_id"
            v-bind:common="legend_props"
            v-bind:data_colors="data_colors">
        </chart-legend>
        <grid v-bind="grid_props" v-bind:grid_id="grid_id"
             v-on:range-changed="range_changed"
             v-on:cursor-changed="cursor_changed"
             v-on:cursor-locked="cursor_locked"
             v-on:layer-data-colors="set_data_colors"
             v-on:layer-meta-props="emit_meta_props">
        </grid>
        <sidebar v-bind="sidebar_props" v-bind:grid_id="grid_id"
                 v-bind:rerender="rerender">
        </sidebar>
    </div>
</template>

<script>

import Grid from './Grid.vue'
import Sidebar from './Sidebar.vue'
import ChartLegend from './Legend.vue'

export default {
    name: 'GridSection',
    props: ['common', 'grid_id'],
    components: {
        Grid,
        Sidebar,
        ChartLegend
    },
    methods: {
        range_changed(r) {
            this.$emit('range-changed', r)
        },
        cursor_changed(c) {
            c.grid_id = this.$props.grid_id
            this.$emit('cursor-changed', c)
        },
        cursor_locked(state) {
            this.$emit('cursor-locked', state)
        },
        set_data_colors(d) {
            this.$set(this.data_colors, d.layer_id, d.colors)
        },
        emit_meta_props(d) {
            this.$emit('layer-meta-props', d)
        }
    },
    computed: {
        // Component-specific props subsets:
        grid_props() {
            const id = this.$props.grid_id
            let p = Object.assign({}, this.$props.common)

            // Split offchart data between offchart grids
            if (id > 0) {
                p.data = [p.data[id - 1]]
            }

            p.width = p.layout.grids[id].width
            p.height = p.layout.grids[id].height
            return p
        },
        sidebar_props() {
            const id = this.$props.grid_id
            let p = Object.assign({}, this.$props.common)
            p.width = p.layout.grids[id].sb
            p.height = p.layout.grids[id].height
            return p
        },
        section_values() {
            const id = this.$props.grid_id
            let p = Object.assign({}, this.$props.common)
            p.width = p.layout.grids[id].width
            return p.cursor.values[id]
        },
        legend_props() {
            const id = this.$props.grid_id
            let p = Object.assign({}, this.$props.common)

            // Split offchart data between offchart grids
            if (id > 0) {
                p.data = [p.data[id - 1]]
            }
            return p
        }
    },
    watch: {
        common: {
            handler: function (val, old_val) {
                if(val.data.length !== old_val.data.length) {
                    // Look at this nasty trick!
                    // We need to re-render sidebar only
                    // when grids added or removed
                    this.rerender++
                }
            },
            deep: true
        }
    },
    data() {
        return {
            data_colors: {},
            rerender: 0
        }
    }
}
</script>
