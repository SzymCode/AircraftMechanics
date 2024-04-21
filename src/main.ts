import { createApp } from 'vue'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import './style.css'

import App from './App.vue'

export const app = createApp(App)

/**
 *  App uses & mount
 */
import PrimeVue from 'primevue/config'

app.use(PrimeVue).mount('#app')
