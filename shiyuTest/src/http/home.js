import { getRequest, postRequest } from './index'
import { BSERURL } from '@/config'

// 获取列表
export const getList = (params, successCallback, failureCallback) => {
  postRequest(`${BSERURL}/getList`, params, res => (
    successCallback(res)
  ), error => {
    if (failureCallback)failureCallback(error)
  })
}
// 获取类别
export const getState = (params, successCallback, failureCallback) => {
  getRequest(`${BSERURL}/getState`, params, res => (
    successCallback(res)
  ), error => {
    if (failureCallback)failureCallback(error)
  })
}

// 获取建议
export const getSuggest = (params, successCallback, failureCallback) => {
  getRequest(`${BSERURL}/getSuggest`, params, res => (
    successCallback(res)
  ), error => {
    if (failureCallback)failureCallback(error)
  })
}

// 获取历史
export const getHistory = (params, successCallback, failureCallback) => {
  getRequest(`${BSERURL}/getHistory`, params, res => (
    successCallback(res)
  ), error => {
    if (failureCallback)failureCallback(error)
  })
}
