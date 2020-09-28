<template>
  <center-menu :centerList="centerList"></center-menu>
</template>

<script>
    import CenterMenu from '@/components/AsideTab/SubAsideTab/CenterMenu'
    export default {
        data() {
            return {
                centerList:[
                    // {   location: '/SysManage/OperProcess/ConfigManageTab/ResourceManage',
                    //     label: '资源管理',
                    //     id: 1
                    // },
                    // {   location: '/SysManage/OperProcess/ConfigManageTab/PositionManage',
                    //     label: '职位管理',
                    //     id: 2
                    // },
                    // {   location: '/SysManage/OperProcess/ConfigManageTab/RoleManage',
                    //     label: '角色管理',
                    //     id: 3
                    // },
                    // {   location: '/SysManage/OperProcess/ConfigManageTab/OrganizateManage',
                    //     label: '机构管理',
                    //     id: 4
                    // },
                    // {   location: '/SysManage/OperProcess/ConfigManageTab/UserManage',
                    //     label: '用户管理',
                    //     id: 5
                    // },
                ]
            }
        },
        components:{
          CenterMenu
        },
        computed: {
          // 获取中间平铺按钮的数据
          centerMenu: {
            get: function () {
              return this.$store.state.centerMenu.centerMenu
            },
            set: function () {}
          },
          currentTabId: {
            get: function () {
              return this.$store.state.showTab.currentTabId
            },
            set: function () {}
          },
        },
        // 当tab切换时,重新加载中间平铺的内容
        // this.centerMenu是在进入此流程时,已经获取了，以后也不再改变
        // this.centerMenu是根据主菜单id,来对应的
        // this.centerMenu是根据左边菜单id存的对象,每个id对应一个数组
        watch: { // 当切换tab时，id会变化，此时根据id的变化，获取最新中间平铺按钮的数据
          currentTabId: function () {
            this.loadCenterMenu()
          }
        },
        mounted: function () {
          // console.log('LeftMenu.vue mounted')
          this.loadCenterMenu()
        },
        methods: {
          // 此组件不存在点击操作,只有获取数据部分,并在中间部分进行展示
          loadCenterMenu: function () {
            let arr = this.centerMenu[this.currentTabId]
            // console.log(arr)
            let obj
            this.centerList = []
            if (arr && arr.length>0) {
              for (var i=0;i<arr.length;i++) {
                obj = {
                  id: arr[i].id,
                  location: arr[i].location?arr[i].location: '/SysManage/OperProcess/ConfigManageTab/ResourceManage',///static/jsp/secframe.html?type=020101
                  label: arr[i].name
                }

                this.centerList.push(obj)
              }
              // console.log(this.centerList)
            }
          }
        }
    }
</script>
