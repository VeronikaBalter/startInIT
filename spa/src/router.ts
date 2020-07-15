import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'SingIn',
    meta: {
      public: true,
    },
    component: () => import('@/views/SingIn.vue')
  },
  {
    path: '/registration',
    name: 'SingUp',
    meta: {
      public: true,
    },
    component: () => import('@/views/SingUp.vue')
  },
  {
    path: '/vacancies',
    name: 'Vacancies',
    meta: {
      public: true,
    },
    component: () => import('@/views/Vacancies.vue')
  },
  {
    path: '/resumes',
    name: 'Resumes',
    meta: {
      public: true,
    },
    component: () => import('@/views/Resumes.vue')
  },
  {
    path: '/createVacancy',
    name: 'CreateVacancy',
    meta: {
      public: true,
    },
    component: () => import('@/views/create/CreateVacancy.vue')
  },
  {
    path: '/createResume',
    name: 'CreateResume',
    meta: {
      public: true,
    },
    component: () => import('@/views/create/CreateResume.vue')
  },
  {
    path: '/createCompany',
    name: 'CreateCompany',
    meta: {
      public: true,
    },
    component: () => import('@/views/create/CreateCompany.vue')
  },
  {
    path: '*', 
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'PageNotFound',
    meta: {
        public: true,
    },
    component: () => import('./views/PageNotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
