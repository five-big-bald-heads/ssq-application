<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}">个人信息</x-header>
    </div>
    <div style="padding: 40px 50px 0 70px">
      <flexbox orient="vertical">
        <flexbox-item><div class="flex-demo">学号：</div></flexbox-item>
        <flexbox-item><div class="flex-demo">姓名：</div></flexbox-item>
        <flexbox-item><div class="flex-demo">学院：</div></flexbox-item>
        <flexbox-item><div class="flex-demo">专业：</div></flexbox-item>
        <flexbox-item><div class="flex-demo">手机：</div></flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XHeader, XInput, XButton, Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'PersonalInfo',
  components: {
    Group,
    Cell,
    XHeader,
    XInput,
    XButton,
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="less" scoped>
.flex-demo{
  font-weight: 500;
  font-size: 15px;
}
</style>
