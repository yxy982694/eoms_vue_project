export default {
    state: {
        mainIdStoreTabObj: {} // 根据主菜单id,子tab中的数据
    },
    mutations: {
        setMainIdStoreTabObj(state, obj){
            state.mainIdStoreTabObj[obj.id] = {
                editableTabs: obj.editableTabs,
                existTabs: obj.existTabs,
                currentTabLabel: obj.currentTabLabel,
                currentTitle: obj.currentTitle,
                currentTabId: obj.currentTabId
            }
        },
        setRemoveMainIdStoreTabObj(state, id){
            delete state.mainIdStoreTabObj[id]
        },
        setRemoveAllMainIdStoreTabObj(state){
           state.mainIdStoreTabObj = {}
        },
    }
}
