import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/register'
import ForgetPassword from '@/pages/ForgetPassword'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import CourseInfo from '@/pages/CourseInfo'
import Course from '@/pages/Course'
import ModifyPassword from '@/pages/ModifyPassword'
import PersonalCenter from '@/pages/PersonalCenter'
import PersonalInfo from '@/pages/PersonalInfo'
import PublishSign from '@/pages/PublishSign'
import SignIn from '@/pages/SignIn'
import SignResult from '@/pages/SignResult'
import ModifyImg from '@/pages/ModifyImg'
import CheckUpdate from '@/pages/CheckUpdate'
import PerfectInfo from '@/pages/PerfectInfo'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Register', /* 注册 */
      name: 'Register',
      component: Register
    },
    {
      path: '/Forgetpassword', /* 忘记密码 */
      name: 'Forgetpassword',
      component: ForgetPassword
    },
    {
      path: '/', /* 登陆 */
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/AboutUs', /* 关于我们 */
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/CourseInfo', /* 课程详情 */
      name: 'CourseInfo',
      component: CourseInfo
    },
    {
      path: '/PersonalCenter', /* 个人中心 */
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
      path: '/ModifyImg', /* 修改头像 */
      name: 'ModifyImg',
      component: ModifyImg
    },
    {
      path: '/CheckUpdate', /* 检查更新 */
      name: 'CheckUpdate',
      component: CheckUpdate
    },
    {
      path: '/PerfectInfo', /* 完善个人信息 */
      name: 'PerfectInfo',
      component: PerfectInfo
    },
    {
      path: '/Course', /* 课程详情 */
      name: 'Course',
      component: Course
    }
  ]
})
