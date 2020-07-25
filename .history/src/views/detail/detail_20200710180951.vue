<template>
<div class="df f-column a-center">

    <div class="box  df j-center ">

        <div class="box1  df ">
            <div class="pic1" v-if="datailList">
                <div @click="getOnePic(item)" class="m-t-10" v-for="(item,index) in datailList.productImageSmall" :key="index">
                    <div class="img_box   ccc">
                        <img :src="item" alt="">
                    </div>
                </div>
            </div>
            <div class="m-l-20">
                <div class="content_box ">
                    <img :src="picPath" alt="">
                </div>
            </div>
            <div class=" w450 m-l-20" v-if="datailList">
                <div class="fs24 m-t-20">{{datailList.productName}}</div>
                <div class="df a-center j-bettween">
                    <div class="fs14 graytext">{{datailList.subTitle}}</div>
                    <div class="fs24 colorRed">￥{{datailList.salePrice}}.00</div>
                </div>
                <div class="line"> </div>
                <div class="number m-t-20 df a-center">

                    <div>数量</div>
                    <div class="df m-l-15">
                        <div class="del">-</div>
                        <div>number</div>
                        <div class="add">+</div>

                    </div>

                </div>
                <div class="line"></div>
                <div class="df btns_box">
                    <div>
                        <i-button class="btns" type="primary">加入购物车</i-button>
                    </div>
                    <div>

                        <i-button class="btns m-l-15">现在购买</i-button>

                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="details ">
        <div class="p-l-20 h60 product fs18   df a-center">产品信息</div>
        <div v-if="datailList" class="ccc">
            <div  class="ccc" v-html="datailList.detail"></div>
        </div>
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
.del,.add{
    width: 20px;
    height: 20px;
    border-radius: 50% 50%;
}
.product {
    background: #EDEDED;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border:1px solid rgb(221, 212, 212);
    background: #F3F3F3;
}

.details {
    width: 1200px;
    background: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.graytext {
    color: #BDBDBD;
}

.btns_box {
    margin-top: 40px;
}

.btns {
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
    border: 1px solid rgb(221, 212, 212);
}

.img_box img {
    width: 54px;
    height: 54px;
}

.pic1 {

    width: 80px;

}

.box {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 1200px;
    background: white;
    border: 1px solid rgb(221, 212, 212);
    border-radius: 10px;
    padding-top: 60px;
    padding-bottom: 70px;

}

.box1 {
    width: 1090px;

}
</style>
