import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/layout',
    name: 'layout',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/layout.vue')
  },
  {
    
    path: '/banner',
    name: 'banner',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/banner/banner.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
