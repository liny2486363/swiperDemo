import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../components/home/home.vue'
import find from '../components/find/find.vue'
import write from '../components/write/write.vue'
import order from '../components/order/order.vue'
import my from '../components/my/my.vue'
import near from '../components/near/near.vue'
import newest from '../components/newest/newest.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'*',
      redirect:'/home/near',
    },
    {
      path:'/',
      redirect:'/home/near',
    },
    {
      path:'/home/near',
      component:home,
      children:[
        { 
          path:'/home/near',
          component:near
        },
        {
           path:'/home/newest',
           component:newest
        }
      ]
     },
    {
      path:'/find',
      component:find
    },
    {
      path:'/write',
      component:write
    },
    {
      path:'/order',
      component:order
    },
    {
      path:'/my',
      component:my
    },
   
 
  ]
})