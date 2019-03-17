// Interactive canvas-based component
// Should implement: mousemove, mouseout, mouseup, mousedown

export default {
    methods: {
        setup() {
            const id = `${this._id}-canvas`
            const canvas = document.getElementById(id)
            // TODO: make dpi s**t work
            //const dpr = window.devicePixelRatio || 1
            canvas.width = this._attrs.width
            canvas.height = this._attrs.height
            canvas.style.width = `${this._attrs.width}px`;
            canvas.style.height = `${this._attrs.height}px`;
            const ctx = canvas.getContext('2d')
            //ctx.scale(dpr, dpr)
        },
        create_canvas(h, id, props) {
            this._id = id
            this._attrs = props.attrs
            return h('div', {
                class: `trading-vue-${id}`,
                style: {
                    left: props.position.x + 'px',
                    top: props.position.y + 'px',
                    position: 'absolute',
                }
            }, [
                h('canvas', {
                    on: {
                        mousemove: e => this.renderer.mousemove(e),
                        mouseout: e => this.renderer.mouseout(e),
                        mouseup: e => this.renderer.mouseup(e),
                        mousedown: e => this.renderer.mousedown(e),
                    },
                    attrs: Object.assign({id: `${id}-canvas`}, props.attrs),
                    ref: 'canvas',
                    style: props.style,
                })
            ].concat(props.hs || []))
        },
        redraw() {
            if (!this.renderer) return
            this.renderer.update()
        }
    },
    watch: {
        width(val) {
            this._attrs.width = val
            this.setup()
            this.$nextTick(this.redraw)
        },
        height(val) {
            this._attrs.height = val
            this.setup()
            this.$nextTick(this.redraw)
        }
    }
}
