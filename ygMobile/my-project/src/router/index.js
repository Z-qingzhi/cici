import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'
import Menu from '@/components/Menu'
import Zy from '@/components/Zy'
import Message from '@/components/Message'
import Me from '@/components/Me'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/Menu',
      component: Menu,
      children:[
        {path:'Zy',component:Zy},
        {path:'Message',component:Message},
        {path:'Me',component:Me},
        {path:'/Menu',redirect:'/Menu/Zy'}//重定向
      ],
    }

  ],
  linkActiveClass:'active'
})
