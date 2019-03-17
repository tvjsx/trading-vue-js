
import Utils from '../../stuff/utils.js'
import Const from '../../stuff/constants.js'

export default class Crosshair {

    constructor(comp) {

        this.comp = comp
        this.$p = comp.$props
        this.data = this.$p.sub
        this._visible = false
        this.locked = false
        this.layout = this.$p.layout

    }

    update(x, y) {
        this.x = this.nearest()
        this.y = y
    }

    draw(ctx) {

        // Update reference to the grid
        this.layout = this.$p.layout

        if (!this.visible) return

        // Adjust x here cuz there is a delay between
        // update() and draw()
        this.x = this.nearest()

        ctx.save()
        ctx.strokeStyle = this.$p.colors.colorCross
        ctx.beginPath()
        ctx.setLineDash([5])

        // H
        if (this.$p.cursor.grid_id === this.layout.id) {
            ctx.moveTo(0, this.y)
            ctx.lineTo(this.layout.width - 0.5, this.y)
        }

        // V
        ctx.moveTo(this.x, 0)
        ctx.lineTo(this.x, this.layout.height)
        ctx.stroke()
        ctx.restore()

    }

    hide() {
        this.visible = false
        this.x = undefined
        this.y = undefined
    }

    get visible() {
        return this._visible
    }

    set visible(val) {
        this._visible = val
    }

    // Nearest data object (when locked)
    nearest() {
        if (this.$p.cursor.locked) {
            let t = this.$p.cursor.t
            let x = this.layout.t_magnet(t)
            return x
        }
        return this.$p.cursor.x
    }



}
