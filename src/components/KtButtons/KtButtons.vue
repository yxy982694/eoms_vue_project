<!-- 可以把多个按钮放在这个组件中，在一行排列 -->
<template>
  <div class="button-container">
      <div class="button-search">
        <slot name="toolSearch"></slot>
      </div>
      <div class="button-refresh">
        <slot name="toolRefresh"></slot>
      </div>
  </div>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .button-container
    padding: 5px 20px
    display: flex
    justify-content: space-between
    .el-input
      // width: 25%
      // min-width: 200px
      // margin-right: 10px
  .el-input__inner
    height: 32px
    line-height: 32px
    font-size: 12px
  .button-refresh
    font-size: 0
  .button-refresh .el-button
    margin-left: 0
</style>
