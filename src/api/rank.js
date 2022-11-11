import request from "../utils/request";
// 球队数据排行
export const rankTeam = (params)=>{
  return request({
    url: '/rank/team',
    method: 'GET',
    params
  })
}
// 球员数据排行
export const rankPlayer = (params)=>{
  return request({
    url: '/rank/player',
    method: 'GET',
    params
  })
}
