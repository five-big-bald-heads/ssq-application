<template>
  <div id="headerPadding">
    <view-box >
      <x-header :left-options="{showBack:true}">
        <div slot="left"><x-icon type="ios-arrow-left" class="cell-x-icon" size="30"></x-icon></div>
        <div>忘记密码</div>
        <div slot="right"></div>
      </x-header>
    </view-box>
    <div class="RegisterMid">
      <x-input placeholder="输入手机号码" v-model="PhoneNumber" :max="11"  :min="11" >
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/phone.png">
      </x-input>
      <x-input placeholder="短信验证码" class="weui_vcode" style="padding-right:0" v-model="VerCode" ref="note" type="number" >
        <font-awesome-icon icon="comment" fixed-width class="pos"  slot="label" />
        <x-button slot="right" mini  @click.native="getVerifyCode()" :class="btnClassName" :disabled="btnBoolen">{{btnValue}}</x-button>
      </x-input>
        <x-input placeholder="输入新的登陆密码" class="weui_vcode" style="padding-right:0" v-model="PassWord">
          <font-awesome-icon icon="comment" fixed-width class="pos"  slot="label" />
        </x-input>
    </div>
    <x-button type="primary" style="margin-top: 30px;width: 260px;border-radius: 20px;" action-type="button" class="butSize" @click.native="handleSubmit">确认</x-button>

  </div>
</template>

<script>
import { XHeader, CheckIcon, XButton, XSwitch, Alert } from 'vux'
import ViewBox from '../../node_modules/vux/src/components/view-box/index.vue'
import XInput from '../../node_modules/vux/src/components/x-input/index.vue'
import Group from '../../node_modules/vux/src/components/group/index.vue'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'ForgetPassword',
  data () {
    return {
      ClassNumber: '',
      PhoneNumber: '',
      VerCode: '',
      PassWord: '',
      demo1: false,
      value: false,
      btnBoolen: false,
      btnClassName: 'btn',
      btnValue: '获取短信验证码'
    }
  },
  components: {
    Group,
    XInput,
    ViewBox,
    XHeader,
    CheckIcon,
    XButton,
    XSwitch,
    Alert
  },
  methods: {
    handleSubmit () {
      if (this.VerCode === '' || this.PhoneNumber === '' || this.PassWord === '') {
        alert('以上不能为空')
      } else {
        this.$router.push('/Login')
      }
    },
    getVerifyCode () {
      // 获取验证码
      if (this.validatePhone()) {
        this.validateBtn()
        // 发送网络请求
        axios.post('http://localhost:8080/Code', qs.stringify({
          tel: this.PhoneNumber
        }), {
          emulateJSON: true
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(res => {
          console.log(res.data)
        })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    validatePhone () {
      // 判断输入的手机号是否合法
      if (!this.PhoneNumber) {
        this.show1 = true
        this.ShowText = '手机号码不能为空'
        console.log(this.errors)
        return false
      } else if (!/^1[345678]\d{9}$/.test(this.PhoneNumber)) {
        this.show1 = true
        this.ShowText = '手机号码非法'
        console.log(this.errors)
        return false
      } else {
        this.errors = {}
        this.btnBoolen = false
        this.btnClassName = 'btns'
        return true
      }
    },
    validateBtn () {
      // 倒计时
      let time = 60
      let timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer)
          this.btnBoolen = false
          this.btnValue = '获取验证码'
        } else {
          this.btnValue = time + '秒后重试'
          this.btnBoolen = true
          time--
        }
      }, 1000)
    },
    register: function () {
      if (this.ClassNumber.length !== 9) {
        this.show1 = true
        this.ShowText = '请输入有效的学号，需是9位'
      } else if (this.PhoneNumber.length !== 11) {
        this.show1 = true
        this.ShowText = '请输入有效的手机号码，需是11位'
      } else if (this.VerCode.length !== 6) {
        this.show1 = true
        this.ShowText = '请输入6位验证码'
      } else {
        axios.post('http://localhost:8080/register', qs.stringify({
          stno: this.ClassNumber,
          tel: this.PhoneNumber,
          code: this.VerCode,
          password: this.PassWord
        }), {
          emulateJSON: true
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(res => {
          console.log(res.data)
          location.href = '/#/PerfectInfo'
        })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    getValue: function () {
      let note = this.$refs.note.value // 短信验证码
      let notes = window.localStorage.getItem('note')
      console.log(note)
      console.log(notes)
      if (note === '') {
        this.$alert('短信验证码不能为空')
        return false
      } else if (note === notes) {
        this.$alert('短信验输入正确')
        return true
      } else {
        this.$alert('短信验输入错误')
        this.$refs.note.value = ''
        return false
      }
    },
    changeType () {
      if (this.value1 === true) {
        this.pwdType = 'text'
        console.log(this.pwdType)
        console.log(this.value1)
      } else {
        this.pwdType = 'password'
        console.log(this.pwdType)
        console.log(this.value1)
      }
    },
    changePass (value) {
      this.visible = !(value === 'show')
    } //  判断渲染，true:暗文显示，false:明文显示
  }
}

</script>
<style>
  #headerPadding{
    padding: 0px;
  }
  .RegisterMid{
    padding:50px 60px 10px 60px;
  }
  .pos{
    padding-right:20px;
  }
  .butSize{
    width: 50px;
  }
  .cell-x-icon {

    display: block;

    fill: #ffffff;

  }
</style>
