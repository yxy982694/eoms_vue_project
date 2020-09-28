export default {
    state: {
        showIframe: false // 是否显示新系统中的模块,false为显示
    },
    mutations: {
        setShowIframe(state, flag){
            state.showIframe = flag
        }
    }
}
