
// Usuful stuff for creating overlays. Include as mixin

// TODO: Add mouse events

export default {
    props: [
        'id', 'num', 'interval', 'cursor', 'colors',
        'layout', 'sub', 'data', 'settings', 'grid_id'
    ],
    mounted() {
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
    render(h) { return h() }
}
