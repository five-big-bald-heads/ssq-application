<template>
  <div class="body">
    <div>
      <x-header :left-options="{backText: ''}">登陆</x-header>
    </div>
    <div class="content">
      <div class="imgarea">
        <img >
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
  </div>
</template>

<script>
import { Group, Cell, XHeader, XInput, XButton, Alert } from 'vux'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      passWord: ''
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
    handleSubmit () {
      if (this.userName === '' || this.passWord === '') {
        alert('请输入用户名或密码')
      } else {
        this.$router.push('/Home')
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
