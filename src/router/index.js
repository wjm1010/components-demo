import Vue from 'vue'
import Router from 'vue-router'
import demo1 from '@/view/demo1'
import demo2 from '@/view/demo2'
import demo3 from '@/view/demo3'
import demo4 from '@/view/demo4'
import demo5 from '@/view/demo5'
import demo6 from '@/view/demo6'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/demo1'},
    {path: '/demo1', name: 'demo1', component: demo1},
    {path: '/demo2', name: 'demo2', component: demo2},
    {path: '/demo3', name: 'demo3', component: demo3},
    {path: '/demo4', name: 'demo4', component: demo4},
    {path: '/demo5', name: 'demo5', component: demo5},
    {path: '/demo6', name: 'demo6', component: demo6}
  ]
})
