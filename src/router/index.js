import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/home',
      component: () => import('@/view/Home.vue')
    },
    {
      path: '/dict',
      component: () => import('@/view/Dict.vue')
    },

  ]
})
