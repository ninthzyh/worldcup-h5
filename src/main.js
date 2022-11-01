// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/vw.scss';

Vue.config.productionTip = false
Vue.prototype.$vw = function (px) {
  return `${(px / 375) * 100}vw`
}
// 比赛状态
Vue.prototype.$matchStatus = {
  'Fixture':'未开始',
  'Playing':'进行中',
  'Played':'已结束',
  'Cancelled':'取消',
  'Postponed':'延期',
  'Suspended':'暂停',
  'Awarded':'官方裁定',
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
