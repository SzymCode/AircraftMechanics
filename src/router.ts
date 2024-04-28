import { createRouter, createWebHistory, Router } from 'vue-router'

import App from '@/App.vue'

const VueRouter: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: App,
            name: 'Polish',
        },
        {
            path: '/en',
            component: App,
            name: 'English',
        },
    ],
})

export default VueRouter
