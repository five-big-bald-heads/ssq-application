<template>
  <div>
    <div>
      <x-header :left-options="{backText: ''}">忘记密码</x-header>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XHeader, XInput, XButton } from 'vux'
export default {
  name: 'ForgetPassword',
  components: {
    Group,
    Cell,
    XHeader,
    XInput,
    XButton
  }
}
</script>

<style lang="less" scoped>
</style>
