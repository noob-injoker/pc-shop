<template>
<div>
    <div>
        热门商品
    </div>



    <div class="df w1220">

        <div class="f1 b1" v-for="(item,index) in hotProductsList" :key="index">
            <div>
                <img class="img r1 h100" :src="item.productImageBig" alt="">
            </div>
            <div>
                {{item.productName}}
            </div>

            <div>
                {{item.subTitle}}
            </div>

            <div>
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
  
}
</style>
