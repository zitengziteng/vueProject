<template>
  <div>
    <div class="wrapper">
      <!-- banner  incon -->
      <StaticPart />
      <!-- 列表区域 -->
      <Nearby />
    </div>
    <!-- 底部我的 -->
      <Docker />
  </div>
 
</template>

<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'
export default {
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}
</script>

<style lang="scss" scoped>
.wrapper {
  // 列表  滚动时候  溢出； 加个滚动条
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
}
</style>
