
// Html interface, shown on top of the grid.
// Can be static (a tooltip) or interactive,
// e.g. a control panel.

export default {
    props: ['ux', 'updater', 'colors'],
    methods: {
        close() {
            this.$emit('custom-event', {
                event: 'close-interface',
                args: [this.$props.ux.uuid]
            })
        },
        // TODO: emit all the way to the uxlist
        // add apply the changes there
        modify(obj) {
            this.$emit('custom-event', {
                event: 'modify-interface',
                args: [this.$props.ux.uuid, obj]
            })
        }
    },
    computed: {
        overlay() {
            return this.$props.us.overlay
        },
        layout() {
            return this.overlay.layout
        }
    },
    data() {
        return {

        }
    }
}
