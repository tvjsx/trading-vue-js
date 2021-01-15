

export default class Crosshair {

    constructor(comp) {

        this.comp = comp
        this.$p = comp.$props
        this.data = this.$p.sub
        this._visible = false
        this.locked = false
        this.layout = this.$p.layout

    }

    draw(ctx) {
        // Update reference to the grid
        this.layout = this.$p.layout

        const cursor = this.comp.$props.cursor
        if (!this.visible && cursor.mode === 'explore') return

        this.x = this.$p.cursor.x
        this.y = this.$p.cursor.y

        ctx.save()
        ctx.strokeStyle = this.$p.colors.cross
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

}
