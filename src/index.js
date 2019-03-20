import TradingVue from './TradingVue.vue';

TradingVue.install = function (Vue) {
    Vue.component(TradingVue.name, TradingVue)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(TradingVue)
}

export default TradingVue
