<!-- 需要外面传入的字段，可以根据需要，传入对应的字段，当不传入时，会使用默认值
1.传入需要渲染的数据，data
2.传入需要渲染的列，columns
3.是否显示编辑和删除按钮，showOperate
4.在显示树形结构时，根据的字段，rowKey
5.在显示树形结构时，字节点的对象，treeProps
6.在树形结构时，首次加载时，是否展开所有行，defaultExpandAll
7.是否显示复选框，showCheckBox
8.是否显示分页，showPage
9.表格是否显示边框，border
10.表格当前行是否显示高亮，highlightCurrentRow
11.是否显示斑马线，stripe
12.表格的最大高度，maxHeight
13.表格中字体型号，size
14.表格中文本对齐方式，align
 -->
<template>
  <div class="table-container">
    <!--表格栏-->
    <div class="table-container-con">
      <el-table
            :data="dataArr"
            :highlight-current-row="highlightCurrentRow"
            :element-loading-text="$t('action.loading')"
            :border="border"
            :stripe="stripe"
            :show-overflow-tooltip="showOverflowTooltip"
            :size="size" :align="align" style="width:100%;"
            height="100%"
            :tree-props="treeProps"
            :default-expand-all="defaultExpandAll"
            :row-key="rowKey"
            v-loading="loading"
            @row-contextmenu="shortCutMenu"
            @cell-click="clickCell"
            @selection-change="selectionChange"
            @select-all="selectAll"
            @select="selector"
            ref="elTable"
            :row-style="tableRowClassName"
            > <!-- :tree-props="treeProps"  :default-expand-all="defaultExpandAll" :row-key="rowKey" -->
        <el-table-column type="selection" width="40" v-if="showCheckBox"></el-table-column><!-- :max-height="maxHeight" -->
        <el-table-column v-if="showFulColumn" v-for="column in columns" header-align="center" :align="column.align?column.align:'center'"
          :prop="column.prop" :label="column.label" :width="column.width" :min-width="column.minWidth"
          :fixed="column.fixed" :key="column.prop" :type="column.type" :formatter="column.formatter"
          :sortable="column.sortable==null?true:column.sortable">
        </el-table-column>
        <el-table-column v-if="showPreColumn" v-for="column in columns[0]" header-align="center" :align="column.align?column.align:'center'"
          :prop="column.prop" :label="column.label" :width="column.width" :min-width="column.minWidth"
          :fixed="column.fixed" :key="column.prop" :type="column.type" :formatter="column.formatter"
          :sortable="column.sortable==null?true:column.sortable">
        </el-table-column>
        <el-table-column
          :label="centerColumnText"
          v-if="showCenterColumn"
          header-align="center"
          align="center"
          :sortable="false">
          <template slot-scope="scope">
            <el-popover
              placement="bottom"
              width="500"
              trigger="hover">
              <!-- <div class="popover-container">{{scope.row.mouldcontent}}</div> -->
              <!-- <div class="center-column" slot="reference">{{scope.row.mouldcontent}}</div> -->
              <div class="popover-container">
                <div v-for="(item,index) in scope.row.mouldcontent" :key="index" class="popover-container-item">
                  <p class="popover-container-item-title">{{item.mouldtitle}}:</p>
                  <p class="popover-container-item-content">{{item.mouldvariate}}</p>
                </div>
              </div>
              <div class="center-column" slot="reference">
                <span v-for="(item,index) in scope.row.mouldcontent" :key="index">{{item.mouldtitle}}-{{item.mouldvariate}}<i v-if="index<scope.row.mouldcontent.length-1">,</i></span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          :label="centerColumnTextObj"
          v-if="showCenterColumnObj"
          header-align="center"
          align="center"
          :sortable="false">
          <template slot-scope="scope">
            <p class="publish-object">{{scope.row.publishobjectProvince}},{{scope.row.publishobjectCity}}</p>
          </template>
        </el-table-column>
        <el-table-column v-if="showAfterColumn" v-for="column in columns[1]" header-align="center" :align="column.align?column.align:'center'"
          :prop="column.prop" :label="column.label" :width="column.width" :min-width="column.minWidth"
          :fixed="column.fixed" :key="column.prop" :type="column.type" :formatter="column.formatter"
          :sortable="column.sortable==null?true:column.sortable">
        </el-table-column>
        <el-table-column
          :label="$t('action.operation')"
          :width="operationWidth"
          v-if="showOperate"
          header-align="center"
          align="center">
          <template slot-scope="scope">
            <kt-button v-if="showEditBtn" icon="fa fa-edit" :label="$t('action.edit')" :size="size" @click="handleEdit(scope.$index, scope.row)" />
            <kt-button v-if="showLookUpBtn" v-show="scope.row.state && scope.row.state=='已发布' || scope.row.state=='作废' || scope.row.state=='导入'" icon="fa fa-edit" :label="$t('action.lookUp')" :size="size" @click.native="handleLookUp(scope.$index, scope.row)" />
            <kt-button v-if="showIssueBtn" v-show="scope.row.state && scope.row.state=='未发布'" icon="fa fa-edit" :label="$t('action.issue')" :size="size" @click.native="handleIssue(scope.$index, scope.row)" />
            <kt-button v-if="showNullifyBtn" v-show="scope.row.state && scope.row.state=='未发布'" icon="fa fa-trash" :label="$t('action.nullify')" :size="size" @click.native="handleNullify(scope.$index, scope.row)" />
            <kt-button v-if="showDeleteBtn" icon="fa fa-trash" :label="$t('action.delete')" :size="size" type="danger" @click.native="handleDelete(scope.$index, scope.row)" />
            <kt-button v-if="showWarnNullifyBtn" icon="fa fa-trash" :label="$t('action.nullify')" :size="size" @click.native="handleNullify(scope.$index, scope.row)" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--分页栏-->
    <div class="toolbar" v-if="showPage">
      <kt-button :label="$t('action.batchDelete')" :perms="permsDelete" :size="size" type="danger" @click="handleBatchDelete()"
        :disabled="this.selections.length===0" style="float:left;" v-if="showCheckBoxDele"/>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          >
        </el-pagination>
    </div>
  </div>
