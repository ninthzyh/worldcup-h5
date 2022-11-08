import request from "../utils/request";
// 球队数据排行 
export const rankTeam = (params)=>{
  return request({
    url: '/api/rank/team',
    method: 'GET',
    params
  })
}
// 球员数据排行
export const rankPlayer = (params)=>{
  return request({
    url: '/api/rank/player',
    method: 'GET',
    params
  })
}
