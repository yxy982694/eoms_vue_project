import axios from '../axios'

/*
 * 用户管理模块
 */

// 保存
export const save = (data) => {
  return axios({
    url: '/user/save',
    method: 'post',
    data
  })
}
// 删除
export const batchDelete = (data) => {
  return axios({
    url: '/user/delete',
    method: 'post',
    data
  })
}
// 分页查询
export const findPage = (data) => {
  return axios({
    url: '/user/findPage',
    method: 'post',
    data
  })
}
// 导出Excel用户信息
export const exportUserExcelFile = (data) => {
  return axios({
    url: '/user/exportUserExcelFile',
    method: 'post',
    data
  })
}
// 查找用户的菜单权限标识集合
export const findPermissions = (params) => {
  return axios({
    url: '/user/findPermissions',
    method: 'post',
    params
  })
}
// 根据用户名查找
export const findByName = (params) => {
  return axios({
    url: '/user/findByName',
    method: 'post',
    params
  })
}
// 更新用户密码
export const updatePassword = (params) => {
  return axios({
    url: '/user/updatePassword',
    method: 'post',
    params
  })
}
// 获取用户管理所有部门信息
export const findAllOrgan = () => {
  return axios({
    url: '/bsf/organ/findAll',
    method: 'get'
  })
}
// 获取用户前10条信息
export const getPageList = (jsonStr) => {
  return axios({
    url: '/bsf/user/getPageList',
    method: 'post',
    data: jsonStr
  })
}
// export const getPageList = (currentPage) => {
//   return axios({
//     url: '/bsf/user/getPageList/'+currentPage,
//     method: 'get',
//     // data: currentPage
//   })
// }
// 添加用户信息
export const addUser = (User) => {
  return axios({
    url: '/bsf/user/addUser',
    method: 'post',
    data: User
  })
}
// 编辑用户信息
export const editUser = (User) => {
  return axios({
    url: '/bsf/user/editUser',
    method: 'post',
    data: User
  })
}
// 删除用户信息
export const deleteUser = (User) => {
  return axios({
    url: '/bsf/user/removeUser',
    method: 'post',
    data: User
  })
}
