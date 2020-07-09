import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'SingIn',
    meta: {
      public: true,
    },
    component: () => import('../views/SingIn.vue')
  },
  {
    path: '/registration',
    name: 'SingUp',
    meta: {
      public: true,
    },
    component: () => import('../views/SingUp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
