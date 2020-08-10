import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      public: true,
    },
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
    path: '/moderation',
    name: 'Moderation',
    meta: {
      public: false,
      isAdmin: true,
    },
    component: () => import('@/views/Moderation.vue')
  },
  {
    path: '/vacancies',
    name: 'Vacancies',
    meta: {
      public: true,
    },
    component: () => import('@/views/vacancy/Vacancies.vue')
  },
  {
    path: '/myVacancies',
    name: 'MyVacancies',
    meta: {
      public: false,
    },
    component: () => import('@/views/vacancy/MyVacancies.vue')
  },
  {
    path: '/vacancy/:id',
    name: 'VacancyPage',
    meta: {
      public: true,
    },
    component: () => import('@/views/vacancy/VacancyPage.vue')
  },
  {
    path: '/resumes',
    name: 'Resumes',
    meta: {
      public: true,
    },
    component: () => import('@/views/resume/Resumes.vue')
  },
  {
    path: '/myResumes',
    name: 'MyResumes',
    meta: {
      public: false,
    },
    component: () => import('@/views/resume/MyResumes.vue')
  },
  {
    path: '/createVacancy',
    name: 'CreateVacancy',
    meta: {
      public: false,
    },
    component: () => import('@/views/vacancy/CreateVacancy.vue')
  },
  
  {
    path: '/createResume',
    name: 'CreateResume',
    meta: {
      public: false,
    },
    component: () => import('@/views/resume/CreateResume.vue')
  },
  {
    path: '/createCompany',
    name: 'CreateCompany',
    meta: {
      public: false,
    },
    component: () => import('@/views/company/CreateCompany.vue')
  },
  {
    path: '/personalAccount',
    name: 'PersonalAccount',
    meta: {
      public: false,
    },
    component: () => import('@/views/PersonalAccount.vue')
  },
  {
    path: '/createTest',
    name: 'CreateTest',
    meta: {
      public: false,
    },
    component: () => import('@/views/test/CreateTest.vue')
  },
  {
    path: '/tests',
    name: 'Tests',
    meta: {
      public: false,
    },
    component: () => import('@/views/test/Tests.vue')
  },
  {
    path: '/test/:id',
    name: 'Test',
    meta: {
      public: false,
    },
    component: () => import('@/views/test/TestPage.vue')
  },
  {
    path: '*', 
    redirect: '/pageNotFound'
  },
  {
    path: '/pageNotFound',
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


router.beforeEach(async (to, from, next) => {
  if (to.matched.length > 0) {
    if (!to.meta.public ){
      if(store.getters['authorization/isAuth'])
      {
        if(store.getters['user/getCurrentUser'] == null)
          store.dispatch('user/getCurrentUser');

        next();
      }
      else{
        next({ name: 'SingIn'})
      } 
    }else {
      next();
    }
  } else {
      next({
          path: '/pageNotFound',
          params: { nextUrl: '/pageNotFound' },
      });
  }
});
export default router
