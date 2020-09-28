<template>
  <div class="menuRoot">
    <el-submenu v-if="menu.children && menu.children.length >= 1" :index="'' + menu.id">
      <template slot="title">
        <span slot="title" class="root-title">{{menu.nameCn}}</span>
      </template>
      <MenuTree v-for="item in menu.children" :key="item.id" :menu="item"></MenuTree>
    </el-submenu>
    <el-menu-item v-else :index="'' + menu.id" @click="handleRoute(menu)">
      <span slot="title" class="root-maintitle">{{menu.nameCn}}</span>
    </el-menu-item>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { getIFrameUrl, getIFramePath } from '@/utils/iframe'
  import Cookies from "js-cookie"
  export default {
    name: 'MenuTree',
    props: {
      menu: {
        type: Object,
        required: true
      }
    },
    computed: {
      routerObj: {
        get: function () {
          return this.$store.state.routerIdData.routerObj
        },
        set: function () {}
      },
      userName: {
        get () { return this.$store.state.menu.userName },
        set () { }
      },
      iframeLocationObj: {
        get () { return this.$store.state.menu.iframeLocationObj },
        set () { }
      },
      menuFlag: {
        get () { return this.$store.state.menu.menuFlag },
        set () { }
      }
    },
    // watch: {
    //   menuFlag: function () {
    //     if (this.menuFlag) {
    //       this.loadWidth()
    //     }
    //   }
    // },
    methods: {
      ...mapMutations({
        'setRouterObj': 'setRouterObj',
        'setRouterId': 'setRouterId',
        'setRouterLocation': 'setRouterLocation',
        'setShowIframe': 'setShowIframe',
        'setIframeLocationObj': 'setIframeLocationObj',
        'setOperConfig': 'setOperConfig',
        'setIframeUrlArr': 'setIframeUrlArr',
        'setLocationIndex': 'setLocationIndex',
        'setMenuFlag': 'setMenuFlag',
        // 'setDayWorkIframeUrl': 'setDayWorkIframeUrl',
      }),
      loadWidth: function () {
        if (this.menuFlag) {
          this.$nextTick(function () {
            let menuArr = document.querySelectorAll('.el-menu-demo>.menuRoot')
            if (menuArr.length == 8) {
              Array.prototype.forEach.call(menuArr,function (item) {
                item.style.width = '12.5%'
              })
            } else if (menuArr.length == 7) {
              Array.prototype.forEach.call(menuArr,function (item) {
                item.style.width = '14.285%'
              })
            } else if (menuArr.length == 6) {
              Array.prototype.forEach.call(menuArr,function (item) {
                item.style.width = '16.66%'
              })
            } else if (menuArr.length == 5) {
              Array.prototype.forEach.call(menuArr,function (item) {
                item.style.width = '20%'
              })
            } else if (menuArr.length == 4) {
              Array.prototype.forEach.call(menuArr,function (item) {
                item.style.width = '25%'
              })
            } else if (menuArr.length == 3) {
              Array.prototype.forEach.call(menuArr,function (item) {
                item.style.width = '33.33%'
              })
            } else if (menuArr.length == 2) {
              Array.prototype.forEach.call(menuArr,function (item) {
                item.style.width = '50%'
              })
            } else if (menuArr.length == 1) {
              Array.prototype.forEach.call(menuArr,function (item) {
                item.style.width = '100%'
              })
            }
          })
          this.setMenuFlag(false)
        }
      },
      handleRoute (menu) {
        if (menu.menuType == '0702') {
          // http://10.217.1.11:9080/cms/clientMain.do?op=main
          window.open(menu.location+this.userName,'_blank')
          return
        } else if (menu.menuType == '0807') {
          // window.open(menu.location+this.userName,'_blank')
          return
        }else if (menu.menuType == '100010502'){
          let tokenCookie = Cookies.get('sessionUserToken')
          window.open(menu.location+'?sessionUserToken='+tokenCookie,'_blank')
          return
        } else if (menu.menuType == '0813') {
          window.open('http://10.217.2.41:9081/jt/rd/gotojt?account=zhaodanping_gpm_24088370','_blank')
          return
        } else if (menu.menuType == '0810') {
          window.open('http://10.87.61.43/eoms_rp/','_blank')
          return
        }
        if (menu.menuFlag == '0') { // 跳转至老系统
          if (menu.nameCn == '配置与管理') { // 处理"配置与管理"同名tab切换问题
            this.setOperConfig(menu.menuType)
          }
          // if (menu.menuType == '0401') { // 针对切换值班作业，保存url
          //   this.setDayWorkIframeUrl(menu.menuType)
          // }
          this.setShowIframe(true)
          if (menu.menuType == '0808') {
            // let sysLoction = encodeURI('0808&url=/workbench/sysnotice?type=0808&urlName=系统公告&urlCode=demo_page9&external=false#demo_page9')
            let sysLoction = '0808&url=/workbench/sysnotice?type=0808&urlName='+encodeURI('系统公告')+'&urlCode=demo_page9&external=false#demo_page9'
            this.setRouterLocation(sysLoction)
            this.setIframeLocationObj({
              id: menu.menuType,
              iframeLocation: sysLoction
            })
          } else {
            this.setRouterLocation(menu.menuType)
            this.setIframeLocationObj({
              id: menu.menuType,
              iframeLocation: menu.menuType
            })
          }
          // 点击navMenu时,路径已经存在的情况
          if (this.$route.path == '/'+menu.menuType) {
            // console.log('909090______')
            this.setRouterId(menu.id)
            sessionStorage.setItem('id', menu.id)
            let locationArr = []
            for (let key in this.iframeLocationObj) {
              locationArr.push(this.iframeLocationObj[key])
            }
            this.setIframeUrlArr(locationArr)
            sessionStorage.setItem('iframeLocation',menu.menuType)
            this.setLocationIndex(locationArr.indexOf(menu.menuType))
          } else {
            this.$router.push({
              path: "/" + menu.menuType
            })
          }
          return

        } else if(menu.menuFlag == '1') { // 跳转至新系统
          if (menu.nameCn == '配置与管理') { // 处理"配置与管理"同名tab切换问题
            this.setOperConfig(menu.location)
          }
          this.setShowIframe(false)
        }
        this.$api.menu.resourceManage(menu.id).then((res) => {
          this.setRouterObj({
            id: menu.id,
            arr: res
          })
          this.setRouterId(menu.id)
          let path = getIFramePath(menu.location)
          sessionStorage.setItem('id', menu.id)
          if(!path) {
            path = menu.location
          }
          this.$router.push({
            path: "/" + path
          })
        })
      }
    },
    mounted: function () {
      if (navigator.userAgent.indexOf("MSIE 9.0")>0) {
        this.loadWidth()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"
  .root-title
    width: 100%
    display: inline-block
  .root-maintitle
    min-width: 85px
    display: inline-block
</style>
