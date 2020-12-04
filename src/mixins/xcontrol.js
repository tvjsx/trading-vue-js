// extensions control

export default {
    mounted() {
        this.ctrllist()
        this.skin_styles()
    },
    methods: {
        // Build / rebuild component list
        ctrllist() {
            this.ctrl_destroy()
            this.controllers = []

            for (var x of this.$props.extensions) {
                let name = x.Main.__name__
                if (!this.xSettings[name]) {
                    this.$set(this.xSettings, name, {})
                }
                let nc = new x.Main(
                    this,      // tv inst
                    this.data, // dc
                    this.xSettings[name] // settings
                )
                nc.name = name
                this.controllers.push(nc)
            }
            return this.controllers
        },
        // TODO: preventDefault
        pre_dc(e) {
            for (var ctrl of this.controllers) {
                if (ctrl.update) {
                    ctrl.update(e)
                }
            }
        },
        post_dc(e) {
            for (var ctrl of this.controllers) {
                if (ctrl.post_update) {
                    ctrl.post_update(e)
                }
            }
        },
        ctrl_destroy() {
            for (var ctrl of this.controllers) {
                if (ctrl.destroy) ctrl.destroy()
            }
        },
        skin_styles() {
            let id = 'tvjs-skin-styles'
            let stbr = document.getElementById(id)
            if (stbr) {
                let parent = stbr.parentNode
                parent.removeChild(stbr)
            }
            if (this.skin_proto && this.skin_proto.styles) {
                let sheet = document.createElement('style')
                sheet.setAttribute("id", id)
                sheet.innerHTML = this.skin_proto.styles
                this.$el.appendChild(sheet)
            }
        }
    },
    computed: {
        ws() {
            let ws = {}
            for (var ctrl of this.controllers) {
                if (ctrl.widgets) {
                    for (var id in ctrl.widgets) {
                        ws[id] = ctrl.widgets[id]
                        ws[id].ctrl = ctrl
                    }
                }
            }
            return ws
        },
        skins() {
            let sks = {}
            for (var x of this.$props.extensions) {
                for (var id in x.skins || {}) {
                    sks[id] = x.skins[id]
                }
            }
            return sks
        },
        skin_proto() {
            return this.skins[this.$props.skin]
        },
        colorpack() {
            let sel = this.skins[this.$props.skin]
            return sel ? sel.colors : undefined
        }
    },
    watch: {
        // TODO: This is fast & dirty fix, need
        // to fix the actual reactivity problem
        skin(n, p) {
            if (n !== p) this.resetChart()
            this.skin_styles()
        },
        extensions() {
            this.ctrllist()
        },
        xSettings: {
            handler(n, p) {
                for (var ctrl of this.controllers) {
                    if (ctrl.onsettings) {
                        ctrl.onsettings(n, p)
                    }
                }
            },
            deep: true
        }
    },
    data() {
        return {
            controllers: []
        }
    }
}
