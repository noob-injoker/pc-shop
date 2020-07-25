<template>
<div>

    <div class="hot_box  h60 df a-center p-l-20 fs18">
        官方精选
    </div>

    <div class="loop_box w1220">

        <div  class="df f-column a-center j-center loop" v-for="(item,index) in officialSelectionList" :key="index">
            <div class=" content_box df f-column a-center j-center">
                <div class="img_box">
                    <img class="img" :src="item.productImageBig" alt="">
                    <div v-if="index===0" class="cover-link"></div>
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
</template>

<script>
export default {
    name: '',
    props: {
        officialSelectionList: {
            type: Array
        }
    },
    components: {

    },
    data() {
        return {
            flag: -1,

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

<style lang="scss" scoped>
.img_box:n {

    position: relative;
    z-index: 0;

    .cover-link {
        cursor: pointer;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 4;
        background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==) repeat;
    }

    div {
        color: #5079d9;
        cursor: pointer;
        transition: all .15s ease-out;
        text-decoration: none;
    }

    div:hover {
        box-shadow: inset 0 0 38px rgba(0, 0, 0, .08);
        transition: all .15s ease;
    }
}

.sub {
    width: 200px;
}

.hot_box {
    position: relative;
    z-index: 999;
}

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
    
    background: #F2F2F2;
    display: flex;
    flex-wrap: wrap;
}

.loop {
    background: white;
    transition: all 0.8s ease;
    width: 25%;

}

.loop:nth-child(1){
   width:50%;
}
.loop:nth-child(1) .content_box{
    width: 100%;
}
.loop:nth-child(1) .content_box img{
    width: 100%;
    height: 100%;
}



.loop:nth-child(2):hover {
    box-shadow: 0px 0px 20px rgb(204, 195, 195);
    transform: translateZ(4px);
    transform: translateY(-1px);
   
   
    

}
.loop:nth-child(3):hover {
    box-shadow: 0px 0px 20px rgb(204, 195, 195);
    transform: translateZ(4px);
    transform: translateY(-1px);
    position:relative;
    z-index: 99999;

}
.loop:nth-child(4):hover {
    box-shadow: 0px 0px 20px rgb(204, 195, 195);
    transform: translateZ(10px);
    transform: translateY(-1px);
    position:relative;
    z-index: 99999;

}
.loop:nth-child(5):hover {
    box-shadow: 0px 0px 20px rgb(204, 195, 195);
    transform: translateZ(10px);
    transform: translateY(-1px);
    position:relative;
    z-index: 99999;

}
.loop:nth-child(6):hover {
    box-shadow: 0px 0px 20px rgb(204, 195, 195);
    transform: translateZ(10px);
    transform: translateY(-1px);
    position:relative;
    z-index: 99999;

}
.loop:nth-child(6):hover {
    box-shadow: 0px 0px 20px rgb(204, 195, 195);
    transform: translateZ(10px);
    transform: translateY(-1px);
    position:relative;
    z-index: 99999;

}
.loop:nth-child(7):hover {
    box-shadow: 0px 0px 20px rgb(204, 195, 195);
    transform: translateZ(10px);
    transform: translateY(-1px);
    position:relative;
    z-index: 99999;

}
.content_box{
    width: 250px;

}
</style>
