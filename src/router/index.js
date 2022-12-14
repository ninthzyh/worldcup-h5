import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Menu from '@/components/Menu'
import Schedule from "@/views/schedule";
import Rank from "@/views/rank";
import Groups from "@/views/groups";
import Rise from "@/views/rise";
import GoalsList from "@/views/rank/goalsList";
import Analysis from "@/views/analysis";
import MatchData from "@/views/analysis/matchData";
import Forecast from "@/views/analysis/forecast";
import MatchAnalysis from "@/views/analysis/matchAnalysis";

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
      redirect: "/catalogue/schedule",
      component: Menu,
      children: [
        { path: 'schedule', component: Schedule },
        { path: 'rank', component: Rank },
        { path: 'groups', component: Groups },
        { path: 'rise', component: Rise },
      ]
    },
    {
      path: '/catalogue/goalsList',
      name: 'goalsList',
      component: GoalsList,
    },
    {
      path: '/analysis',
      component: Analysis,
      redirect: "/analysis/match-data",
      children: [
        { path: 'match-data', component: MatchData },
        { path: 'match-analysis', component: MatchAnalysis },
        { path: 'forecast', component: Forecast },
      ]
    },
  ]
})
