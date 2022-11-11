import request from "../utils/request";
// 比赛数据
export const matchData = (params) => {
  return request({
    url: '/match/data',
    method: 'GET',
    params
  })
}
// 比赛分析
export const matchAnalysis = (params) => {
  return request({
    url: '/match/analysis',
    method: 'GET',
    params
  })
}
// 智能预测
export const matchPredicted = async (params) => {
  return request({
    url: '/match/predicted',
    method: 'GET',
    params
  })
  // return require('../json/matchPredicted.json')
}
