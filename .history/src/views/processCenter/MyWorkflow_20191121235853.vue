<template>
  <div class="tabel-container">
    <el-row>
      <el-col :span="6">
        <el-input placeholder="流程模板名" v-model="keyWord" @input="getUnfinishWorkItems()">
          <i slot="suffix" class="el-input__icon el-icon-search" @click="getUnfinishWorkItems()"></i>
        </el-input>
      </el-col>
    </el-row>
    <el-collapse accordion>
      <el-collapse-item v-for="workflows in workFlowGroups" :key="workflows.Code">
        <template slot="title">
          {{workflows.DisplayName}}
          <i class="header-icon el-icon-info" @click="togge(workflows)"></i>
        </template>
        <template v-show="workflows.show">
          <div v-for="workflow in workflows.children" :key="workflow.Code">{{workflow.DisplayName}}</div>
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import {
  QueryWorkflowNodes,
  queryWorkflowNodesByParentCode
} from "../../api/index";
import Loading from "@/components/Loading";
export default {
  data() {
    return {
      workFlowGroups: ""
    };
  },
  components: {
    Loading
  },
  created() {
    this.QueryWorkflowNodes();
  },
  computed: {},
  methods: {
    QueryWorkflowNodes: async function() {
      let data = {
        IsMobile: false,
        from: "portal_myWorkflow",
        limit: 20,
        offset: 0,
        order: "asc"
      };
      let res = await QueryWorkflowNodes(data);
      res = res.map(function(v) {
        v.show = false;
      });
      this.workFlowGroups = res;
    },
    togge: function(workflow) {
      if (!workflow.show && workflow.children.length == 0) {
        this.QueryWorkflowNodes(workflow);
      }
      workflow.show = !workflow.show;
    },
    queryWorkflowNodesByParentCode: async function(workflow) {
      let data = {
        Code: workflow.code
      };

      let res = await queryWorkflowNodesByParentCode(data);
      workflow.children = res;
    },
    pageChange(pageIndex) {
      this.iDisplayStart = (pageIndex - 1) * this.iDisplayLength;
    },
    sizeChange(size) {
      this.iDisplayLength = size;
      debugger;
    }
  },
  watch: {
    iDisplayStart() {
      this.getUnfinishWorkItems();
    },
    iDisplayLength() {
      this.getUnfinishWorkItems();
    }
  }
};
</script>

<style lang="less" scoped>
.tabel-container {
  position: relative;
}
</style>