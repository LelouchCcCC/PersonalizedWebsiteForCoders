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
      path:'/resume',
      component: ()=>import('@/views/resume/resume.vue'),
    },
    {
      path:'/thinking',
      component: ()=>import('@/views/thinking/thinking.vue'),
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
    path:'/manage-thinking',
    component: ()=>import('@/views/user/add-thinking.vue'),
    meta: {
      requireAuth: true,
    }
  },
  {
    path:'/login',
    name:'login',
    component: ()=>import('@/views/login/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: ()=>import('@/views/error-page/404.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  })


  router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){  // 判断该路由是否需要登录权限
          if(localStorage.getItem("token")) {  // 从本地存储localStorage获取当前的token是否存在
              next()
          }else{
              next('/login') //如果token不存在，就跳到首页
          }
    }else{
          if(localStorage.getItem("token") && to.path == '/login') {  //token存在时候，进去登录页面就自动跳转到首页
              next('/information')
          }else{
              next()
          }
      }
  });


  export default router