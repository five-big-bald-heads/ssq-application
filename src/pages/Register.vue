<template>
  <div id="headerPadding">
    <view-box >
      <x-header :left-options="{showBack:true}">
        <div slot="left"><x-icon type="ios-arrow-left" class="cell-x-icon" size="30"></x-icon></div>
        <div>注册</div>
        <div slot="right"></div>
      </x-header>
    </view-box>
    <div class="RegisterMid">
      <group>
        <x-input placeholder="输入工号/学号" v-model="ClassNumber">
          <font-awesome-icon icon="address-card" fixed-width class="pos" slot="label"  />
        </x-input>
        <x-input placeholder="输入手机号码" v-model="PhoneNumber">
          <font-awesome-icon icon="tablet" fixed-width class="pos"  slot="label" />
        </x-input>
        <x-input placeholder="请输入验证码" class="weui_vcode" style="padding-right:0" v-model="VerCode">
          <font-awesome-icon icon="comment" fixed-width class="pos"  slot="label" />
          <x-button slot="right" mini >发送验证码</x-button>
        </x-input>
        <x-input placeholder="设置登陆密码" v-model="PassWord">
          <font-awesome-icon icon="unlock-alt" fixed-width class="pos"  slot="label" />
          <x-switch slot="right" title="" v-model="value" ></x-switch>
        </x-input>
      </group>
    </div>
    <div style="padding-left: 70px">
      <check-icon :value.sync="demo1">已阅读并同意《<a>用户服务协议</a>》</check-icon>

    </div>
    <x-button type="primary" style="margin-top: 30px;width: 260px;border-radius: 20px;" action-type="button" class="butSize" @click.native="handleSubmit">确认</x-button>

  </div>
</template>

<script>
import { XHeader, CheckIcon, XButton, XSwitch, Alert } from 'vux'
import ViewBox from '../../node_modules/vux/src/components/view-box/index.vue'
import XInput from '../../node_modules/vux/src/components/x-input/index.vue'
import Group from '../../node_modules/vux/src/components/group/index.vue'

export default {
  data () {
    return {
      ClassNumber: '',
      PhoneNumber: '',
      VerCode: '',
      PassWord: '',
      demo1: false,
      value: false
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
      if (this.ClassNumber === '' || this.PhoneNumber === '' || this.VerCode === '' || this.PassWord === '') {
        alert('以上不能为空')
      } else {
        this.$router.push('/Login')
      }
    }
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
