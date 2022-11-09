import request from "../utils/request";
// 首页日期赛程&轮播图
export const scheduleList = (params) => {
  return request({
    url: '/api/date/schedule/list',
    method: 'GET',
    params
  })
}
