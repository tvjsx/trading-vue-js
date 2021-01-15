import { createApp } from 'vue'

import App from './App.vue'

createApp(App).mount('#app')

// MOB_DEBUG=true npm run test - Enables mobile debugging
// (sending console output to the webpack terminal)
if (MOB_DEBUG) {
    console.log = debug
    console.error = debug
    console.warn = debug
}

function debug(...argv) {
    fetch('/debug?argv=' + JSON.stringify(argv))
}
