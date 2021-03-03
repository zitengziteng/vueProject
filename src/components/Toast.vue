<template>
  <div>
    <div class="toast">
{{message}}
    </div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  // 组件传值
  props: ['message']
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: .1rem;
  background: rgba(0,0,0,.35);
  border-radius: .05rem;
  color: #fff;
}
</style>