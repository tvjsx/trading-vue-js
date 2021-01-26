// Resamples candles

import se from './script_engine.js'

const DEF_LIMIT = 5   // default buff length

export default function(T, auto = false) {

    // Define a TS type (part of the candle)
    let Ti = ['high', 'low', 'close', 'vol'].indexOf(T)

    return function(x, t) {

        let tf = this.__tf__
        let id = this.__id__
        t = t || se.t
        let val = auto ? se[T][0] : x
        // TODO: closing at a specific time
        // (timezone, end of the month...)
        if (!this.__t0__ || t >= this.__t0__ + tf) {

            this.unshift(Ti !== 3 ? val : 0)
            this.__t0__ = t - t % tf
            // TODO: new candle signal
        }

        // Update prices
        switch(Ti) {
            case 0:
                if (val > this[0]) this[0] = val
                break
            case 1:
                if (val < this[0]) this[0] = val
                break
            case 2:
                this[0] = val
                break
            case 3:
                this[0] += val
        }

        // Limit size of vector
        this.length = this.__len__ || DEF_LIMIT
    }
}
