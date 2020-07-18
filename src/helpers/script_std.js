
// Script std-lib (built-in functions)

import se from './script_engine.js'

export default class ScriptStd {

    constructor() {
    }

    // Wait for a value !== undefined
    nw(x) {
        if (x === undefined) {
            // Skip a dependend indicators + don't
            // add the current value to the final output
            se.skip = true
        }
        return x
    }

    nz(x, v) {
        if (x === undefined) {
            return v || 0
        }
        return x
    }
}
