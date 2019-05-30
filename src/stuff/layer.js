
// Layer constructor, helper class

class Layer {
    constructor(name, z, renderer) {
        if (typeof renderer === 'function') {
            this.renderer = {
                draw: renderer
            }
        } else {
            this.renderer = renderer
        }
        this.name = name
        this.z = z
        this.display = true
    }
}

export default Layer
