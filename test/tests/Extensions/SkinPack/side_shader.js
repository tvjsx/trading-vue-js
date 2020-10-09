
// Background shader

import FED from './fed.json'

export default class BackShader {

    constructor() {
        this.target = 'sidebar' // Where to apply ('sidebar|botbar|grid')
        this.name = 'BackShader'
        this.id = 'BackShader'
        this.zIndex = -1
        this.owner = null // Skin / extension

        this.fed = new Image()
        this.fed.src = FED


    }

    draw(ctx, props) {
        if (!props) return // TODO: add more props
        ctx.globalAlpha = this.owner === 'NightSkin' ?
            0.7 : 0.99
        let x = props.layout.sb * 0.5
        let y = props.layout.height * 0.5
        ctx.drawImage(this.fed, x-256, y-256)
    }
}
