// extensions control

export default {
    methods: {
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
        }
    },
    computed: {
        // TODO: Should the extensions be reset on a new DC?
        // Idk, but that's what happens now
        ctrllist() {
            for (var ctrl of this.controllers) {
                if (ctrl.destroy) ctrl.destroy()
            }
            this.controllers = []

            for (var x of this.$props.extensions) {
                this.controllers.push(new x.Main(
                    this,      // tv inst
                    this.data  // dc
                ))
            }
            return this.controllers
        },
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
        }
    },
    data() {
        return {
            controllers: []
        }
    }
}
