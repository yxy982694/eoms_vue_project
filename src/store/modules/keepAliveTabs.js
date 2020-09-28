export default {
    state: {
      keepAliveTabs: []
    },
    mutations: {
      setKeepAliveTabs(state,arr){  //
          state.keepAliveTabs = arr
      },
      setDelKeepAliveTabs(state,path){  //
          state.keepAliveTabs.splice(state.keepAliveTabs.indexOf(path),1)
      },
    },
}
