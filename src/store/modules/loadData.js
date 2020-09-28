// 判断该模块是否已经加载过,加载过则不再调用接口
export default {
    state: {
        // 资源管理模块
        resourceFlag: false,
        resourceArr: [],
        resourceNameVal: '',
        // 用户管理模块
        userObj: {
          userFlag: false,
          userTableArr: [],
          userTotal: 0,
          userCurrentPage: 0,
          userPageSize: 10,
          userNameVal: ''
        },
        userOriganFlag: false,
        userOriganArr: [],
        currentDepId: '0', // 当前部门id
        //角色管理模块
        roleObj: {
          roleFlag: false,
          roleArr: [],
          roleTotale: 0,
          roleCurrentPage: 0,
          rolePageSize: 10,
          roleNameVal: ''
        },
        //字典配置菜单
        dicObj: {
          flag: false,
          dataArr: [],
          totale: 0,
          currentPage: 1,
          pageSize: 15,
          nameVal: '',
          inpDictypeId: '',
          inpCode: '',
          inpValid: 1
        },
    },
    mutations: {
      // 资源管理模块
      setResourceFlag: function (state,flag) {
        state.resourceFlag = flag
      },
      setResourceArr: function (state,arr) {
        state.resourceArr = arr
      },
      setResourceNameVal: function (state,val) {
        state.resourceNameVal = val
      },
      // 用户管理模块
      setUserObj: function (state,obj) {
        state.userObj = obj
      },
      setUserOriganFlag: function (state,flag) {
        state.userOriganFlag = flag
      },
      setUserOriganArr: function (state,arr) {
        state.userOriganArr = arr
      },
      setCurrentDepId: function (state,id) {
        state.currentDepId = id
      },
      // 角色管理模块
      setRoleFlag: function (state,flag) {
        state.roleFlag = flag
      },
      setRoleArr: function (state,arr) {
        state.roleArr = arr
      },
      setRoleObj: function (state,obj) {
        state.roleObj = obj
      },
      // 字典配置菜单模块
      setDicObj: function (state,obj) {
        state.dicObj = obj
      }
    }
}
