<template>
  <div id="headerPadding">
    <view-box >
      <x-header :left-options="{showBack:false}">
        <!--<div slot="left"><x-icon type="ios-arrow-left" class="cell-x-icon" size="30"></x-icon></div>-->
        <div>主页</div>
        <div slot="right"></div>
      </x-header>
    </view-box>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="#">
        <span slot="label"></span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="#">
        <span slot="label"></span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
import { XHeader, CheckIcon, XButton, Tabbar, TabbarItem } from 'vux'
import ViewBox from '../../node_modules/vux/src/components/view-box/index.vue'
import XInput from '../../node_modules/vux/src/components/x-input/index.vue'
import Group from '../../node_modules/vux/src/components/group/index.vue'

export default {
  components: {
    Group,
    XInput,
    ViewBox,
    XHeader,
    CheckIcon,
    XButton,
    Tabbar,
    TabbarItem
  }
}

</script>
<style>

</style>
