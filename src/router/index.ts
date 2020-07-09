import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import MyInstance from '../views/processCenter/MyInstance.vue'
import MyUnfinishedWorkItem from '../views/processCenter/MyUnfinishedWorkItem.vue'
import MyWorkflow from '../views/processCenter/MyWorkflow.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {
       
        path: 'MyInstance',
        component: MyInstance
      },
      {
       
        path: 'MyUnfinishedWorkItem',
        component: MyUnfinishedWorkItem
      },
      {
       
        path: 'MyWorkflow',
        component: MyWorkflow
      },
      
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/Login.vue')
  }
  ,
  {
    path:"/mobile/login",
    name:"login",
    component:()=>import('../views/mobile/Login.vue')
  },
  {
    path:"/mobile/home",
    name:"home",
    component:()=>import('../views/mobile/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
