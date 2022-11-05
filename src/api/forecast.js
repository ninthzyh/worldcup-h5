import request from "../utils/request";

export const matchPredicted = (params)=>{
  return request({
    url: '/match/predicted',
    method: 'GET',
    params
  })
}
