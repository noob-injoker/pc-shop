<template>
<div>

    <div class="fs18">
        热门商品
    </div>



    <div class="df loop_box w1220">

        <div class="f1 b1 loop" v-for="(item,index) in hotProductsList" :key="index">
            <div>
                <img class="img r1 h100" :src="item.productImageBig" alt="">
            </div>
            <div>
                {{item.productName}}
            </div>

            <div class="fs12">
                {{item.subTitle}}
            </div>

            <div class="fs18">
                {{item.salePrice}}
            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        hotProductsList: {
            type: Array
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
.img{
  width:206px;
  height:206px;
}
.loop_box{

}
</style>
