<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}">首页</x-header>
    </div>
    <div class="content">
      <div class="group">
        <div>
          <router-link to="/SignIn"  v-for="(item, i) in list" :key="i">
            <div class="course_item" >
          <span class="span1">
            <img class="course_img" src="../assets/course_img/ML.jpg">
          </span>
              <span class="span2" >
            <div to="/CourseInfo" class="course_name" >
              <p ref="CourseName" >课程：{{item.courseName}}</p>
              <p ref="CourseName" >考试时间：{{item.examTime}}</p>
              <p ref="CourseName" >任课老师：{{item.teacherName}}</p>
            </div>
          </span>
            </div>
          </router-link>
        </div>
        <!--<router-link to="/SignIn">-->
          <!--<div class="course_item" >-->
          <!--<span class="span1">-->
            <!--<img class="course_img" src="../assets/course_img/ML.jpg">-->
          <!--</span>-->
            <!--<span class="span2">-->
            <!--<router-link to="/CourseInfo" class="course_name"><a>机器学习</a></router-link>-->
          <!--</span>-->
          <!--</div>-->
        <!--</router-link>-->
        <!--<router-link to="/SignIn">-->
          <!--<div class="course_item" >-->
          <!--<span class="span1">-->
            <!--<img class="course_img" src="../assets/course_img/ML.jpg">-->
          <!--</span>-->
            <!--<span class="span2">-->
            <!--<router-link to="/CourseInfo" class="course_name"><a>机器学习</a></router-link>-->
          <!--</span>-->
          <!--</div>-->
        <!--</router-link>-->
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
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'home',
  data () {
    return {
      listData: [
        {'courseId': 1, 'examTime': '2019-06-20', 'teacherId': '180327001', 'courseName': '高级机器学习', 'teacherName': 'zhao'},
        {'courseId': 1, 'examTime': '2019-06-20', 'teacherId': '180327001', 'courseName': '高级机器学习', 'teacherName': 'zhao'}
      ],
      list: [],
      nihao: ''
    }
  },
  components: {
    Group,
    Cell,
    XHeader,
    XInput,
    XButton
  },
  mounted () {
    this.showData()
  },
  methods: {
    toCourse: function () {
      this.CourseName = this.$refs.CourseName.innerText
      //      this.$router.push({
      //        path: '/CourseInfo',
      //        query: {
      //          CourseName: this.CourseName
      //        }
      //      })
    },
    toPersonalCenter () {
      this.$router.push('/PersonalCenter')
    },
    showData () {
      //      const orderData = { 'stno': '180327001' }
      //      sessionStorage.setItem('courseinfo', JSON.stringify(orderData))
      //      const dataB = JSON.parse(sessionStorage.getItem('courseinfo'))
      axios.get('http://localhost:8080/Student/Course', qs.stringify({
        stno: '180327001'
      }), {
        emulateJSON: true
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(res => {
        this.list = res.data.data
        console.log(this.list)
      })
        .catch(function (error) {
          console.log(error)
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
