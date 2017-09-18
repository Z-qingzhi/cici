import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'
import Menu from '@/components/Menu'

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
      component: Menu
    }
  ]
})
