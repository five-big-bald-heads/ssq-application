<template>
  <div id="headerPadding">
    <view-box >
      <x-header :left-options="{showBack:true}">
        <div slot="left"><x-icon type="ios-arrow-left" class="cell-x-icon" size="30"></x-icon></div>
        <div>完善个人资料</div>
        <div slot="right"></div>
      </x-header>
    </view-box>
    <div class="RegisterMid">
      <x-input placeholder="" v-model="names"  title="名字:">
      </x-input>
      <x-input placeholder="" class="weui_vcode" style="padding-right:0" v-model="major"  title="专业:">
        <x-button slot="right" mini    ></x-button>
      </x-input>
      <x-input placeholder="" class="weui_vcode" style="padding-right:0" v-model="academy" title="学院:">
      </x-input>
      <x-input placeholder="" class="weui_vcode" style="padding-right:0" v-model="classid" title="班级:">
      </x-input>
    </div>
    <x-button type="primary" style="margin-top: 30px;width: 260px;border-radius: 20px;" action-type="button" class="butSize" @click.native="check()">确认</x-button>

  </div>
</template>

<script>
import { XHeader, CheckIcon, XButton, XSwitch, AlertModule, Alert } from 'vux'
import ViewBox from '../../node_modules/vux/src/components/view-box/index.vue'
import XInput from '../../node_modules/vux/src/components/x-input/index.vue'
import Group from '../../node_modules/vux/src/components/group/index.vue'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'PerfectInfo',
  data () {
    return {
      names: '',
      major: '',
      academy: '',
      classid: ''

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
    Alert,
    AlertModule
  },
  methods: {
    check: function () {
      if (this.names === '') {
        console.log('名字不能为空')
      } else if (this.major === '') {
        console.log('专业不能为空')
      } else if (this.academy === '') {
        console.log('学院不能为空')
      } else {
        axios.put('http://localhost:8080/User', qs.stringify({
          stno: '180327091',
          password: '123456',
          name: this.names,
          tel: 123456789,
          academy: this.academy,
          major: this.major,
          roleid: 1
        }), {
          emulateJSON: true
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(res => {
          if (res.data.code === 200) {
            console.log(res.data.code)
            console.log('注册成功')
            location.href = '/#/'
          }
        }).catch(function (error) {
          console.log(error)
        })
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
