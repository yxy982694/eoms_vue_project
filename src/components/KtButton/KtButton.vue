<!-- 需要传入的字段，在不传入时，会使用字段的默认值
1.按钮中字体型号，size
2.按钮的类型，type
3.按钮中显示的图标，icon
4.按钮是否可用，disabled
5.用户的权限，perms，根据权限来决定按钮是否可用 -->
<template>
  <el-button :size="size" :type="type" :icon="icon"
    :loading="loading" @click="handleClick" :disabled="disabled">  <!-- :disabled="!hasPerms(perms)" -->
    {{label}}
  </el-button>
</template>

<script>
import { hasPermission } from '@/utils/permission/index.js'
export default {
  name: 'KtButton',
  props: {
    label: {  // 按钮显示文本
      type: String,
      default: ''
    },
    icon: {  // 按钮显示图标
      type: String,
      default: ''
    },
    size: {  // 按钮尺寸
      type: String,
      default: 'mini'
    },
    type: {  // 按钮类型
      type: String,
      default: null
    },
    loading: {  // 按钮加载标识
      type: Boolean,
      default: false
    },
    disabled: {  // 按钮是否禁用
      type: Boolean,
      default: false
    },
    perms: {  // 按钮权限标识，外部使用者传入
      type: String,
      default: null
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick: function () {
      // 按钮操作处理函数
      this.$emit('click', {})
    },
    hasPerms: function (perms) {
      // 根据权限标识和外部指示状态进行权限判断
      return hasPermission(perms) & !this.disabled
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  .el-button
    padding: 5px 15px
    font-size: $font-size-small
    box-sizing: border-box
    //border-radius: 3px
</style>
