<template>
<div>

    <div class="fs18">
        热门商品
    </div>



    <div class="df loop_box w1220">

        <div class="f1 g1 df f-column a-center j-center loop" v-for="(item,index) in hotProductsList" :key="index">
            <div>
                <img class="img r1 h100" :src="item.productImageBig" alt="">
            </div>
            <div class="m-t-10">
                {{item.productName}}
            </div>

            <div class="fs12 m-t-10">
                {{item.subTitle}}
            </div>

            <div class="fs18 m-t-20 colorRed">
                ￥:{{item.salePrice}}.00
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
.colorRed{
  c
}
.img{
  width:206px;
  height:206px;
}
.loop_box{
  height: 430px;
  background: yellow;
}
.loop{
  background: #000;
}
</style>
