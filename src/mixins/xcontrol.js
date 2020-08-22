// Extentions control

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
        ctrllist() {
            for (var ctrl of this.controllers) {
                if (ctrl.destroy) ctrl.destroy()
            }
            this.controllers = []

            for (var x of this.$props.extentions) {
                this.controllers.push(new x.Main(
                    this,      // tv inst
                    this.data  // dc
                ))
            }
            console.log(this.controllers)
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
        }
    },
    data() {
        return {
            controllers: []
        }
    }
}
