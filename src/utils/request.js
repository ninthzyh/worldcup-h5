import axios from "axios";

console.log(process.env)
axios.defaults.headers["Content-Type"] = "application/json;";
const isCache = process.env.VUE_APP_ISCACHE ? JSON.parse(process.env.VUE_APP_ISCACHE) : false;
const cacheBasePath = process.env.VUE_APP_CACHEAPIBASEPATH ? process.env.VUE_APP_CACHEAPIBASEPATH : '';
const notCacheBasePath = process.env.VUE_APP_APIBASEPATH ? process.env.VUE_APP_APIBASEPATH : '';
const basePath = isCache ? cacheBasePath : notCacheBasePath;

let httpBase;

console.log(process.env)
if (
  process.env.NODE_ENV === "development" &&
  process.env.VUE_APP_API === "development"
) {
  httpBase = process.env.VUE_APP_APIURL;
  console.log("本地开发");
} else if (
  process.env.NODE_ENV === "production" &&
  process.env.VUE_APP_API === "development"
) {
  // httpBase = "https://stag-cctv-wno.mixtmt.com/prov";
  httpBase =
    process.env.VUE_APP_ISCACHE === "true"
      ? process.env.VUE_APP_ISCACHEAPIURL
      : process.env.VUE_APP_APIURL;
  console.log("测试打包");
} else {
  // httpBase = "https://stag-cctv-wno.mixtmt.com/prov";
  httpBase =
    process.env.VUE_APP_ISCACHE === "true"
      ? process.env.VUE_APP_ISCACHEAPIURL
      : process.env.VUE_APP_APIURL;
  console.log("正式打包");
}

const service = axios.create({
  baseURL: `${httpBase}${basePath}`,
  timeout: 60000,
});
// request拦截器
service.interceptors.request.use(
  (config) => {
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?";
      for (const propName of Object.keys(config.params)) {
        const value = config.params[propName];
        var part = encodeURIComponent(propName) + "=";
        if (value !== null && typeof value !== "undefined") {
          if (typeof value === "object") {
            for (const key of Object.keys(value)) {
              let params = propName + "[" + key + "]";
              var subPart = encodeURIComponent(params) + "=";
              url += subPart + encodeURIComponent(value[key]) + "&";
            }
          } else {
            url += part + encodeURIComponent(value) + "&";
          }
        }
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  (error) => {
    // console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    console.log(1111, res);
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    if (code === 500) {
      return Promise.reject('服务器错误');
    }
    if (code !== 200) {
      return Promise.reject("业务错误");
    } else {
      return res.data.data;
    }
  },
  (error) => {
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    return Promise.reject(error);
  }
);

export default service;
