export default {
    state: {
        resourceLeft: '', // "配置与管理"中,在table上右键时,添加编辑删除显示的位置left
        resourceTop: '', // top
        resourceDisplay: 'none' // 显示隐藏标志
    },
    mutations: {
        setResourceLeft(state, val){
            state.resourceLeft = val
        },
        setResourceTop(state, val){
            state.resourceTop = val
        },
        setResourceDisplay(state, val){
            state.resourceDisplay = val
        },
    }
}
