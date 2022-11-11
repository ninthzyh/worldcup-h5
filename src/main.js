// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/vw.scss';
Vue.config.productionTip = false
Vue.prototype.$vw = function (px, needVw) {
  if(window.innerWidth>600 && !needVw){
    return `${px}px`
  }
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
const search = location.search.split('?');
let paramsMap = {};
if(search && search[1]) {
  const params = search[1].split('&');
  params.forEach(item => {
    const param = item.split('=');
    paramsMap = {
      ...paramsMap,
      [param[0]]: param[1]
    }
  })
}
Vue.prototype.$lang = require(`./utils/language-${paramsMap.lang === 'en' ? 'en' : 'cn'}.json`)
window.lang = paramsMap.lang === 'en' ? 'en-gb' : 'zh-cn'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
