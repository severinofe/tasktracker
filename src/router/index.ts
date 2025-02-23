import {createRouter, createWebHistory} from 
'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router