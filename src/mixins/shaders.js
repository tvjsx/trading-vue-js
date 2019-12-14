
// Parser for shader events 

export default {
    methods: {
        on_shader_event(d, target) {
            if (d.event === 'new-shader') {
                if (d.args[0].target === target) {
                    d.args[0].id = `${d.args[1]}-${d.args[2]}`
                    this.shaders.push(d.args[0])
                }
            }
            if (d.event === 'remove-shaders') {
                let id = d.args.join('-')
                this.shaders = this.shaders
                    .filter(x => x.id !== id)
            }
        }
    },
    data() { return { shaders: [] } }
}
