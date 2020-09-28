/* home 模块 */

// 获取 最新公告 增添location字段
export function getLatestNews() {
  let latestNews = {"msg":"","code":200,"data":[
  {
    "RELEASEDATE":"2019-11-07",
    "TITLE":"三门峡分公司定于2019年11月8日00:00-6:00进行PTN核心层5G IP地址扩容的申请","ID":6790240,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-11-07","TITLE":"关于三门峡分公司8日00:00-06:00进行市区分陕路NE40设备设备替换的申请（会造成业务中断）",
    "ID":6790231,
    "FLAG":"2",
    "CHESETYPE":"网络变动",
    "LOCATION":"url"
  },{"RELEASEDATE":"2019-11-05","TITLE":"故障管理系统定于2019年11月5日23点-2019年11月6日6点间进行系统割接,上线新功能和解决已知问题.","ID":6787995,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-31","TITLE":"EOMS系统定于2019年10月31日23点-2019年11月1日5点间进行系统割接的通知","ID":6783535,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-31","TITLE":"故障管理系统定于2019年10月31日23点-2019年11月1日6点间进行系统割接,上线新功能和解决已知问题","ID":6782560,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-30","TITLE":"三门峡市灵宝分公司定于2019年10月31日0：00-6:00对川口中心-寺河中心光缆迁改割接的申请","ID":6781827,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-29","TITLE":"家客开通系统计划于10月29日23:00-10月30日6:00对开通、施工和装维APP进行业务升级公告","ID":6780420,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-29","TITLE":"网络配置管理系统计划10月29日23点到10月30日4点割接升级","ID":6779187,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-24","TITLE":"EOMS系统定于2019年10月24日23点-2019年10月25日5点间进行系统割接的通知","ID":6776240,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-17","TITLE":"关于2019年10月17日 EOMS系统割接上线操作的通知","ID":6770356,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-17","TITLE":"故障管理系统定于2019年10月17日23点-2019年10月18日6点间进行系统割接,上线新功能和解决已知问题","ID":6769525,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-10","TITLE":"三门峡分公司定于2019年10月11日00:00-6:00进行100GOTN系统放大板改造的操作申请","ID":6763965,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-09","TITLE":"关于三门峡分公司10月11日00:00-06:00进行灵宝新局NE40替换的申请（将会造成业务中断）","ID":6762234,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-10-09","TITLE":"EOMS系统定于2019年10月9日23点-2019年10月10日5点间进行系统割接","ID":6761498,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-09-27","TITLE":"三门峡分公司定于2019年9月28日00:00-6:00进行PTN东部环倒换测试的操作申请","ID":6756558,"FLAG":"2","CHESETYPE":"网络变动"},{"RELEASEDATE":"2019-09-26","TITLE":"三门峡灵宝分公司定于2019年9月26日0:00-06:00对老局-五亩光缆进行光缆割接申请 ","ID":6755865,"FLAG":"2","CHESETYPE":"网络变动"}]}
  // let latestNews = {"code":200,"msg":null,"data":[{"id":1,"content":'网络变动-xxxxxxxxxxxxxx',"time":'时间: 2019-10-20 22:00:00'},{"id":2,"content":'网络变动-xxxxxxxxxxxxxx',"time":'时间: 2019-10-20 22:00:00'},{"id":3,"content":'网络变动-xxxxxxxxxxxxxx',"time":'时间: 2019-10-20 22:00:00'},{"id":4,"content":'网络变动-xxxxxxxxxxxxxx',"time":'时间: 2019-10-20 22:00:00'},{"id":5,"content":'网络变动-xxxxxxxxxxxxxx',"time":'时间: 2019-10-20 22:00:00'},{"id":6,"content":'网络变动-xxxxxxxxxxxxxx',"time":'时间: 2019-10-20 22:00:00'}]}
  return {
    url: 'home/getLatestNews',
    type: 'post',
    data: latestNews
  }
}

