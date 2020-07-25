<template>
 <div>
    <div class="b1 ">

       <div>首页</div>
       <div v-for="(item,index) in list" :key="index">
            <div>.</div>
            <div>{{item.name}}</div>
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
   data () {
     return {
       list:[
         {name:'品牌周边'},
         {name:'捐赠名单'},
         {name:'后台管理系统'},
         {name:'XPAY支付系统'},
         {name:'XBoot开发平台'},
         {name:'宣传视频'},
         {name:'Github'},
         {name:'商用授权'},


       ]

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

<style scoped lang='scss'>

</style>