import { getRequest, postRequest } from './index'
import { BSERURL } from '@/config'

// 获取列表
export const getList = (areaType, successCallback, failureCallback) => {
  getRequest(`${BSERURL}/getList`, {}, res => (
    successCallback(res)
  ), error => {
    if (failureCallback)failureCallback(error)
  })
}
// 获取类别
export const getState = (areaType, successCallback, failureCallback) => {
  getRequest(`${BSERURL}/getState`, {}, res => (
    successCallback(res)
  ), error => {
    if (failureCallback)failureCallback(error)
  })
}