// 获取 待办列表
export function getUpComList() {
  const upComList = {
    "code": "00",
    "msg": null,
    "total": 18,
    "data":[{
      "ROW_ID": 1,
      "id": 78386336,
      "sheetid": "HA-700-161008-00034",
      "sheetname": "仪器仪表使用管理工单",
      "sheettype": "HA-700",
      "statename": "分公司领导审批通过",
      "title": "关于焦作分公司电源、传输网、无线网仪器仪表的新增申请"
    },{
      "ROW_ID": 2,
      "id": 78386336,
      "sheetid": "HA-700-161008-00034",
      "sheetname": "仪器仪表使用管理工单",
      "sheettype": "HA-700",
      "statename": "分公司领导审批通过",
      "title": "关于焦作分公司电源、传输网、无线网仪器仪表的新增申请"
    },{
      "ROW_ID": 3,
      "id": 78386336,
      "sheetid": "HA-700-161008-00034",
      "sheetname": "仪器仪表使用管理工单",
      "sheettype": "HA-700",
      "statename": "分公司领导审批通过",
      "title": "关于焦作分公司电源、传输网、无线网仪器仪表的新增申请"
    },{
      "ROW_ID": 4,
      "id": 78386336,
      "sheetid": "HA-700-161008-00034",
      "sheetname": "仪器仪表使用管理工单",
      "sheettype": "HA-700",
      "statename": "分公司领导审批通过",
      "title": "关于焦作分公司电源、传输网、无线网仪器仪表的新增申请"
    },{
      "ROW_ID": 5,
      "id": 78386336,
      "sheetid": "HA-700-161008-00034",
      "sheetname": "仪器仪表使用管理工单",
      "sheettype": "HA-700",
      "statename": "分公司领导审批通过",
      "title": "关于焦作分公司电源、传输网、无线网仪器仪表的新增申请"
    },{
      "ROW_ID": 6,
      "id": 78386336,
      "sheetid": "HA-700-161008-00034",
      "sheetname": "仪器仪表使用管理工单",
      "sheettype": "HA-700",
      "statename": "分公司领导审批通过",
      "title": "关于焦作分公司电源、传输网、无线网仪器仪表的新增申请"
    }]
  }
  // let upComList = {"code":200,"msg":null,"data":{"pageNum":1,"pageSize":6,"totalSize":12,"totalPages":2,"content":[{"id":1,"sheetId":'HA-058-191020-0001',"sheetType":'1',"sheetTheme":'上海市普陀区金沙江路 1518 弄',"sheetStatus":'成功'},{"id":2,"sheetId":'HA-058-191020-0001',"sheetType":'2',"sheetTheme":'上海市普陀区金沙江路 1517 弄',"sheetStatus":'成功'},{"id":23,"sheetId":'HA-058-191020-0001',"sheetType":'1',"sheetTheme":'上海市普陀区金沙江路 1519 弄',"sheetStatus":'失败'},{"id":24,"sheetId":'HA-058-191020-0001',"sheetType":'2',"sheetTheme":'上海市普陀区金沙江路 1517 弄',"sheetStatus":'成功'},{"id":25,"sheetId":'HA-058-191020-0001',"sheetType":'1',"sheetTheme":'上海市普陀区金沙江路 1519 弄',"sheetStatus":'失败'},{"id":26,"sheetId":'HA-058-191020-0001',"sheetType":'1',"sheetTheme":'上海市普陀区金沙江路 1519 弄',"sheetStatus":'失败'}]}}
  return {
    url: 'home/getUpComList',
    type: 'post',
    data: upComList
  }
}

//获取专家值班列表
export function getExpertDutyList() {
  let expertDutyList = {"code":"200","data":[{"SPECIALTY":1,"ID":168,"NAME":"凡俊华","MOBILE":"13783608740"},{"SPECIALTY":2,"ID":10464606,"NAME":"李娜","MOBILE":"18838118657"},{"SPECIALTY":3,"ID":171,"NAME":"何俊杰","MOBILE":"13949038560"},{"SPECIALTY":3,"ID":6019,"NAME":"张羽","MOBILE":"15937110083"},{"SPECIALTY":3,"ID":161,"NAME":"李春霞","MOBILE":"13838363738"},{"SPECIALTY":3,"ID":170,"NAME":"陈洁","MOBILE":"13838187111"},{"SPECIALTY":5,"ID":42,"NAME":"张先锋","MOBILE":"13949005857"},{"SPECIALTY":6,"ID":250,"NAME":"陈亚君","MOBILE":"13949056096"},{"SPECIALTY":7,"ID":12322118,"NAME":"史杨","MOBILE":"15981861227"},{"SPECIALTY":8,"ID":23296758,"NAME":"杨克歌","MOBILE":"18236761467"}],"msg":""}
  return {
    url: 'home/getExpertDutyList',
    method: 'post',
    data: expertDutyList
  }
}
//获取留言板数据  增添location字段
export function getMessageData() {
  let messageList = {
    "code": "200",
    "data": [{
      "MESSAGETIME": "2019-10-22",
      "TITLE": "组织机构新增",
      "ID": 21216061,
      "NAME": "张军伟",
      "LOCATION":"url",
    }, {
      "MESSAGETIME": "2019-09-17",
      "TITLE": "关于增加作业计划管理权限",
      "ID": 21215921,
      "NAME": "耿振栋"
    }, {
      "MESSAGETIME": "2019-09-02",
      "TITLE": "领导们，手机客户端什么时候能用",
      "ID": 21215901,
      "NAME": "孙成武"
    }, {"MESSAGETIME": "2019-08-29", "TITLE": "领导们  手机客户端又不能用了", "ID": 21215881, "NAME": "陈浩"}],
    "msg": ""
  }
  return {
    url: 'home/getMessageData',
    method: 'post',
    data: messageList
  }
}

