<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}">签到</x-header>
    </div>
    <div class="content">
      <div class="signinButton">
        <x-button  class="button" @click.native="handleSubmit">
          <a>开始签到</a>
        </x-button>
      </div>
      <div class="signinTitle">
        签到情况
      </div>
      <div class="signinInfo">
        <div class="record" v-for="(item , i) in list" :key="i">
          <div class="item1">
            <div>{{item.signTime.split('T')[0]}} {{weekDay[new Date(item.signTime.split('T')[0]).getDay()]}}</div>
            <div class="item2">{{item.signTime.split('T')[1].split('.')[0]}}</div>
          </div>
          <div class="item3">已签到</div>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <alert v-model="show1" :title="'请勿重复签到'">您已签过到</alert>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XHeader, XInput, XButton, TransferDomDirective as TransferDom, Alert } from 'vux'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'SignIn',
  data () {
    return {
      courseid: '',
      show1: false,
      userName: '',
      date: '',
      time: '',
      resdata: '',
      weekDay:
        ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      list: [],
      postData: []
    }
  },
  directives: {
    TransferDom
  },
  mounted () {
    this.showData()
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
    showData: function () {
      this.userName = sessionStorage.getItem('username')
      this.courseid = sessionStorage.getItem('courseid')
      axios.get('http://localhost:8080/Student/SignRecord', {
        params: {
          courseid: this.courseid,
          studentid: this.userName
        }
      }).then((res) => {
        this.list = res.data.data
        console.log(res.data.data)
        console.log(this.userName)
        if (res.data.code === 200) {
        } else if (res.data.code === 10001) {
        }
      }, (response) => {
        // 响应错误回调
      })
    },
    handleSubmit: function () {
      this.userName = sessionStorage.getItem('username')
      this.courseid = sessionStorage.getItem('courseid')
      axios.put('http://localhost:8080/Student/SignRecord', qs.stringify({
        courseid: this.courseid,
        studentid: this.userName
      }), {
        headers: {
          token: 'true'
        }
      }).then(res => {
        this.resdata = res.data.data
        // this.time = this.resdata.split('T')
        // this.date = this.time[0] // 剥出日期
        // this.time = this.time[1]
        // this.time = this.time.split('.')
        // this.time = this.time[0] // 剥出时间
        // console.log(this.date)
        // console.log(this.time)
        if (res.data.code === 200) {
        } else if (res.data.code === 10001) {
          this.show1 = true
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    position: absolute;
    background-color: #fafbf9;
    height: 93%;
    width: 100%;
  }
  .signinButton{
    position: relative;
    background-color: white;
    height: 80px;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .button{
    background-color: white;
    height: 100%;
    width: 100%;
    font-size: 16px;
    color: #1abc9c;
  }
  button::after{
    border:none;// 去除边框
  }
  .signinTitle{
    position: relative;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    padding: 0px;
    width: 100%;
    color: #333333;
  }
  .signinInfo{
    position: relative;
    background-color: white;
    border-top: 1px solid #ececec;
    margin-top: 0px;
    height: 400px;
    width: 100%;
  }
  .record{
    position: relative;
    margin: 0px;
    border-bottom: 1px solid #ececec;
    height: 60px;
    width: 100%;
    font-size: 14px;
  }
  .item1{
    display:inline-block;
    float: left;
    position: relative;
    margin-top: 8px;
    margin-left: 10px;
    padding: 0px;
    width: 80%;
    font-size: 14px;
    background-color: #ffffff;
  }
  .item2{
    display:inline-block;
    position: relative;
    margin-top: 5px;
  }
  .item3{
    display:inline-block;
    float: right;
    position: relative;
    margin-top: 20px;
    margin-right: 10px;
    color: #b2b2b2;
  }
</style>
