// ./src/router.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import About from '../Views/About.vue'

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
  ]
})

export default router;