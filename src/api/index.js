import request from "../utils/request";

export const rise = (params)=>{
  return request({
    url: '/standing/promotion',
    method: 'GET',
    params
  })
}
