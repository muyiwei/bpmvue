<template>
<div>

   <router-view>
    </router-view>       
</div>
</template>
<script>
export default{
    created:function(){
        this.$router.push({
            name:'login'
        })
    }
}
</script>

<style scoped>

</style>