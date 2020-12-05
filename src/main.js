import Vue from 'vue'
import App from './App.vue'

// MOB_DEBUG=true npm run test - Enables mobile debugging
// (sending console output to the webpack terminal)
if (MOB_DEBUG) {
    console.log = debug
    console.error = debug
    console.warn = debug
}

new Vue({
  el: '#app',
  render: h => h(App)
})

function debug(...argv) {
    fetch('/debug?argv=' + JSON.stringify(argv))
}
