
// Inline shader object, can be used
// to draw stuff on Sidebar, Botbar or Grid

class Shader {
    constructor(target, draw, name) {
        this.target = target // Where to apply ('sidebar|botbar|grid')
        this.draw = draw // arrow function ctx => {}
        this.name = name // optional
        this.id = null // Generated automatically
        this.zIndex = 0
    }
}

export default Shader
