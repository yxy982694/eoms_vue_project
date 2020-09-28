<template>
	<div class="select-container">
		<div class="select-div" @click.stop="clickInput">
			<input type="text" readonly="readonly" v-model="modleValue" autocomplete="off" :placeholder="placeholderTip" class="select-input">
			<i class="el-icon-arrow-down" :class="{'icon-trans':dropUpFlag}"></i>
		</div>
		<div class="select-dropdown" v-show="dropNone">
			<p v-for="item in selectDownArr"
			 :key="item.ID"
			 @click="clickItem(item.SHORTNAME)"
			 class="selectdown-item"
       :class="{'item-selected':modleValue==item.SHORTNAME}"
			 >{{item.SHORTNAME}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		},
		props: ['placeholderTip','selectDownArr','dropUpFlag','dropNone','modleValue'],
		methods: {
			clickInput: function () {
				this.$emit('clickInput')
			},
			clickItem: function (value) {
        if (this.modleValue != value) {
          this.$emit('clickItem',value)
        }
			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"
  .select-container
    position: relative
    margin: 0 auto
    flex: 1
  .select-div
      position: relative
	  .select-input
	    width: 100%
	    padding: 0 10px
	    height: 25px
	    line-height: 25px
	    // border: 1px solid red
	    cursor: pointer
	    box-sizing: border-box
	  .el-icon-arrow-down
	    position: absolute
	    cursor: pointer
	    color: #c0c4cc
	    line-height: 25px
	    top: 0
	    right: 5px
	    transition: transform .3s
   .icon-trans
     transition: transform .3s
     transform: rotate(180deg)
     -ms-transform: rotate(180deg)
   .select-dropdown
     cursor: pointer
     border: 1px solid #e4e7ed
     border-radius: 4px
     background-color: #fff
     box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
     box-sizing: border-box
     position: absolute
     width: 100%
     left: 0
     top: 35px
     z-index: 2000
     &::before
       content: ''
       display: block
       width: 0
       height: 0
       border-left: 8px solid transparent
       border-right: 8px solid transparent
       border-bottom: 8px solid #fff
       position: absolute
       top: -7px
       left: 16px
       z-index: 99999
     .selectdown-item
       padding: 0 20px
       color: #606266
       font-size: $font-size-medium
       height: 26px
       line-height: 26px
       box-sizing: border-box
       text-align: left
       no-wrap()
       &:hover
         background-color: #f5f7fa
      .item-selected
        color: #409EFF
        font-weight: 700
</style>
