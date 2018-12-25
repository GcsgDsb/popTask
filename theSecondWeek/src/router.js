import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/company',
      name: 'company',
      component: () => import( /* webpackChunkName: "about" */ './views/Company.vue')
    },
    {
      path: '/property',
      name: 'property',
      component: () => import('./views/Property.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/crew',
      name: 'crew',
      component: () => import('./views/Crew.vue')
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('./views/Culture.vue')
    },
    {
      path: '/logistics',
      name: 'logistics',
      component: () => import('./views/Logistice.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue')
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: () => import('./views/Recruitment.vue')
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('./views/Security.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/New.vue')
    }
  ]
})