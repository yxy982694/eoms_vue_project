import axios from '../axios'
export const findMould = (objStr) => {
  return axios({
    url: '/wrm/eomsWarnMould/findMould',
    method: 'post',
    data: objStr
  })
}
export const findNeTypeParams = () => {
  return axios({
    url: '/wrm/gpmDicdetail/findNeTypeParams',
    method: 'get'
  })
}
export const findFaultResponseLevel = () => {
  return axios({
    url: '/wrm/gpmDicdetail/findFaultResponseLevel',
    method: 'get'
  })
}
export const findTemplateVariate = () => {
  return axios({
    url: '/wrm/gpmDicdetail/findTemplateVariate',
    method: 'get'
  })
}
export const addMould = (objStr) => {
  return axios({
    url: '/wrm/eomsWarnMould/addMould',
    method: 'post',
    data: objStr
  })
}
export const findTemplateProvince = () => {
  return axios({
    url: '/wrm/gpmDicdetail/findTemplateProvince',
    method: 'get'
  })
}
export const findTemplateCity = () => {
  return axios({
    url: '/wrm/gpmDicdetail/findTemplateCity',
    method: 'get'
  })
}
export const findSmsGroupPerson = () => {
  return axios({
    url: '/wrm/eomsWarnMould/findSmsGroupPerson',
    method: 'get'
  })
}
export const cancelMould = (mouldId) => {
  return axios({
    url: '/wrm/eomsWarnMould/cancelMould/'+mouldId,
    method: 'get'
  })
}
export const queryAllEomsWarnInfo = (objStr) => {
  return axios({
    url: '/wrm/eomsWarnInfo/queryAllEomsWarnInfo',
    method: 'post',
    data: objStr
  })
}
export const findCity = () => {
  return axios({
    url: '/wrm/gpmDicdetail/findCity',
    method: 'get'
  })
}
export const updateWarnInfoState = (id) => {
  return axios({
    url: '/wrm/eomsWarnInfo/updateWarnInfoState/'+id,
    method: 'get'
  })
}
export const importWarnInfo = (jsonStr) => {
  return axios({
    url: '/wrm/eomsWarnInfo/importWarnInfo',
    method: 'post',
    data: jsonStr
  })
}
export const publishWarnInfo = (eomsWarnInfo) => {
  return axios({
    url: '/wrm/eomsWarnInfo/publishWarnInfo',
    method: 'post',
    data: eomsWarnInfo
  })
}
