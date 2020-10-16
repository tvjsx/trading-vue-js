
// Parser for shader events

export default {
    methods: {
        // Init shaders from extensions
        init_shaders(skin, prev) {
            if (skin !== prev) {
                if (prev) this.shaders = this.shaders.filter(
                    x => x.owner !== prev.id
                )
                for (var Shader of skin.shaders) {
                    let shader = new Shader()
                    shader.owner = skin.id
                    this.shaders.push(shader)
                }
                // TODO: Sort by zIndex
            }
        },
        on_shader_event(d, target) {
            if (d.event === 'new-shader') {
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
            }
        }
    },
    watch: {
        skin(n, p) {
            this.init_shaders(n, p)
        }
    },
    data() { return { shaders: [] } }
}
