
// Manager for Inteerface objects

export default {
    methods: {
        on_ux_event(d, target) {
            if (d.event === 'new-interface') {
                if (d.args[0].target === target) {
                    //let uuid = `${d.args[1]}-${d.args[2]}-${d.args[3]}`
                    //d.args[0].uuid = uuid
                    d.args[0].grid_id = d.args[1]
                    d.args[0].overlay_id = d.args[2]
                    this.uxs.push(d.args[0])
                    // this.rerender++
                }
            }
            if (d.event === 'close-interface') {
                this.uxs = this.uxs
                    .filter(x => x.uuid !== d.args[0])
            }
            if (d.event === 'modify-interface') {
                let ux = this.uxs
                    .filter(x => x.uuid === d.args[0])

                if (ux.length) {
                    this.modify(ux[0], d.args[1])
                }
            }
            if (d.event === 'hide-interface') {
                let ux = this.uxs
                    .filter(x => x.uuid === d.args[0])

                if (ux.length) {
                    ux[0].hidden = true
                    this.modify(ux[0], { hidden: true })
                }
            }
            if (d.event === 'show-interface') {
                let ux = this.uxs
                    .filter(x => x.uuid === d.args[0])

                if (ux.length) {
                    this.modify(ux[0], { hidden: false })
                }
            }
        },
        modify(ux, obj = {}) {
            for (var k in obj) {
                if (k in ux) {
                    this.$set(ux, k, obj[k])
                }
            }
        },
        remove_all_ux() {
            this.uxs = []
        }
    },
    data() { return { uxs: [] } }
}
