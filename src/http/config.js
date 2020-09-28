import {baseUrl} from "../utils/global";

export default{
  method:'get',
  baseUrl:baseUrl,
  headers:{
    'Content-Type':'application/json;charset=UTF-8'
  },
  data:{},
  timeout:10000,
  // withCredentials:true,//携带凭证
  withCredentials:false,
  responseType:'json',
  crossDomain: true
}