export function getDbList() {
  let dbList = {"code":"200","data":[{"creator":"operator","id":"1","isWebpage":"0","name":"运维管理","nameCn":"运维管理","orderby":1,"status":"1","type":"1"},{"creator":"operator","id":"2","isWebpage":"0","name":"故障管理","nameCn":"故障管理","orderby":2,"status":"1","type":"1"},{"creator":"operator","id":"3","isWebpage":"0","name":"需求管理","nameCn":"需求管理","orderby":3,"status":"1","type":"1"},{"creator":"operator","id":"4","isWebpage":"0","name":"值班管理","nameCn":"值班管理","orderby":4,"status":"1","type":"1"},{"creator":"operator","id":"5","isWebpage":"0","name":"投诉管理","nameCn":"投诉管理","orderby":5,"status":"1","type":"1"},{"creator":"operator","id":"6","isWebpage":"0","name":"统计分析","nameCn":"统计分析","orderby":6,"status":"1","type":"1"},{"creator":"operator","id":"7","isWebpage":"0","name":"知识管理","nameCn":"知识管理","orderby":7,"status":"1","type":"1"},{"creator":"operator","id":"8","isWebpage":"0","name":"系统管理","nameCn":"系统管理","orderby":8,"status":"1","type":"1"},{"creator":"operator","id":"1000101","isWebpage":"0","name":"运维流程类","nameCn":"运维流程类","orderby":1,"parentId":"1","status":"1","type":"1"},{"creator":"operator","id":"1000102","isWebpage":"0","name":"公共服务类","nameCn":"公共服务类","orderby":2,"parentId":"1","status":"1","type":"1"},{"creator":"operator","id":"1000103","isWebpage":"0","name":"仪器仪表管理","nameCn":"仪器仪表管理","orderby":3,"parentId":"1","status":"1","type":"1"},{"creator":"operator","id":"1000104","isWebpage":"0","name":"机房管理","nameCn":"机房管理","orderby":4,"parentId":"1","status":"1","type":"1"},{"creator":"operator","id":"1000105","isWebpage":"0","name":"其他","nameCn":"其他","orderby":6,"parentId":"1","status":"1","type":"1"},{"creator":"operator","id":"1000201","isWebpage":"0","name":"故障管理类","nameCn":"运维流程类","orderby":1,"parentId":"2","status":"1","type":"1"},{"creator":"operator","id":"1000202","isWebpage":"0","name":"性能管理类","nameCn":"公共服务类","orderby":2,"parentId":"2","status":"1","type":"1"},{"creator":"operator","id":"1000203","isWebpage":"0","name":"故障支撑与管理","nameCn":"仪器仪表管理","orderby":3,"parentId":"2","status":"1","type":"1"},{"creator":"operator","id":"1000308","isWebpage":"0","name":"旧版需求入口","nameCn":"旧版需求入口","orderby":8,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000401","isWebpage":"0","name":"值班作业","nameCn":"值班作业","orderby":1,"parentId":"4","status":"1","type":"1"},{"creator":"operator","id":"1000402","isWebpage":"0","name":"专家值班","nameCn":"专家值班","orderby":2,"parentId":"4","status":"1","type":"1"},{"creator":"operator","id":"1000501","isWebpage":"0","location":"/sys/Cch","name":"个人投诉","nameCn":"个人投诉","orderby":1,"parentId":"5","status":"1","type":"1"},{"creator":"operator","id":"1000502","isWebpage":"0","location":"/sys/Cch","name":"家客投诉","nameCn":"家客投诉","orderby":2,"parentId":"5","status":"1","type":"1"},{"creator":"operator","id":"1000503","isWebpage":"0","location":"/sys/Cch","name":"集客投诉","nameCn":"集客投诉","orderby":3,"parentId":"5","status":"1","type":"1"},{"creator":"operator","id":"1000504","isWebpage":"0","location":"/sys/Cch","name":"其他投诉","nameCn":"其他投诉","orderby":5,"parentId":"5","status":"1","type":"1"},{"creator":"operator","id":"1000601","isWebpage":"0","name":"运维流程","nameCn":"运维流程","orderby":1,"parentId":"6","status":"1","type":"1"},{"creator":"operator","id":"1000602","isWebpage":"0","name":"值班作业统计","nameCn":"值班作业统计","orderby":2,"parentId":"6","status":"1","type":"1"},{"creator":"operator","id":"1000603","isWebpage":"0","name":"需求管理类","nameCn":"需求管理类","orderby":3,"parentId":"6","status":"1","type":"1"},{"creator":"operator","id":"1000604","isWebpage":"0","name":"自定义报表","nameCn":"自定义报表","orderby":4,"parentId":"6","status":"1","type":"1"},{"creator":"operator","id":"1000701","isWebpage":"0","name":"案例库","nameCn":"案例库","orderby":1,"parentId":"7","status":"1","type":"1"},{"creator":"operator","id":"1000702","isWebpage":"0","name":"运维知识","nameCn":"运维知识","orderby":2,"parentId":"7","status":"1","type":"1"},{"creator":"operator","id":"1000703","isWebpage":"0","name":"专项活动问题上报","nameCn":"专项活动问题上报","orderby":3,"parentId":"7","status":"1","type":"1"},{"creator":"operator","id":"1000801","isWebpage":"0","name":"运维流程相关","nameCn":"运维流程相关","orderby":1,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000802","isWebpage":"0","name":"公共服务相关","nameCn":"公共服务相关","orderby":2,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000803","isWebpage":"0","name":"值班管理相关","nameCn":"值班管理相关","orderby":3,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000804","isWebpage":"0","name":"需求管理相关","nameCn":"需求管理相关","orderby":4,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000805","isWebpage":"0","name":"工单监控","nameCn":"工单监控","orderby":5,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000806","isWebpage":"0","name":"数据质量保障","nameCn":"数据质量保障","orderby":6,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000310","isWebpage":"0","name":"维护协作工单","nameCn":"维护协作工单","orderby":10,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000808","isWebpage":"0","name":"系统公告","nameCn":"系统公告","orderby":8,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000809","isWebpage":"0","name":"自定义报表管理","nameCn":"自定义报表管理","orderby":9,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000810","isWebpage":"0","name":"数据共享平台","nameCn":"数据共享平台","orderby":10,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000811","isWebpage":"0","name":"表单管理","nameCn":"表单管理","orderby":11,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"100010101","isWebpage":"0","name":"生产管理类","nameCn":"生产管理类","orderby":1,"parentId":"1000101","status":"1","type":"1"},{"creator":"operator","id":"100010102","isWebpage":"0","name":"网络变更与配置类","nameCn":"网络变更与配置类","orderby":2,"parentId":"1000101","status":"1","type":"1"},{"creator":"operator","id":"100010103","isWebpage":"0","name":"安全管理类","nameCn":"安全管理类","orderby":3,"parentId":"1000101","status":"1","type":"1"},{"creator":"operator","id":"100010104","isWebpage":"0","name":"应急与事件管理类","nameCn":"应急与事件管理类","orderby":4,"parentId":"1000101","status":"1","type":"1"},{"creator":"operator","id":"100060201","isWebpage":"0","name":"值班作业统计","nameCn":"值班作业统计","orderby":1,"parentId":"1000602","status":"1","type":"1"},{"creator":"operator","id":"1000301","isWebpage":"0","name":"需求管理工单","nameCn":"需求管理工单","orderby":1,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000302","isWebpage":"0","name":"版本管理","nameCn":"版本管理","orderby":2,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000303","isWebpage":"0","name":"割接管理工单","nameCn":"割接管理工单","orderby":3,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000304","isWebpage":"0","name":"厂商考核管理工单","nameCn":"厂商考核管理工单","orderby":4,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000305","isWebpage":"0","name":"系统问题管理","nameCn":"系统问题管理","orderby":5,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000306","isWebpage":"0","name":"IT资源申请","nameCn":"IT资源申请","orderby":6,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000704","isWebpage":"0","name":"领先行动","nameCn":"领先行动","orderby":4,"parentId":"7","status":"1","type":"1"},{"creator":"operator","id":"100010204","isWebpage":"0","name":"技能认证考试统计","nameCn":"技能认证考试统计","orderby":4,"parentId":"1000102","status":"1","type":"1"},{"creator":"operator","id":"1000311","isWebpage":"0","name":"明细需求工单","nameCn":"明细需求工单","orderby":11,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000307","isWebpage":"0","name":"需求管理(新)","nameCn":"需求管理(新)","orderby":7,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000204","isWebpage":"0","name":"故障处理","nameCn":"故障处理","orderby":1,"parentId":"2","status":"1","type":"1"},{"creator":"operator","id":"100010201","isWebpage":"0","name":"信息与公告类","nameCn":"信息与公告类","orderby":1,"parentId":"1000102","status":"1","type":"1"},{"creator":"operator","id":"100010202","isWebpage":"0","name":"网管云盘","nameCn":"网管云盘","orderby":2,"parentId":"1000102","status":"1","type":"1"},{"creator":"operator","id":"100010203","isWebpage":"0","name":"培训与管理类","nameCn":"培训与管理类","orderby":3,"parentId":"1000102","status":"1","type":"1"},{"creator":"operator","id":"100010501","isWebpage":"0","name":"供应商管理","nameCn":"供应商管理","orderby":1,"parentId":"1000105","status":"1","type":"1"},{"creator":"operator","id":"100020101","isWebpage":"0","name":"故障处理","nameCn":"故障处理","orderby":1,"parentId":"1000201","status":"1","type":"1"},{"creator":"operator","id":"100020102","isWebpage":"0","name":"集客故障","nameCn":"集客故障","orderby":2,"parentId":"1000201","status":"1","type":"1"},{"creator":"operator","id":"1000505","isWebpage":"0","location":"/sys/Cch","name":"预警工单","nameCn":"预警工单","orderby":4,"parentId":"5","status":"1","type":"1"},{"creator":"operator","id":"100020201","isWebpage":"0","name":"4G性能管理","nameCn":"4G性能管理","orderby":1,"parentId":"1000202","status":"1","type":"1"},{"creator":"operator","id":"100020202","isWebpage":"0","name":"分场景类管理","nameCn":"分场景类管理","orderby":2,"parentId":"1000202","status":"1","type":"1"},{"creator":"operator","id":"100020301","isWebpage":"0","name":"故障支撑类","nameCn":"故障支撑类","orderby":1,"parentId":"1000203","status":"1","type":"1"},{"creator":"operator","id":"100020302","isWebpage":"0","name":"故障管理类","nameCn":"故障管理类","orderby":2,"parentId":"1000203","status":"1","type":"1"},{"creator":"operator","id":"100060101","isWebpage":"0","name":"网管室指标","nameCn":"网管室指标","orderby":1,"parentId":"1000601","status":"1","type":"1"},{"creator":"operator","id":"100060102","isWebpage":"0","name":"传输室指标","nameCn":"传输室指标","orderby":2,"parentId":"1000601","status":"1","type":"1"},{"creator":"operator","id":"100060103","isWebpage":"0","name":"监控室指标","nameCn":"监控室指标","orderby":3,"parentId":"1000601","status":"1","type":"1"},{"creator":"operator","id":"100060104","isWebpage":"0","name":"客响室指标","nameCn":"客响室指标","orderby":4,"parentId":"1000601","status":"1","type":"1"},{"creator":"operator","id":"100060105","isWebpage":"0","name":"网管中心指标","nameCn":"网管中心指标","orderby":5,"parentId":"1000601","status":"1","type":"1"},{"creator":"operator","id":"100060106","isWebpage":"0","name":"EOMS老版指标","nameCn":"EOMS老版指标","orderby":6,"parentId":"1000601AA","status":"1","type":"1"},{"creator":"operator","id":"100060107","isWebpage":"0","name":"其他统计","nameCn":"其他统计","orderby":7,"parentId":"1000601","status":"1","type":"1"},{"creator":"operator","id":"100060301","isWebpage":"0","name":"需求统计","nameCn":"需求统计","orderby":1,"parentId":"1000603","status":"1","type":"1"},{"creator":"operator","id":"100060302","isWebpage":"0","name":"需求统计(旧)","nameCn":"需求统计(旧)","orderby":2,"parentId":"1000603AA","status":"1","type":"1"},{"creator":"operator","id":"100080101","isWebpage":"0","name":"配置与管理","nameCn":"配置与管理","orderby":1,"parentId":"1000801","status":"1","type":"1"},{"creator":"operator","id":"100080102","isWebpage":"0","name":"其他管理","nameCn":"其他管理","orderby":2,"parentId":"1000801","status":"1","type":"1"},{"creator":"operator","id":"100080201","isWebpage":"0","name":"配置与管理","nameCn":"配置与管理","orderby":1,"parentId":"1000802","status":"1","type":"1"},{"creator":"operator","id":"100080301","isWebpage":"0","name":"配置与管理","nameCn":"配置与管理","orderby":1,"parentId":"1000803","status":"1","type":"1"},{"creator":"operator","id":"100080401","isWebpage":"0","name":"配置与管理","nameCn":"配置与管理","orderby":1,"parentId":"1000804","status":"1","type":"1"},{"creator":"operator","id":"100080501","isWebpage":"0","name":"故障工单检测","nameCn":"故障工单检测","orderby":1,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080502","isWebpage":"0","name":"性能故障工单检测","nameCn":"性能故障工单检测","orderby":2,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080503","isWebpage":"0","name":"发电保障工单检测","nameCn":"发电保障工单检测","orderby":3,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080504","isWebpage":"0","name":"集客故障工单检测","nameCn":"集客故障工单检测","orderby":4,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080505","isWebpage":"0","name":"性能质量提升督办工单检测","nameCn":"性能质量提升督办工单检测","orderby":5,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080506","isWebpage":"0","name":"集客投诉工单检测","nameCn":"集客投诉工单检测","orderby":6,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080507","isWebpage":"0","name":"家客投诉工单检测","nameCn":"家客投诉工单检测","orderby":7,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080508","isWebpage":"0","name":"生产任务工单检测","nameCn":"生产任务工单检测","orderby":8,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080509","isWebpage":"0","name":"配置与管理","nameCn":"配置与管理","orderby":9,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080510","isWebpage":"0","name":"工单监控告警","nameCn":"工单监控告警","orderby":10,"parentId":"1000805","status":"1","type":"1"},{"creator":"operator","id":"100080601","isWebpage":"0","name":"数据保障","nameCn":"数据保障","orderby":1,"parentId":"1000806","status":"1","type":"1"},{"creator":"operator","id":"1000309","isWebpage":"0","name":"系统问题管理","nameCn":"系统问题管理","orderby":9,"parentId":"3","status":"1","type":"1"},{"creator":"operator","id":"1000705","isWebpage":"0","name":"领先行动","nameCn":"领先行动","orderby":5,"parentId":"7","status":"1","type":"1"},{"creator":"operator","id":"1000807","isWebpage":"0","name":"集客投诉追踪","nameCn":"集客投诉追踪","orderby":2,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"100010105","isWebpage":"0","name":"无线设备管理类","nameCn":"无线设备管理类","orderby":5,"parentId":"1000101","status":"1","type":"1"},{"creator":"operator","id":"1000606","isWebpage":"0","name":"传输月报","nameCn":"传输月报","orderby":6,"parentId":"6","status":"1","type":"1"},{"creator":"operator","id":"1000607","isWebpage":"0","name":"传输月报数据保障","nameCn":"传输月报数据保障","orderby":7,"parentId":"6","status":"1","type":"1"},{"creator":"operator","id":"1000106","isWebpage":"0","name":"评估上报类","nameCn":"评估上报类","orderby":5,"parentId":"1","status":"1","type":"1"},{"creator":"operator","id":"100010601","isWebpage":"0","name":"主设备后评估工单","nameCn":"主设备后评估工单","orderby":1,"parentId":"1000106","status":"1","type":"1"},{"creator":"operator","id":"100010602","isWebpage":"0","name":"维护物料上报工单","nameCn":"维护物料上报工单","orderby":2,"parentId":"1000106","status":"1","type":"1"},{"creator":"operator","id":"1000706","isWebpage":"0","name":"领先行动","nameCn":"领先行动","orderby":5,"parentId":"7","status":"1","type":"1"},{"creator":"operator","id":"100060108","isWebpage":"0","name":"家客上报集团指标","nameCn":"家客上报集团指标","orderby":8,"parentId":"1000601","status":"1","type":"1"},{"creator":"operator","id":"1000812","isWebpage":"0","name":"家客上报专题保障","nameCn":"家客上报专题保障","orderby":12,"parentId":"8","status":"1","type":"1"},{"creator":"operator","id":"1000506","isWebpage":"0","location":"/sys/Cch","name":"投诉卡单工单","nameCn":"投诉卡单工单","orderby":6,"parentId":"5","status":"1","type":"1"}],"msg":""}
  return {
    url: 'home/getDbList',
    method: 'post',
    data: dbList
  }
}

