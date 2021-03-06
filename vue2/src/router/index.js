import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'default',
      redirect:'/goods',
      component: goods
    },{
      path: '/goods',
      name: 'goods',
      component: goods
    },{
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },{
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ],
  linkActiveClass:'active'//用来配置当前项的类名
})
