<template>
  <div>

哈哈哈哈
 <slot name="test" v-bind:t="yang" v-bind:t1="yang"></slot>
 <slot name="test" v-bind:t2="yang2" v-bind:t3="yang2">
 </slot>

  </div>


</template>

<script>
export default {
data(){
    return {
        yang:"xxx",
        yang2:"YYY"
    }
}
}
</script>

<style>

</style>