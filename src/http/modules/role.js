import axios from '../axios'

/*
 * 角色管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/role/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/role/delete',
        method: 'post',
        data
    })
}
// 分页查询
export const findPage = (data) => {
    return axios({
        url: '/role/findPage',
        method: 'post',
        data
    })
}
// 查询全部
export const findAll = () => {
    return axios({
        url: '/role/findAll',
        method: 'get'
    })
}
// 查询角色菜单集合
export const findRoleMenus = (params) => {
    return axios({
        url: '/role/findRoleMenus',
        method: 'get',
        params
    })
}
// 保存角色菜单集合
export const saveRoleMenus = (data) => {
    return axios({
        url: '/role/saveRoleMenus',
        method: 'post',
        data
    })
}
// 查询全部角色
export const getAllRoles = (jsonStr) => {
    return axios({
        url: '/bsf/role/findAll',
        method: 'post',
        data: jsonStr
    })
}
// 添加角色
export const addRole = (jsonStr) => {
    return axios({
        url: '/bsf/role/addRole',
        method: 'post',
        data: jsonStr
    })
}
// 编辑角色
export const editRole = (jsonStr) => {
    return axios({
        url: '/bsf/role/editRole',
        method: 'post',
        data: jsonStr
    })
}
// 根据名字查询角色
export const findRoleByName = (jsonStr) => {
    return axios({
        url: '/bsf/role/findRoleByName',
        method: 'post',
        data: jsonStr
    })
}
// 删除角色
export const delRole = (roleId) => {
    return axios({
        url: '/bsf/role/delRole/'+roleId,
        method: 'get'
    })
}
// 角色授权
export const grantRole = (jsonObject) => {
    return axios({
        url: '/bsf/role/grantRole',
        method: 'post',
        data: jsonObject
    })
}
