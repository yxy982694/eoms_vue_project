export default {
    state: {
        warnManageObj: {
          warnManageArr: [],
          warnManageTotale: 0,
          warnManageCurrentPage: 1,
          warnManagePageSize: 10,
          warnManageSpecValue: '',
          warnManageWarnLevelValue: ''
        },
        warnManageFlag: false,
        warnManageSpecArr: [],
        warnManageWarnLevelArr: [],
        selectVariableObj: {
          flag: false,
          arr: []
        },
        provinceObj: {
          flag: false,
          arr: []
        },
        cityObj: {
          flag: false,
          arr: []
        },
        smsGroupPerson: {
          flag: false,
          arr: []
        },
        templateManageData: null,
        warnComponentWho: 'TemplateManageHome',
        isClickNewBuild: '',
        templateManageArr: [],
        majorAbled: false,
        // 预警管理
        warnManageOneObj: {
          flag: false,
          arr: [],
          total: 0,
          currentPage: 1,
          pageSize: 10
        },
        warnManageSearchForm: {
          sourceId: '',
          alarmID: '',
          alarmTitle: '',
          major: '',
          publishTime: null,
          city: '',
          state: '',
        },
        warnManageMajorObj: {
          flag: false,
          arr: []
        },
        warnManageCityObj: {
          flag: false,
          arr: []
        },
    },
    mutations: {
      setWarnManageObj(state,obj){
        state.warnManageObj = obj
      },
      setWarnManageFlag(state,flag){
        state.warnManageFlag = flag
      },
      setWarnManageSpecArr(state,arr){
        state.warnManageSpecArr = arr
      },
      setWarnManageWarnLevelArr(state,arr){
        state.warnManageWarnLevelArr = arr
      },
      setSelectVariableObj(state,obj){
        state.selectVariableObj = obj
      },
      setTemplateManageData(state,obj){
        state.templateManageData = obj
      },
      setWarnComponentWho(state,componentWho){
          state.warnComponentWho = componentWho
      },
      setIsClickNewBuild(state,flag){
          state.isClickNewBuild = flag
      },
      setTemplateManageArr(state,arr){
          state.templateManageArr = arr
      },
      setProvinceObj(state,obj){
          state.provinceObj = obj
      },
      setCityObj(state,obj){
          state.cityObj = obj
      },
      setSmsGroupPersonObj(state,obj){
        state.smsGroupPerson = obj
      },
      setMajorAbled(state,flag){
        state.majorAbled = flag
      },
      setWarnManageOneObj(state,obj){
        state.warnManageOneObj = obj
      },
      setWarnManageSearchForm(state,obj){
        state.warnManageSearchForm = obj
      },
      setWarnManageMajorObj(state,obj){
        state.warnManageMajorObj = obj
      },
      setWarnManageCityObj(state,obj){
        state.warnManageCityObj = obj
      },
    },
}
