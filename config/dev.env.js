'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_API: '"development"',
  VUE_APP_ISCACHE: 'false', // 是否缓存
  VUE_APP_APIBASEPATH: '"/api"',// 动态前缀
  VUE_APP_CACHEAPIBASEPATH: '"/datas"', // 静态前缀
  VUE_APP_APIURL: '"http://stag-worldcup-opta.mixtmt.com"',
  VUE_APP_ISCACHEAPIURL: '"静态地址"'
})
