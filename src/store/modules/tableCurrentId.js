export default {
    state: {
        currentId: [],  // 获取当前行id,只有资源管理中用到了,看能不能删除
    },
    mutations: {
        setCurrentId(state, id){  // 设置当前行id
            state.currentId = id;
        }
    },
}
