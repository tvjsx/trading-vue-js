// Semi-automatic pin object. For stretching things.

export default class Pin {

    // (Comp reference, a name in overlay settings
    // pin parameters)
    constructor(comp, name, params = {}) {

        this.comp = comp
        this.mouse = comp.mouse
        this.name = name
        this.state = params.state || 'settled'

        this.mouse.on('mousemove', e => this.mousemove(e))
        this.mouse.on('mousedown', e => this.mousedown(e))
        this.mouse.on('mouseup', e => this.mouseup(e))

    }

    draw(ctx) {

        switch (this.state) {
            case 'tracking':
                break
            case 'dragging':
                break
            case 'settled':
                break
        }

    }

    mousemove(event) {

        switch(this.state) {
            case 'tracking':
            case 'dragging':
                // cursor.y$ is more precise than mouse.y$
                this.y$ = this.comp.$props.cursor.y$
                this.t = this.mouse.t
                // Reset the settings attahed to the pin (position)
                this.comp.$emit('change-settings', {
                     [this.name]: [this.t, this.y$]
                })
                break
        }
    }

    mousedown(event) {

        switch (this.state) {
            case 'tracking':
                this.state = 'settled'
                break
            case 'settled':
                this.state = 'dragging'
                break
        }

    }

    mouseup(event) {

    }

}
