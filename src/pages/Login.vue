<template>
  <div class="body">
    <div>
      <x-header :left-options="{backText: ''}">登陆</x-header>
    </div>
    <div class="content">
      <div class="imgarea">
        <img src="../assets/icon.jpg" style="width: 150px;height: 150px">
      </div>
      <div id="table" class="table">
        <div>
          <x-input  placeholder="学号/工号" v-model="userName">
            <img slot="label" style="padding-right:10px;display:block;" src="../assets/account.png">
          </x-input>
          <x-input type="password" placeholder="登陆密码" v-model="passWord" >
            <img slot="label" style="padding-right:10px;display:block;" src="../assets/password.png">
          </x-input>
        </div>
        <x-button type="primary" action-type="button" class="button" @click.native="handleSubmit">登陆</x-button>
      </div>
      <div class="rest">
        <span >
          <router-link to="/Register"><a class="text">注册</a></router-link>
        </span>
        <span style="margin-left:20px;">
          <router-link to="/ForgetPassword"><a class="text">忘记密码</a></router-link>
        </span>
      </div>
    </div>
    <div v-transfer-dom>
      <alert v-model="show1" :title="'请输入用户名'"> 用户名不能为空</alert>
    </div>
    <div v-transfer-dom>
      <alert v-model="show2" :title="'请输入密码'">密码不能为空</alert>
    </div>
    <div v-transfer-dom>
      <alert v-model="show3" :title="'用户名不存在'"> 请输入正确的用户名</alert>
    </div>
    <div v-transfer-dom>
      <alert v-model="show4" :title="'密码错误'">请输入正确的密码</alert>
    </div>
  </div>
</template>

<script type = "text/javascript">
import { Group, Cell, XHeader, XInput, XButton, TransferDomDirective as TransferDom, Alert } from 'vux'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Login',
  directives: {
    TransferDom
  },
  data () {
    return {
      userName: '',
      passWord: '',
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      resData: [],
      postData: []
    }
  },
  components: {
    Group,
    Cell,
    XHeader,
    XInput,
    XButton,
    Alert
  },
  methods: {
    handleSubmit: function () {
      if (this.userName === '') {
        this.show1 = true
      } else if (this.passWord === '') {
        this.show2 = true
      } else {
        axios.post('http://localhost:8080/login', qs.stringify({
          stno: this.userName,
          password: this.passWord
        }), {
          headers: {
            token: 'true'
          }
        }).then(res => {
          console.log(res.data)
          if (res.data.code === 200) {
            sessionStorage.setItem('username', this.userName)
            if (this.userName[0] === 'T') {
              this.$router.push('/TeacherHome')
            } else {
              this.$router.push('/Home')
            }
          } else if (res.data.code === 10001) {
            this.passWord = ''
            this.show4 = true
          } else if (res.data.code === 10004) {
            this.userName = ''
            this.show3 = true
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .body{
    width: 100%;
    height: 100%;
    background-color: #fafbf9;
  }
  .imgarea{
    margin-top: 80px;
    width: 150px;
    height: 150px;
    margin-left: 30%;
    background-color: #1abc9c;
  }
  .table{
    margin-top: 80px;
  }
  .button{
    margin-top: 20px;
    width: 80%;
  }
  .rest{
    margin-top: 10px;
    margin-left: 60%;
  }
  .text{
    color: #1abc9c
  }
  a{
    text-decoration:none;
    font-size: 16px;
  }
</style>
