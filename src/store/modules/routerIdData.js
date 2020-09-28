export default {
    state: {
        routerId: '', // 路由改变时,对应的id
        routerObj: {}, // 在点击导航菜单时,存储主菜单id,全部数据,以后的左菜单和右菜单都会用到
        routerLocation: '', // 当前活跃的路径,对应iframe的路径是,带参数的路径
    },
    mutations: {
        setRouterId(state, id){  // 保存导航按钮对应的id
            state.routerId = id
        },
        setRouterObj(state, obj){  // 保存导航按钮对应的id
            state.routerObj[obj.id] = obj.arr
        },
        setRouterLocation(state, location) {
          state.routerLocation = location
        }
    },
}
