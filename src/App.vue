<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {test} from './api/index';
//import MintUI from 'mint-ui';
//import 'mint-ui/lib/style.css';
//Vue.use(MintUI);
Vue.use(ElementUI);
@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  created(){
     test({});
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
