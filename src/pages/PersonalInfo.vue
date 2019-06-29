<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}">个人信息</x-header>
    </div>
    <div>
      <div class="list">
        <group>
          <cell :title="'姓名'" :value="('Protected')">{{name}}</cell>
          <cell :title="'学号'" :value="('Protected')">{{userName}}</cell>
          <cell :title="'学院'" :value="('Protected')">{{academy}}</cell>
          <cell :title="'专业'" :value="('Protected')">{{major}}</cell>
          <cell :title="'手机'" :value="('Protected')">{{tel}}</cell>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XHeader, XInput, XButton } from 'vux'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'PersonalInfo',
  components: {
    Group,
    Cell,
    XHeader,
    XInput,
    XButton
  },
  data () {
    return {
      userName: '',
      name: '',
      major: '',
      academy: '',
      tel: '',
      stno: '',
      list: []
    }
  },
  mounted () {
    this.showData()
  },
  // 存放方法
  methods: {
    showData: function () {
      this.userName = sessionStorage.getItem('username')
      //  console.log(this.userName)
      axios.get('http://localhost:8080/Self', {
        stno: this.userName
      }).then((response) => {
        // 响应正确回调
        // this.infoList = response.data// 把数据存放到data中
        // console.log(response.data.data.name)
        // console.log(response.data.data.major)
        // console.log(response.data.data.academy)
        // console.log(response.data.data.stno)
        // console.log(response.data.data.tel)
        this.name = response.data.data.name
        this.major = response.data.data.major
        this.academy = response.data.data.academy
        this.stno = response.data.data.stno
        this.tel = response.data.data.tel
      }, (response) => {
        // 响应错误回调
      })

      axios.get('http://localhost:8080/Student/Course', qs.stringify({
        stno: '180327001'
      }), {
        headers: {
          token: 'true'
        }
      }).then(res => {
        // console.log(res.data)
        if (res.data.code === 200) {
          // this.list = res.data.data
          // console.log(this.list)
        } else if (res.data.code === 10001) {
          // this.resData = res.data
          // Alert(res.data.msg)
        }
      })
      axios.get('http://localhost:8080/Student/Course', {
        stno: this.userName
      }).then((res) => {
        this.list = res.data.data
        console.log(this.list)
        if (res.data.code === 200) {
        } else if (res.data.code === 10001) {
        }
      }, (response) => {
        // 响应错误回调
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .flex-demo{
    font-weight: 500;
    font-size: 15px;
  }
</style>
