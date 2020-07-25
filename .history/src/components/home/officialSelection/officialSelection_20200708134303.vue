<template>
<div>

    <div class="hot_box  h60 df a-center p-l-20 fs18">
        官方精选
    </div>

    <div class="loop_box w1220">

        <div @mouseenter="enterArea(index)" @mouseleave="leaveArea(index)" :class="{'shadow1':flag===index,'shadow2':flag!==index}" class="b1  df f-column a-center j-center loop" v-for="(item,index) in officialSelectionList" :key="index">
            <div class="r1 content_box df f-column a-center j-center">
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
        enterArea(index) {

            this.flag = index;

        },
        leaveArea(index) {

            this.flag = -1;

        }

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
.img_box {

    position: relative;

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
    height: 430px;
    background: #F2F2F2;
    display: flex;
    flex-wrap: wrap;
}

.loop {
    background: white;
    transition: all 1s ease;
    width: 25%;

}

.loop:nth-child(1) {
    width: 50% !important;
}
.content_box
.loop:nth-child(1) img {
    width: 100%;
    height: 100%;
}

.loop:nth-child(2):hover {
    box-shadow: -10px 0px 10px gray;
    transform: translateZ(10px);
    transform: translateY(-1px);

}
.content_box{
    width: 250px;

}
</style>
