<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <el-main>
        <el-row>
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <div class="imglft">
                <span class="el-icon-help" >图标</span>
              </div>
              <div class="cardtext">
                <p>好吃的汉堡</p>
                <p>10224</p>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
              <div class="imglft">
                <span class="el-icon-help" >图标</span>
              </div>
              <div class="cardtext">
                <p>好吃的汉堡</p>
                <p>10224</p>
              </div>
            </el-card>
          </el-col>
      </el-row>
      <el-row>
        <el-col :span="23">
          <div class="linecard">
            <!-- lineChart -->
            <line-chart></line-chart>
          </div>
        </el-col>
      </el-row>
      <!-- pie -->
      <el-row>
        <el-col :span="11">
          <div class="linecard">
            <pie-chart></pie-chart>
          </div>
        </el-col>
        <el-col :span="11">
          <div class="linecard">
            <pie-chart></pie-chart>
          </div>
        </el-col>
      </el-row>
      
    </el-main>
  </div>
</template>

<script>
import echarts from 'echarts'
import { mapGetters } from 'vuex'
import lineChart from '@/views/newChart/lineChart'
import pieChart from '@/views/newChart/pie'
export default {
  name: 'Dashboard',
  components:{
    lineChart,
    pieChart
  }
}
</script>

<style lang="scss" scoped>
// bg
   .el-main {
    background-color:#f0f2f5;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }
  .lft{
    color: pink;
    float: left;
    font-size: 24px;
  }
  .rht {
    color: pink;
    font-size: 24px;
    float: right;
  }
  .el-col-6 {
    height: 108px;
    background-color: aqua;
    color:  lawngreen;
    padding: 10,20,10 30px;
  }
  .imglft {
    float: left;
    width: 30%;
    height: 30%;
  }
  .cardtext{
    padding: 14px;
    float: right;
    color: black;
    font-weight: bold;
  }
  .el-icon-help {
    float: left;
    margin: 14px 0 0 14px;
    padding: 23px;
    -webkit-transition: all .38s ease-out;
    transition: all .38s ease-out;
    border-radius: 6px;
  }
  .el-col {
    margin: 15px;
  }
  // 折线图
  .linecard {
    background: #fff;
    height: 170px;
    font-weight: bold;
  }
</style>
