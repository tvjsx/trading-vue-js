
// Usuful stuff for creating overlays. Include as mixin

// TODO: Add mouse events

export default {
    props: [
        'id', 'num', 'interval', 'cursor', 'colors',
        'layout', 'sub', 'data', 'settings', 'grid_id'
    ],
    mounted() {
        this.meta_info()
        this.$emit('new-grid-layer', {
            name: this.$options.name,
            renderer: this
        })
        if (this.data_colors) {
            this.$emit('layer-data-colors', {
                layer_id: this.$props.id,
                colors: this.data_colors()
            })
        }
        // Overlay meta-props (adjusting behaviour)
        this.$emit('layer-meta-props', {
            grid_id: this.$props.grid_id,
            layer_id: this.$props.id,
            y_range: this.y_range
        })
    },
    methods: {
        meta_info() {
            /* implement it (mandatory) */
            let id = this.$props.id
            console.warn(
                `${id} meta_info() should be implemented`)
            console.warn(
            `Format: meta_info() {
                author: 'Satoshi Smith',
                version: '1.0.0',
                contact (opt) '<email>'
                github: (opt) '<GitHub Page>',
            }`)
        },
        use_for() {
            /* implement it (mandatory) */
            console.warn('use_for() should be implemented')
            console.warn(
            `Format: use_for() {
                  return ['tyep1', 'type2', ...]
            }`)
        },
        data_colors() {
            /* implement it (optional) */
        },
        y_range(hi, lo) {
            /* implement it (optional) */
        }
    },

    render(h) { return h() }
}
