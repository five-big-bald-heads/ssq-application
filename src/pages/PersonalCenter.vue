<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}">个人中心</x-header>
    </div>
    <div class="content">
      <div class="img_area">
        <x-button class="buttontype" action-type="button" @click.native="actionsheet">
        <span class="span1">
            <img class="img" src="../assets/icon.jpg">
        </span>
          <span class="span2">
          <div class="name">{{name}}</div>
          <div class="number">{{userName}}</div>
        </span>
        </x-button>
      </div>
      <actionsheet
        :menus= "data"
        v-model="sheetVisible"
        @on-click-menu-menu1="getCamera"
        @on-click-menu-menu2="getImage"
        show-cancel>
      </actionsheet>
      <div class="list">
        <group label-width="5.5em" label-margin-right="2em" label-align="justify">
          <cell-box is-link  link="/PersonalInfo">
            <img src="../assets/personalInfo.png" style="margin-right: 10px">个人信息
          </cell-box>
          <cell-box is-link  link="/ModifyPassword">
            <img src="../assets/pwd.png" style="margin-right: 10px">修改密码
          </cell-box>
          <cell-box is-link  link="/CheckUpdate">
            <img src="../assets/update.png" style="margin-right: 10px">检查更新
          </cell-box>
          <cell-box is-link  link="/AboutUs">
            <img src="../assets/group.png" style="margin-right: 10px">关于我们
          </cell-box>
        </group>
      </div>
      <div class="aa">
        <x-button class="bb" type="primary" @click.native="LoginOut">退出登陆</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XInput, XButton, CellBox, Actionsheet } from 'vux'
  import axios from 'axios'
  export default {
    name: 'PersonalCenter',
    components: {
      Group,
      Cell,
      XHeader,
      XInput,
      XButton,
      Actionsheet,
      CellBox
    },
    data () {
      return {
        // action sheet 选项内容
        userName: '',
        name: '',
        sheetVisible: false,
        data: {
          menu1: '拍照',
          menu2: '从相册中选择'
        }
      }
    },
    mounted () {
      this.showData()
    },
    methods: {
      actionsheet () {
        this.sheetVisible = true
      },
      getCamera () {
        console.log('拍照')
      },
      getImage () {
        console.log('相册')
      },
      showData () {
        this.userName = localStorage.getItem('username')
        axios.get('http://101.132.46.183:8080/Self', {
          params: {
            stno: this.userName
          }
        }).then((response) => {
          this.name = response.data.data.name
        }, (response) => {
          // 响应错误回调
        })
      },
      LoginOut () {
        localStorage.removeItem('username')
        localStorage.removeItem('Flag')
        localStorage.removeItem('isStudent')
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    background-color: #fafbf9;
    position: absolute;
    width: 100%;
    height: 93%;
  }
  .img_area{
    background-color: #ffffff;
    height: 110px;
  }
  .buttontype{
    background-color: #ffffff;
    outline: none;
    width: 100%;
    border:none;
  }
  .buttontype::after{
    border: none
  }
  .span1 {
    display:inline-block;
    float: left;
    height: 100px;
  }
  .span2 {
    display:inline-block;
    margin-right: 130px;
    margin-top: 7px;
    float: right;
    height: 100px;
  }
  .name{
    float: left;
  }
  .number{
    margin-top: 50px;
  }
  .img{
    position: relative;
    width: 80px;
    height: 80px;
    margin-left: 10px;
    margin-top: 15px;
  }
  .cell {
    padding-top: 15px;
    padding-bottom: 15px;
    color: #333;
  }
  .list{
    position: relative;
    width: 100%;
  }
  .bb{
    position: relative;
    width: 80%;
    margin-top: 30px;
  }

  /*.img {*/
  /*display: block;*/
  /*margin-right: 15px;*/
  /*}*/
  /*.aa{*/
  /*position: absolute;*/
  /*margin: 10px;*/
  /*width: 100%;*/
  /*height: 130px;*/
  /*background-color: white;*/
  /*}*/
</style>
