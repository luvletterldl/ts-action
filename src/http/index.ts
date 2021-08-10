
import { storageGetter } from '@/helper/storages'
import Axios from 'axios'
import { LoginResType } from './resTypes/userResTypes'
// JSON类型参数转query类型
export function paramsToQuery(params: any): string {
  let query = '', connection = '?'
  for (let [k, v] of Object.entries(params)) {
    query = `${query}${connection}${k}=${v}`
    connection = '&'
  }
  return query
}

export const headers = {
  Authorization: `Bearer ${storageGetter<LoginResType['result']>(Storages.LocalStorageKey.TOKEN, true)?.token || ''}`
}

/** 表单的Content-Type */
export const formConfig = {
  transformRequest: [function (data: any){
    let ret = ''
    for (let it in data) {
      ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
    }
    return ret.substr(0, ret.length - 1)
  }]
}

// 上传文件的配置
export const fileConfig = {
  headers: { "Content-Type": "multipart/form-data" }
}

export const baseURL = 'xxx'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})

axios.interceptors.response.use(
  (response) => {
    const { status, config, data } = response
    if (status === 502 || status === 500 || status === 504) {
      alert('服务暂不可用，请稍后重试')
    } else if (data.errCode === 401) {
      // setTimeout(() => {
      //   router.replace({
      //     name: 'Login'
      //   })
      // })
    } else if (data.errCode === 403) {
      alert('您没有此操作的权限！')
    }
    if (config.url?.includes('login') && data.success) {
      headers.Authorization = `Bearer ${data.data.token}`;
    }
    return data
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      console.error(`[Axios Error]`, error.response)
    } else {
    }
    return Promise.reject(error)
  }
)

export default axios;