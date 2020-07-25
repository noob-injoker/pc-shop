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
            <div>
                <div class="content_box r1">
                    <img :src="picPath" alt="">
                </div>
            </div>
            <div v-if="datailList">
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
.content_box {
    width: 440px;
    height: 440px;
    margin
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
