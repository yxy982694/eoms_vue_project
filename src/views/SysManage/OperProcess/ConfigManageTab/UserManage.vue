<template>
	<div class="user-container children-tab-container">
		<div class="user-left" ref="userLeft">
      <div class="user-depit">部门</div>
			<div class="tree-container">
				<el-tree
        :default-expanded-keys="[0,1]"
        v-loading="loadingTree"
        :expand-on-click-node="false"
        :props="defaultProps"
        :data="treeData"
        node-key="Id"
        ref="tree"
        @node-click="handleNodeClick"></el-tree>
			</div>
		</div>
		<div class="user-middle" ref="userMiddle"></div>
		<div class="user-right" ref="userRight">
			<div class="right-top">
				<div class="search-container">
          <el-input type="text" v-model="usernameVal"  placeholder="用户名"></el-input>
          <kt-button icon="fa fa-search" type="primary" class="user-search-btn" :label="$t('action.search')" @click="searchUserName"></kt-button>
				</div>
			</div>
			<div class="right-center">
				<div class="btn-container">
            <kt-button type="primary" icon="fa fa-calendar" :label="$t('action.add')" @click="addInfo"></kt-button>
            <kt-button icon="fa fa-edit" :disabled="editAble" :label="$t('action.edit')" @click="editInfo"></kt-button>
            <kt-button type="danger" icon="fa fa-trash" :disabled="editAble" :label="$t('action.delete')" @click="deleteInfo"></kt-button>
            <kt-button type="primary" icon="fa fa-calendar" :disabled="editAble" label="启用"></kt-button>
            <kt-button type="primary" icon="fa fa-calendar" :disabled="editAble" label="停用"></kt-button>
            <kt-button type="primary" icon="fa fa-calendar" :disabled="editAble" label="授权"></kt-button>
            <kt-button type="primary" icon="fa fa-calendar" :disabled="editAble" label="批量授权"></kt-button>
            <kt-button type="primary" icon="fa fa-calendar" :disabled="editAble" label="详情"></kt-button>
				</div>
			</div>
			<div class="right-bottom">
        <kt-table
        :loading="loading"
        :dataArr="tableData"
        @selectAll="selectAll"
        @selectionChange="selectionChange"
        @clickCell="clickCell"
        :columns="columns"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
        @changeShortCutInfo="changeShortCutInfo"
        :currentPage="currentPage"
        :pageSizes="pageSizes"
        :pageSize="pageSize"
        :total="total"
        ref="ktTable"
        ></kt-table>
			</div>
		</div>
	  <!--新增编辑界面-->
	  <el-dialog :title="operation?'新增':'编辑'" width="40%" :visible.sync="dialogVisible" :close-on-click-modal="false">
	    <el-form :model="dataForm" :rules="dataFormRules" ref="dataForm"
	      label-position="right">
	      <el-form-item label="organid" prop="organid" v-if="false">
	        <el-input v-model="dataForm.organid" auto-complete="off"></el-input>
	      </el-form-item>
	      <el-form-item label="用户名" prop="account">
	        <el-input v-model="dataForm.account" auto-complete="off"></el-input>
	      </el-form-item>
	      <el-form-item label="中文名称" prop="name">
	        <el-input v-model="dataForm.name" auto-complete="off"></el-input>
	      </el-form-item>
	      <el-form-item label="是否可用" prop="isvalid">
	        <el-select v-model="dataForm.isvalid" placeholder="请选择"
	           style="width: 100%;">
	          <el-option v-for="item in validArr" :key="item.id"
	            :label="item.value" :value="item.id">
	          </el-option>
	        </el-select>
	      </el-form-item>
	      <el-form-item label="创建者" prop="createUser">
	        <el-input v-model="dataForm.createUser" auto-complete="off"></el-input>
	      </el-form-item>
	      <el-form-item label="创建时间" prop="createTime">
	        <el-input v-model="dataForm.createTime" auto-complete="off"></el-input>
	      </el-form-item>
	      <el-form-item label="账号生效时间" prop="accountEffectTime">
	        <el-input v-model="dataForm.accountEffectTime" auto-complete="off"></el-input>
	      </el-form-item>
	      <el-form-item label="账号过期时间" prop="accountExpireTime">
	        <el-input v-model="dataForm.accountExpireTime" auto-complete="off"></el-input>
	      </el-form-item>
	    </el-form>
	    <div slot="footer" class="dialog-footer">
	      <el-button @click.native="dialogVisible = false">{{$t('action.cancel')}}</el-button>
	      <el-button type="primary" @click.native="submitForm" :loading="editLoading">{{$t('action.submit')}}</el-button>
	    </div><!-- :loading="editLoading" -->
	  </el-dialog>
    <!-- 右键菜单 -->
    <div class="shortcut-container" :style="{position: 'absolute',top: resourceTop,left: resourceLeft,display: resourceDisplay}"><!--  v-if="ifShortCut" -->
      <!-- <kt-button icon="fa fa-plus" :label="$t('action.add')" @click="addInfo" /> -->
      <kt-button icon="fa fa-edit" :label="$t('action.edit')" @click="editInfo" />
      <kt-button icon="fa fa-trash" :label="$t('action.delete')" @click="deleteInfo" />
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { tablePageMixin } from '@/common/js/mixin.js'
	export default {
    name: 'ConfigManageTabUserManage',
    mixins: [tablePageMixin],
		data: function() {
			return {
        loadingTree: false,
        userId: null, // 用户id
				treeData: [],
        defaultProps: {
          children: 'Children',
          label: 'Name'
        },
        validArr: [{
            id: 1,
            value: '可用'
          },{
            id: 2,
            value: '不可用'
        }],
        dataForm: null,
        dataFormRules: {
        	account: [
        		{ required: true, message: '请输入用户名', trigger: 'blur' }
        	],
          name: [
          	{ required: true, message: '请输入中文名称', trigger: 'blur' }
          ],
          isvalid: [
          	{ required: true, message: '请选择有效性', trigger: 'blur' }
          ],
        },
			}
		},
		computed: {
      currentDepId: {
        get: function () {
          return this.$store.state.loadData.currentDepId
        },
        set: function () {}
      },
      // userObj: {
      //   get: function () {
      //     return this.$store.state.loadData.userObj
      //   },
      //   set: function () {}
      // },
      // userOriganFlag: {
      //   get: function () {
      //     return this.$store.state.loadData.userOriganFlag
      //   },
      //   set: function () {}
      // },
      // userOriganArr: {
      //   get: function () {
      //     return this.$store.state.loadData.userOriganArr
      //   },
      //   set: function () {}
      // },
      userName: {
        get: function () {
          return this.$store.state.menu.userName
        },
        set: function () {}
      },
    },
    created: function () {
      this.dataForm = {
          organid: '',
          account: '',
          name: '',
          isvalid: '',
          createUser: this.userName,
          createTime: '',
          accountEffectTime: '',
          accountExpireTime: '',
        }
    },
    activated: function () {
      // this.dataForm = {
      //     organid: '',
      //     account: '',
      //     name: '',
      //     isvalid: '',
      //     createUser: this.userName,
      //     createTime: '',
      //     accountEffectTime: '',
      //     accountExpireTime: '',
      //   }
    },
    mounted: function () {
      this.findAllOrgan()
      let jsonObj = {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
      // 不传部门默认部门id为0 是所有数据
      // 不传页码默认是第1页
      // 不传当前页显示条数默认是10条
      // 不传输入值默认为空
      let jsonStr = JSON.stringify(jsonObj)
      // 第一次什么都不传
      // 后台默认返回全部数据的前10条数据和所有数据总条数（无参数）0
      // jsonStr
      this.getTableData(jsonStr)
      // if (this.userOriganFlag) {
      //   this.treeData = this.userOriganArr
      // } else {
      //   this.findAllOrgan()
      // }
      // if (this.userObj.userFlag) {
      //   this.tableData = this.userObj.userTableArr
      //   this.total = parseInt(this.userObj.userTotal)
      //   this.pageSize = this.userObj.userPageSize
      //   this.currentPage = this.userObj.userCurrentPage
      //   this.usernameVal = this.userObj.userNameVal
      // } else {
      //   let jsonObj = {
      //     currentPage: this.currentPage,
      //     pageSize: this.pageSize
      //   }
      //   // 不传部门默认部门id为0 是所有数据
      //   // 不传页码默认是第1页
      //   // 不传当前页显示条数默认是10条
      //   // 不传输入值默认为空
      //   let jsonStr = JSON.stringify(jsonObj)
      //   // 第一次什么都不传
      //   // 后台默认返回全部数据的前10条数据和所有数据总条数（无参数）0
      //   // jsonStr
      //   this.getTableData(jsonStr)
      // }
		},
		methods: {
      ...mapMutations({
        // 'setUserObj': 'setUserObj',
        // 'setUserOriganFlag': 'setUserOriganFlag',
        // 'setUserOriganArr': 'setUserOriganArr',
        'setCurrentDepId': 'setCurrentDepId'
      }),
      findAllOrgan: function () {
        this.loadingTree = true
        this.$api.user.findAllOrgan().then((res) => {
          this.treeData = res.data
          // this.setUserOriganArr(res.data)
          // this.setUserOriganFlag(true)
          this.loadingTree = false
        })
      },
      changeShortCutInfo: function (obj,row) {
        this.userId = obj.id
        this.editAble = false
        this.rowObj = row
        this.$refs.ktTable.clickRow(this.tableData[row.index])
        this.setResourceDisplay(obj.showShortCut)
        this.setResourceLeft(obj.x+'px')
        this.setResourceTop(obj.y+15+'px')
      },
      selectionChange: function (selection) {
        if (selection.length == 1) {
          this.editAble = false
          this.userId = selection[0].ID
        } else {
          this.editAble = true
        }
      },
      selectAll: function (selection) {
        if (selection.length == 1) {
          this.editAble = false
          this.userId = selection[0].ID
        } else {
          this.editAble = true
        }
      },
      clickCell: function (row,column) { // 点击table中的单元格
         if (column.type != 'selection') {
           this.rowObj = row
           this.editAble = false
           this.$refs.ktTable.clickRow(this.tableData[row.index])
         }
      },
      addInfo: function () {
        let date1 = new Date()
        let date2 = new Date(date1)
        // this.$set(this.dataForm,'createTime',date1.toLocaleString())
        // this.$set(this.dataForm,'accountEffectTime',date1.toLocaleString())
        date2.setDate(date1.getDate()+90)
        // console.log(this.currentDepId)
        // 点击添加时,清空弹框中input的值
        this.$set(this.dataForm,'organid',this.currentDepId)
        this.$set(this.dataForm,'account','')
        this.$set(this.dataForm,'name','')
        // console.log(this.dataForm)
        // this.$set(this.dataForm,'accountExpireTime',date2.toLocaleString())
        this.dialogVisible = true
        this.operation = true
      },
      editInfo: function () {
        let date1 = new Date()
        let date2 = new Date(date1)
        // this.$set(this.dataForm,'createTime',date1.toLocaleString())
        // this.$set(this.dataForm,'accountEffectTime',date1.toLocaleString())
        date2.setDate(date1.getDate()+90)
        // 点击编辑时,带出所要编辑行的信息
        // this.$set(this.dataForm,'organid',this.currentDepId)
        this.$set(this.dataForm,'account',this.rowObj.ACCOUNT)
        this.$set(this.dataForm,'name',this.rowObj.NAME)
        // this.$set(this.dataForm,'accountExpireTime',date2.toLocaleString())
        this.dialogVisible = true
        this.operation = false
      },
      deleteInfo: function () {
        let _this = this
         let jsonObj = {
           organId: _this.currentDepId,
           userId: _this.userId
         }
         let jsonStr = JSON.stringify(jsonObj)
         _this.$api.user.deleteUser(jsonStr).then((res) => {
           // console.log(res)
           if(res.code == 0) {
             _this.$message({ message: '删除成功', type: 'success' })
             let jsonObj = {
               organId: _this.currentDepId,
               pageSize: _this.pageSize
             }
             let jsonStr = JSON.stringify(jsonObj)
             _this.getTableData(jsonStr)
           } else {
             _this.$message({message: '操作失败, ' + res.msg, type: 'error'})
           }
         })
      },
      submitForm: function () {
          let _this = this
          this.$refs.dataForm.validate((valid) => {
          	if (valid) {
          		_this.$confirm('确认提交吗？', '提示', {}).then(() => {
          			_this.editLoading = true
                let User = Object.assign({}, _this.dataForm)
                // User.organid = _this.currentDepId
                if (_this.operation) { // 处理添加
                  User = JSON.stringify(User)
                  _this.$api.user.addUser(User).then((res) => {
                    // console.log(res)
                    if(res.code == 0) {
                      _this.$message({ message: '添加成功', type: 'success' })
                      _this.dialogVisible = false
                      _this.editLoading = false
                      this.$refs['dataForm'].resetFields()
                      let jsonObj = {
                        organId: _this.currentDepId,
                        pageSize: _this.pageSize
                      }
                      let jsonStr = JSON.stringify(jsonObj)
                      _this.getTableData(jsonStr)
                    } else {
                      _this.$message({message: '添加失败, ' + res.msg, type: 'error'})
                    }
                  })
                } else { // 处理编辑
                  User.id = _this.userId // 通过ROW_ID获取的userId
                  User = JSON.stringify(User)
                  _this.$api.user.editUser(User).then((res) => {
                    // console.log(res)
                    if(res.code == 0) {
                      _this.$message({ message: '编辑成功', type: 'success' })
                      _this.dialogVisible = false
                      _this.editLoading = false
                      this.$refs['dataForm'].resetFields()
                      let jsonObj = {
                        organId: _this.currentDepId,
                        pageSize: _this.pageSize
                      }
                      let jsonStr = JSON.stringify(jsonObj)
                      _this.getTableData(jsonStr)
                    } else {
                      _this.$message({message: '编辑失败, ' + res.msg, type: 'error'})
                    }
                  })
                }
          		})
          	}
          })
      },
      getTableData: function (jsonStr) {
        this.loading = true
        this.$api.user.getPageList(jsonStr).then((res) => {
          // console.log(res.data)
          let resArr = res.data
          for (let i=0;i<resArr.length;i++) {
            if (resArr[i].ISVALID == '1') {
              resArr[i].ISVALID = '可用'
            } else if (resArr[i].ISVALID == '0') {
              resArr[i].ISVALID = '不可用'
            }
          }
          this.tableData= resArr
          this.loading = false
          this.total = parseInt(res.total)
          // this.setUserObj({
          //   userFlag: true,
          //   userTableArr: this.tableData,
          //   userTotal: this.total,
          //   userCurrentPage: this.currentPage,
          //   userPageSize: this.pageSize,
          //   userNameVal: this.usernameVal
          // })
        })
      },
			openAll: function() {
        // this.$nextTick(function () {
          // console.log(document.querySelectorAll('.el-tree-node__content'))
          // console.log(this.$refs.tree.store._getAllNodes())
          for(var i=0;i<this.$refs.tree.store._getAllNodes().length;i++){
            this.$refs.tree.store._getAllNodes()[i].expanded=true
          }
        // })
			},
			closeAll: function() {
				for(var i=0;i<this.$refs.tree.store._getAllNodes().length;i++){
				  this.$refs.tree.store._getAllNodes()[i].expanded=false
				}
			},
      // 点击左边部门树时
			handleNodeClick: function(data) {
				// console.log(data)
        this.setCurrentDepId(data.Id)
        this.$set(this.dataForm,'organid',data.Id)
        // console.log(this.pageSize)
        this.currentPage = 1
        this.usernameVal = ''
        // 点击某个部门,把当前部门id传到后台（部门id）2  每页显示条数
        // 后台默认返回当前部门的前‘每页显示条数’数据和该部门总条数
        let jsonObj = {
          organId: data.Id,
          pageSize: this.pageSize
        }
        let jsonStr = JSON.stringify(jsonObj)
        this.getTableData(jsonStr)
			},
      changeBox: function () {
      },
      searchUserName: function () {
        // console.log(this.dateValue)
        // 当输入用户名,点击查询时
        // 把当前部门id,每页显示条数,输入的字段值（3个参数）
        // 返回前‘每页显示条数’条数据和总条数
        let jsonObj = {
          username: this.usernameVal,
          organId: this.currentDepId,
          pageSize: this.pageSize
        }
        let jsonStr = JSON.stringify(jsonObj)
        this.getTableData(jsonStr)
        this.currentPage = 1
      },
      handleSizeChange: function (pageSize) {
        // 当每页显示条数变化时,
        // 把当前部门id和条数传至后台（部门id和条数），当前输入的字段值3（不传输入值默认为空）
        // 返回当前部门的前"刚传的条数"的数据和当前部门的总条数
        // console.log(pageSize)
        this.pageSize = pageSize
        let jsonObj = {
          username: this.usernameVal,
          organId: this.currentDepId,
          pageSize: this.pageSize
        }
        let jsonStr = JSON.stringify(jsonObj)
        this.getTableData(jsonStr)
        this.currentPage = 1
      },
      handleCurrentChange: function (currentPage) {
        // 当页数变化时，把当前页数传到后台
        // 还要把当前部门id传至后台(不传id默认是全部数据)（部门id和页数），当前输入的字段值（不传输入值默认为空）
        // 每页显示多少条数据  传4个参数
        // 返回该部门当前页的数据和当前部门的总条数
        // console.log(currentPage)
        this.currentPage = currentPage
        let jsonObj = {
          username: this.usernameVal,
          organId: this.currentDepId,
          pageSize: this.pageSize,
          currentPage: this.currentPage
        }
        // console.log(jsonObj)
        let jsonStr = JSON.stringify(jsonObj)
        this.getTableData(jsonStr)
      },
      initColumns: function () {
        this.columns = [{
            prop: 'ACCOUNT',
            label: '用户名'
          }, {
            prop: 'NAME',
            label: '中文名称'
          }, {
            prop: 'ISVALID',
            label: '是否可用'
          }, {
            prop: 'CREATEUSER',
            label: '创建者'
          }, {
            prop: 'CREATETIME',
            label: '创建时间'
          }, {
            prop: 'ACCOUNTEFFECTTIME',
            label: '账号生效时间'
          }, {
            prop: 'ACCOUNTEXPIRETIME',
            label: '账号过期时间'
          }]
      },
    }
	}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../../../common/stylus/variable"
    .user-container
      display: flex
      border: 1px solid #dad9e6
      overflow: hidden
      box-sizing: border-box
      height: 100%
      position: relative
      margin: 3px
    .user-left
      box-sizing: border-box
      height: 100%
      background-color: #fff
      overflow: hidden
      width: 180px
      display: flex
      flex-direction: column
      border: 1px solid #f0f2f5
      // margin: 2px 4px
      .user-depit
        text-align: left
        font-size: $font-size-medium-s
        font-weight: bold
        background-color: #f9f9f9
        padding: 5px 10px
      .expand-container
         display: flex
         justify-content: center
      .tree-container
        width: 100%
        overflow: auto
        flex: 1
    .user-middle
      // float: left
      width: 3px
      height: 100%
      cursor: col-resize
      box-sizing: border-box
      background-color: #ddd
      overflow: hidden
    .user-right
      width: 70%
      flex: 1
      display: flex
      flex-direction: column
      // border: 1px solid red
      // float: left
      box-sizing: border-box
      height: 100%
      // padding-top: 15px
      position: relative
      overflow: hidden
    .date-container
      display: flex
      justify-content: center
      align-items: center
    .user-search-btn
      margin-right: 15px
    .checkbox-more
      position: absolute
      left: 20px
      top: -15px
      background-color: #ddd
      width: 130px
      height: 30px
      display: flex
      justify-content: center
      align-items: center
      z-index: 22
      input
        margin-right: 10px
    .more-line
      position: absolute
      left: 0
      top: 0
      height: 1px
      width: 100%
      background-color: #999
      z-index: 11
    .search-container-border
       border: 1px solid #999
       border-top: none
       display: flex
       padding: 0 20px
       justify-content: center
    .search-container-input
       display: flex
       align-items: center
       margin: 23px 0 10px 0
    .search-container-middle
       margin: 23px 30px 10px 30px
    .input-name
       width: 54px
    .right-center
      border-top: 1px solid $color-border
    .right-bottom
      // overflow: auto
      overflow: hidden
      flex: 1
      position: relative
      // border: 1px solid green
      .box-all
        position: absolute
        left: 13px
        top: 6px
        z-index: 9999999
    .bread-crumb
	    height: 30px
	    line-height: 30px
	    background-color: #abcdef
	    // border: 1px solid blue
     font-size: 13px
	    box-sizing: border-box
	    text-align: left
	    padding: 0 10px
    // margin-left: 5px !important
	.input-left
	  margin-right: 10px
  .user-toolbar
    padding-right: 20px
    background-color: #DFDFDF
  	// background-color: #f0f2f5
  	// padding: 5px 0
  	// color: #fff
    // position: absolute
    // bottom: 7px
    // left: 0
    // width: 100%
  .userbox-div
    position: relative
</style>
