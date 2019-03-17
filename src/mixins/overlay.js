
// Usuful stuff for creating overlays. Include as mixin

export default {
    props: [
        'id', 'num', 'interval', 'cursor', 'colors',
        'layout', 'sub', 'data', 'settings'
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
    },
    render(h) { return h() }
}
