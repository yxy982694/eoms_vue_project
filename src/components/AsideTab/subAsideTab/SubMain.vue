<template>
  <!--页面导航-->
  <div class="submain-container"><!-- 让ie9高度自适应用这个属性来实现 -->
    <!-- <iframe v-if="!who" src="#" id="iframe" @load="getIframeData" frameborder="0" style="width:100%;"></iframe> -->
    <keep-alive :include="keepAliveTabs">
      <component :is="who"></component>
    </keep-alive>
  </div>
</template>
<script>
    import axios from "axios"
    export default {
        components: {
          PersonalTabProcessSheet: () => import(/* webpackChunkName: "PersonalTabProcessSheet" */ '@/views/Complaint/PersonalTab/ProcessSheet'),
          PersonalTabQualityTest: () => import(/* webpackChunkName: "PersonalTabQualityTest" */ '@/views/Complaint/PersonalTab/QualityTest'),
          PersonalTabSuperviseWarehouse: () => import(/* webpackChunkName: "PersonalTabSuperviseWarehouse" */ '@/views/Complaint/PersonalTab/SuperviseWarehouse'),
          DutyMngTabDutySearch: () => import(/* webpackChunkName: "DutyMngTabDutySearch" */ '@/views/DutyManager/DutyMngTab/DutySearch'),
          ConfigManageTabOrganizateManage: () => import(/* webpackChunkName: "ConfigManageTabOrganizateManage" */ '@/views/SysManage/OperProcess/ConfigManageTab/OrganizateManage'),
          SubAsideTabLeftMenu: () => import(/* webpackChunkName: "SubAsideTabLeftMenu" */ '@/components/AsideTab/SubAsideTab/LeftMenu'),
          ConfigManageTabPositionManage: () => import(/* webpackChunkName: "ConfigManageTabPositionManage" */ '@/views/SysManage/OperProcess/ConfigManageTab/PositionManage'),
          ConfigManageTabRoleManage: () => import(/* webpackChunkName: "ConfigManageTabRoleManage" */ '@/views/SysManage/OperProcess/ConfigManageTab/RoleManage'),
          ConfigManageTabResourceManage: () => import(/* webpackChunkName: "ConfigManageTabResourceManage" */ '@/views/SysManage/OperProcess/ConfigManageTab/ResourceManage'),
          ConfigManageTabUserManage: () => import(/* webpackChunkName: "ConfigManageTabUserManage" */ '@/views/SysManage/OperProcess/ConfigManageTab/UserManage'),
          ConfigManageTabDicManage: () => import(/* webpackChunkName: "ConfigManageTabDicManage" */ '@/views/SysManage/OperProcess/ConfigManageTab/DicManage'),
          SubAsideTabMainPage: () => import(/* webpackChunkName: "SubAsideTabMainPage" */ '@/components/AsideTab/SubAsideTab/MainPage'),
          LatestNewsTabLatestNewsTab: () => import(/* webpackChunkName: "LatestNewsTabLatestNewsTab" */ '@/views/Intro/LatestNewsTab/LatestNewsTab'),
          LatestNewsTabLatestNewsAll: () => import(/* webpackChunkName: "LatestNewsTabLatestNewsAll" */ '@/views/Intro/LatestNewsTab/LatestNewsAll'),
          InformationTabNewInformation: () => import(/* webpackChunkName: "InformationTabNewInformation" */ '@/views/OperationManage/PublicService/InformationTab/NewInformation'),
          WarnManageTabWarnManage: () => import(/* webpackChunkName: "WarnManageTabWarnManage" */ '@/views/OperationManage/PublicService/WarnManageTab/WarnManage'),
          WarnManageTabTemplateManage: () => import(/* webpackChunkName: "WarnManageTabTemplateManage" */ '@/views/OperationManage/PublicService/WarnManageTab/TemplateManage'),
        //   PersonalTabProcessSheet: resolve => require(['@/views/Complaint/PersonalTab/ProcessSheet'], resolve),
        //   PersonalTabQualityTest: resolve => require(['@/views/Complaint/PersonalTab/QualityTest'], resolve),
        //   PersonalTabSuperviseWarehouse: resolve => require(['@/views/Complaint/PersonalTab/SuperviseWarehouse'], resolve),
        //   DutyMngTabDutySearch: resolve => require(['@/views/DutyManager/DutyMngTab/DutySearch'], resolve),
        //   ConfigManageTabOrganizateManage: resolve => require(['@/views/SysManage/OperProcess/ConfigManageTab/OrganizateManage'], resolve),
		      // SubAsideTabLeftMenu: resolve => require(['@/components/AsideTab/SubAsideTab/LeftMenu'], resolve),
        //   ConfigManageTabPositionManage: resolve => require(['@/views/SysManage/OperProcess/ConfigManageTab/PositionManage'], resolve),
        //   ConfigManageTabRoleManage: resolve => require(['@/views/SysManage/OperProcess/ConfigManageTab/RoleManage'], resolve),
        //   ConfigManageTabResourceManage: resolve => require(['@/views/SysManage/OperProcess/ConfigManageTab/ResourceManage'], resolve),
        //   ConfigManageTabUserManage: resolve => require(['@/views/SysManage/OperProcess/ConfigManageTab/UserManage'], resolve),
        //   ConfigManageTabDicManage: resolve => require(['@/views/SysManage/OperProcess/ConfigManageTab/DicManage'], resolve),
        //   SubAsideTabMainPage: resolve => require(['@/components/AsideTab/SubAsideTab/MainPage'], resolve),
        //   LatestNewsTabLatestNewsTab: resolve => require(['@/views/Intro/LatestNewsTab/LatestNewsTab'], resolve),
        //   LatestNewsTabLatestNewsAll: resolve => require(['@/views/Intro/LatestNewsTab/LatestNewsAll'], resolve),
        //   InformationTabNewInformation: resolve => require(['@/views/OperationManage/PublicService/InformationTab/NewInformation'], resolve),
        //   WarnManageTabWarnManage: resolve => require(['@/views/OperationManage/PublicService/WarnManageTab/WarnManage'], resolve),
        //   WarnManageTabTemplateManage: resolve => require(['@/views/OperationManage/PublicService/WarnManageTab/TemplateManage'], resolve),
        },
        props: ['who'],
        computed: {
          keepAliveTabs: { // 当前显示tab的id
            get: function () {
              return this.$store.state.keepAliveTabs.keepAliveTabs
            },
            set: function () {}
          },
        },
        // watch: {
          // currentTabId: function () {
            // console.log('9090--------------')
            //console.log(this.iframeUrl)
            // this.getIframeData()
          // }
        // },
        mounted: function () {
          // console.log('SubMain.vue mounted -------------')
          //console.log(this.iframeUrl)
          // this.getIframeData()
        },
        // methods: {
        //   getIframeData: function () {
        //     var _this = this
        //     this.$nextTick(function () {
        //       let iframe = document.getElementById('iframe')
        //       if (iframe) {
        //         // console.log('iframe存在')
        //         axios({
        //           // url: '../../../../static/xinjiangongdan.html',
        //           url: _this.iframeUrl,
        //           method: 'get',
        //           responseType: 'text'
        //         }).then(function (data) {
        //           // console.log('iframe sucess')
        //           let iframe = document.getElementById('iframe')
        //           let _iframe = iframe.contentWindow
        //           let _iframeContent = _iframe.document.getElementById('qiantao')
        //           _iframeContent.innerHTML = data.data
        //           _iframe.loadJavaScript()
        //         }).catch(function (data) {
        //           // console.log('catch data')
        //         })
        //       }
        //     })
        //   }
        // }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .submain-container
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    overflow: hidden
	iframe
	  height: 100% !important
	  overflow: hidden
  .el-collapse
    border: 1px solid #EBEEF5 !important
    border-bottom-width: 10px!important
  .board-item
    cursor: pointer
    margin: 6px 0px 10px 2px
    display: block
  .board-item li
    float: left
    width: 20%
    border: 1px solid #e9e9e9
    margin: -1px 0 0 -2px
    position: relative
    background: #fff
    list-style-type:none
    height: 70px
    text-align: center
    line-height: 70px
  a
    color: #1296db

</style>
