import { getRequest, postRequest } from './index'
import { BSERURL } from '@/config'

// 获取列表
export const getList = (areaType, successCallback, failureCallback) => {
  getRequest(`${BSERURL}`, {}, res => (
    successCallback(res)
  ), error => {
    if (failureCallback)failureCallback(error)
  })
}
