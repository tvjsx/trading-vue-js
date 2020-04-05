
// Html interface, shown on top of the grid.
// Can be static (a tooltip) or interactive,
// e.g. a control panel.

export default {
    methods: {
        new_interface(params) {
            /*params.uuid = `${this.grid_id}-${this.id}-${this.uxs_count}`
            this.$emit('new-interface', params)
            this.uxs_count++
            return params.uuid*/
        }
    },
    data() {
        return {
            uxs_count: 0
        }
    }
}
