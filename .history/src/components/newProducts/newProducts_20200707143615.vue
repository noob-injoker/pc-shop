<template>
<div>
    <div class="df w122">
        <div class="f1 r1" v-for="(item,index) in newProductsList" :key="index">
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
.img_box img{
  width: 100%;
  height: 100%;
}
</style>
