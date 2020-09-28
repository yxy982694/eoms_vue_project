<template>
  <div class='children-tab'>
    <p class="children-tab-p" v-for="(item,index) in centerList" :key="item.id+index" @click="addTab(item.label,item.location,item.id)">
     <i class="iconfont" :class="iconClass(item.label)"></i>
     <!-- <p class="center-bgimg"></p> -->
     <span class="children-tab-text">{{item.label}}</span>
    </p>
  </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        props: ['centerList'],
        computed: {
          // 获取tab中显示项的id组合
          existTabs: {
            get: function () {
              return this.$store.state.showTab.existTabs
            },
            set: function () {}
          },
          // 获取tab中显示项id,location,label的组合
          editableTabs: { // 保存的是tab中出现标签的整个对象（id,）
            get: function () {
              return this.$store.state.showTab.editableTabs
            },
            set: function () {}
          },
          // 当前显示项的location
          currentTabLabel: {
            get: function () {
              return this.$store.state.showTab.currentTabLabel
            },
            set: function () {}
          },
          // 当前显示项的id
          currentTabId: {
            get: function () {
              return this.$store.state.showTab.currentTabId
            },
            set: function () {}
          },
          // 当前显示项的标题
          currentTitle: {
            get: function () {
              return this.$store.state.showTab.currentTitle
            },
            set: function () {}
          },
          // 根据主菜单id，存储的数据。
          mainIdStoreTabObj: {
            get: function () {
              return this.$store.state.mainIdStoreTab.mainIdStoreTabObj
            },
            set: function () {}
          },
        },
        methods: {
          ...mapMutations({
            'addEditableTabs': 'addEditableTabs',
            'addExistTabs': 'addExistTabs',
            'setCurrentTabLabel': 'setCurrentTabLabel',
            'setCurrentTabId': 'setCurrentTabId',
            'setCurrentTitle': 'setCurrentTitle',
            // 把当前点击项的id对应的数据存储起来。以便在SubTabs.vue中展示
            'setMainIdStoreTabObj': 'setMainIdStoreTabObj'
          }),
          // 为不同工单添加icon图标
          iconClass: function (val) {
            switch (val) {
              case '新建工单':
                return 'icon-tianxiegongdan-kuozhan-hebing'
                break
              case '已派':
                return 'icon-yijiedan'
                break
              case '工单查询':
                return 'icon-chaxun'
                break
              case '工单权限查询':
                return 'icon-chaxun'
                break
              case '已归档':
                return 'icon-guidang'
                break
              case '待归档':
                return 'icon-daiban'
                break
              case '已处理':
                return 'icon-icon-test'
                break
              case '未接工单':
                return 'icon-weijiegongdan'
                break
              case '已接工单':
                return 'icon-yijiedan'
                break
              case '已撤销':
                return 'icon-chexiao1'
                break
              case '草稿箱':
                return 'icon-776bianjiqi_congcaogaoxiangjiazai'
                break
              default:
                return 'icon-daiban'
            }
          },
         // 点击中间平铺按钮时，执行的函数
          addTab(targetLabel,name,id) {
            // console.log(targetLabel+'+'+name+'+'+id)
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
                  // console.log(this.mainIdStoreTabObj)
              }
          },
        },
        mounted() {
          // console.log('CenterMenu.vue mounted')
          // console.log(this.centerList)
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/variable"
  .children-tab
    padding: 3px 3px 15px 3px
    // display: flex
    // flex-wrap: wrap
    // align-content: flex-start
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
    background-color: #FFF
    color: #303133
    height: 100%
    overflow: auto
    box-sizing: border-box
    .children-tab-p
      width: 20%
      float: left
      //width: 12%
      //min-width: 120px
      height: 70px
      text-align: center
      border: 1px solid $color-lightgray
      border-top: none
      border-left: none
      //border-radius: 5px
      cursor: pointer
      box-sizing: border-box
      //margin-left: 2%
      //margin-top: 15px
      position: relative
      // display: flex
      // align-items: center
      .iconfont
        font-size: 40px
        color: #122555
        margin: 0 5px
        position: absolute
        top: 50%
        left: 5px
        transform: translate(0,-50%)
        -ms-transform: translate(0,-50%)
      .center-bgimg
        height: 60px
  .children-tab-p:nth-child(1)
  .children-tab-p:nth-child(2)
  .children-tab-p:nth-child(3)
  .children-tab-p:nth-child(4)
  .children-tab-p:nth-child(5)
    border-top: 1px solid $color-lightgray
  .children-tab-p:nth-child(5n+1)
    border-left: 1px solid $color-lightgray
  .children-tab-text
    display: block
    line-height: 20px
    font-size: $font-size-small
    position: absolute
    top: 50%
    left: 55px
    transform: translate(0,-50%)
    -ms-transform: translate(0,-50%)
    // position:absolute
    // left: 0
    // bottom: 10px
    // width: 100%
    text-align: center
</style>
