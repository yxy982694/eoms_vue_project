import axios from '../axios'
/*
 *首页
 */

// 获取最新公告
export const getLatestNews = () => {
  return axios({
    url: '/home/getLatestNews?v='+Math.random(),
    method: 'post'
  })
}

// 获取待办列表
export const getUpComList = (jsonStr) => {
  return axios({
    url: '/home/getUpComList?v='+Math.random(),
    method: 'post',
    data: jsonStr // 在不传参数时，jsonStr是undefined
  })
}

//获取专家值班列表
export const getExpertDutyList = () => {
  return axios({
    url: '/home/getExpertDutyList?v='+Math.random(),
    method: 'post'
  })
}
//首页数据初始化
export const getMessageData = () => {
  return axios({
    url: '/home/getMessageData?v='+Math.random(),
    method: 'post'
  })
}
//首页我的待办
export const getDbList = () => {
  return axios({
    url: '/home/getDbList?v='+Math.random(),
    method: 'post'
  })
}
// 新建留言板
export const addMessage = (jsonStr) => {
  return axios({
    url: '/bsf/messageboard/addMessage?v='+Math.random(),
    method: 'post',
    data: jsonStr
  })
}
// 获取快速通道数据
// export const getFastPassData = (id) => {
//   return axios({
//     url: '/home/fastPass/'+id,
//     method: 'get'
//   })
// }
export const getFastPassData = () => {
  return axios({
    url: '/home/fastPass?v='+Math.random(),
    method: 'get'
  })
}
// 获取用户id
export const getUserId = () => {
  return axios({
    url: '/bsf/user/findByUserName?v='+Math.random(),
    method: 'get'
  })
}
// export const getUserId = (userName) => {
//   return axios({
//     url: '/bsf/user/findByUserName/'+userName,
//     method: 'get'
//   })
// }
// 运维待办信息
export const findOperation = () => {
  return axios({
    url: '/home/findOperation?v='+Math.random(),
    method: 'get'
  })
}
// export const findOperation = (userName) => {
//   return axios({
//     url: '/home/findOperation/'+userName,
//     method: 'get'
//   })
// }
// 待办location
export const findTodoLocation = (sheettype) => {
  return axios({
    url: '/home/findOperUrl/'+sheettype+'?v='+Math.random(),
    method: 'get'
  })
}
// 获取3个待办列表
export const findJobList = () => {
  return axios({
    url: '/home/findJobList?v='+Math.random(),
    method: 'get'
  })
}
// 切换职位时，执行
export const changeJob = (jsonStr) => {
  return axios({
    url: '/home/changeJob?v='+Math.random(),
    method: 'post',
    data: jsonStr
  })
}
// 专家值班列表数据
export const findDutySchedule = () => {
  return axios({
    url: '/home/findDutySchedule?v='+Math.random(),
    method: 'get'
  })
}
