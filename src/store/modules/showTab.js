export default {
    state: {
      // 显示子tab中的内容
        editableTabs: [],
        existTabs: [],
        currentTabLabel: '',
        currentTitle: '',
        currentTabId: '',
    },
    mutations: {
        setEditableTabs: function (state,arr) {
            state.editableTabs = arr
        },
        setExistTabs: function (state,arr) {
            state.existTabs = arr
        },
        addEditableTabs: function (state,val) {
            state.editableTabs.push(val)
        },
        addExistTabs: function (state,val) {
            state.existTabs.push(val)
        },
        setCurrentTabLabel: function (state,val) {
            state.currentTabLabel = val
        },
        setCurrentTitle: function (state,val) {
            state.currentTitle = val
        },
        setCurrentTabId: function (state,val) {
            state.currentTabId = val
        }
    },
}
