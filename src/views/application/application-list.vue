<template>
<div>
    {{$route.params.appCode}}---{{$route.params.listCode}}
</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class App extends Vue {
}
</script>

<style lang='less'>
</style>