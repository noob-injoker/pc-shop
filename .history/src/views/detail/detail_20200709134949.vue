<template>
<div>

    <div class="box b1 ccc ">

        <div class="box1 r1 df ">
            <div class="pic1" v-if="datailList">
                <div @click="getOnePic(item)" class="m-t-10" v-for="(item,index) in datailList.productImageSmall" :key="index">
                    <div class="img_box   ccc">
                        <img :src="item" alt="">
                    </div>
                </div>
            </div>
            <div class="m-l-20">
                <div class="content_box r1">
                    <img :src="picPath" alt="">
                </div>
            </div>
            <div class="b1 w450 m-l-20" v-if="datailList">
                <div class="fs24 m-t-20">{{datailList.productName}}</div>
                <div class="df a-center j-bettween">
                    <div class="fs14">{{datailList.subTitle}}</div>
                    <div class="fs24 colorRed">￥{{datailList.salePrice}}.00</div>
                </div>
                <div class="line"> </div>
                <div class="number df a-center">

                    <div>=</div>
                    <div></div>

                </div>
                <div class="line"></div>
                <div class="">
                    <div>
                        <i-button  class="btns" type="primary">加入购物车</i-button>
                    </div>
                    <div>

                        <i-button class="btns">现在购买</i-button>

                    </div>
                </div>
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
            picPath: ''

        }
    },
    methods: {
        getOnePic(item) {
            this.picPath = item
        }

    },
    mounted() {
        //  this.id = window.location.search.substring(1);

        this.id = this.$route.query.id
        console.log(this.id);
        this.$api.getGoodsDetail(this.id).then(res => {
            console.log(res);
            // this.detailList = res.data.data.result
            this.datailList = res.data.result
            this.picPath = this.datailList.productImageSmall[0]
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

<style lang="scss" scoped>
.btns{
    width: 150px;
    height: 50px;
}
.number {
    height: 50px;
}

.line {
    width: 450px;
    height: 1px;
    background: rgb(240, 236, 236);
}

.colorRed {
    color: red;
}

.content_box {
    width: 440px;
    height: 440px;

}

.content_box img {
    width: 100%;
    height: 100%;
}

.img_box {
    width: 80px;
    height: 80px;
    border: 1px solid rgb(182, 175, 175);
}

.img_box img {
    width: 54px;
    height: 54px;
}

.pic1 {

    width: 80px;
    height: 350px;

}

.box {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 1200px;
    background: white;
    border: 1px solid gray;
    border-radius: 10px;

}

.box1 {
    width: 1090px;
    height: 440px;
}
</style>
