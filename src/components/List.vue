<template lang="html">
  <div class="">
    <h3>List</h3>
    <router-link to="/write">
      <i class="el-icon-edit">Write</i>
    </router-link>

    <el-table
     :data="allData"
     style="width: 100%">
     <el-table-column
       prop="ID"
       label="ID"
       width="180">
     </el-table-column>
     <el-table-column
       prop="POSTING"
       label="POSTING">
     </el-table-column>
    <el-table-column
    label="Operations"
    >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="edit"
          type="success"
          >Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="remove"
          >Delete</el-button>
      </template>
    </el-table-column>
   </el-table>
  </div>
</template>

<script>
import module from '@/module'

export default {
  name: 'List',
  created() {
    this.allData = module.getItem()
  },
  data() {
    return {
      allData: [],
    }
  },
  methods: {
    edit() {
      console.log('edit');
    },
    remove() {
      console.log('remove');
    }
  },
}
</script>

<style lang="css">
</style>
