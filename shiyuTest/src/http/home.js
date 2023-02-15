import { getRequest, postRequest } from './index'
import { BSERURL } from '@/config'

// 获取列表
export const getList = (params, successCallback, failureCallback) => {
  getRequest(`${BSERURL}/getList`, params, res => (
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
