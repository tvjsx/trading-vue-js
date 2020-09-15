
// Background shader

import FED from './fed.json'
import JP from './JP.json'

export default class BackShader {

    constructor() {
        this.target = 'grid' // Where to apply ('sidebar|botbar|grid')
        this.name = 'BackShader'
        this.id = 'BackShader'
        this.zIndex = -1
        this.owner = null // Skin / extension

        this.fed = new Image()
        this.fed.src = FED

        this.JP = new Image()
        this.JP.src = JP

    }

    draw(ctx, props) {
        if (!props) return // TODO: add more props
        ctx.globalAlpha = this.owner === 'NightSkin' ?
            0.7 : 0.99
        let x = props.layout.width * 0.5
        let y = props.layout.height * 0.5
        ctx.drawImage(this.fed, x-256, y-256)

        let y2 = props.layout.height - this.JP.height
        ctx.drawImage(this.JP, 0, y2)
    }
}
