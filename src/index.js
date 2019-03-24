import TradingVue from './TradingVue.vue';
import Overlay from './mixins/overlay.js';
import Utils from './stuff/utils.js';
import Constants from './stuff/constants.js';

TradingVue.install = function (Vue) {
    Vue.component(TradingVue.name, TradingVue)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(TradingVue)
    window.TradingVueLib = {
        TradingVue, Overlay, Utils, Constants
    }
}

export default TradingVue

export {
    TradingVue, Overlay, Utils, Constants
}
