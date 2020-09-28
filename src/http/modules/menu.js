import axios from '../axios'

/*
 * 菜单管理模块
 */

 // 保存
export const save = (data) => {
    return axios({
        url: '/menu/save',
        method: 'post',
        data
    })
}
// 批量删除
export const batchDelete = (data) => {
    return axios({
        url: '/menu/delete',
        method: 'post',
        data
    })
}
// 查找导航菜单树
export const findNavTree = () => {
    return axios({
        url: '/menu/findNavTree',
        method: 'get'
    })
}
// export const findNavTree = (params) => {
//     return axios({
//         url: '/menu/findNavTree',
//         method: 'get',
//         params
//     })
// }
// 查找导航菜单树
export const findMenuTree = () => {
    return axios({
        url: '/menu/findMenuTree',
        method: 'get'
    })
}
/*
 * 资源管理模块
 */
// 初始查询
export const loadResource = () => {
  return axios({
    url: '/menu/resourceManageList',
    method: 'get'
  })
}
// 新增
export const addResource = (res) => {
  return axios({
    url: '/menu/addResource',
    method: 'post',
    data: res
  })
}
// 编辑资源
export const editResource = (res) => {
  return axios({
    url: '/menu/editResource',
    method: 'post',
    data: res
  })
}
// 查询资源实体对象  /menu/findResources/{menuId}
export const findResourceById = (id) => {
  return axios({
    url: '/menu/findResources/'+id,
    method: 'get'
  })
}
// 获取祖父实体
export const findGrandpa = (id) => {
  return axios({
    url: '/menu/findGrandpa/'+id,
    method: 'get'
  })
}
// 获取父id
export const getParentId = (id) => {
  return axios({
    url: '/menu/getParentId/'+id,
    method: 'get'
  })
}
// 根据menutype获取数据
export const findByMenuType = (menuType) => {
  return axios({
    url: '/menu/findByMenuType/'+menuType,
    method: 'get'
  })
}
// 删除当前行以及子节点  /menu/delResources/{id}
export const deleteResource = (id) => {
  return axios({
    url: '/menu/delResources/'+id,
    method: 'get'
  })
}
// 根据用户名进行查询,返回查询结果
export const findByName = (name) => {
  return axios({
    url: '/menu/findByName/'+name,
    method: 'get'
  })
}
// 查询全部资源信息
export const resourceManage = (id) => {
  return axios({
    url: '/resourceManage/'+id,
    method: 'get'
  })
}
// 字典配置菜单
// 初始查询
export const loadDicConfigData = (jsonStr) => {
  return axios({
    url: '/bsf/dicdetail/dicdetailList',
    method: 'post',
    data: jsonStr
  })
}
// 新增
export const addDicConfig = (res) => {
  return axios({
    url: '/menu/addResource',
    method: 'post',
    data: res
  })
}
// 编辑资源
export const editDicConfig = (res) => {
  return axios({
    url: '/menu/editResource',
    method: 'post',
    data: res
  })
}
// 查询资源实体对象  /menu/findResources/{menuId}
export const findDicConfigById = (id) => {
  return axios({
    url: '/menu/findResources/'+id,
    method: 'get'
  })
}
// 删除当前行以及子节点  /menu/delResources/{id}
export const deleteDicConfig = (id) => {
  return axios({
    url: '/menu/delResources/'+id,
    method: 'get'
  })
}
// 根据用户名进行查询,返回查询结果
export const findDicConfigByName = (name) => {
  return axios({
    url: '/menu/findByName/'+name,
    method: 'get'
  })
}