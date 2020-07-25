<template>
<div>
    <div class="df w1220">
        <div class="f1 newprod_list r1" :class="{'box_style':flag===index}" @mouseenter="moveIn(index)"  @mouseleave="moveOut(index)" v-for="(item,index) in newProductsList" :key="index">
                <div class="img_box">
                  <img :src="item.picUrl" alt="">
                </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {
        newProductsList: {
            type: Array,
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        moveIn(index){
            this.flag = index
        }

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>
.newprod_list:hover{
    box-shadow: 0px 0px 10px red;
    position: relative;
}
.img_box img{
  width: 100%;
  height: 100%;
}
</style>
