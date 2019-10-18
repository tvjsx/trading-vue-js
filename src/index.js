import TradingVue from './TradingVue.vue'
import DataCube from './helpers/datacube.js'
import Overlay from './mixins/overlay.js'
import Utils from './stuff/utils.js'
import Constants from './stuff/constants.js'
import Candle from './components/primitives/candle.js'
import Volbar from './components/primitives/volbar.js'
import { layout_cnv, layout_vol } from
    './components/js/layout_cnv.js'


TradingVue.install = function (Vue) {
    Vue.component(TradingVue.name, TradingVue)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(TradingVue)
    window.TradingVueLib = {
        TradingVue, Overlay, Utils, Constants,
        Candle, Volbar, layout_cnv, layout_vol,
        DataCube
    }
}

export default TradingVue

export {
    TradingVue, Overlay, Utils, Constants,
    Candle, Volbar, layout_cnv, layout_vol,
    DataCube
}
