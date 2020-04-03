import axios, { AxiosRequestConfig } from 'axios'
import router from '../../../router'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}
const service = axios.create({
  timeout: 60000,
  baseURL: process.env.BASE_URL,
  headers: {
    'content-type': 'json'
  }
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  // const token = localStorage.getItem('token')
  // if (token) {
  //   config.headers.Authorization = token
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response: any) => {
  const responseCode = response.status
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  if (responseCode === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, error => {
  if (!error.response) {
    if (error.message.includes('timeout')) {
      console.log('超时了')
      alert('请求超时，请检查网络是否连接正常')
    } else {
      // 可以展示断网组件
      console.log('断网了')
      alert('请求失败，请检查网络是否已连接')
    }
    return
  }
  const responseCode = error.response.status
  switch (responseCode) {
    // 401：未登录
    case 401:
      // 跳转登录页
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
    // 403: token过期
    case 403:
      // 弹出错误信息
      // Message({
      //   type: 'error',
      //   message: '登录信息过期，请重新登录'
      // })
      // 清除token
      localStorage.removeItem('token')
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }, 1000)
      break
    // 404请求不存在
    case 404:
      // Message({
      //   message: '网络请求不存在',
      //   type: 'error'
      // })
      break
    // 其他错误，直接抛出错误提示
    default:
    // Message({
    //   message: error.response.data.message,
    //   type: 'error'
    // })
  }
  return Promise.reject(error)
})

export default service
