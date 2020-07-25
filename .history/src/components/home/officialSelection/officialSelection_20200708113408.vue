<template>
<div>

    <div class="hot_box  h60 df a-center p-l-20 fs18">
        官方精选
    </div>

    <div class="df loop_box w1220">

        <div @mouseenter="enterArea(index)" @mouseleave="leaveArea(index)" :class="{'shadow1':flag===index,'shadow2':flag!==index}" class="f1  df f-column a-center j-center loop" v-for="(item,index) in officialSelectionList" :key="index">
            <div class="f1 content_box df f-column a-center j-center">
                <div>
                    <img class="img  h100" :src="item.productImageBig" alt="">
                </div>
                <div v-if="index!==0">
                    <div class="m-t-10">
                        {{item.productName}}
                    </div>

                    <div class="fs12 m-t-10 title_box">
                        {{item.subTitle}}
                    </div>

                    <div v-if="flag!=index" class="fs18  h60 m-t-20 colorRed">
                        ￥:{{item.salePrice}}.00
                    </div>
                    <div v-if="flag===index" class="fs18 df h60 sub j-bettween   h60 m-t-20 colorRed">
                        <div>
                            <Button>查看详情</Button>

                        </div>
                        <div>
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
.content_box:nth-child(1){
    flex:
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
}

.loop:nth-child(1):hover {
    box-shadow: 10px 0px 10px gray;
    transform: translateZ(10px);
    transform: translateY(-1px);

}

.loop:nth-child(2):hover {
    box-shadow: -10px 0px 10px gray;
    transform: translateZ(10px);
    transform: translateY(-1px);

}
</style>
