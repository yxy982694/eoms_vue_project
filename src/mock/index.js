import Mock from 'mockjs'
import { baseUrl } from '@/utils/global'
import * as login from './modules/login'
import * as user from './modules/user'
import * as role from './modules/role'
import * as dept from './modules/dept'
import * as menu from './modules/menu'
import * as dict from './modules/dict'
import * as config from './modules/config'
import * as log from './modules/log'
import * as loginlog from './modules/loginlog'
import * as home from './modules/home'

// 1. 开启/关闭[所有模块]拦截, 通过调[openMock参数]设置.
// 2. 开启/关闭[业务模块]拦截, 通过调用fnCreate方法[isOpen参数]设置.
// 3. 开启/关闭[业务模块中某个请求]拦截, 通过函数返回对象中的[isOpen属性]设置.
// 测试中配置
let openMock = true
// 线上中配置
// let openMock = false
fnCreate(login, openMock)
fnCreate(user, openMock)
fnCreate(role, openMock)
fnCreate(dept, openMock)
fnCreate(menu, openMock)
// fnCreate(menu, false)
fnCreate(dict, openMock)
fnCreate(config, openMock)
fnCreate(log, openMock)
fnCreate(loginlog, openMock)
fnCreate(home, openMock)

/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate (mod, isOpen = true) {
  if (isOpen) {
    for (var key in mod) {
      ((res) => {
        // console.log(res)
        if (res.isOpen !== false) {
          let url = baseUrl
          // if (typeof String.prototype.endsWith != 'function') {
          //   String.prototype.endsWith = function(suffix) {
          //     return this.indexOf(suffix, this.length - suffix.length) !== -1
          //    }
          // }
          // if(!url.endsWith("/")) {
          //   url = url + "/"
          // }
          url = url+ '/' + res.url
          // console.log(url)
          // 模拟后台接口,当前台axios的url和type匹配mock中的url和type时,会执行mock里面的回调函数
          // 回调函数返回的数据,就是axios请求后响应的数据
          // opts参数是axios中传入的配置参数
          Mock.mock(new RegExp(url), res.type, (opts) => {
            if (url.indexOf('login') == -1) {
              opts['data'] = opts.body ? JSON.parse(opts.body) : null
              delete opts.body
            }
            // console.log(res)
            // console.log('\n')
            // console.log('%cmock拦截, 请求: ', 'color:blue', opts)
            // console.log('%cmock拦截, 响应: ', 'color:blue', res.data)
            return res.data
          })
        }
      })(mod[key]() || {})
    }
  }
}
