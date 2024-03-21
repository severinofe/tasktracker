import {createRouter, createWebHistory} from 
'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import { userStore } from '@/stores/userStore';


const routes = [

    {
        path: '/',
        redirect: '/login' // Reindirizza il percorso base alla pagina di login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
    const store = userStore();
    if (to.meta.requiresAuth && !store.loggato) {
      next({ name: 'Login' });
    } else {
      next();
    }
  });

export default router