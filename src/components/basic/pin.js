// Semi-automatic pin object. For stretching things.

export default class Pin {

    // (Comp reference, a name in overlay settings
    // pin parameters)
    constructor(comp, name, params = {}) {

        this.comp = comp
        this.name = name
        this.state = params.state || 'settled'

    }

    draw(ctx) {

    }
}
