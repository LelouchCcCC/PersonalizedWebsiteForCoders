import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/test',
    component: ()=>import('@/views/test.vue')
  }
]


export default createRouter({
  history: createWebHashHistory(),
  routes,
  })