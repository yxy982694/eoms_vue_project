export default {
    state: {
        navTree: [],  // 导航菜单树
        nameCn: null,// 用户中文名
        phone: null, // 用户电话
        userName: null, // 用户英文名
        operProFlag: true, // 点击mytodo切换职位时,调取快速通道接口的标志
        sheetType: '', // 点击mytodo模块,运维待办时,重新调取待办列表接口
        iframeLocationObj: {}, // 根据主菜单menuType,存储iframe中对应的路径
		    iframeUrlArr: [], // 把iframeLocationObj for in循环,将里面全部路径组成一个数组,用于渲染全部iframe
        locationIndex: 0,// 当前活跃的iframe的索引,把这个值赋给h3的class,在ho.js中使用这个索引
        operConfig: '', // 当前"配置与管理"的路径
        faultSheetList: [], // 短信定制模块中的6条数据
        menuFlag: true, // menu的mounted是否已经执行
        dayWorkIframeUrl: '',// 值班作业iframe的url
    },
    mutations: {
        setNavTree(state, navTree){  // 设置导航菜单树
            state.navTree = navTree;
        },
        setNameCn(state, name){  // 设置用户中文名
            state.nameCn = name
        },
        setPhone(state, phone){  // 设置用户电话
            state.phone = phone
        },
        setUserName(state, name){  // 设置用户英文名
            state.userName = name
        },
        setOperProFlag(state, flag){  // 设置切换是否切换的标志
            state.operProFlag = flag
        },
        setSheetType(state, sheetType){  // 设置重新调取待办列表接口的标志
            state.sheetType = sheetType
        },
        setIframeLocationObj(state, obj){  // 设置根据menutype存储路径
            state.iframeLocationObj[obj.id] = obj.iframeLocation
        },
        setIframeUrlArr(state, urlArr){  // 设置将全部路径放在数组中
            state.iframeUrlArr = urlArr
        },
        setLocationIndex(state, index){  // 设置当前活跃的iframe索引
            state.locationIndex = index
        },
        setDelIframeLocationObj(state, id){  // 设置删除iframeLocationObj中指定属性名
            delete state.iframeLocationObj[id]
        },
        setDelAllIframeLocationObj(state){ // 设置删除iframeLocationObj中全部属性
           state.iframeLocationObj = {}
        },
        setOperConfig(state,location){ // 设置当前"配置与管理"的路径
          state.operConfig = location
        },
        setFaultSheetList(state,arr){ // 设置短信定制模块中的6条数据
          state.faultSheetList = arr
        },
        setMenuFlag(state,flag){
          state.menuFlag = flag
        },
        setDayWorkIframeUrl(state,url){
          state.dayWorkIframeUrl = url
        }
    },
}
