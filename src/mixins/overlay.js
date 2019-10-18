
// Usuful stuff for creating overlays. Include as mixin

import Mouse from '../stuff/mouse.js'

export default {
    props: [
        'id', 'num', 'interval', 'cursor', 'colors',
        'layout', 'sub', 'data', 'settings', 'grid_id',
        'font', 'config'
    ],
    mounted() {
        // Main chart?
        let main = this.$props.sub === this.$props.data

        this.meta_info()
        this._$emit = this.$emit
        this.$emit = this.custom_event
        this._$emit('new-grid-layer', {
            name: this.$options.name,
            id: this.$props.id,
            renderer: this,
            display: 'display' in this.$props.settings ?
               this.$props.settings['display'] : true,
            z: this.$props.settings['z-index'] ||
               this.$props.settings['zIndex'] || (main ? 0 : -1),
        })

        // Overlay meta-props (adjusting behaviour)
        this._$emit('layer-meta-props', {
            grid_id: this.$props.grid_id,
            layer_id: this.$props.id,
            legend: this.legend,
            data_colors: this.data_colors,
            y_range: this.y_range
        })
        this.mouse = new Mouse(this)
        if (this.init_tool) this.init_tool()
        if (this.init) this.init()
    },
    beforeDestroy() {
        this._$emit('delete-grid-layer', this.$props.id)
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
                event === 'object-selected') {
                args.push(this.grid_id, this.id)
            }
            this._$emit('custom-event', {event, args})
        }
    },
    watch: {
        settings: {
            handler: function() {
                this._$emit('show-grid-layer', {
                    id: this.$props.id,
                    display: 'display' in this.$props.settings ?
                        this.$props.settings['display'] : true,
                })
            },
            deep: true
        }
    },
    render(h) { return h() }
}
