import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    component: ()=>import('@/views/Initialize/first.vue')
  },
  {
    path:'/test',
    component: ()=>import('@/views/test.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: ()=>import('@/views/error-page/404.vue')
  }
]


export default createRouter({
  history: createWebHashHistory(),
  routes,
  })