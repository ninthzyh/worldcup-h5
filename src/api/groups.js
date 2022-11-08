import request from "../utils/request";
// 分组积分榜
export const standingGroup = (params) => {
  return request({
    url: '/api/standing/group',
    method: 'GET',
    params
  })
}
