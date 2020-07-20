
// Script environment. Packs everything that
// needed for a script execution together:
// script src, standart functions, input data,
// other overlays & dependencies

import ScriptStd from './script_std.js'

export default class ScriptEnv {

    constructor(src, data) {

        this.std = new ScriptStd(this)
        this.output = []
        this.data = []
        this.tss = {}
        this.output.box_maker = this.make_box(src)
        this.output.box_maker(this, data)
        delete this.output.box_maker

    }

    // A small sandbox for a particular script
    make_box(src) {

        let proto = Object.getPrototypeOf(this.std)
        let std = ``
        for (var k of Object.getOwnPropertyNames(proto)) {
            if (k === 'constructor') continue
            std += `const ${k} = self.std.${k}.bind(self.std)\n`
        }

        let props = ``

        for (var k in src.props) {
            props += `var ${k} = ${src.props[k].def}\n`
        }

        return Function('self,tsdata', `
            'use strict';

            // Built-in functions (aliases)
            ${std}

            // Timeseries
            const open = tsdata.open
            const high = tsdata.high
            const low = tsdata.low
            const close = tsdata.close
            const vol = tsdata.vol

            // Dierct data ts
            const data = self.data
            const ohlcv = tsdata.ohlcv

            // Script's properties (init)
            ${props}

            this.init = () => {
                ${src.init_src}
            }

            this.update = () => {
                ${src.upd_src}
            }
        `)
    }

}
