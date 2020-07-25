<template>
<div>
    <div class="df w1220">
        <div class="f1 newprod_list r1"    v-for="(item,index) in newProductsList" :key="index">
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
.img_box:hover{
    baibox-shadow: 0px 0px 10px rgba(0,0,0,0.8) inset,0px 0px 5px rgba(200,200,200,0.5);
    position: relative !important;
    z-index: 888;
}
.img_box img{
  width: 100%;
  height: 100%;
}
</style>
