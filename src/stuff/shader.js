
// Inline shader object, can be used
// to draw stuff on top of Sidebar and Botbar

class Shader {
    constructor(target, draw, name) {
        this.target = target // Where to apply ('sidebar|botbar')
        this.draw = draw // arrow function ctx => {}
        this.name = name // optional
        this.id = null // Generated automatically
    }
}

export default Shader
