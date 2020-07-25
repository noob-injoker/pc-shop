<template>
<div class="w1220">
    <div class=" df">

        <div class="ccc  ">
            <div class="dot"></div>
        </div>
        <div class="m-l-14 text_home">首页</div>
        
        <div class="text_item df">
            <div @click="goToSomePage(index)" class="text_items m-l-14 df" v-for="(item,index) in list" :key="index">
                <div class="ccc  ">
                    <div class="dot"></div>
                </div>
                <div class="m-l-14 text">{{item.name}}</div>
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
            list: [{
                    name: '全部'
                },

                {
                    name: '品牌周边'
                },
                {
                    name: '捐赠名单'
                },
                {
                    name: '后台管理系统'
                },
                {
                    name: 'XPAY支付系统'
                },
                {
                    name: 'XBoot开发平台'
                },
                {
                    name: '宣传视频'
                },
                {
                    name: 'Github'
                },
                {
                    name: '商用授权'
                },

            ]

        }
    },
    methods: {
        goToSomePage(index){
            if( this.$router.path!=='./all'){
                if(index===0){
                this.$router.push({name:'all'})
            }
               
            }
            
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
.text_items:nth-child(1) {
    font-weight: 700;
   

}

.text_home:hover {
    color: rgb(8, 8, 211);
    cursor: pointer;
}

.text:hover {
    color: rgb(8, 8, 211);
    cursor: pointer;
}

.dot {
    width: 2px;
    height: 2px;
    background: black;
}

.text_home {
    font-weight: 700;

}
</style>
