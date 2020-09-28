<template>
  <!-- 标签页 -->
  <div class="tab-container">
    <el-tabs class="tabs main-tabs" v-model="mainTabsActiveName" :closable="true" type="card"
             @tab-click="selectedTabHandle" @tab-remove="removeTabHandle">
       <div class="tab-down-menu">
         <p @click="tabsCloseCurrentHandle">关闭</p>
         <p @click="tabsCloseOtherHandle">关闭其它</p>
         <p @click="tabsCloseAllHandle">关闭全部</p>
         <p @click="tabsRefreshCurrentHandle">刷新</p>
       </div>
       <!-- 取得是store中的数据 -->
      <el-tab-pane v-for="item in mainTabs"
                   :key="item.name" :label="item.title" :name="item.name" class="main-tab">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        tempActive: null
      }
    },
    computed: {
        mainTabs: {
          get () { return this.$store.state.tab.mainTabs },
          set (val) { this.$store.commit('updateMainTabs', val) }
        },
        mainTabsActiveName: {
          get () { return this.$store.state.tab.mainTabsActiveName },
          set (val) { this.$store.commit('updateMainTabsActiveName', val)}
        },
        routerLocation: {
          get: function () {
            return this.$store.state.routerIdData.routerLocation
          },
          set: function () {}
        },
        showIframe: {
          get: function () {
            return this.$store.state.showIframe.showIframe
          },
          set: function () {}
        },
        iframeUrlArr: {
          get: function () {
            return this.$store.state.menu.iframeUrlArr
          },
          set: function () {}
        },
        iframeLocationObj: {
          get: function () {
            return this.$store.state.menu.iframeLocationObj
          },
          set: function () {}
        },
        operConfig: {
          get: function () {
            return this.$store.state.menu.operConfig
          },
          set: function () {}
        },
        dayWorkIframeUrl: {
          get: function () {
            return this.$store.state.menu.dayWorkIframeUrl
          },
          set: function () {}
        },
        mainIdStoreTabObj: { // 根据主菜单id存的数据
          get: function () {
            return this.$store.state.mainIdStoreTab.mainIdStoreTabObj
          },
          set: function () {}
        },
        // keepAliveList(){
        //     // 获取缓存的路由列表
        //     return this.$store.state.keepAliveList;
        // },
    },
    mounted: function () {
      var _this = this
      // console.log(this.mainTabs)
      window.addEventListener('click',function () {
        if (document.querySelector('.main-tabs .el-tabs__content')) {
          document.querySelector('.main-tabs .el-tabs__content').style.display = 'none'
        }
      })
      this.renderTab()
    },
    methods: {
      ...mapMutations({
        'setContextMenuFlag': 'setContextMenuFlag',
        'setRouterId': 'setRouterId',
        'setRouterLocation': 'setRouterLocation',
        'setShowIframe': 'setShowIframe',
        'setDelIframeLocationObj': 'setDelIframeLocationObj',
        'setDelAllIframeLocationObj': 'setDelAllIframeLocationObj',
        'setIframeLocationObj': 'setIframeLocationObj',
        'setIframeUrlArr': 'setIframeUrlArr',
        'setLocationIndex': 'setLocationIndex',
        'setRemoveMainIdStoreTabObj': 'setRemoveMainIdStoreTabObj',
        'setRemoveAllMainIdStoreTabObj': 'setRemoveAllMainIdStoreTabObj',
        'setDelKeepAliveTabs': 'setDelKeepAliveTabs',
        'setKeepAliveTabs': 'setKeepAliveTabs',
      }),
      formArr: function (arr) {
        let array = arr.split('/')
        return array[array.length-2]+array[array.length-1]
      },
      renderTab: function () {
        var _this = this
        this.$nextTick(function () {
          setTimeout(function () {
            if (!document.querySelector('.el-tabs__nav-scroll .el-tabs__item .el-icon-close')) {
              return
            }
            document.querySelector('.el-tabs__nav-scroll .el-tabs__item .el-icon-close').style.display = 'none'
            Array.prototype.forEach.call(document.querySelectorAll('.main-tabs .el-tabs__item'),function (item) {
              item.oncontextmenu = null
              item.oncontextmenu = function (e) {
                _this.tempActive =item.id.substr(4)
                // console.log(_this.tempActive)
                _this.setContextMenuFlag(false)
                e.preventDefault()
                if (document.querySelector('.main-tabs .el-tabs__content')) {
                  document.querySelector('.main-tabs .el-tabs__content').style.display = 'block'
                  document.querySelector('.main-tabs .el-tabs__content').style.left = e.clientX - 20 + 'px'
                }
                window.onclick = null
                window.onclick = function () {
                  if (document.querySelector('.main-tabs .el-tabs__content')) {
                    document.querySelector('.main-tabs .el-tabs__content').style.display = 'none'
                  }
                }
              }
            })
          },500)
        })
      },
      // tabs, 选中tab，点击某个tab时
      selectedTabHandle (tab) {
        tab = this.mainTabs.filter(item => item.name === tab.name)
        // console.log(this.operConfig)
        // if (tab[0].name == '值班作业') {// 针对切换值班作业，更新iframe内容
        //   this.setIframeLocationObj({
        //     id: '0401',
        //     iframeLocation: this.dayWorkIframeUrl
        //   })
        // }
        if (tab[0].name == '配置与管理') {
          this.$router.push({ path: '/'+this.operConfig })
        }else {
          this.$router.push({ name: tab[0].name })
        }
      },
      // tabs, 删除tab
      removeTabHandle (tabName) {
          //清除当前缓存
          // if(this.$route.meta.keepAlive){
          //     this.$route.meta.keepAlive = false
          // }
            console.log('toggle')
          // 将点击项对象的属性从iframeLocationObj对象中删除
          let deleteLocation = ''
          for (let i=0;i<this.mainTabs.length;i++) {
            if (tabName == this.mainTabs[i].name) {
              if (parseInt(this.mainTabs[i].location)) {
                deleteLocation = this.iframeLocationObj[this.mainTabs[i].location]
                this.setDelIframeLocationObj(this.mainTabs[i].location)
              } else {
                let temArr = this.mainIdStoreTabObj[this.mainTabs[i].id].editableTabs
                for (let i=0;i<temArr.length;i++) {
                  this.setDelKeepAliveTabs(this.formArr(temArr[i].name))
                }
                this.setRemoveMainIdStoreTabObj(this.mainTabs[i].id)
              }
              break
            }
          }
          // 关闭此项后,剩余的项还有哪些
        this.mainTabs = this.mainTabs.filter(item => item.name !== tabName)
        if (this.mainTabs.length > 1) {
          if (tabName === this.mainTabsActiveName) {
            if (this.mainTabs[this.mainTabs.length - 1].name == '配置与管理') {
              this.$router.push({ path: '/'+this.operConfig }, () => {
                this.mainTabsActiveName = this.$route.name
                this.tempActive = this.$route.name
              })
            } else {
              // if (this.mainTabs[this.mainTabs.length - 1].name == '值班作业') {// 如果是值班作业，把路由添加进去
              //   this.setIframeLocationObj({
              //     id: '0401',
              //     iframeLocation: this.dayWorkIframeUrl
              //   })
              // }
              this.$router.push({ name: this.mainTabs[this.mainTabs.length - 1].name }, () => {
                this.mainTabsActiveName = this.$route.name
                this.tempActive = this.$route.name
              })
            }
          } else { // 右键点击的不是当前活动的标签，路由没有变化的情况。关闭右边小叉号，不是活跃的标签tab
          // console.log('路由没有变化')
            if (deleteLocation) {
              let notActiveArr = this.iframeUrlArr.filter(item => item != deleteLocation)
              this.setIframeUrlArr(notActiveArr)
              this.setLocationIndex(notActiveArr.indexOf(this.routerLocation))
            }
          }
        } else if (this.mainTabs.length == 1) { // 删除后，只有一项了，只能是首页
          this.setIframeUrlArr([])
          this.mainTabs = [{
            name: '首页',
            title: '首页',
            icon: 'fa fa-home fa-lg',
            id: 0,
            location: ''
          }]
          this.$router.push("/")
          this.mainTabsActiveName = '首页'
        }
    },
      // tabs, 关闭当前
      tabsCloseCurrentHandle () {
       if (this.tempActive == '首页') {
         // console.log('只有首页了，关闭功能失效')
         return
       }
        this.removeTabHandle(this.tempActive)
      },
      // tabs, 关闭其它
      tabsCloseOtherHandle () {
        if (this.tempActive == '首页' && this.mainTabs.length == 1) {
          // console.log('只有首页了，关闭其他功能失效')
          return
        }
        if (this.tempActive == '首页') {
          this.tabsCloseAllHandle()
          return
        } else if (this.mainTabs.length == 2) {
          return
        }
        // 将右键点击的项保留,其他非右键点击的项从iframeLocationObj对象中删除
        for (let i=0;i<this.mainTabs.length;i++) {
          if (this.tempActive != this.mainTabs[i].name) {
            if (parseInt(this.mainTabs[i].location)) {
              this.setDelIframeLocationObj(this.mainTabs[i].location)
            } else {
              if (this.mainTabs[i].id != 0) { // 保持我的主页的缓存不被删除
                let temArr = this.mainIdStoreTabObj[this.mainTabs[i].id].editableTabs
                for (let i=0;i<temArr.length;i++) {
                  this.setDelKeepAliveTabs(this.formArr(temArr[i].name))
                }
                this.setRemoveMainIdStoreTabObj(this.mainTabs[i].id)
              }
            }
          }
        }
        this.mainTabs = this.mainTabs.filter(item => item.name === this.tempActive || item.name==="首页")
        // 右键点击的是当前活动的标签，路由没有变化的情况
        if (this.tempActive == this.mainTabsActiveName) {
          // console.log('路由没有变化')
          if (parseInt(this.mainTabs[1].location)) {
            this.setIframeUrlArr([this.iframeLocationObj[this.mainTabs[1].location]])
            this.setLocationIndex(0)
          }
          return
        }
        if (this.mainTabs[1].name == '配置与管理') {
            this.$router.push({ path: '/'+this.operConfig})
        } else {
          // if (this.mainTabs[1].name == '值班作业') {// 如果是值班作业，把路由添加进去
          //   this.setIframeLocationObj({
          //     id: '0401',
          //     iframeLocation: this.dayWorkIframeUrl
          //   })
          // }
          this.$router.push({ name: this.tempActive})
        }
      },
      // tabs, 关闭全部
      tabsCloseAllHandle () {
        if (this.tempActive == '首页' && this.mainTabs.length == 1) {
          // console.log('只有首页了，关闭全部功能失效')
          return
        }
        this.mainTabs = [{
          name: '首页',
          title: '首页',
          icon: 'fa fa-home fa-lg',
          id: 0,
          location: ''
        }]
        this.setDelAllIframeLocationObj()
        this.setRemoveAllMainIdStoreTabObj()
        this.setKeepAliveTabs([])
        this.setIframeUrlArr([])
        this.$router.push("/")
        this.mainTabsActiveName = '首页'
      },
      // tabs, 刷新当前
      tabsRefreshCurrentHandle () {
        location.reload()
      }
    },
    watch: {
      mainTabs (currentTabs) {
        // tab没变，但是iframe的路径变了。如果根据tab的变化来渲染iframe行不通
        this.renderTab()
      }
    }
  }
</script>
