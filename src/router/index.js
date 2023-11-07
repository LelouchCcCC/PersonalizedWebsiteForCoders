import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    component: ()=>import('@/views/Initialize/first.vue')
  },
  {
    path:'/home',
    component: ()=>import('@/views/myHome.vue'),
    children:[{
      path:'/information',
      component: ()=>import('@/views/home/content-1.vue')
    },
    {
    path:'/project',
    component: ()=>import('@/views/projects/project.vue')
  },
]
  },
  {
    path:'/ed',
    component: ()=>import('@/views/ed.vue')
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