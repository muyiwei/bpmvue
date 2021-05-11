<template>
    <div>
        节点
        <div>{{ data.activityName }}</div>
        审批人
        <div>{{ data.participants }}</div>
        <div v-if="data.children">
            <resursion v-if="data.children.length==1" :data="data.children[0]"></resursion>
            <div v-if="data.children.length>1">
                <div v-for = "(children, index) in data.children" :key="index">
                    <div @click="selectActive(children)">
                        {{children.activityName}}{{ children.active.participants }}

                    </div>
                    <div v-if="children.selected">
                         <resursion  :data="children"></resursion>
                    </div>
                </div>
            </div>
        </div> 
       
    </div>
</template>
<script>
export default {
    name: "resursion",
    props: ["data"],
    methods:{
        selectActive:function(active){
            active.selected = !active.selected;
        }
    }
};
</script>
