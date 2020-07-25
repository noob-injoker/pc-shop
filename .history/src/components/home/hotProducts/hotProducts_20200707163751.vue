<template>
<div>

    <div class="hot_box  h60 df a-center p-l-20 fs18">
        热门商品
    </div>

    <div class="df loop_box w1220">

        <div @mouseenter="enterArea" :style="{'box-shadow':shadow}" @mouseleave="leaveArea" class="f1 g1 df f-column a-center j-center loop" v-for="(item,index) in hotProductsList" :key="index">
            <div>
                <img class="img r1 h100" :src="item.productImageBig" alt="">
            </div>
            <div class="m-t-10">
                {{item.productName}}
            </div>

            <div class="fs12 m-t-10 title_box">
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
          shadow:'20px 0px 10px gray',

        }
    },
    methods: {
      enterArea(){
        this.shadow = '20px 0px 10px red'
        
      },
      leaveArea()

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>


.title_box {
    color: #d0d0d0;
}

.colorRed {
    color: rgb(187, 8, 8);
}

.img {
    width: 206px;
    height: 206px;
}

.loop_box {
    height: 430px;
    background: yellow;
}

.loop {
    background: white;
}
</style>
