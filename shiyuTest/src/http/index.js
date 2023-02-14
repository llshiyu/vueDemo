// 引入axios
import axios from 'axios'
// 引入配置项
// import { BSERURL } from '@/config/index'
// 引入路由
import router from '../router/index'
// 导入弹出提示组件
import { Toast } from 'vant'
// 创建axios请求并在里面加上参数设置
const $http = axios.create({
  // baseURL: BSERURL, // 配置baseURL
  timeout: 5000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json' // 设置数据类型
  }
})
// 处理请求前的数据
$http.interceptors.request.use((config) => {
  return config
})

let messageInstance = null
const resetMessage = (options) => {
// 关闭上一个弹窗，继续下一个弹窗
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = Toast(options)
}
// 处理请求后的数据
$http.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)
// get数据请求方法
export const getRequest = (url, params, successCallback, failureCallback) => {
  $http
    .get(url, {
      params
    })
    .then(
      (res) => {
        if (res.code === 200 || res.captchaBase64) {
          successCallback(res)
          return
        }
        if (res && res.code) {
          Message({
            message: res.message || res.msg || res.data.message || res.data.msg,
            type: 'error'
          })
        }
        if (failureCallback) failureCallback(res)
      },
      () => {
        if (failureCallback) failureCallback()
      }
    )
}
// POST请求数据方法
export const postRequest = (url, data, successCallback, failureCallback) => {
  $http.post(url, data).then(
    (res) => {
      if (res.code === 200) {
        successCallback(res)
        return
      }
      if (res && res.code) {
        Message({
          message: res.message || res.msg || res.data.message || res.data.msg,
          type: 'error'
        })
      }
      if (failureCallback) failureCallback(res)
    },
    () => {
      if (failureCallback) failureCallback()
    }
  )
}
// delete数据请求方法
export const deleteRequest = (
  url,
  params,
  successCallback,
  failureCallback
) => {
  $http
    .delete(url, {
      params
    })
    .then(
      (res) => {
        if (res.code === 200 || res.captchaBase64) {
          successCallback(res)
          return
        }
        if (res && res.code) {
          Message({
            message: res.message || res.msg || res.data.message || res.data.msg,
            type: 'error'
          })
        }
        if (failureCallback) failureCallback(res)
      },
      () => {
        if (failureCallback) failureCallback()
      }
    )
}
export const putRequest = (url, data, successCallback, failureCallback) => {
  $http
    .put(url, data)
    .then(
      (res) => {
        if (res.code === 200) {
          successCallback(res)
          return
        }
        if (res && res.code) {
          Message({
            message: res.message || res.msg || res.data.message || res.data.msg,
            type: 'error'
          })
        }
        if (failureCallback) failureCallback(res)
      },
      () => {
        if (failureCallback) failureCallback()
      }
    )
    .catch((e) => {})
}
