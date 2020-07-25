import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import layout from '../views/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path: 'all',
        name: 'all',
        component: () => import('../views/all/all.vue')
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('../views/detail/detail.vue')
      }

    ],
  },
  {
    path: 'login',
    name: 'login',
    component: () => import('../views/login/logi.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
