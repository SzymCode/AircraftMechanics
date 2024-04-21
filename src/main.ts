import { createApp } from 'vue'

import 'primevue/resources/themes/lara-light-cyan/theme.css'
import './style.css'

import App from './App.vue'

export const app = createApp(App)

/**
 *  PrimeVue components
 */
import Image from 'primevue/image'
import Menubar from 'primevue/menubar'

app.component('Image', Image).component('Menubar', Menubar)

/**
 *  App uses & mount
 */
import PrimeVue from 'primevue/config'

app.use(PrimeVue).mount('#app')
