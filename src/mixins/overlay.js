
// Usuful stuff for creating overlays. Include as mixin

import Mouse from '../stuff/mouse.js'

export default {
    props: [
        'id', 'num', 'interval', 'cursor', 'colors',
        'layout', 'sub', 'data', 'settings', 'grid_id',
        'font', 'config', 'meta', 'tf', 'i0'
    ],
    emits: [
        'new-grid-layer', 'layer-meta-props', 'delete-grid-layer',
        'custom-event', 'show-grid-layer', 'drawing-mode-off',
        'scroll-lock', 'change-settings', 'object-selected',
        'new-shader', 'remove-tool', 'redraw-grid'
    ],
    mounted() {
        // TODO(1): when hot reloading, dynamicaly changed mixins
        // dissapear (cuz it's a hack), the only way for now
        // is to reload the browser
        if (!this.draw) {
            this.draw = ctx => {
                let text = 'EARLY ADOPTER BUG: reload the browser & enjoy'
                console.warn(text)
            }
        }
        // Main chart?
        let main = this.$props.sub === this.$props.data

        this.meta_info()

        this.$emit('new-grid-layer', {
            name: this.$options.name,
            id: this.$props.id,
            renderer: this,
            display: 'display' in this.$props.settings ?
               this.$props.settings['display'] : true,
            z: this.$props.settings['z-index'] ||
               this.$props.settings['zIndex'] || (main ? 0 : -1),
        })

        // Overlay meta-props (adjusting behaviour)
        this.$emit('layer-meta-props', {
            grid_id: this.$props.grid_id,
            layer_id: this.$props.id,
            legend: this.legend,
            data_colors: this.data_colors,
            y_range: this.y_range
        })
        this.exec_script()
        this.mouse = new Mouse(this)
        if (this.init_tool) this.init_tool()
        if (this.init) this.init()
    },
    beforeUnmount() {
        if (this.destroy) this.destroy()
        this.$emit('delete-grid-layer', this.$props.id)
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
        },
        custom_event(event, ...args) {
            if (event.split(':')[0] === 'hook') return
            if (event === 'change-settings' ||
                event === 'object-selected' ||
                event === 'new-shader' ||
                event === 'new-interface' ||
                event === 'remove-tool') {
                args.push(this.grid_id, this.id)
                if (this.$props.settings.$uuid) {
                    args.push(this.$props.settings.$uuid)
                }
            }
            if (event === 'new-interface') {
                args[0].overlay = this
                args[0].uuid = this.last_ux_id =
                    `${this.grid_id}-${this.id}-${this.uxs_count++}`
            }
            this.$emit('custom-event', {event, args})
        },
        // TODO: the event is not firing when the same
        // overlay type is added to the offchart[]
        exec_script() {
            if (this.calc) this.$emit('exec-script', {
                grid_id: this.$props.grid_id,
                layer_id: this.$props.id,
                src: this.calc(),
                use_for: this.use_for()
            })
        }
    },
    watch: {
        settings: {
            handler: function(n, p) {
                if (this.watch_uuid) this.watch_uuid(n, p)
                this.$emit('show-grid-layer', {
                    id: this.$props.id,
                    display: 'display' in this.$props.settings ?
                        this.$props.settings['display'] : true,
                })
            },
            deep: true
        }
    },
    data() { return { uxs_count: 0, last_ux_id: null } },
    render() { return [] }
}
