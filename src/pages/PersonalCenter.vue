<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}">个人中心</x-header>
    </div>
    <div class="content">
      <div class="img_area">
        <span class="span1">
          <router-link to="/ModifyImg">
            <img class="img" src="../assets/img.jpeg">
          </router-link>
        </span>
        <span>

        </span>
      </div>
      <div class="list">
        <group label-width="5.5em" label-margin-right="2em" label-align="justify">
          <cell-box is-link  link="/PersonalInfo">
            <img src="../assets/personalInfo.png" style="margin-right: 10px">个人信息
          </cell-box>
          <cell-box is-link  link="/ModifyPassword">
            <img src="../assets/pwd.png" style="margin-right: 10px">修改密码
          </cell-box>
          <cell-box is-link  link="/">
            <img src="../assets/update.png" style="margin-right: 10px">检查更新
          </cell-box>
          <cell-box is-link  link="/AboutUs">
            <img src="../assets/group.png" style="margin-right: 10px">关于我们
          </cell-box>
        </group>
      </div>
      <div class="aa">
        <x-button class="bb" type="primary" >退出登陆</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XHeader, XInput, XButton, CellBox } from 'vux'
export default {
  name: 'PersonalCenter',
  components: {
    Group,
    Cell,
    XHeader,
    XInput,
    XButton,
    CellBox
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
    height: 120px;
  }
  .span1 {
    display:inline-block;
    position: absolute;
    height: 100px;
  }
  .img{
    position: relative;
    width: 80px;
    height: 80px;
    margin-left: 20px;
    margin-top: 20px;
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
