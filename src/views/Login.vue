<template>
<el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <span class="tool-bar"></span>
    <h2 class="title">系统登录</h2>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
      <el-button type="primary" style="width:48%;" @click.native.prevent="login" :loading="loading">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import Cookies from "js-cookie"
  import qs from "qs"
  import axios from "axios"
  import jm from '../common/js/aes.js'
  export default {
    name: 'Login',
    data() {
      return {
        loading: false,
        loginForm: {
          username: '',
          password: '',
          captcha: '',
          src: ''
        },
        fieldRules: {
          username: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        },
        checked: true
      }
    },
    methods: {
      login() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            let _this = this
               this.loading = true
               let passF = jm.encrypt(this.loginForm.password)
               // console.log(passF)
               // let passF = this.loginForm.password
               let userInfo = {
                 username: this.loginForm.username,
                 password: passF
               }
               let userValue = 'username='+this.loginForm.username+'&password='+passF;
               // let userValue = qs.stringify(userInfo).replace(/\%2/g,'/').replace(/\%3D/g,'=').replace(/\/F/g,'/').replace(/\/B/g,'+')
               // console.log(userValue)
               // http://10.89.135.117:9014
               axios.post('/haeoms/login',
                 userValue,
               ).then((res) => {
                 if (res.data.code == '00') { // 添加
                   // Cookies.set('token', res.data.responseBody.token) // 放置token到Cookie // 添加2
                   Cookies.set('sessionUserToken', res.data.responseBody.sessionUserToken)
                   Cookies.set('LtpaToken2', res.data.responseBody.sessionUserToken)
                   // sessionStorage.setItem('sessionUserToken', res.data.responseBody.sessionUserToken)
                   this.$store.commit('menuRouteLoaded', false) //要求重新加载导航菜单
                   this.$router.push('/') // 登录成功，跳转到主页
                 } else {
                  this.$alert('账号或密码错误')
                 }
                 this.loading = false
               }).catch(function(error) {})
          }
        })

      },
      refreshCaptcha: function() {
        this.loginForm.src = this.global.baseUrl + "captcha.jpg?t=" + new Date().getTime();
      },
      reset() {
        this.$refs.loginForm.resetFields()
      }
    },
    mounted() {
      if (document.cookie) {
        let cookies = document.cookie.split(";");//将所有cookie键值对通过分号分割为数组
        // console.log(cookies)
        for (let i=0;i<cookies.length;i++) {
          cookies[i] = cookies[i].trim()
          // let exp = new Date()//获取客户端本地当前系统时间
          // exp.setTime(0)
          document.cookie = cookies[i] + ";path=/;expires=" + (new Date(0)).toUTCString()
          document.cookie = cookies[i] + ";path=/haeoms/;expires=" + (new Date(0)).toUTCString()
          document.cookie = cookies[i] + ";path=/;domain=" +document.domain+";expires=" + (new Date(0)).toUTCString()
          document.cookie = cookies[i] + ";path=/haeoms/;domain=" +document.domain+";expires=" + (new Date(0)).toUTCString()
        }
        // console.log(document.cookie)
      }
      // this.refreshCaptcha()
      // var _this = this
      // window.addEventListener('click',function () {
      //   _this.dropNone1 = false
      //   _this.dropUpFlag1 = false
      // })
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    height: 100%;
    max-height: 240px;
    overflow-y: auto;
    overflow-x: hidden;
    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }
  }
</style>
