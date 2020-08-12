// Tick aggregation

import Utils from '../stuff/utils.js'

export default class AggTool {

    constructor(int = 100) {

        this.symbols = {}
        this.int = int // Itarval in ms
        this.update = () => {}

    }

    push(sym, upd, tf) {

        tf = parseInt(tf)
        let old = this.symbols[sym]
        let t = Utils.now()

        if (!old) {

            this.symbols[sym] = { upd, t }
            this.update(sym, upd)


        } else if (upd[0] >= old.upd[0] + tf) {

            // Refine the previous
            let refine = old.upd.slice()
            refine[0] = old.upd[0]
            this.update(sym, refine)

            this.symbols[sym] = { upd, t }

            // Update with the new
            this.update(sym, upd)

            // Tick updates the current
        } else {
            this.symbols[sym].upd = upd
            let _t = this.symbols[sym].t

            if (t - _t > this.int) {
                this.update(sym, upd)
                this.symbols[sym].t = t
            }

        }

    }

    clear() {
        this.symbols = {}
    }

}
