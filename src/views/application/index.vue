<template>
  <el-container>
    <el-header>
      <header-menu :navList="appList"></header-menu>
    </el-header>
    <el-aside>
      <a-side-left :AsideList="applicationList"></a-side-left>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {} from "vue-class-component"
import { getApplist, getApplicationList } from "@/api";
import aSideLeft from "@/components/application/aSideLeft.vue";
import headerMenu from "@/components/application/headerMenu.vue";
@Component({
  components: {
    aSideLeft,
    headerMenu,
  },
})
export default class App extends Vue {
  appList: Array<any> = [];
  applicationList: Array<any> = [];

  async created() {
    await this.getApplist();
  }
  async getApplist() {
    let res: any = await getApplist({});
    if (res.code == 0) {
      this.appList = res.data;
    }
    let appCode = this.$route.params.appCode;
    let app = this.appList.find((app) => app.code == appCode);
    if (!app) {
      appCode = this.appList[0].code;
    }
    this.getListByCode(appCode);
  }
  async getListByCode(code: string) {
    let res: any = await getApplicationList({ code });
    if (res.code == 0) {
      this.applicationList = res.data;
    }
    let listCode = this.$route.params.listCode;
    let application = this.applicationList.find(
      (item) => item.code == listCode
    );
    if (!application) {
      listCode = this.applicationList[0].code;
      this.$router.push({
        name: "applicationList",
        params: {
          appCode: code,
          listCode: listCode,
        },
      });
    }
  }
}
</script>

<style lang="less"></style>
