<template>
  <div>
    <el-table :data="rows" style="width: 100%">
      <el-table-column prop="InstanceName" label="流程名称" width="180"></el-table-column>
      <el-table-column prop="DisplayName" label="任务名称" width="180"></el-table-column>
      <el-table-column prop="ReceiveTime" label="接收时间" width="180"></el-table-column>
         <el-table-column prop="ParticipantName" label="发起人" width="180"></el-table-column>
      <el-table-column prop="OriginatorOUName" label="发起人所属组织" width="180"></el-table-column>

    </el-table>
    <loading v-show="!loading"></loading>
    <el-pagination layout="sizes, prev, pager, next" :total="total" :pageCount="iDisplayLength" @size-change="sizeChange"

 @current-change="pageChange" >

    </el-pagination>
      </div>
</template>

<script>
import { getUnfinishWorkItems } from "../../api/index";
import Loading from "@/components/Loading"
export default {
  data() {
    return {
      keyWord: "",
      iDisplayStart: 0,
      iDisplayLength: 10,
      rows:"",
      total:0,
      loading:false,
    };
  },
  components:{
Loading
  },
  created() {
      this.getUnfinishWorkItems();
  },
  computed: {
  },
  methods: {
     getUnfinishWorkItems: async function(){
       let data = {
        keyWord: this.keyWord,
        iDisplayStart: this.iDisplayStart,
        iDisplayLength: this.iDisplayLength
       };
      this.loading = true;
      let res = await  getUnfinishWorkItems(data);
      this.loading = false;
      this.rows = res.Rows;
      this.total = res.Total;
      },
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

<style>
</style>