<template>
<div>
    <div>
        热门商品
    </div>

    <Row>
        <Col span="11">
        <Card>
            <p slot="title">The standard card</p>
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
        </Card>
        </Col>
       
    </Row>

    <div class="df w1220">

        <div class="f1 b1" v-for="(item,index) in hotProductsList" :key="index">
            <div>
                <img class="w50 r1 h100" :src="item.productImageBig" alt="">
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

</style>
