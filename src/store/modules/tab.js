export default {
  state: {
    // 主入口标签页
    mainTabs: [],
    // 当前标签页名
    mainTabsActiveName: '',
    //保存缓存的列表
    keepAliveList: '',
    // 点击主菜单跳转页面时,获取的数据
    tabChildId: null
  },
  mutations: {
    updateMainTabs (state, tabs) {
      state.mainTabs = tabs
    },
    updateMainTabsActiveName (state, name) {
      state.mainTabsActiveName = name
    },
    setKeepAliveLists(state,arrListString){
      state.keepAliveList = arrListString
    },
    setTabChildId(state,id){
      state.tabChildId = id
    },
  }
}
