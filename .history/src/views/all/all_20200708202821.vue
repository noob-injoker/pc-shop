<template>
<div>
    <div class="df w1220 f-column a-center r1">

        <div class="df w1220">
            <div>综合排序</div>
            <div>价格从低到高</div>
            <div>价格从高到低</div>
            <div>
                this is an
            </div>
        </div>

        <div>
            <div>

                <div class="df f-column a-center j-center loop" v-for="(item,index) in officialSelectionList" :key="index">
                    <div class="content_box df f-column a-center j-center">
                        <div class="img_box">
                            <img class="img" :src="item.productImageBig" alt="">
                            
                        </div>

                        <div v-if="index!==0">
                            <div class="m-t-10 ccc">
                                {{item.productName}}
                            </div>

                            <div class="fs12 m-t-10 ccc title_box">
                                {{item.subTitle}}
                            </div>

                            <div v-if="flag!=index" class="fs18 ccc  h60 m-t-20 colorRed">
                                ￥:{{item.salePrice}}.00
                            </div>
                            <div v-if="flag===index" class="fs18 df h60 sub j-bettween m-t-20 colorRed">
                                <div>
                                    <Button>查看详情</Button>

                                </div>
                                <div class="m-l-20">
                                    <Button type="primary">加入购物车</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div>
            <Page @on-change="onChange" @on-page-size-change="onPageSizeChange" :total="16" size="small" :page-size-opts=[8,16] :page-size='8' show-total show-sizer show-elevator />
        </div>
    </div>

</div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            list: []

        }
    },
    methods: {
        onChange(size) {

            this.$api.getAllData(size, 8).then(res => {
                this.list = res.data
                console.log(this.list);
            }).catch(err => {
                console.log(err);
            })

        },
        onPageSizeChange(size) {
            this.$api.getAllData(1, size).then(res => {
                this.list = res.data
                console.log(this.list);
            }).catch(err => {
                console.log(err);
            })
        }

    },
    mounted() {

        this.$api.getAllData(1, 16).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
