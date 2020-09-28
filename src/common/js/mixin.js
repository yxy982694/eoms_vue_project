import { mapMutations } from 'vuex'
import KtButton from "@/components/KtButton/KtButton"
import KtTable from "@/components/KtTable/KtTable"
export const leftListMixin = {
      data() {
          return {
              leftList:[
                  // {   id: 1,
                  //     location: '/SysManage/OperProcess/ConfigManageTab/BasicManage',
                  //     label: '基础管理'
                  // },
                  // {   id: 2,
                  //     location: 'http://www.baidu.com/',
                  //     label: '百度'
                  // },
                  // {   id: 3,
                  //     location: 'http://10.217.1.31:9082/eoms/frame/frame.jsp#demo_page1',
                  //     label: 'emos'
                  // },
              ],
          }
      },
      mounted: function () {
        this.initData()
      },
      watch: {
        routerId: function () {
          this.initData()
        }
      },
      computed: {
        centerMenu: {
          get: function () {
            return this.$store.state.centerMenu.centerMenu
          },
          set: function () {}
        },
        routerId: {
          get: function () {
            return this.$store.state.routerIdData.routerId
          },
          set: function () {}
        },
        routerObj: {
          get: function () {
            return this.$store.state.routerIdData.routerObj
          },
          set: function () {}
        },
        showIframe: {
            get: function () {
              return this.$store.state.showIframe.showIframe
            },
            set: function () {}
          }
      },
      methods: {
        ...mapMutations({
          'setCenterMenu': 'setCenterMenu',
          'setRouterId': 'setRouterId',
          'setRouterObj': 'setRouterObj',
          'setIframeLocationObj': 'setIframeLocationObj',
          'setRouterLocation': 'setRouterLocation',
          'setIframeUrlArr': 'setIframeUrlArr',
          'setShowIframe': 'setShowIframe',
          'setOperConfig': 'setOperConfig',
          // 'updateMainTabs': 'updateMainTabs',
        }),
        initData: function () {
          // 调取左侧导航接口数据
          // 也可以把调用接口放在MenuTree.vue组件的handleRoute方法中
          // 并传入点击时对应的id就行
          // 还要在点击ToggleNav.vue组件中写调用数据的接口传入对应的id就行了
          // 在这4个事件函数都要调用接口
          // 可以把id和id对应的数据保存在store中，在每个页面中放入都调用store存入的数据就行了
          // <p @click="tabsCloseCurrentHandle">关闭</p>
          // <p @click="tabsCloseOtherHandle">关闭其它</p>
          // <p @click="tabsCloseAllHandle">关闭全部</p>
          // <p @click="tabsRefreshCurrentHandle">刷新</p>
          // 在刷新页面时，重新调用接口
          let obj = null
          let id = this.routerId
          // console.log(id)
          this.leftList = []
          if (id || id === 0) { // 如果store中有id，则直接使用保存的值,或者切换到首页时
            let res = this.routerObj[id]
            // console.log(res)
            if (res && Array.isArray(res.data)) { // 对应id中有数据 以防res不存在时,res.data报错
              if (res.data.length > 0) { // 而且data中数组长度大于等于1
                // this.showIframe = true
                // console.log(this.showIframe)
                for (var i=0;i<res.data.length;i++) {
                  //console.log(res.data[i].children)
                  // 让左侧导航的id和children分别作为一个对象的属性和属性值
                  // 方便在知道id的情况下找到id对应的数据
                  // 主要为了在中间部分导航平铺的数组数据
                  this.setCenterMenu({ // 中间平铺菜单
                    id: res.data[i].id,
                    arr: res.data[i].children
                  })
                  // console.log(this.centerMenu)
                  obj = { // 左菜单
                    id: res.data[i].id,
                    // location: res.data[i].location?res.data[i].location: '/SysManage/OperProcess/ConfigManageTab/BasicManage',
                    location: res.data[i].location?res.data[i].location: '/AsideTab/SubAsideTab/LeftMenu',
                    // location: '/AsideTab/SubAsideTab/LeftMenu',
                    label: res.data[i].name
                  }
                  this.leftList.push(obj)
                  // this.leftList.unshift(obj)
                }
              }
            }
          } else { // 如果store中不存在id的值，则重新调用一次接口，刷新页面时
            if (parseInt(this.$route.meta.location)) {
              let loctionUrl = sessionStorage.getItem('iframeLocation')
              // console.log(this.$store.state.showIframe.showIframe)
              this.setShowIframe(true)
              // console.log(loctionUrl)
              this.setIframeLocationObj({
                id: this.$route.meta.location,
                iframeLocation: loctionUrl
              })
              this.setRouterLocation(loctionUrl)
              this.setIframeUrlArr([loctionUrl])
              return
            }

            // 首次进入页面时,阻止调用下面的接口resourceManage
            if (!sessionStorage.getItem('id') || sessionStorage.getItem('id') == 0) {
              // console.log('刷新了首页')
              return
            }
            if (this.$route.name == '配置与管理') {
              this.setOperConfig(this.$route.meta.location)
            }
            this.$api.menu.resourceManage(sessionStorage.getItem('id')).then((res) => {
              if (!res || !Array.isArray(res.data)) {
                return
              }
              this.setRouterObj({
                id: sessionStorage.getItem('id'),
                arr: res
              })
              this.setRouterId(sessionStorage.getItem('id'))
              for (var i=0;i<res.data.length;i++) {
                this.setCenterMenu({
                  id: res.data[i].id,
                  arr: res.data[i].children
                })
                obj = {
                  id: res.data[i].id,
                  // location: res.data[i].location?res.data[i].location: '/AsideTab/SubAsideTab/LeftMenu',
                  location: '/AsideTab/SubAsideTab/LeftMenu',
                  // location: res.data[i].location?res.data[i].location: '/SysManage/OperProcess/ConfigManageTab/BasicManage',//?res.data[i].location: '/SysManage/OperProcess/ConfigManageTab/BasicManage'
                  label: res.data[i].name
                }
                this.leftList.push(obj)
                // this.leftList.unshift(obj)
              }
            })
          }
      }
  },
}
// 表格带分页,搜索框,右键3个功能
export const tablePageMixin = {
  data () {
    return {
      usernameVal: '', // 搜索框中的值
      total: 0, // 数据总条数 默认0条
      pageSize: 15, // 每页显示条数 15条
      currentPage: 1, // 显示第几页 默认第1页
      pageSizes: [15,50,100,200], // 每页显示条数 可选择
      editAble: true, // 按钮是否可用
      operation: false,// false显示为编辑
      dialogVisible: false, // 不显示弹框
      editLoading: false, // 点击提交时，不显示加载图标
      loading: false,// 进入表格时，首先显示加载图标
      tableData: [], // 表格中数据
      columns: [], // 列
      rowObj: '', // 某一行数据
    }
  },
  computed: {
    resourceLeft: { // 获取右键left值
      get: function () {
        return this.$store.state.resourceLeftTop.resourceLeft
      },
      set: function () {}
    },
    resourceTop: { // 获取右键top值
      get: function () {
        return this.$store.state.resourceLeftTop.resourceTop
      },
      set: function () {}
    },
    resourceDisplay: { // 右键菜单是否显示
      get: function () {
        return this.$store.state.resourceLeftTop.resourceDisplay
      },
      set: function () {}
    },
  },
  mounted: function () {
    let _this = this
    this.setResourceDisplay('none')
    window.onclick = function () {
      _this.setResourceDisplay('none')
    }
    this.initColumns()
  },
  methods: {
    ...mapMutations({
      'setResourceLeft': 'setResourceLeft',
      'setResourceTop': 'setResourceTop',
      'setResourceDisplay': 'setResourceDisplay'
    }),
  },
  components:{
  	KtButton,
    KtTable
  },
}
// 表格带搜索框和右键2个功能  不带分页
export const tableNoPageMixin = {
  data() {
    return {
      usernameVal: '',
      columns: [],
      loading: false,
      operation: false,
      dialogVisible: false,
      editLoading: false,
      tableData: [],
    }
  },
  components:{
  	KtButton,
    KtTable
  },
  mounted: function () {
    let _this = this
    this.setResourceDisplay('none')
    window.onclick = function () {
      _this.setResourceDisplay('none')
    }
    this.initColumns()
  },
  computed: {
    resourceLeft: { // 获取右键left值
      get: function () {
        return this.$store.state.resourceLeftTop.resourceLeft
      },
      set: function () {}
    },
    resourceTop: { // 获取右键top值
      get: function () {
        return this.$store.state.resourceLeftTop.resourceTop
      },
      set: function () {}
    },
    resourceDisplay: { // 右键菜单是否显示
      get: function () {
        return this.$store.state.resourceLeftTop.resourceDisplay
      },
      set: function () {}
    },
  },
  methods: {
    ...mapMutations({
      'setResourceLeft': 'setResourceLeft',
      'setResourceTop': 'setResourceTop',
      'setResourceDisplay': 'setResourceDisplay'
    }),
  },
}
