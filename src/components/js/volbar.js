
export default class Volbar {

    constructor(grid, data) {
        this.grid = grid
        this.ctx = grid.ctx
        this.$p = grid.$p
        this.draw(data)
    }

    draw(data) {
        let y0 = this.grid.layout.height
        let w = data.x2 - data.x1
        let h = Math.floor(data.h)

        this.ctx.fillStyle = data.green ?
            this.$p.colors.colorVolUp :
            this.$p.colors.colorVolDw

        this.ctx.fillRect(
            Math.floor(data.x1),
            Math.floor(y0 - h - 0.5),
            Math.floor(w),
            Math.floor(h + 1)
        )

    }

}