</template>

<script>
import KtButton from "@/components/KtButton/KtButton"
import { mapMutations } from 'vuex'
export default {
  name: 'KtTable',
  components:{
			KtButton
	},
  props: {
    columns: Array, // 表格列配置
    dataArr: Array, // 表格分页数据
    permsEdit: String,  // 编辑权限标识
    permsDelete: String,  // 删除权限标识
    size: { // 尺寸样式
      type: String,
      default: 'mini'
    },
    align: {  // 文本对齐方式
      type: String,
      default: 'left'
    },
    maxHeight: {  // 表格最大高度
      type: Number,
      default: 420
    },
    border: {  // 是否显示边框
      type: Boolean,
      default: true
    },
    stripe: {  // 是否显示斑马线
      type: Boolean,
      default: true
    },
    highlightCurrentRow: {  // // 是否高亮当前行
      type: Boolean,
      default: true
    },
    showOverflowTooltip: {  // 是否单行显示
      type: Boolean,
      default: true
    },
    showCheckBox: {
      type: Boolean,
      default: true
    },
    showPage: {
      type: Boolean,
      default: true
    },
    showOperate: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: String,
      default: ''
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    treeProps: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    showCheckBoxDele: {
      type: Boolean,
      default: false
    },
    currentPage: Number,
    pageSizes: Array,
    pageSize: Number,
    total:  Number,
    showDeleteBtn: {
      type: Boolean,
      default: false
    },
    showNullifyBtn: {
      type: Boolean,
      default: false
    },
    showEditBtn: {
      type: Boolean,
      default: true
    },
    showLookUpBtn: {
      type: Boolean,
      default: false
    },
    showIssueBtn: {
      type: Boolean,
      default: false
    },
    showFulColumn: {
      type: Boolean,
      default: true
    },
    showPreColumn: {
      type: Boolean,
      default: false
    },
    showAfterColumn: {
      type: Boolean,
      default: false
    },
    showCenterColumn: {
      type: Boolean,
      default: false
    },
    centerColumnText: {
      type: String,
      default: '模板'
    },
    centerColumnTextObj: {
      type: String,
      default: '发送对象'
    },
    operationWidth: {
      type: String,
      default: '200'
    },
    showWarnNullifyBtn: {
      type: Boolean,
      default: false
    },
    showCenterColumnObj: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 分页信息
			pageRequest: {
				pageNum: 1,
        pageSize: 10
      },
      tempArr: [],
      // showShortCut: false,
      // loading: false,  // 加载标识
      selections: [],  // 列表选中列
      shortCutInfo: {}
    }
  },
  methods: {
    mouseoverDiv: function (row) {
      this.$emit('mouseoverDiv',row)
    },
    clearUserSelection: function () {
      this.$refs.elTable.clearSelection()
    },
    handleLookUp: function (index,row) {
      this.$emit('handleLookUp',index,row)
    },
    handleIssue: function (index,row) {
      this.$emit('handleIssue',index,row)
    },
    handleNullify: function (index,row) {
      this.$emit('handleNullify',index,row)
    },
    tableRowClassName: function ({row, rowIndex}) {
      row.index = rowIndex
    },
    selector: function (selector,row) {
      this.$emit('selector', selector,row)
    },
    shortCutMenu: function (row,column,e) {
      e.stopPropagation()
      e.preventDefault()
      this.shortCutInfo.id = row.id
      this.shortCutInfo.showShortCut = 'block'
      let scrollTop = document.documentElement.scrollTop
      let offsetTopElMain = document.querySelector('.table-container').scrollTop
      let x = e.clientX-180
      let y = e.clientY+scrollTop+offsetTopElMain-170
      this.shortCutInfo.x = x // 也可以在使用的组件中单独修改x的值
      this.shortCutInfo.y = y // 也可以在使用的组件中单独修改y的值
      this.$emit('changeShortCutInfo',this.shortCutInfo,row)
    },
    // 点击某个单元格时
    clickCell: function (row,column,cell,event) {
      this.$emit('clickCell', row,column,cell,event)
    },
    // 点击某一行前面的复选框
    selectionChange: function (selection) {
      this.$emit('selectionChange', selection)
    },
    // 点击全选复选框
    selectAll: function (selection) {
      this.$emit('selectAll', selection)
    },
    // 供外部调用的方法
    clickRow: function (obj) {
      this.$refs.elTable.clearSelection()
      this.$refs.elTable.toggleRowSelection(obj)
    },
    handleSizeChange: function (pageSize) {
      this.$emit('handleSizeChange', pageSize)
    },
    handleCurrentChange: function (currentPage) {
      this.$emit('handleCurrentChange', currentPage)
    },
    addInfo: function () {
      this.$emit('addInfo',true)
    },
    // 编辑
		handleEdit: function (index, row) {
      this.$emit('handleEdit', row.id, row)
		},
    // 删除
		handleDelete: function (index, row) {
			if (row.parentId) {
			  this.delete(row.id)
			} else {
			  this.$alert('根节点不可删除')
			}

		},
		// 批量删除
		handleBatchDelete: function () {
			let ids = this.selections.map(item => item.id).toString()
			this.delete(ids)
		},
		// 删除操作
		delete: function (ids) {
      // alert('delete')
			this.$confirm('确认删除选中记录吗？', '提示', {
				type: 'warning'
			}).then(() => {
				let params = []
				let idArray = (ids+'').split(',')
				for(var i=0; i<idArray.length; i++) {
					params.push({'id':idArray[i]})
			}
			if (idArray.length == 1) {
			  this.$emit('handleDelete', ids)
			} else if (idArray.length > 1){
			  this.$emit('handleDelete', {params:params})
			}
				}).catch(() => {
				})
		}
  },
  mounted() {
    // console.log('table-mounted')
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  @import "../../common/stylus/variable"
  .table-container
    display: flex
    flex-direction: column
    position: relative
    padding: 0 5px
    overflow: hidden
    // height: 40px
    // margin-top: 2px
    height: 100%
  .table-container-con
    flex: 1
    height: calc(100% - 25px)
  .toolbar
    padding-right: 20px
    background-color: #DFDFDF
    height: 25px
    padding: 1px 20px 1px 0
    overflow: hidden
    box-sizing: border-box
    // display: flex
    // justify-content: flex-end
  .el-pagination
    box-sizing: border-box
    padding: 0
    height: 25px
    float: right
  .center-column
    no-wrap()
  .publish-object
    width: 100%
    no-wrap()
  .popover-container-item
    position: relative
    overflow: hidden
    padding-right: 20px
    box-sizing: border-box
    padding: 10px 0
    &+.popover-container-item
      border-top: 1px solid #dfdfdf
  .popover-container-item-title
    width: 90px
    text-align: right
    position: absolute
    left: 0
    top: 50%
    transform: translate(0,-50%)
    -ms-transform: translate(0,-50%)
    font-size: $font-size-small
  .popover-container-item-content
    width: 100%
    float: left
    padding-left: 100px
    box-sizing: border-box
    font-size: $font-size-small
</style>
