<template>
<el-menu mode="horizontal">
    <el-menu-item v-for="(nav, index) in navList" :key="index">
        {{nav.name}}
    </el-menu-item>
</el-menu>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class App extends Vue {
   @Prop({})
   navList!: Array<any>;
}
</script>

<style lang='less'>
</style>