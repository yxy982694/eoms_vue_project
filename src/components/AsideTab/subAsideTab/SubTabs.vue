<template>
  <!--字标签-->
  <el-tabs :closable="true" class="el-tabs-container" v-model="currentTabId" type="card" @tab-remove="removeTab" @tab-click="tabClick">
    <div v-show="contextMenuFlag" class="tab-down-menu" :style="{position: 'absolute',top: '0px',left: childContextLeft}">
      <p @click="closeCurrentHandle">关闭</p>
      <p @click="closeOtherHandle">关闭其它</p>
      <p @click="closeAllHandle">关闭全部</p>
      <p @click="refreshCurrentHandle">刷新</p>
    </div>
    <el-tab-pane v-for="(item,index) in editableTabs" :key="item.id+index" :label="item.label" :name="item.id">
    </el-tab-pane>
    <sub-main :who="who"></sub-main>  <!-- :iframeUrl="iframeUrl" -->
  </el-tabs>
</template>

<script>
    // 根据左边菜单和中间平铺菜单中id,决定是否显示  :name="item.id"
    // v-model="currentTabId" 为哪个tab的id则显示哪个tab
    // tab显示的内容则根据tab中对应的url来渲染
    import SubMain from "./SubMain"
    import { mapMutations } from 'vuex'
    import commonFun from '@/common/js/commonFun.js'
    export default {
        data: function () {
          return {
            who: '',// 显示哪个tab的内容 根据url路径
            // iframeUrl: '', // 显示含有http的iframe
            // locationUrl: '', //
            shortcutId: null, // 点击右键时，当时tab的id
            tabObj: null, // 临时保存根据主菜单id存的数据
          }
        },
        components: { SubMain },
        computed: {
          routerId: {
            get: function () {
              return this.$store.state.routerIdData.routerId
            },
            set: function () {}
          },
          contextMenuFlag: { // 点击右键，显示右键菜单
            get: function () {
              return this.$store.state.contextMenu.contextMenuFlag
            },
            set: function () {}
          },
          clickedSwitch: { // 点击右键，保存当时tab的路径
            get: function () {
              return this.$store.state.contextMenu.clickedSwitch
            },
            set: function () {}
          },
          clickedLabel: { // 点击右键，保存当时tab的标题
            get: function () {
              return this.$store.state.contextMenu.clickedLabel
            },
            set: function () {}
          },
          childContextLeft: { // 点击右键，保存点击时，鼠标left值
            get: function () {
              return this.$store.state.contextMenu.childContextLeft
            },
            set: function () {}
          },
          editableTabs: { // 保存的是tab中出现的标签,整个对象（id,location,label）
            get: function () {
              return this.$store.state.showTab.editableTabs
            },
            set: function () {}
          },
          existTabs: { // 保存的tab中出现标签的id
            get: function () {
              return this.$store.state.showTab.existTabs
            },
            set: function () {}
          },
          currentTabLabel: { // 当前显示tab的location
            get: function () {
              return this.$store.state.showTab.currentTabLabel
            },
            set: function () {}
          },
          currentTabId: { // 当前显示tab的id
            get: function () {
              return this.$store.state.showTab.currentTabId
            },
            set: function () {}
          },
          currentTitle: { // 当前显示tab的标题
            get: function () {
              return this.$store.state.showTab.currentTitle
            },
            set: function () {}
          },
          mainIdStoreTabObj: { // 根据主菜单id存的数据
            get: function () {
              return this.$store.state.mainIdStoreTab.mainIdStoreTabObj
            },
            set: function () {}
          },
          keepAliveTabs: {
            get: function () {
              return this.$store.state.keepAliveTabs.keepAliveTabs
            },
            set: function () {}
          },
        },
        mounted: function () {
          if (navigator.userAgent.indexOf("MSIE 9.0")>0) {
          	commonFun.resizeHeight()
            let timeKey
          	window.onresize = function(){
              if (timeKey) {
                clearTimeout(timeKey)
                timeKey = null
              }
              timeKey = setTimeout(function () {
                commonFun.resizeHeight()
              },100)
          	}
          }
          this.initData()
          var _this = this
          window.addEventListener('click',function () {
            _this.setContextMenuFlag(false)
          })
        },
        watch: {
          routerId: function () {
            console.log(this.mainIdStoreTabObj)
            this.initData()
          },
          editableTabs: function () { // 当tab变化时，执行右键功能
            if (this.editableTabs.length == 1) { // 当只剩下我的主页时，不执行右键功能
              return
            }
            this.bindShortcut()
          },
          currentTabId: { // 当tab中的id变化时，进行组件跳转，显示不同组件的内容
            handler: function () {
              if (this.currentTabLabel) {
                this.who = this.formArr(this.currentTabLabel)
                if (this.keepAliveTabs.indexOf(this.who) == -1) {
                  let temArr = this.keepAliveTabs.concat()
                  temArr.push(this.who)
                  this.setKeepAliveTabs(temArr)
                }
              }
            },
            immediate: true
          }
        },
        methods: {
          formArr: function (arr) {
            let array = arr.split('/')
            return array[array.length-2]+array[array.length-1]
          },
            // 右键
            bindShortcut: function () {
              let _this = this
              this.$nextTick(function () {
                setTimeout(function () {
                  let domTabs = document.querySelectorAll('.el-container .el-tabs__item')
                  if (document.querySelector('.el-container .el-tabs__item .el-icon-close')) {
                    document.querySelector('.el-container .el-tabs__item .el-icon-close').style.display = 'none'
                  }
                  let domCloses = document.querySelectorAll('.el-icon-close')
                  Array.prototype.forEach.call(domCloses,function (item) { // 点击小叉号时，隐藏右键菜单
                    item.onclick = null
                    item.onclick = function () {
                      _this.setContextMenuFlag(false)
                    }
                  })
                  Array.prototype.forEach.call(domTabs,function(item,index){ // 右键功能
                    item.oncontextmenu = null
                    item.oncontextmenu = function (e) {
                      e.stopPropagation()
                      e.preventDefault()
                      //console.log(item)
                      _this.setContextMenuFlag(true)
                      // let array = item.id.split('/')
                      let x = e.clientX - 180
                      _this.shortcutId = item.id.slice(4) // 点击右键时，该tab的id
                      for (let i=0;i<_this.editableTabs.length;i++) {
                        if (_this.editableTabs[i].id == _this.shortcutId) {
                          _this.setSwitch(_this.editableTabs[i].name) // 设置此时右键时的location
                        }
                      }
                      // console.log(_this.shortcutId)
                      // console.log(_this.clickedSwitch)
                      _this.setSwitchLabel(item.childNodes[0].data) // 设置此时右键时的标题
                      _this.setChildContextLeft(x+'px') // 右键时，鼠标位置
                      if (document.querySelector('.main-tabs .el-tabs__content')) {
                        document.querySelector('.main-tabs .el-tabs__content').style.display = 'none'
                      }
                    }
                  })
                },500)
              })
            },
            ...mapMutations({
              'setContextMenuFlag': 'setContextMenuFlag',
              'setEditableTabs': 'setEditableTabs',
              'setExistTabs': 'setExistTabs',
              'addEditableTabs': 'addEditableTabs',
              'addExistTabs': 'addExistTabs',
              'setCurrentTabLabel': 'setCurrentTabLabel',
              'setCurrentTabId': 'setCurrentTabId',
              'setCurrentTitle': 'setCurrentTitle',
              'setSwitch': 'setSwitch',
              'setSwitchLabel': 'setSwitchLabel',
              'setChildContextLeft': 'setChildContextLeft',
              'setMainIdStoreTabObj': 'setMainIdStoreTabObj',
              'setWarnComponentWho': 'setWarnComponentWho',
              'setDelKeepAliveTabs': 'setDelKeepAliveTabs',
              'setKeepAliveTabs': 'setKeepAliveTabs',
            }),
            //右键时，关闭当前tab
            closeCurrentHandle: function () {
              // console.log(this.shortcutId)
              // console.log(this.clickedSwitch)
              this.removeTab(this.shortcutId)
            },
            // 右键时，关闭其他tab
            closeOtherHandle: function () {
              // console.log(this.shortcutId)
              if (this.shortcutId != '0') { // 当右键不在“我的主页”时。只显示“我的主页”和右键的tab
                // 删除非右键的全部tab
                for (let i=0;i<this.editableTabs.length;i++) {
                  if (this.clickedSwitch != this.editableTabs[i].name) {
                    this.setDelKeepAliveTabs(this.formArr(this.editableTabs[i].name))
                  }
                }
                this.setEditableTabs([{
                  label: '我的主页',
                  name: '/SubAsideTab/MainPage',
                  id: '0'
                },{
                    label: this.clickedLabel,
                    name: this.clickedSwitch,
                    id: this.shortcutId
                }])

                if (this.shortcutId != 'A6B109B6FC8B748FE0532201D90A8442') {
                  this.setWarnComponentWho('TemplateManageHome')
                }
                this.setExistTabs(['0',this.shortcutId])
                this.setCurrentTabLabel(this.clickedSwitch)
                this.setCurrentTitle(this.clickedLabel)
                this.setCurrentTabId(this.shortcutId)
                this.setMainIdStoreTabObj({
                  id: sessionStorage.getItem('id'), // 主菜单id，用于保存整个对象（在store中）
                  editableTabs: this.editableTabs, // 当前出现的tab的对象列表
                  existTabs: this.existTabs, // 当前出现的tab的id列表
                  currentTabLabel: this.currentTabLabel,// 当前显示tab的location
                  currentTitle: this.currentTitle, // 当前显示tab的标题
                  currentTabId: this.shortcutId, // 当前显示tab的id
                })
              } else { // 当右键在“我的主页”时，只显示“我的主页”
                this.showHome()
              }
              // this.existTabs = ['/SubAsideTab/MainPage',this.clickedSwitch]
            },
            closeAllHandle: function () { // 关闭全部时，只显示“我的主页”
              // 删除tab上的全部path
              for (let i=0;i<this.editableTabs.length;i++) {
                this.setDelKeepAliveTabs(this.formArr(this.editableTabs[i].name))
              }
              this.showHome()
            },
            showHome: function () {
              this.setCurrentTabLabel('/SubAsideTab/MainPage')
              this.setEditableTabs([{
                  label: '我的主页',
                  name: '/SubAsideTab/MainPage',
                  id: '0'
              }])
              this.setExistTabs(['0'])
              this.setCurrentTitle('我的主页')
              this.setCurrentTabId('0')
              this.setMainIdStoreTabObj({
                id: sessionStorage.getItem('id'),
                editableTabs: this.editableTabs,
                existTabs: this.existTabs,
                currentTabLabel: this.currentTabLabel,
                currentTitle: this.currentTitle,
                currentTabId: this.currentTabId
              })
            },
            // 刷新时
            refreshCurrentHandle: function () {
              window.location.reload()
            },
            // 初始化，进入页面时
            initData: function () {
              this.tabObj = this.mainIdStoreTabObj[sessionStorage.getItem('id')]
              //console.log(this.tabObj)
              //console.log(sessionStorage.getItem('id'))
                if (this.tabObj) { // 先使用store中的数据
                  this.setCurrentTabLabel(this.tabObj.currentTabLabel)
                  this.setEditableTabs(this.tabObj.editableTabs)
                  this.setExistTabs(this.tabObj.existTabs)
                  this.setCurrentTitle(this.tabObj.currentTitle)
                  this.setCurrentTabId(this.tabObj.currentTabId)
                } else { // 如果store中没有数据，也就是首次进入时，只显示“我的主页”
                this.showHome()
                // console.log(this.mainIdStoreTabObj)
              }
            },
            // 点击左侧菜单或者中间菜单时，添加
            addTab(targetLabel,name,id) {
              //console.log(targetLabel+'+'+name+'+'+id)
              this.setCurrentTabLabel(name)
              this.setCurrentTitle(targetLabel)
              this.setCurrentTabId(id)
              if(!this.existTabs.includes(id)){
                  this.addEditableTabs({
                      label: targetLabel,
                      name: name,
                      id: id
                  })
                  this.addExistTabs(id)
                  this.setMainIdStoreTabObj({
                    id: sessionStorage.getItem('id'),
                    editableTabs: this.editableTabs,
                    existTabs: this.existTabs,
                    currentTabLabel: this.currentTabLabel,
                    currentTitle: this.currentTitle,
                    currentTabId: this.currentTabId
                  })
                  //console.log(sessionStorage.getItem('id'))
                 // console.log(this.mainIdStoreTabObj)
              }
              //console.log(this.currentTabId)
              // console.log(this.existTabs)
              // console.log(this.editableTabs)
            },
            // 点击右键的关闭或tab的小叉号时，移除功能
            removeTab(targetId) {
                if (targetId == '0') {
                  this.$alert('主页不可关闭')
                  return
                }
                // 删除掉关闭的tab，不再使用缓存
                for (let i=0;i<this.editableTabs.length;i++) {
                  if (targetId == this.editableTabs[i].id) {
                    let tempArr = this.keepAliveTabs.filter(item => item !== this.formArr(this.editableTabs[i].name))
                    this.setKeepAliveTabs(tempArr)
                    break
                  }
                }
                console.log(this.keepAliveTabs)
                if (targetId == 'A6B109B6FC8B748FE0532201D90A8442') {// 模板管理
                  this.setWarnComponentWho('TemplateManageHome')
                }
                let tabs = this.editableTabs
                let existabs = this.existTabs
                let activeName = this.currentTabLabel
                let activeId = this.currentTabId
                if (activeId === targetId) {
                    tabs.forEach((tab, index) => {
                        if (tab.id === targetId) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name
                                this.setCurrentTitle(nextTab.label)
                                this.setCurrentTabId(nextTab.id)
                            }
                        }
                    })
                }
                existabs.splice(existabs.indexOf(targetId),1)
                this.setExistTabs(existabs)
                this.setCurrentTabLabel(activeName)
                let remainTabs = tabs.filter(tab => tab.id !== targetId)
                this.setEditableTabs(remainTabs)
                this.setMainIdStoreTabObj({
                  id: sessionStorage.getItem('id'),
                  editableTabs: this.editableTabs,
                  existTabs: this.existTabs,
                  currentTabLabel: this.currentTabLabel,
                  currentTitle: this.currentTitle,
                  currentTabId: this.currentTabId
                })
            },
            // 点击tab本身时
            tabClick(objectTab) {
              // this.currentTabLabel = objectTab.name
              // console.log(objectTab)
              //console.log(this.editableTabs)
              //console.log(objectTab)
              // 点击tab切换导航时，对应id相应的数据
              for (var i=0;i<this.editableTabs.length;i++) {
                if (this.editableTabs[i].label == objectTab.label) {
                  let id = this.editableTabs[i].id
                  // this.setCenterMenuId(id)
                  this.setCurrentTabId(id)
                  //console.log(this.currentTabId)
                  this.setCurrentTabLabel(this.editableTabs[i].name)
                  //console.log(this.editableTabs[i].name)
                  break
                }
              }
              this.setCurrentTitle(objectTab.label)
              this.setMainIdStoreTabObj({
                id: sessionStorage.getItem('id'),
                editableTabs: this.editableTabs,
                existTabs: this.existTabs,
                currentTabLabel: this.currentTabLabel,
                currentTitle: this.currentTitle,
                currentTabId: this.currentTabId
              })
              //console.log(this.existTabs)
              //console.log(this.editableTabs)
            }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable"
  @import "../../../common/stylus/mixin"
  .el-con .el-tabs
    height: 100%
    display: flex
    flex-direction: column
    justity-content: space-between
    overflow: hidden
  .el-con .el-tabs__content
     flex: 1
  .drop-down-container
    border: 1px solid $color-lightgra
    top: 175px !important
  .shortcut-container
    position: relative
    width: 50px
    height: 50px
    border: 1px solid purple
  .tab-shortcut
    height: 50px
    text-align:center
    line-height:50px
    border: 1px solid red
  .shoutcut-text
    display:none
    border: 1px solid green
    width: 100px
    line-height:30px
    position:absolute
    z-index: 9999
</style>
