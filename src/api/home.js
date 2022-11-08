import request from "../utils/request";
// 首页轮播图 
export const schedulePlaying = (params)=>{
  return request({
    url: '/api/date/schedule/playing',
    method: 'GET',
    params
  })
}
// 日期赛程  
export const scheduleList = (params)=>{
  return request({
    url: '/api/date/schedule/list',
    method: 'GET',
    params
  })
}
