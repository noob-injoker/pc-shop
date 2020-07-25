<template>
<div>

    <div class="hot_box  h60 df a-center p-l-20 fs18">
        热门商品
    </div>

    <div class="df loop_box w1220">

        <div @mouseenter="enterArea(index)" @mouseleave="leaveArea(index)" :class="{'shadow1':flag===index,'shadow2':flag!==index}" class="f1 g1 df f-column a-center j-center loop" v-for="(item,index) in hotProductsList" :key="index">
            <div>
                <div>
                    <img class="img r1 h100" :src="item.productImageBig" alt="">
                </div>
                <div class="m-t-10">
                    {{item.productName}}
                </div>

                <div class="fs12 m-t-10 title_box">
                    {{item.subTitle}}
                </div>

                <div class="fs18 m-t-20 colorRed">
                    ￥:{{item.salePrice}}.00
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
        hotProductsList: {
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
           
            if(index===0){
               this.flag = index;
            }

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
@keyframes go {
    0% {
        box-shadow: 0px 0px 0px gray;
        transform: translateZ(0px);
        transform: translateY(0px);

    }

   

    100% {
        box-shadow: 10px 0px 10px gray;
        transform: translateZ(3px);
        transform: translateY(-3px);

    }
}

@keyframes back {
    0% {
        box-shadow: 10px 0px 10px gray;
        transform: translateZ(3px);
        transform: translateY(-3px);

    }


    100% {
        box-shadow: 0px 0px 0px gray;
        transform: translateZ(0px);
        transform: translateY(0px);

    }

}

.shadow1 {
    animation: go 0.2s linear forwards;

}
.shadow2 {
    animation: back 0.4s linear forwards;

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
}

.loop {
    background: white;
}
</style>
