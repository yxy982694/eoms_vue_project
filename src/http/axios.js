import axios from 'axios';
import config from './config';
import Cookies from "js-cookie";
import router from '@/router'

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    let instance
    // 线上中配置
    instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout,
      withCredentials: config.withCredentials,
      crossDomain: config.crossDomain
    })
    // 测试中配置
    // if (options.url.indexOf('wrm')>-1) {
    //   instance = axios.create({
    //     baseURL: '/',
    //     headers: config.headers,
    //     timeout: config.timeout,
    //     withCredentials: config.withCredentials,
    //     crossDomain: config.crossDomain
    //   })
    // } else {
    //   instance = axios.create({
    //     baseURL: config.baseUrl,
    //     headers: config.headers,
    //     timeout: config.timeout,
    //     withCredentials: config.withCredentials,
    //     crossDomain: config.crossDomain
    //   })
    // }

    // request 请求拦截器 请求之前执行
    instance.interceptors.request.use(
      config => {
        // console.log('请求拦截器')
        // console.log(token)
        // console.log(config)
        // console.log('90909090++++++++++')
        // let token = '77ae89be36504adfb5c09ef71409ea0e'
        let tokenCookie = Cookies.get('sessionUserToken')
        let tokenCookieFlag = Cookies.get('LtpaToken2')
        // let tokenStorage = sessionStorage.getItem('sessionUserToken')
        // console.log(tokenCookie)
        // console.log(tokenStorage)
        // 发送请求时携带token
        if (tokenCookieFlag) {
          // console.log('9090___+============')
          config.headers.sessionusertoken = tokenCookie
          // config.headers.zhangsan = '90909090'
        } else {
          // window.location.href = './login.html'
          // 重定向到登录页面
          // Cookies.set('sessionUserToken','')
          // sessionStorage.setItem('sessionUserToken', '')
          // router.push('/login')
        }
        // if(config.method == 'post'){
        //   config.params = {};
        // }
        return config
      },
      error => {
        // 请求发生错误时
        // console.log('request:', error)
        // 判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          // console.log('timeout请求超时')
        }
        // 需要重定向到错误页面
        const errorInfo = error.response
        // console.log(errorInfo)
        if (errorInfo) {
          error = errorInfo.data  // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
          const errorStatus = errorInfo.status; // 404 403 500 ...
          router.push({
            path: `/error/${errorStatus}`
          })
        }
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )

    // response 响应拦截器 响应结果返回前执行
    instance.interceptors.response.use(
      response => {
        // console.log('响应拦截器')
        return response.data
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权，请登录'
              break
            case 403:
              err.message = '拒绝访问'
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break
            case 408:
              err.message = '请求超时'
              // sessionStorage.setItem('sessionUserToken', '')
              // Cookies.set('sessionUserToken', '')
              // router.push('/login')
              break
            case 500:
              err.message = '服务器内部错误'
              // if (document.cookie) {
              //   let cookies = document.cookie.split(";")//将所有cookie键值对通过分号分割为数组
              //   for (let i=0;i<cookies.length;i++) {
              //     cookies[i] = cookies[i].trim()
              //     document.cookie = cookies[i] + ";path=/;expires=" + (new Date(0)).toUTCString()
              //     document.cookie = cookies[i] + ";path=/haeoms/;expires=" + (new Date(0)).toUTCString()
              //     document.cookie = cookies[i] + ";path=/;domain=" +document.domain+";expires=" + (new Date(0)).toUTCString()
              //     document.cookie = cookies[i] + ";path=/haeoms/;domain=" +document.domain+";expires=" + (new Date(0)).toUTCString()
              //   }
              //   location.reload()
              // }
              // sessionStorage.setItem('sessionUserToken', '')
              // Cookies.set('sessionUserToken', '')
              // router.push('/login')
              break
            case 501:
              err.message = '服务未实现'
              break
            case 502:
              err.message = '网关错误'
              break
            case 503:
              err.message = '服务不可用'
              break
            case 504:
              err.message = '网关超时'
              // sessionStorage.setItem('sessionUserToken', '')
              // Cookies.set('sessionUserToken', '')
              // router.push('/login')
              break
            case 505:
              err.message = 'HTTP版本不受支持'
              break
            default:
          }
        }
        // console.log(err)
        console.error(err.message)
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )
    // 请求处理
    instance(options).then(res => {
      // console.log('res前')
      resolve(res)
      // console.log('res后')
      return false
    }).catch(error => {
      reject(error)
    })
  })
}
