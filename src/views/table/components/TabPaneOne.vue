<template>
  <div>
    <!-- <h1>hello world  注意效率  222222多写写</h1> -->
    <el-tabs type="border-card">
      <el-tab-pane label="China">
        <!-- China -->
        <el-table
          :data="list"
          border
          style="width: 100%">
          <el-table-column
            prop="title"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="author"
            label="作者"
            width="180">
          </el-table-column>
          <el-table-column
            prop="pageviews"
            label="数字">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="USA">
        USA
         <el-table
          :data="list"
          border
          style="width: 100%">
          <el-table-column
            prop="title"
            label="标题切换"
            width="180">
          </el-table-column>
          <el-table-column
            prop="display_time"
            label="时间"
            width="180">
          </el-table-column>
          <!-- <el-table-column
            prop="status"
            label="状态">
            <el-tag :type="status | statusFilter">
            </el-tag>
          </el-table-column> -->
          <el-table-column class-name="status-col" label="Status" width="110">
            <template slot-scope="{row}">
              <el-tag :type="row.status | statusFilter">
                {{ row.status }}
              </el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="jAPAN">jAPAN</el-tab-pane>
      <el-tab-pane label="Eurozone">Eurozone</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getList } from '@/api/table';

export default {
  name:'TabPaneOne',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      getList().then(response => {
        this.list = response.data.items
        // console.log(list)
      })

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>