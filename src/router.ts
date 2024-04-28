import { createRouter, createWebHistory, Router } from 'vue-router'

import App from '@/App.vue'

const VueRouter: Router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: App, name: 'Welcome' }],
})

export default VueRouter
