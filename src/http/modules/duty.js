import axios from '../axios'
/*
 * 值班管理
 */
// 值班查询
export const findDuty = (params) => {
    return axios({
        url: 'duty/dutyQuery',
        method: 'get',
        params
    })
}
// 值班名称查询
export const findDutyNamesByDutyType = (id) => {
    return axios({
        url: 'duty/getDutyNames/'+id,
        method: 'get'
    })
}
