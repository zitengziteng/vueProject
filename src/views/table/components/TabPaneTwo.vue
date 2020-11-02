<template>
  <div>
    <!-- <h1>hello world  注意效率  222222多写写</h1> -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="tab1" name="first" :key="'first'">
        <div style="background: yellow; display: inline">
            tab1内容
            tab1内容
            tab1内容
        </div>
      </el-tab-pane>

      <el-tab-pane label="tab2" name="second" :key="'second'">
        <div style="background: green; display: inline">
            tab2内容
            tab2内容
            tab2内容
        </div>
      </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
  name:'TabPaneTwo',
  data() {
    return {
      // 默认第一个选项卡
      activeName: "first"
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>