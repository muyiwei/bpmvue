<template>
  <div class="tabel-container">
    <el-row>
      <el-col  :span="6">
  <el-input
    placeholder="流程模板名"
    v-model="keyWord" @input="getUnfinishWorkItems()">
    <i slot="suffix" class="el-input__icon el-icon-search" @click="getUnfinishWorkItems()"></i>
  </el-input>
      </el-col>
    </el-row> 
    <el-table :data="rows" style="width: 100%">
      <el-table-column prop="InstanceName" label="流程名称" width="180"></el-table-column>
      <el-table-column prop="DisplayName" label="任务名称" width="180"></el-table-column>
      <el-table-column prop="ReceiveTime" label="接收时间" width="180"></el-table-column>
         <el-table-column prop="ParticipantName" label="发起人" width="180"></el-table-column>
      <el-table-column prop="OriginatorOUName" label="发起人所属组织" width="180"></el-table-column>

    </el-table>
    <loading v-show="loading"></loading>
    <el-pagination layout="sizes, prev, pager, next" :total="total" :pageCount="iDisplayLength" @size-change="sizeChange"

 @current-change="pageChange" >

    </el-pagination>
      </div>
</template>

<script>
import { QueryWorkflowNodes,queryWorkflowNodesByParentCode } from "../../api/index";
import Loading from "@/components/Loading"
export default {
  data() {
    return {
        workflows:"",
  
    };
  },
  components:{
     Loading
  },
  created() {
      this.QueryWorkflowNodes();
  },
  computed: {
  },
  methods: {
     QueryWorkflowNodes: async function(){
       let data = {
        IsMobile: false,
        from: "portal_myWorkflow",
        limit: 20,
        offset: 0,
        order: "asc"
  
       };
      this.loading = true;
      let res = await  QueryWorkflowNodes(data);
      this.loading = false;
      this.rows = res.Rows;
      this.total = res.Total;
      },
      queryWorkflowNodesByParentCode:async function(){
                 let data = {
        IsMobile: false,
        from: "portal_myWorkflow",
        limit: 20,
        offset: 0,
        order: "asc"
  
       };
      this.loading = true;
      let res = await  QueryWorkflowNodes(data);
      this.loading = false;
      this.rows = res.Rows;
      this.total = res.Total;
      }
      ,
      pageChange(pageIndex){
          this.iDisplayStart = (pageIndex-1)*this.iDisplayLength;
      },
      sizeChange(size){
        this.iDisplayLength = size;
        debugger;
      }
  },
  watch:{
    iDisplayStart(){
      this.getUnfinishWorkItems();
    },
    iDisplayLength(){
      this.getUnfinishWorkItems();
    }
  }
};
</script>

<style lang="less" scoped>
.tabel-container{
  position:relative;
}
</style>