import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login')
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/views/404')
const Intro = () => import(/* webpackChunkName: "Intro" */ '@/views/Intro/Intro')
const mainMenu = () => import(/* webpackChunkName: "MainToTab" */ '@/components/MainToTab/MainToTab')
import api from '@/http/api'
import store from '@/store'
import { getIFramePath, getIFrameUrl } from '@/utils/iframe'
import ar from "element-ui/src/locale/lang/ar"
import Cookies from "js-cookie"
import configRouter from '@/common/js/configRouter.js'
// vue-router是与url联系在一起的，通过url找到path，来找到对应的组件
// 通过<router-view></router-view>指定渲染的位置
// 会改变url，url会改变
// 两次跳转相同路由报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      // name: '主页',
      component: Home,
      meta: {
        keepAlive: false // 不需要被缓存
      },
      children: [ // 配置首页菜单中没有出现的路由
        {
          path: '', //  可以通过path来指定跳转的路由
          name: '首页',
          // 之所以写name，当路由跳转时，可以通过name来找到对应的路由。
          // name不要重复
          component: Intro,
          meta: {
            icon: 'fa fa-home fa-lg',
            index: 0,
            keepAlive: true,
            location: ''
          }
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})
// url只要改变就会执行这个router.beforeEach
// 不管是通过点击按钮跳转的,还是通过浏览器前进和后退进行跳转的
router.beforeEach((to, from, next) => {
  // 是否显示iframe
  if (parseInt(to.meta.location) && from.name) { // 不是刷新页面
    store.commit('setShowIframe', true)
    // console.log(store.state.menu.iframeLocationObj)
    let iframeUrlArr = []
	  let activeLocation = store.state.menu.iframeLocationObj[to.meta.location]
    store.commit('setRouterLocation',activeLocation)
    sessionStorage.setItem('iframeLocation',activeLocation)
    for (let key in store.state.menu.iframeLocationObj) {
      iframeUrlArr.push(store.state.menu.iframeLocationObj[key])
    }
    store.commit('setIframeUrlArr',iframeUrlArr)
    // console.log(iframeUrlArr)
    store.commit('setLocationIndex',iframeUrlArr.indexOf(activeLocation))
  } else {
    store.commit('setShowIframe', false)
  }
  // 改变路由id 当刷新页面时,from.name为null
  if (from.name) {
    console.log(to.meta.index)
    store.commit('setRouterId', to.meta.index)
    sessionStorage.setItem('id', to.meta.index)
  } else {
    // 避免首次sessionStorage.getItem('id')为null的情况
    let ss = sessionStorage.getItem('id') ? sessionStorage.getItem('id') : '0'
    sessionStorage.setItem('id', ss)
  }
  // console.log('909090------')
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  //let userToken = sessionStorage.getItem('sessionUserToken')
  // 线上中配置
  // let userToken = Cookies.get('LtpaToken2')
  // if (userToken) {
  //   addDynamicMenuAndRoutes(to, from)
  //   if(from.path === to.path && from.name === null && from.path != "/" && router.options.routes.length === 0 ){
  //     next({ path: '/' })
  //   }else{
  //     // 如果点击的路由,没有请求接口内容,还会重定向到登录页吗?
  //     next()
  //   }
  // } else {
  //   window.location.href = './login.html'
  //   // if (to.path == '/') {
  //   //   next()
  //   // } else {
  //   //   next({ path: '/' })
  //   // }
  // }
  // 测试中配置
    addDynamicMenuAndRoutes(to, from)
    next()
    // if (to.path == '/') {
    //   next()
    // } else {
    //   next({ path: '/' })
    // }
  // if (to.path === '/login') {
  //   // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
  //   if(userToken) {
  //     next({ path: '/' })
  //   }
  // } else {
  //   if (userToken) { // 过了30分钟没操作页面,后端cookie失效了,但是浏览器中还有userToken
  //     addDynamicMenuAndRoutes(to, from)
  //     if(from.path === to.path && from.name === null && from.path != "/" && router.options.routes.length === 0 ){
  //       next({ path: '/' })
  //     }else{
  //       // 如果点击的路由,没有请求接口内容,还会重定向到登录页吗?
  //       next()
  //     }
  //   } else {
  //      next()
  //   }
  // }
  // let userToken = Cookies.get('LtpaToken2')
  // if (to.path === '/login') {
  //   // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
  //   if(userToken) {
  //     next({ path: '/' })
  //   }
  // } else {
  //   if (userToken) { // 过了30分钟没操作页面,后端cookie失效了,但是浏览器中还有userToken
  //     addDynamicMenuAndRoutes(to, from)
  //     if(from.path === to.path && from.name === null && from.path != "/" && router.options.routes.length === 0 ){
  //       next({ path: '/' })
  //     }else{
  //       // 如果点击的路由,没有请求接口内容,还会重定向到登录页吗?
  //       next()
  //     }
  //   }
  // }

  // let userToken = Cookies.get('sessionUserToken')
  // if (to.path === '/login') {
  //   // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
  //   if(userToken) {
  //     next({ path: '/' })
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (userToken) { // 过了30分钟没操作页面,后端cookie失效了,但是浏览器中还有userToken
  //     addDynamicMenuAndRoutes(to, from)
  //     if(from.path === to.path && from.name === null && from.path != "/" && router.options.routes.length === 0 ){
  //       next({ path: '/' })
  //     }else{
  //       // 如果点击的路由,没有请求接口内容,还会重定向到登录页吗?
  //       next()
  //     }
  //   } else {
  //     window.location.href = '../login.html';
  //     // next({ path: '/login' })
  //   }
  // }
})
/**
 * 加载动态菜单和路由  可以放到api目录中,用于调用接口
 */
function addDynamicMenuAndRoutes(to, from) {
  // 处理IFrame嵌套页面
  handleIFrameUrl(to.path)
  // 当动态菜单和路由已经加载,则不用再次加载菜单和路由信息
  if(store.state.app.menuRouteLoaded) {
    // console.log('动态菜单和路由已经存在.')
    return
  }
  api.menu.findNavTree().then(res => {
      // 添加动态路由
      // console.log(res.data)
      let dynamicRoutes = addDynamicRoutes(res.data)
      // 配置导航菜单中没有的路由
      let tempArr = []
      for (let i=0,len=configRouter.length;i<len;i++) {
        tempArr.push({
          path: configRouter[i].path,
          name: configRouter[i].name,
          component: mainMenu,
          meta: {
            icon: 'fa fa-home fa-lg',
            index: 'mainmenuu'+configRouter[i].path,
            keepAlive: true,
            location: configRouter[i].path
          }
        })
      }
      // 处理静态组件绑定路由 把res.data中的路由信息全部放在根目录的children中
      router.options.routes[0].children = router.options.routes[0].children.concat(tempArr,dynamicRoutes)
      router.addRoutes(router.options.routes)
      // 保存加载状态
      store.commit('menuRouteLoaded', true)
      // 保存菜单树
      store.commit('setNavTree', res.data)
    }).catch(function(res) { })
}

/**
 * 处理IFrame嵌套页面 目前并没有用到嵌套页面
 */
if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1
   }
}
function handleIFrameUrl(path) {
  // 嵌套页面，保存iframeUrl到store，供IFrame组件读取展示
  let url = path
  let length = store.state.iframe.iframeUrls.length
  // console.log(store.state.iframe.iframeUrls)
  for(let i=0; i<length; i++) {
    let iframe = store.state.iframe.iframeUrls[i]
    if(path != null && path.endsWith(iframe.path)) { // 如果要跳转的路由满足一定条件
      // 则把嵌套路由数组中的某个路径,设置成当前路径
      // 说明嵌套路由数组中的某个路径,在要跳转的路由
      url = iframe.url
      store.commit('setIFrameUrl', url)
      break
    }
  }
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function addDynamicRoutes (menuList = [], routes = []) {
  let temp = []
  for (let i = 0; i < menuList.length; i++) {
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children)
    } else if (menuList[i].menuType || menuList[i].location) { // || menuList[i].menuType
      // console.log("==========================" + menuList[i].location)
      let route = null
      if (menuList[i].menuFlag == '1') {
        if (menuList[i].location && /\S/.test(menuList[i].location)) {
          menuList[i].location = menuList[i].location.replace(/^\//, '')
          // console.log(menuList[i].location)
          route = {
            path: menuList[i].location,
            component: null,
            name: menuList[i].nameCn,//menuList[i].nameCn
            meta: {
              icon: menuList[i].icon,
              index: menuList[i].id,// 通过路由来找到此路由包含的id
              keepAlive: true,
              location: menuList[i].location // 点击主菜单时，跳转的路由。如果为undefined则不跳转
              // 会把location保存在store中this.setRouterLocation(menu.location)
            }
          }
        }
      } else if (menuList[i].menuFlag == '0') {
        route = {
          path: menuList[i].menuType,
          component: null,
          name: menuList[i].nameCn,//menuList[i].nameCn
          meta: {
            icon: menuList[i].icon,
            index: menuList[i].id,// 通过路由来找到此路由包含的id
            keepAlive: true,
            location: menuList[i].menuType // 点击主菜单时，跳转的路由。如果为undefined则不跳转
            // 会把location保存在store中this.setRouterLocation(menu.location)
          }
        }
      }
      // 创建路由配置
      let path = getIFramePath(menuList[i].location)
      if (path) {
        // 如果是嵌套页面, 通过iframe展示
        route['path'] = path
        route['component'] = resolve => require([`@/views/IFrame/IFrame`], resolve)
        // 存储嵌套页面路由路径和访问URL
        let url = getIFrameUrl(menuList[i].location)
        let iFrameUrl = {'path':path, 'url':url}
        store.commit('addIFrameUrl', iFrameUrl)
      } else {
        try {
          // 根据菜单URL动态加载vue组件，这里要求vue组件须按照url路径存储
          // 如url="sys/user"，则组件路径应是"@/views/sys/user.vue",否则组件加载不到
          let array = menuList[i].location.split('/')
          let url = ''
          for(let i=0; i<array.length; i++) {
            url += array[i].substring(0,1).toUpperCase() + array[i].substring(1) + '/'
          }
          url = url.substring(0, url.length - 1)
          route['component'] = () => import(/* webpackChunkName: "MainToTab" */ '@/components/MainToTab/MainToTab')
          // route['component'] = resolve => require(['@/components/MainToTab/MainToTab'], resolve)
          // route['component'] = resolve => require([`@/views/${url}`], resolve)
        } catch (e) {}
      }
      routes.push(route)
    }
  }
  if (temp.length >= 1) {
    addDynamicRoutes(temp, routes)
  } else {
    // console.log('动态路由加载...')
    // console.log(routes)
    // console.log('动态路由加载完成.')
  }
  return routes
}
export default router
