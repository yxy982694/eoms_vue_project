<template>
  <div class="left-right-container">
    <el-container class="el-con" id="leftRightCon">
      <div class="left-aside-container">
        <div class="aside-scroll">
          <el-aside width="180px">
            <div v-for="v in leftList" :key="v.id" class="text-item" @click="addSubTab(v.label,v.location,v.id)">
              <p class="aside-title">
                <span class="fa fa-file-text"></span>
                <span>{{ v.label }}</span>
              </p>
            </div>
          </el-aside>
        </div>
        <div class="left-right-splitbar" ref="leftRightSplitbar"></div>
      </div>
      <el-container class="el-con2">
        <el-main>
          <sub-tabs ref="subTabs"></sub-tabs>
        </el-main>
      </el-container>
    </el-container>
    <div class="footer-container">
      <p class="foot-info">
        <span>版权所有:中国移动通信集团河南有限公司</span>
        <span class="info-text">技术支持:杭州东方通信软件技术有限公司</span>
        <span class="info-text">服务热线:15936252150</span>
        <span class="info-text">建议系统分辨率设置为1280*1024或更高</span>
      </p>
    </div>
  </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import '@/common/stylus/childrenTab.styl'
    import SubTabs from "./SubAsideTab/SubTabs"
    import axios from "axios"
    import $ from 'jquery'
    export default {
        components:{
            SubTabs
        },
        props: ['leftList'],
        mounted: function () {
          // this.newSystemPage()
        },
        methods: {
            ...mapMutations({
              'setCenterMenuId': 'setCenterMenuId',
              'setCurrentTabId': 'setCurrentTabId',
            }),
            // newSystemPage: function () {
            //   axios.get('../../../static/newSystem/newSystemPage.html')
            //   .then(function (res) {
            //     // $('#leftRightCon').html(res.data)
            //   })
            // },
            // 点击左菜单时执行的函数
            addSubTab(targetName,name,id){
              // 点击左侧导航时,获取所点击按钮的id
              this.setCurrentTabId(id)
              // 并把id传到对应的中间部分切换tab的导航中
              // 为了后期在点击切换tab导航时，根据id找到对应平铺按钮的数据
              this.$refs.subTabs.addTab(targetName,name,id)
            },
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"
  .left-right-container
    padding: 10px 0 0 0
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%
    overflow: hidden
    box-sizing: border-box
  .el-con
    flex: 1
    overflow: hidden
    position: relative
  .left-aside-container
    width: 180px
    margin-left: 8px
    border: 1px solid $color-border-tab
    border-right: none
    position: absolute
    left: 0
    top: 0
    height: 100%
    z-index: 899
    background-color: #fff
  .aside-scroll
    font-size: 14px
    height: 100%
    // position: fixed
    // top: 125px
    // left: 5px
    // bottom: 48px
    overflow-x: hidden
    overflow-y: auto
    // overflow: auto
    &::-webkit-scrollbar
      width: 6px
      height: 6px
      background: transparent
    &::-webkit-scrollbar-thumb
      background: transparent
      border-radius: 4px
    &:hover::-webkit-scrollbar-thumb
      background: hsla(0, 0%, 53%, 0.4)
    &:hover::-webkit-scrollbar-track
      background: hsla(0, 0%, 53%, 0.1)
  .aside-title
    cursor: pointer
    color: #333
    font-size: $font-size-small !important
    // color: rgb(191, 203, 217)
    border-bottom: 1px solid #2d6f7c
    height: 46px
    line-height: 17px
    text-align: left
    position: relative
    .fa
      color: #5241e0
      position: absolute
      top: 50%
      left: 15px
      transform: translate(0,-50%)
      -ms-transform: translate(0,-50%)
      &+span
       position: absolute
       top: 50%
       left: 30px
       right: 15px
       transform: translate(0,-50%)
       -ms-transform: translate(0,-50%)
       // margin: 0 5px
  .el-con .el-main
    background-color: #fff
    color: #333
    text-align: center
    overflow: hidden
  .left-right-splitbar
    position: absolute
    top: 0
    bottom: 0
    right: -4px
    width: 5px
    z-index: 9999
  .el-con2
    height: 100%
    overflow: hidden
    position: relative
    float: left
    width: 100%
    padding-left: 190px
    box-sizing: border-box
    display: block
  .footer-container
    background-color: #d5dee6
    margin-top: 10px
    // @media screen and (min-height: 1320px)
    //   position: absolute
    //   bottom: 0
    //   left: 0
    //   width: 100%
  .foot-info
    font-size: $font-size-small
    padding: 8px 0
    color: #6c7382
  .info-text
    margin-left: 40px
</style>