export function addMessage () {
  let dbList = {"code":0}
  return {
    url: 'bsf/messageboard/addMessage',
    method: 'post',
    data: dbList
  }
}
// 获取 快速通道
export function getFastPassData() {
  const fastList = {
    "code": "00",
    "msg": null,
    "data":[{
        "CLASSIFY": "01010101",
        "CODE": "sheet-new",
        "DESCRIBE": "新增生产任务工单",
        "ICON": "xz_scrwgd.png",
        "ID": "21203802",
        "ISVALID": 0,
        "MTYPE": "010101",
        "NAME": "新增生产任务工单",
        "ORDERBY": 1,
        "SUBID": "f0d6e71d4dbb4b05938418c83716d195",
        "SUBSYSTEMID": "1",
        "TAGID": null,
        "TYPE": "1",
        "URL": "/eoms/form/inst/page?actionName=task_draft&sheetType=HA-508&_rel=HA-508"
    },{
      "CLASSIFY": "01010402",
      "CODE": "21203567",
      "DESCRIBE": "新增重大事件保障工单",
      "ICON": "xz_zdsjbzgd.png",
      "ID": "21203810",
      "ISVALID": 0,
      "MTYPE": "010104",
      "NAME": "新增重大事件保障工单",
      "ORDERBY": 1,
      "SUBID": "3122",
      "SUBSYSTEMID": "2",
      "TAGID": null,
      "TYPE": "1",
      "URL": "/gpm/sheet/SendInitEaSheet.do",
    },{
      "CLASSIFY": "03010102",
      "CODE": "sheet-new",
      "DESCRIBE": "申请割接",
      "ICON": "shangbao.png",
      "ID": "21203908",
      "ISVALID": 0,
      "MTYPE": "03010102",
      "NAME": "申请割接",
      "ORDERBY": 1,
      "SUBID": "wscgjglgdmenugrtsmenugrtsmenugrtsmenugrtsmenu",
      "SUBSYSTEMID": "1",
      "TAGID": null,
      "TYPE": "3",
      "URL": "/eomswsc/cmDraft/sheet_draft?actionName=cm_draft=HA-003=bps.wsc.cm.P_CM=P_CM_T0=sheet-new=yes",
    },{
      "CLASSIFY": null,
      "CODE": "demo_page10",
      "DESCRIBE": "网管云盘文档",
      "ICON": "xinjian.png",
      "ID": "21203904",
      "ISVALID": 0,
      "MTYPE": "0809",
      "NAME": "网管云盘文档",
      "ORDERBY": 1,
      "SUBID": "kjwgypwd",
      "SUBSYSTEMID": "1",
      "TAGID": null,
      "TYPE": "1",
      "URL": "../sysFile?fileType=1",
    },{
      "CLASSIFY": "01010203",
      "CODE": "sheet-new",
      "DESCRIBE": "新增数据变更申请工单",
      "ICON": "xz_sjbgsqgd.png",
      "ID": "21203805",
      "ISVALID": 0,
      "MTYPE": "010102",
      "NAME": "新增数据变更申请工单",
      "ORDERBY": 1,
      "SUBID": "modifyapplymenugrtsmenugrtsmenugrtsmenugrtsmenu",
      "SUBSYSTEMID": "1",
      "TAGID": "50009",
      "TYPE": "1",
      "URL": "/eomscch/am/amSheet/sheet_draft?actionName=modifyApply_draft&sheetType=HA-500&processid=bps.modifyapply.P_MODIFYAPPLY&activityid=P_MODIFYAPPLY_T0&_rel=sheet-new&draftTreeFlag=yes",
    },{
      "CLASSIFY": "08010202",
      "CODE": "editFilledSheet",
      "DESCRIBE": "修改集客故障归档工单",
      "ICON": "luru.png",
      "ID": "21203897",
      "ISVALID": 0,
      "MTYPE": "080102",
      "NAME": "修改集客故障归档工单",
      "ORDERBY": 1,
      "SUBID": "gswhgswhgswhgswhgswh",
      "SUBSYSTEMID": "1",
      "TAGID": null,
      "TYPE": "8",
      "URL": "/eomswh/utilClass/mainPage?_rel=editFilledSheet&sheetType=HA-063",
    }]
  }
  // let upComList = {"code":200,"msg":null,"data":{"pageNum":1,"pageSize":6,"totalSize":12,"totalPages":2,"content":[{"id":1,"sheetId":'HA-058-191020-0001',"sheetType":'1',"sheetTheme":'上海市普陀区金沙江路 1518 弄',"sheetStatus":'成功'},{"id":2,"sheetId":'HA-058-191020-0001',"sheetType":'2',"sheetTheme":'上海市普陀区金沙江路 1517 弄',"sheetStatus":'成功'},{"id":23,"sheetId":'HA-058-191020-0001',"sheetType":'1',"sheetTheme":'上海市普陀区金沙江路 1519 弄',"sheetStatus":'失败'},{"id":24,"sheetId":'HA-058-191020-0001',"sheetType":'2',"sheetTheme":'上海市普陀区金沙江路 1517 弄',"sheetStatus":'成功'},{"id":25,"sheetId":'HA-058-191020-0001',"sheetType":'1',"sheetTheme":'上海市普陀区金沙江路 1519 弄',"sheetStatus":'失败'},{"id":26,"sheetId":'HA-058-191020-0001',"sheetType":'1',"sheetTheme":'上海市普陀区金沙江路 1519 弄',"sheetStatus":'失败'}]}}
  return {
    url: 'home/fastPass',
    type: 'get',
    data: fastList
  }
}
// 获取用户信息
export function getUserId() {
  const userId = {
    "code": "0",
    "msg": null,
    "data":{
      "account": "zhaodanping",
      "accountEffectTime": 1587052801000,
      "accountExpireTime": 1650124801000,
      "cityCode": null,
      "createtime": 1587052801000,
      "createuser": null,
      "email": "15936252150@139.com",
      "id": "2656614",
      "isjob": null,
      "isvalid": 1,
      "jobid": "22146822",
      "lastLoginTime": 1588835692000,
      "lockTime": null,
      "mainuser": "2656614",
      "name": "东信",
      "organid": "100569",
      "password": "dkGcWHMNnzXees",
      "passwordHis": null,
      "phone": "15936252150",
      "pwdExpireTime": 1594828801000,
      "pwdModifyTime": 1587052801000,
      "pwdValidPeriod": 90,
      "sex": null,
      "status": null
    }
  }
  return {
    url: 'bsf/user/findByUserName',
    type: 'get',
    data: userId
  }
}
// 我的待办,运维流程数据,值班作业数据，公共服务数据
export function findJobList () {
  const jobList = {
    "code": "0",
    "msg": null,
    "data":[{
      "FLAG": "1",
      "ID": "22146822",
      "NAME": "厂家正信测试部",
      "SHORTNAME": "测试部",
      "TYPE": "0",
    },{
      "FLAG": "0",
      "ID": "24088370",
      "NAME": "东信",
      "SHORTNAME": "东信",
      "TYPE": "0"
    },{
      "FLAG": "0",
      "ID": 22146833,
      "NAME": "浪潮科技",
      "SHORTNAME": "浪潮科技",
      "TYPE": "1"
    },{
      "FLAG": "1",
      "ID": 24088349,
      "NAME": "东信",
      "SHORTNAME": "东信",
      "TYPE": "1"
    }]
  }
  return {
    url: 'home/findJobList',
    type: 'get',
    data: jobList
  }
}
// 运维待办数据
export function findOperation () {
  const operationList = {
    "code": "0",
    "msg": null,
    "data":[{
      "C": 10,
      "N": "仪器仪表使用管理工单",
      "SHEETTYPE": "HA-700"
    },{
      "C": 2,
      "N": "集客故障工单",
      "SHEETTYPE": "HA-063"
    },{
      "C": 2,
      "N": "智能巡检工单",
      "SHEETTYPE": "HA-515"
    },{
      "C": 4,
      "N": "故障处理工单",
      "SHEETTYPE": "HA-051"
    }]
  }
  return {
    url: 'home/findOperation',
    type: 'get',
    data: operationList
  }
}
