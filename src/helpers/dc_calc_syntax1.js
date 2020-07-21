/* Indicator calculation function (sketch): */

class Overlay1 {
    // ... methods:
    calc() {
        return {
            // Calc
            props: {
                length: { def: 25, range: [2, 200, 1] }
            },
            // init() called before all update()s
            // Can precalculate the all overlay data at once
            init() {
                // Import indicator + set the default params
                this.ind1 = dep('SomeIndicator1', [12])

                // Import a TA library (nmp package)
                this.ta_lib = dep('@some_ta_lib')

            },
            // Update f() executed on the inverted vectors:
            // - open
            // - high
            // - low
            // - close
            // - vol
            // & VA indicators
            // + Helper functions:
            // nw() -> skip until value !== undefined
            // nz() -> replace with 0 if undefined
            update() {

                // Explicit update otherwise there will
                // an auto-update before the current update() call
                let v0 = ind1.update(12)
                // get value of SomeIndicator1
                v5 = ind1[5]

                ta_lib.some_f()

                let sum = close[0]
                for (var i = 1; i < length; i++) {
                    sum = sum + nz(close[i])
                }
                return sum / length // Returns the last value
            }
        }
    }
}

class Overlay2 {
    // ... methods:
    calc() {
        return {
            props: {
                length: { def: 25, range: [2, 200, 1] }
            },
            conf: {
                // Assuming this is an overlay without draw(),
                // so we can specify an overlay for rendering:
                renderer: 'Spline',

                // Use update() to for the init, or just for
                // the live updates
                precalc: true,

                // Inverted buffer leng (autodetect?)
                bufflen: 200,

                // (Future feature)  Place the result on a chart's
                // view instead of the main chart
                save_as_view: 'heikin'
            },

            init() {
                // Non-inverted data array of this Overlay
                // Will be filled during the calculation
                data[0] = 1
                data[0] = 2
                // 1.5, 1.75 , ....
            },
            update() {

                this[0] = (this[1] + this[2]) / 2

                // t -> current timestamp
                if (t > 1594804193000) { /* ... */ }

                return
            }
        }
    }
}
