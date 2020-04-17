import Vue from 'vue';

import App from './Test.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});

const isDev = process.env.NODE_ENV !== "production"
Vue.config.performance = isDev
