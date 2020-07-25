<template>
<div>

    <div class="box ccc b1">

        <div class="box1 df r1">
            <div class="pic1 " v-if="datailList">
                <div class="m-t-10" v-for="(item,index) in datailList.productImageSmall" :key="index">
                    <div class="img_box b1 ccc">
                      <img :src="item" alt="">
                    </div>
                </div>
            </div>
            <div>
              <div>
                <img src="" alt="">
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

<style lang="scss" scoped>
.img_box{
  width:80px;
  height: 80px;
}
.img_box img{
  width: 54px;
  height: 54px;
}
.pic1{
  width: 80px;
  height: 350px;
  border: 1;
}
.box {
    width: 1200px;

}

.box1 {
    width: 1090px;
    height: 440px;
}
</style>
