import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ForgetPassword from '@/pages/ForgetPassword'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import CourseInfo from '@/pages/CourseInfo'
import ModifyPassword from '@/pages/ModifyPassword'
import PersonalCenter from '@/pages/PersonalCenter'
import PersonalInfo from '@/pages/PersonalInfo'
import PublishSign from '@/pages/PublishSign'
import SignIn from '@/pages/SignIn'
import SignResult from '@/pages/SignResult'
import ModifyImg from '@/pages/ModifyImg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ForgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/CourseInfo', /* 课程详情 */
      name: 'CourseInfo',
      component: CourseInfo
    },
    {
      path: '/PersonalCenter', /* 修改密码 */
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/ModifyPassword', /* 修改密码 */
      name: 'ModifyPassword',
      component: ModifyPassword
    },
    {
      path: '/PersonalInfo', /* 个人信息 */
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/PublishSign', /* 教师发布签到 */
      name: 'PublishSign',
      component: PublishSign
    },
    {
      path: '/SignIn', /* 学生签到 */
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignResult', /* 签到结果 */
      name: 'SignResult',
      component: SignResult
    },
    {
      path: '/ModifyImg', /* 修改密码 */
      name: 'ModifyImg',
      component: ModifyImg
    }
  ],
  mode: 'history'
})
