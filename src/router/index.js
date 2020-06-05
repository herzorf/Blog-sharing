import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../pages/Login/Login"
import Create from "../pages/Create/Create";
import Detail from "../pages/Detail/Detail";
import Edit from "../pages/Edit/Edit";
import Index from "../pages/Index/Index";
import My from "../pages/My/My";
import User from "../pages/User/User";
import Registered from "../pages/Registered/Regitstered";
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Index
  },
  {
      path: '/login',
      component: Login
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/registered',
      component: Registered
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
