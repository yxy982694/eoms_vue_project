<template>
  <div class="header-container">
    <div class="headbar">
      <!-- 导航收缩 -->
        <div class="header-left">
          <h1><img class="header-logo-img" src="../../common/image/ChinaMobile.png" ></h1>
          <h3 id="iframeNewTop" :class="'iframeindex'+locationIndex">河南移动集中运维管理系统</h3>
          <div class="header-center">
            <p class="header-center-bg1"></p>
            <p class="header-center-bg2"></p>
            <p class="header-center-bg3"></p>
          </div>
          <div class="header-left-icon" @click.stop="clickIcon">
            <span class="iconfont icon-zhankai" v-if="flagIcon"></span>
            <span class="iconfont icon-chahao" v-else></span>
          </div>
        </div>
        <div class="header-right">
          <div class="header-business">

            <!-- <p class="header-business-item">
              <i class="iconfont icon-xiaoxi"></i>
              <span>消息</span>
            </p> -->


            <p class="header-business-item" @click="exitSys">
              <i class="iconfont icon-tuichu"></i>
              <span>退出</span>
            </p>
            <p class="header-business-item" @mouseover="showDownloadapk($event,1)" @mouseleave="showDownloadapk($event,0)"  @click="downloadApk">
              <i class="iconfont icon-shouji"></i>
              <span style="position: relative">掌上运维客户端</span>
            </p>
            <p class="header-business-item" @click="enterOld">
              <i class="iconfont icon-icon_rukou"></i>
              <span>旧版入口</span>
            </p>
            <p class="header-business-item user-name" :title="userName+' 欢迎您'">{{userName}} 欢迎您</p>
          </div>

          <div class="navbar">
            <el-menu ref="navmenu" mode="horizontal" default-active="1" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'" class="el-menu-demo" background-color="transparent"
                       :collapse="collapse" :collapse-transition="true" :unique-opened="true" text-color="#fff" active-text-color="#fff"
                       @open="handleopen" @close="handleclose" @select="handleselect">
              <menu-tree v-for="item in navTree" :key="item.id" :menu="item"></menu-tree>
            </el-menu>
          </div>
        </div>
    </div>
    <div class="header-right-min" v-show="showMin">
      <div class="header-business-min">
        <p class="header-business-item-min user-name" :title="userName+' 欢迎您'">{{userName}} 欢迎您</p>
        <!-- <p class="header-business-item-min">
          <i class="iconfont icon-xiaoxi"></i>
          <span>消息</span>
        </p> -->
        <p class="header-business-item-min" @click="enterOld">
          <i class="iconfont icon-icon_rukou"></i>
          <span>旧版入口</span>
        </p>
        <p class="header-business-item-min" @mouseover="showDownloadapk">
          <i class="iconfont icon-shouji"></i>
          <span>掌上运维客户端</span>
          <img class="phone-img" src="../../common/image/apk_qr_code.png"/>
        </p>
        <p class="header-business-item-min" @click="exitSys">
          <i class="iconfont icon-tuichu"></i>
          <span>退出</span>
        </p>
      </div>
      <div class="min-fenge"></div>
      <div class="navbar-min">
        <el-menu ref="navmenu" mode="horizontal" default-active="1" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'" class="el-menu-demo-min" background-color="transparent"
                   :collapse="collapse" :collapse-transition="true" :unique-opened="true" text-color="#fff" active-text-color="#fff"
                   @open="handleopen" @close="handleclose" @select="handleselect">
          <menu-tree v-for="item in navTree" :key="item.id" :menu="item"></menu-tree>
        </el-menu>
      </div>
    </div>
    <img id="apk_img" :class="isActive===1?'apk-img-show':'apk-img-hide'" src="../../common/image/apk_qr_code.png"/>
  </div>
</template>

