<template>
<div>

    <div class="hot_box  h60 df a-center p-l-20 fs18">
        热门商品
    </div>

    <div class="df loop_box w1220">

        <div @mouseenter="enterArea"  @mouseleave="leaveArea" :style="{'box-shadow':shadow}" class="f1 g1 df f-column a-center j-center loop" v-for="(item,index) in hotProductsList" :key="index">
           <div>
           
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
          shadow:'20px 0px 10px gray',

        }
    },
    methods: {
      enterArea(){
        this.shadow = '20px 0px 20px red'
        
      },
      leaveArea(){
         this.shadow = '20px 0px 20px gray'
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
    background: yellow;
}

.loop {
    background: white;
}
</style>
