import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Menu from '@/components/Menu'
import Schedule from "@/views/schedule";
import Rank from "@/views/rank";
import Groups from "@/views/groups";
import Rise from "@/views/rise";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/catalogue',
      component: Menu,
      children:[
        { path: 'schedule', component: Schedule },
        { path: 'rank', component: Rank },
        { path: 'groups', component: Groups },
        { path: 'rise', component: Rise },
      ]
    }
  ]
})
