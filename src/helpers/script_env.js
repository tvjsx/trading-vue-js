
// Script environment. Packs everything that
// needed for a script execution together:
// script src, standart functions, input data,
// other overlays & dependencies

import ScriptStd from './script_std.js'

export default class ScriptEnv {

    constructor(src, data) {

        this.std = new ScriptStd()
        this.output = []
        this.data = []
        this.output.box_maker = this.make_box(src)
        this.output.box_maker(this, data)
        delete this.output.box_maker

    }

    // A small sandbox for a particular script
    make_box(src) {

        let std_lib = ``
        let proto = Object.getPrototypeOf(this.std)
        for (var k of Object.getOwnPropertyNames(proto)) {
            if (k === 'constructor') continue
            std_lib += `const ${k} = self.std.${k}\n`
        }

        let props = ``

        for (var k in src.props) {
            props += `var ${k} = ${src.props[k].def}\n`
        }

        return Function('self,tsdata', `
            'use strict';

            // Built-in functions (aliases)
            ${std_lib}

            // Timeseries
            const open = tsdata.open
            const high = tsdata.high
            const low = tsdata.low
            const close = tsdata.close
            const vol = tsdata.vol

            // Overlay data
            const data = self.data

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
