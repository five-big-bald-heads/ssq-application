<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}">首页</x-header>
    </div>
    <div class="content">
      <div class="group">
        <router-link to="/SignIn">
        <div class="course_item" >
          <span class="span1">
            <img class="course_img" src="../assets/course_img/ML.jpg">
          </span>
          <span class="span2">
            <router-link to="/CourseInfo" class="course_name"><a>机器学习</a></router-link>
          </span>
        </div>
        </router-link>
        <router-link to="/SignIn">
          <div class="course_item" >
          <span class="span1">
            <img class="course_img" src="../assets/course_img/ML.jpg">
          </span>
            <span class="span2">
            <router-link to="/CourseInfo" class="course_name"><a>机器学习</a></router-link>
          </span>
          </div>
        </router-link>
        <router-link to="/SignIn">
          <div class="course_item" >
          <span class="span1">
            <img class="course_img" src="../assets/course_img/ML.jpg">
          </span>
            <span class="span2">
            <router-link to="/CourseInfo" class="course_name"><a>机器学习</a></router-link>
          </span>
          </div>
        </router-link>
      </div>
    <div class="bottom">
      <span class="icon_course">
        <img src="../assets/course_icon.png">
      </span>
      <span class="icon_person">
        <router-link to="/PersonalCenter">
          <img src="../assets/person_icon.png">
        </router-link>
      </span>
    </div>
  </div>
  </div>
</template>

<script>
import { Group, Cell, XHeader, XInput, XButton } from 'vux'
export default {
  name: 'Register',
  components: {
    Group,
    Cell,
    XHeader,
    XInput,
    XButton
  },
  methods: {
    toCourse () {
      this.$router.push('/Course')
    },
    toPersonalCenter () {
      this.$router.push('/PersonalCenter')
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
  .bottom{
    position: absolute;
    width: 100%;
    height: 5%;
    background-color: #ffffff;
    bottom: 10px;
    border-top: solid 0.5px #d3d3d3;
  }
  .icon_course{
    position: relative;
    margin-left: 80px;
    top: 5px;
  }
  .icon_person{
    position: relative;
    margin-left: 180px;
    top: 5px;
  }
  .course_item{
    background-color: #ffffff;
    height: 100px;
    width: 100%;
    border-bottom: solid 0.5px #d3d3d3;
  }
  .span1{
    display:inline-block;
    position: absolute;
    height: 100px;
  }
  .span2{
    display:block;
    position: absolute;
    margin-left: 100px;
    height: 100px;
  }
  a{
    text-decoration:none;
    font-size: 16px;
    color: #8a8a8a;
  }
  .course_img{
    position: relative;
    margin-left: 20px;
    margin-top: 15px;
    width: 70px;
    height: 70px;
  }
  .course_name{
    position: relative;
    top: 15px;
  }
</style>