<script>
  import "@/common/stylus/header.styl"
  import { mapState, mapMutations } from 'vuex'
  import mock from "@/mock/index"
  import Hamburger from "@/components/Hamburger"
  import ThemePicker from "@/components/ThemePicker"
  import NoticePanel from "@/views/Core/NoticePanel"
  import MessagePanel from "@/views/Core/MessagePanel"
  import PersonalPanel from "@/views/Core/PersonalPanel"
  import MenuTree from "@/components/MenuTree"
  import Home from '@/views/Home/Home'
  import Intro from '@/views/Intro/Intro'
  import Cookies from "js-cookie"
  export default {
    components:{
      Hamburger,
      ThemePicker,
      NoticePanel,
      MessagePanel,
      PersonalPanel,
      MenuTree
    },
    data() {
      return {
        user: {
        },
        activeIndex: '1',
        // userName: '',
        flagIcon: true,
        showMin: false,
        isActive: 0,
      }
    },
    methods: {
      // 折叠导航栏
      // onCollapse: function() {
      //   this.$store.commit('onCollapse')
      // },
      ...mapMutations({
        'setUserName': 'setUserName',
        'setNameCn': 'setNameCn',
        'setPhone': 'setPhone',
        'setMenuFlag': 'setMenuFlag',
      }),
      hiddenMenuMin: function () {
        this.showMin = false
        this.flagIcon = true
      },
      enterOld: function () {
        if (location.host == '10.87.61.43') {
          window.location.href='http://10.87.61.43/workbench/'
        } else {
          window.location.href='http://10.217.1.31:9082/workbench/jsp/frame/frame.jsp'
        }
      },
      clickIcon: function () {
        let _this = this
        this.flagIcon = !this.flagIcon
        if (!this.flagIcon) {
          this.showMin = true
        } else {
          this.showMin = false
        }
        document.body.onclick = null
        document.body.onclick = function () {
            _this.hiddenMenuMin()
        }
        let arr = document.querySelectorAll('.root-maintitle')
        Array.prototype.forEach.call(arr,function(item){
          item.removeEventListener('click',_this.hiddenMenuMin)
          item.addEventListener('click',_this.hiddenMenuMin)
        })
      },
      //点击退出时，执行
      exitSys: function () {
        var _this = this
        _this.$confirm('确认退出吗？', '提示', {}).then(() => {
          // let cookiess = document.cookie
          // if (!cookiess || cookiess.indexOf('LtpaToken2')==-1 || cookiess.indexOf('sessionUserToken')==-1) {
          //   location.reload()
          //   return
          // }
        this.$api.login.logout().then(function(res){
              if (document.cookie) {
                let cookies = document.cookie.split(";")//将所有cookie键值对通过分号分割为数组
                for (let i=0;i<cookies.length;i++) {
                  cookies[i] = cookies[i].trim()
                  document.cookie = cookies[i] + ";path=/;expires=" + (new Date(0)).toUTCString()
                  document.cookie = cookies[i] + ";path=/haeoms/;expires=" + (new Date(0)).toUTCString()
                  document.cookie = cookies[i] + ";path=/;domain=" +document.domain+";expires=" + (new Date(0)).toUTCString()
                  document.cookie = cookies[i] + ";path=/haeoms/;domain=" +document.domain+";expires=" + (new Date(0)).toUTCString()
                }
              }
              location.reload()
        }).catch((e) => {
          location.reload()
        })
        }).catch((e) => {})
      },
      // 切换主题=
      onThemeChange: function(themeColor) {
        this.$store.commit('setThemeColor', themeColor)
      },
      //cuipf 修改
      handleopen() {
        // console.log('handleopen')
      },
      handleclose() {
        // console.log('handleclose')
      },
      handleselect(a, b) {
        // console.log('handleselect')
      },
      // 路由操作处理
      handleRoute (route) {
        // console.log(route.query.id)
        // tab标签页选中, 如果不存在则先添加
        // console.log(route)
        let tab = this.mainTabs.filter(item => item.name === route.name)[0]
        // 根据tab中的name属性显示哪个tab，如果名字相同，则打开同一个tab
        // 每个tab里面保存了5个字段，这5个字段的值，是从url路径对应的组件，参数里的值
        // 在index.js中有最初的赋值
        if (!tab) {
          tab = {
            name: route.name,
            title: route.name,
            icon: route.meta.icon,
            id: route.meta.index,
			      location: route.meta.location,
          }
          if(this.mainTabs.length === 0 && tab.name !== '首页'){
            // 由于首页无法关闭，这个if语句永远不会执行
              let homeTab = [
                  {
                      name: '首页',
                      title: '首页',
                      icon: 'fa fa-home fa-lg',
                      id: 0,
                      location: ''
                  }
              ]
              this.mainTabs = this.mainTabs.concat(homeTab)
              this.mainTabs = this.mainTabs.concat(tab)
          }else{
              this.mainTabs = this.mainTabs.concat(tab)
          }
        }
        // sessionStorage.setItem('id', route.meta.index)
        this.mainTabsActiveName = tab.name
        // 切换标签页时同步更新高亮菜单
        if(this.$refs.navmenu != null) {
          this.$refs.navmenu.activeIndex = '' + route.meta.index
          this.$refs.navmenu.initOpenedMenu()
        }
      },
      getUserName: function () {
        this.$api.home.getUserId().then((res) => {
          if (res && res.data) {
            this.setNameCn(res.data.name) // name
            this.setPhone(res.data.phone) // phone
            this.setUserName(res.data.account) // account
          }
        })
      },
      showDownloadapk: function(e,index){
        this.isActive = index;
        // document.getElementById("apk_img").style.left = (e.target.offsetLeft-34)+"px";
      },
      downloadApk: function () {
        window.open("http://10.217.1.21:9084/eomsapp/Download","_self");
      }
    },
    computed:{
      ...mapState({
        themeColor: state=>state.app.themeColor,
        appName: state=>state.app.appName,
        themeColor: state=>state.app.themeColor,
        collapse: state=>state.app.collapse,
        navTree: state=>state.menu.navTree
      }),
       mainTabs: {
        get () { return this.$store.state.tab.mainTabs },
        set (val) { this.$store.commit('updateMainTabs', val) }
      },
      mainTabsActiveName: {
        get () { return this.$store.state.tab.mainTabsActiveName },
        set (val) { this.$store.commit('updateMainTabsActiveName', val) }
      },
      userName: {
        get () { return this.$store.state.menu.userName },
        set () { }
      },
      locationIndex: {
        get: function () {
          return this.$store.state.menu.locationIndex
        },
        set: function () {}
      },
      menuFlag: {
        get () { return this.$store.state.menu.menuFlag },
        set () { }
      }
    },
    mounted() {
      // console.log(location.host)
      this.getUserName()
      if (navigator.userAgent.indexOf("MSIE 9.0")>0) {
        var _this = this
        window.onclick = function () {
          if (!_this.menuFlag) {
            _this.setMenuFlag(true)
          }
        }
      }
    },
    watch: {
      $route: 'handleRoute'
    },
    created () {
      this.handleRoute(this.$route)
    },
  }
</script>
