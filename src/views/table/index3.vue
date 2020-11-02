<template>
  <div>
    <h1>明月独上西楼</h1>
    <div>
       <el-table
        :data="list"
        style="width: 100%">
        <el-table-column
          label="Id"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column  label="Title">
          <template slot-scope="scope">
            {{scope.row.title}}
          </template>
        </el-table-column>
        <el-table-column  label="PagePreiese">
          <template slot-scope="scope">
            {{scope.row.pageviews}}
          </template>
        </el-table-column>
          <el-table-column  label="name">
          <template slot-scope="scope">
            {{scope.row.author}}
          </template>
        </el-table-column>
          <el-table-column  label="status">
          <template slot-scope="scope">
            {{scope.row.status}}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'
 export default {
    // data() {
    //   return {
    //     tableData: [{
    //       date: '2016-05-02',
    //       name: '王小虎',
    //       address: '上海市普陀区金沙江路 1518 弄'
    //     }, {
    //       date: '2016-05-04',
    //       name: '王小虎',
    //       address: '上海市普陀区金沙江路 1517 弄'
    //     }, {
    //       date: '2016-05-01',
    //       name: '王小虎',
    //       address: '上海市普陀区金沙江路 1519 弄'
    //     }, {
    //       date: '2016-05-03',
    //       name: '王小虎',
    //       address: '上海市普陀区金沙江路 1516 弄'
    //     }]
    //   }
    // },
    // methods: {
    //   handleEdit(index, row) {
    //     console.log(index, row);
    //   },
    //   handleDelete(index, row) {
    //     console.log(index, row);
    //   }
    // }
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        getList().then(response => {
          this.list = response.data.items
          this.listLoading = false
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>