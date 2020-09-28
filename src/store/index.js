import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

// 引入子模块
import app from './modules/app'
import tab from './modules/tab'
import iframe from './modules/iframe'
import menu from './modules/menu'
import tagsView from "./modules/tagsView"
import contextMenu from "./modules/showContextmenu"
import showTab from "./modules/showTab"
import tableCurrentId from "./modules/tableCurrentId"
import centerMenu from "./modules/centerMenu"
import routerIdData from "./modules/routerIdData"
import resourceLeftTop from "./modules/resourceLeftTop"
import mainIdStoreTab from "./modules/mainIdStoreTab"
import loadData from "./modules/loadData"
import showIframe from "./modules/showIframe"
import warnManage from "./modules/warnManage"
import keepAliveTabs from "./modules/keepAliveTabs"
const store = new vuex.Store({
  modules: {
    app: app,
    tab: tab,
    iframe: iframe,
    menu: menu,
    tagsView: tagsView,
    contextMenu: contextMenu,
    showTab: showTab,
    tableCurrentId: tableCurrentId,
    centerMenu: centerMenu,
    routerIdData: routerIdData,
    resourceLeftTop: resourceLeftTop,
    mainIdStoreTab: mainIdStoreTab,
    loadData: loadData,
    showIframe: showIframe,
    warnManage: warnManage,
    keepAliveTabs: keepAliveTabs
  }
})

export default store
