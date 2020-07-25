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
        path: '',
        name: 'all',
        component: home
      },
      // {

      //   path: '/banner',
      //   name: 'banner',

      //   component: () => import(/* webpackChunkName: "about" */ '../views/banner/banner.vue')
      // }
    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
