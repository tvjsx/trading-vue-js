<script>
// Sets up all layers/overlays for the grid with 'grid_id'

import Grid from './js/grid.js'
import Canvas from '../mixins/canvas.js'
import Crosshair from './Crosshair.vue'

import Spline from "./overlays/Spline.vue"
import Splines from "./overlays/Splines.vue"
import Range from "./overlays/Range.vue"
import Trades from "./overlays/Trades.vue"
import Channel from "./overlays/Channel.vue"
import Segment from "./overlays/Segment.vue"

export default {
    name: 'Grid',
    props: [
        'sub', 'layout', 'range', 'interval', 'cursor', 'colors', 'overlays',
        'width', 'height', 'data', 'grid_id', 'y_transform', 'font', 'tv_id',
        'config'
    ],
    mixins: [Canvas],
    components: { Crosshair },
    created() {
        // List of all possible overlays (builtin + custom)
        this._list = [
            Spline, Splines, Range, Trades, Channel, Segment
        ]
        .concat(this.$props.overlays)
        this._registry = {}

        // We need to know which components we will use.
        // Custom overlay components overwrite built-ins:
        this._list.forEach((x, i) => {
            let use_for = x.methods.use_for()
            use_for.forEach(indicator => {
                this._registry[indicator] = i
            })
        })
    },
    mounted() {
        const el = this.$refs['canvas']
        this.renderer = new Grid(el, this)
        this.setup()
        this.$nextTick(() => this.redraw())
    },
    render(h) {
        const id = this.$props.grid_id
        const layout = this.$props.layout.grids[id]
        return this.create_canvas(h, `grid-${id}`, {
            position: {
                x: 0,
                y: layout.offset || 0
            },
            attrs: {
                width: layout.width,
                height: layout.height
            },
            style: {
                backgroundColor: this.$props.colors.colorBack
            },
            hs: [
                h(Crosshair, {
                    props: this.common_props(),
                    on: this.layer_events
                })
            ].concat(this.get_overlays(h))
        })
    },
    methods: {
        new_layer(layer) {
            this.$nextTick(() =>
                this.renderer.new_layer(layer)
            )
        },
        get_overlays(h) {
            // Distributes overlay data & settings according
            // to this._registry; returns compo list
            let comp_list = [], count = {}

            for (var d of this.$props.data) {
                let comp = this._list[this._registry[d.type]]
                if (comp) {
                    comp_list.push({
                        cls: comp,
                        type: d.type,
                        data: d.data,
                        settings: d.settings
                    })
                    count[d.type] = 0
                }
            }

            return comp_list.map((x, i) => h(x.cls, {
                    on: this.layer_events,
                    attrs: Object.assign(this.common_props(), {
                        id: `${x.type}_${count[x.type]++}`,
                        type: x.type,
                        data: x.data,
                        settings: x.settings,
                        num: i,
                        grid_id: this.$props.grid_id,
                    })
                })
            )
        },
        common_props() {
            return {
                cursor: this.$props.cursor,
                colors: this.$props.colors,
                layout: this.$props.layout.grids[this.$props.grid_id],
                sub:    this.$props.sub,
                font:   this.$props.font
            }
        }
    },
    watch: {
        range: {
            handler: function() {
                this.redraw()
            },
            deep: true
        },
        cursor: {
            handler: function() {
                this.redraw()
            },
            deep: true
        }
    },
    data() {
        return {
            layer_events: {
                'new-grid-layer': this.new_layer,
                'show-grid-layer': d => {
                    this.renderer.show_hide_layer(d)
                    this.redraw()
                },
                'redraw-grid': this.redraw,
                'layer-meta-props': d =>
                    this.$emit('layer-meta-props', d)
            }
        }
    }
}

</script>
