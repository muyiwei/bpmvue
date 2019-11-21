<template>

<div class="loading">

</div>

</template>

<script>
export default {

}
</script>

<style scope lang="less">

.loading{
    background:url(../css/img/loading.png);
    width:26px;
    height:26px;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    0% {
        transform:rotate(0)
    }
    100% {
        transform: rotate(360deg)
    }
}
</style>