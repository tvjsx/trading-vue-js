
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
            renderer: this,
            z: this.$props.settings['z-index'] || -1,
        })
    
        // Overlay meta-props (adjusting behaviour)
        this.$emit('layer-meta-props', {
            grid_id: this.$props.grid_id,
            layer_id: this.$props.id,
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
                  return ['tyep1', 'type2', ...]
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
        },
        data_colors() {
            /* override it (optional) */
        },
        y_range(hi, lo) {
            /* override it (optional) */
        }
    },

    render(h) { return h() }
}
