<template>
<div>
    <div class="df w1220 f-column a-center ">

        <div class="df  order_box w1220 a-center h50">
            <div class=" p-l-r-10 order_item" >综合排序</div>
            <div class=" p-l-r-10 order_item">价格从低到高</div>
            <div class=" p-l-r-10 order_item">价格从高到低</div>
            <div class="inputs m-l-15">
                <input placeholder="      价格" type="text"> - <input placeholder="      价格" type="text"> <Button type="primary">Primary</Button>
            </div>
        </div>

        <div>
            <div class="loop_box j-bettween w1220">

                <div @mouseenter="enterArea(index)" @mouseleave="leaveArea(index)" class="  df f-column a-center j-center loop" v-for="(item,index) in list" :key="index">
                    <div class=" content_box df f-column a-center j-center">
                        <div class="img_box">

                            <img class="img" :src="item.productImageBig" alt="">

                        </div>

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
            <div class="pageNation df f-column  ">
                <div class="j-end page_item">
                    <Page @on-change="onChange" @on-page-size-change="onPageSizeChange" :total="16" size="small" :page-size-opts=[8,16] :page-size='8' show-total show-sizer show-elevator />
                </div>
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
            list: [],
            flag: -1,

        }
    },
    methods: {
        enterArea(index) {

            this.flag = index;

        },
        leaveArea(index) {

            this.flag = -1;

        },
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

        this.$api.getAllData(1, 8).then(res => {
            this.list = res.data
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        // this.getLowToHeightData(1,1,sort,priceGt,priceLte).then(res=>{console.log(res);}).catch(err=>{
        //   console.log(err);
        // })

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.order_item:hover{
  cursor: pointer;
  color: rgb(10, 10, 230);
}
.inputs input{
    width: 80px;
    height: 30px;
    outline:none;
    border-radius: 3px;
    border: 0px solid red;
    
}

.pageNation {
    height: 120px;
}

.page_item {
    margin-top: 60px;
    margin-right: 60px;
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
    width: 24.94%;
    margin-bottom: 1px;

}

.content_box {
    width: 250px;

}

.loop:hover {
    box-shadow: 0px 0px 20px rgb(204, 195, 195);
    transform: translateZ(10px);
    transform: translateY(-1px);
    position: relative;
    z-index: 99999;

}
</style>>
