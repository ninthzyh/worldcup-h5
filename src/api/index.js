import request from "../utils/request";

export const rise = (params) => {
  return request({
    url: '/api/standing/promotion',
    method: 'GET',
    params
  })
}
