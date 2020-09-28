<template>
  <div class="tab-iframe-container">
    <aside-tab v-show="!showIframe" :leftList="leftList"></aside-tab>
<!--    <iframe class="tab-iframe" v-else  :src='"../../../../static/jsp/secframe.html?type="+routerLocation' frameborder="1" style="width:100%;" id="iframeNewTop"></iframe>-->
    <iframe v-for="(item,k) in iframeUrlArr" :id="'iframeNewTop'+k"  :key="k" class="tab-iframe" v-show="item===routerLocation && showIframe" :src='"./jsp/secframe.html?type="+item' frameborder="1" style="width:100%;"></iframe>
    <!-- <iframe src="../dis/jsp/secframe.html" frameborder="0" style="width:0;height:0;opacity:0;" id="iframeNewTop"></iframe> -->
  </div>
</template>

<script>
// src="http://10.217.1.31:9082/workbench/jsp/secframe.jsp?type=010102&url=/eomscch/primenu/initMenu?sheetType=HA-503%26menuID=31001048&urlName=网元接入IP专用承载网申请工单&urlCode=HA-503&external=false#HA-503"
// :src='"../../../../static/jsp/secframe.html?type="+this.routerLocation'
    // 点击主菜单,都跳转至这个组件
    import AsideTab from '@/components/AsideTab/AsideTab'
    import { leftListMixin } from '@/common/js/mixin.js'
    export default {
        data: function () {
          return {
            id: '',
            // lists:[],
          }
        },
        computed: {
          routerId: {
            get: function () {
              return this.$store.state.routerIdData.routerId
            },
            set: function () {}
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
        },
        mixins: [leftListMixin],
        components:{
            AsideTab
        },
        mounted: function () {
          console.log('MainToTab.vue mounted')
          // let listTemp = []
          // for (let key in this.iframeLocationObj) {
          //   listTemp.push(this.iframeLocationObj[k])
          // }
          // this.lists = listTemp
          // let mainTabs = this.$store.state.tab.mainTabs.filter(item => item.name !== '首页')
          // this.lists = mainTabs.map(item => item.location)
        },
        // watch:{
        //   '$store.state.tab.mainTabs': function () {
        //     let mainTabs = this.$store.state.tab.mainTabs.filter(item => item.name !== '首页')
        //     this.lists = mainTabs.map(item => item.location)
        //     console.log(this.lists)
        //   }
        // },
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
   .tab-iframe-container
     height: 100%
     overflow: hidden
   .tab-iframe
     padding-top: 10px
     width: 100% !important
     height: 100% !important
     position: relative !important
     border: none !important
     box-sizing: border-box
</style>
