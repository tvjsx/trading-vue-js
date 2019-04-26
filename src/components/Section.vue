<template>
    <!-- Horizontal section: (grid + sidebar) -->
    <div class="trading-vue-section">
        <chart-legend
            v-bind:values="section_values"
            v-bind:grid_id="grid_id"
            v-bind:common="legend_props"
            v-bind:meta_props="get_meta_props">
        </chart-legend>
        <grid v-bind="grid_props" v-bind:grid_id="grid_id"
             v-on:range-changed="range_changed"
             v-on:cursor-changed="cursor_changed"
             v-on:cursor-locked="cursor_locked"
             v-on:layer-meta-props="emit_meta_props"
             v-on:sidebar-transform="sidebar_transform">
        </grid>
        <sidebar
            v-bind="sidebar_props"
            v-bind:grid_id="grid_id"
            v-bind:rerender="rerender"
            v-on:sidebar-transform="sidebar_transform">
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
        sidebar_transform(s) {
            this.$emit('sidebar-transform', s)
        },
        emit_meta_props(d) {
            this.$set(this.meta_props, d.layer_id, d)
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
            p.y_transform = p.y_ts[id]
            return p
        },
        sidebar_props() {
            const id = this.$props.grid_id
            let p = Object.assign({}, this.$props.common)
            p.width = p.layout.grids[id].sb
            p.height = p.layout.grids[id].height
            p.y_transform = p.y_ts[id]
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
        },
        get_meta_props() {
            const id = this.$props.grid_id
            return this.meta_props
        }
    },
    watch: {
        common: {
            handler: function (val, old_val) {
                if(val.data.length !== old_val.data.length) {
                    // Look at this nasty trick!
                    this.rerender++
                }
            },
            deep: true
        }
    },
    data() {
        return {
            meta_props: {},
            rerender: 0
        }
    }
}
</script>
<style>
.trading-vue-section {
    height: 0;
    position: absolute;
}
</style>
