export default {
    state: {
        centerMenu: {},  //
        centerMenuId: null
    },
    mutations: {
      setCenterMenuId(state,id){  // 用户权限标识集合
          state.centerMenuId = id
      },
      setCenterMenu(state,obj){  //
          state.centerMenu[obj.id] = obj.arr
      }
    },
}
