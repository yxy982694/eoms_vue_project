<template>
    <!-- <toggle-nav></toggle-nav> -->
    <!-- 主内容区域 -->
    <div id="main-container" class="main-content">
       <transition name="fade" mode="out-in">
         <keep-alive>
          <router-view v-if = "$route.path ==='/'"></router-view>
         </keep-alive>
       </transition>
	  <!-- <keep-alive> -->
		  <main-menu v-show="$route.path !=='/'"></main-menu>
	  <!-- </keep-alive> -->

    </div>
</template>

<script>
  import mainMenu from '@/components/MainToTab/MainToTab'
  export default {
    name: 'MainContent',
    components:{
      mainMenu
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .main-content
    height: 100% !important
    overflow: hidden
</style>
