<script>

import Crosshair from './js/crosshair.js'

export default {
    name: 'Crosshair',
    props: [ 'cursor', 'colors', 'layout', 'sub' ],
    methods: {
        create() {
            this.ch = new Crosshair(this)

            // New grid overlay-renderer descriptor.
            // Should implement draw() (see Spline.vue)
            this.$emit('new-grid-layer', {
                name: 'crosshair',
                renderer: this.ch
            })
        }
    },
    watch: {
        cursor: {
            handler: function() {

                if (!this.ch) this.create()

                const cursor = this.$props.cursor

                if (!cursor.x || !cursor.y) {
                    this.ch.hide()
                    this.$emit('redraw-grid')
                    return
                }
                this.ch.visible = true
                //this.ch.update(cursor.x, cursor.y)

            },
            deep: true
        }
    },
    render(h) { return h() }
}
</script>
