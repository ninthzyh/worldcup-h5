import request from "../utils/request";
// 比赛分析
export const matchAnalysis = (params) => {
  return request({
    url: '/api/match/analysis',
    method: 'GET',
    params
  })
}
// 智能预测
export const matchPredicted = (params) => {
  return request({
    url: '/api/match/predicted',
    method: 'GET',
    params
  })
}
