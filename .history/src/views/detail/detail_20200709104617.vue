<template>
<div>

    <div class="box">

        <div>
            <div>{{datailList.productName}}</div>
            <div class="df">
                <div>{{datailList.subTitle}}</div>
                <div>{{datailList.salePrice}}</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div>
                <div>btn1</div>
                <div>btn2 1090 </div>
            </div>
        </div>

    </div>

    <div v-if="datailList">
        <div v-html="datailList.detail"></div>
    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {

    },
    components: {

    },
    data() {
        return {
            id: '',
            datailList: null,

        }
    },
    methods: {

    },
    mounted() {
        //  this.id = window.location.search.substring(1);

        this.id = this.$route.query.id
        console.log(this.id);
        this.$api.getGoodsDetail(this.id).then(res => {
            console.log(res);
            // this.detailList = res.data.data.result
            this.datailList = res.data.result
            console.log(this.datailList);
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
.box{
  width:1090px;
}
</style>
