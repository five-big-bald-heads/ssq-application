<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}">关于我们</x-header>
    </div>
    <p style="font-weight: 500;font-size: 20px; text-align: center;padding: 40px 0 0 0">上上签</p>
    <div class="divpadding">
      <img src="../assets/img.jpeg" class="imgs" >
      <p class="text">杨晨</p>
    </div>
    <div class="divpadding">
      <img src="../assets/img.jpeg" class="imgs">
      <p class="text" >林艳</p>
    </div>
    <div class="divpadding">
      <img src="../assets/img.jpeg" class="imgs" >
      <p class="text" >张斯巍</p>
    </div>
    <div class="divpadding">
      <img src="../assets/img.jpeg" class="imgs">
      <p class="text" >许玲玲</p>
    </div>
    <div class="divpadding">
      <img src="../assets/img.jpeg" class="imgs">
      <p class="text" >王徳钦</p>
    </div>
  </div>
</template>

<script>
import { XHeader, Panel, Group, XInput } from 'vux'
export default {
  name: 'AboutUs',
  components: {
    Group,
    XHeader,
    Panel,
    XInput
  }

}
</script>

<style lang="less" scoped>
.imgs{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    float: left
  }
  .text{
    padding: 20px 0  0 50px;
    float: left
  }
  .divpadding{
    padding: 30px 0 50px 80px;

}
</style>
