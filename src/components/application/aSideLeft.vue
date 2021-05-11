<template>
  <div>
    <el-menu default-active="" mode="vertical">
      <template v-for="(menu, index) in AsideList">
        <el-menu-item v-if="!menu.children" :key="index">{{
          menu.name
        }}</el-menu-item>
        <el-submenu v-else index="index" :key="index">
          <template slot="title">
            <span>{{menu.name}}</span>
          </template>
          <template v-for="(submenu, subIndex) in menu.children">
              <el-menu-item index="index+'-'+subIndex" :key="subIndex">{{submenu.name}}</el-menu-item>
          </template>
          
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class App extends Vue {
  @Prop({})
  AsideList!: Array<any>;
}
</script>

<style lang='less'>
</style>