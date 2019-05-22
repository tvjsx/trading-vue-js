
// Usuful stuff for creating overlays. Include as mixin

// TODO: Add mouse events

export default {
    props: [
        'id', 'num', 'interval', 'cursor', 'colors',
        'layout', 'sub', 'data', 'settings', 'grid_id',
        'font'
    ],
    mounted() {
        this.meta_info()
        this.$emit('new-grid-layer', {
            name: this.$options.name,
            id: this.$props.id,
            renderer: this,
            display: 'display' in this.$props.settings ?
               this.$props.settings['display'] : true,
            z: this.$props.settings['z-index'] ||
               this.$props.settings['zIndex'] || -1,
        })

        // Overlay meta-props (adjusting behaviour)
        this.$emit('layer-meta-props', {
            grid_id: this.$props.grid_id,
            layer_id: this.$props.id,
            legend: this.legend,
            data_colors: this.data_colors,
            y_range: this.y_range
        })
    },
    methods: {
        use_for() {
            /* override it (mandatory) */
            console.warn('use_for() should be implemented')
            console.warn(
            `Format: use_for() {
                  return ['type1', 'type2', ...]
            }`)
        },
        meta_info() {
            /* override it (optional) */
            let id = this.$props.id
            console.warn(
                `${id} meta_info() is req. for publishing`)
            console.warn(
            `Format: meta_info() {
                author: 'Satoshi Smith',
                version: '1.0.0',
                contact (opt) '<email>'
                github: (opt) '<GitHub Page>',
            }`)
        }
    },
    watch: {
        settings: {
            handler: function(val) {
                this.$emit('show-grid-layer', {
                    id: this.$props.id,
                    display: this.$props.settings['display']
                })
            },
            deep: true
        }
    },
    render(h) { return h() }
}
