
// Manager for Inteerface objects

export default {
    methods: {
        on_ux_event(d, target) {
            if (d.event === 'new-interface') {
                if (d.args[0].target === target) {
                    d.args[0].id = `${d.args[1]}-${d.args[2]}`
                    this.uxs.push(d.args[0])
                    // this.rerender++
                }
            }
            if (d.event === 'remove-interface') {
                let id = d.args.join('-')
                this.uxs = this.uxs
                    .filter(x => x.id !== id)
            }

            /*if (d.event === 'new-shader') {
                if (d.args[0].target === target) {
                    d.args[0].id = `${d.args[1]}-${d.args[2]}`
                    this.shaders.push(d.args[0])
                    this.rerender++
                }
            }
            if (d.event === 'remove-shaders') {
                let id = d.args.join('-')
                this.shaders = this.shaders
                    .filter(x => x.id !== id)
            }*/
        }
    },
    data() { return { uxs: [] } }
}
