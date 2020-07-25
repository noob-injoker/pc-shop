<template>
 <div>
    <div class="df w1220">

    div

    
    
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
         {
           title:'订单服务',
           content1:'购买指南',
           content2:'支付方式',
           content3:'送货政策',
         },
         {
           title:'服务支持',
           content1:'官方开源',
           content2:'项目前端',
           content3:'项目后端',
         },
         {
           title:'自助服务',
           content1:'个人博客',
           content2:'个人简介',
           content3:'个人视频',
         },
         {
           title:'其他项目',
           content1:'XPay支付系统',
           content2:'数据共享',
           content3:'待开发...',
         },
         {
           title:'友情链接',
           content1:'宇cccc',
           content2:'Smartisan',
           content3:'vue',
         },
         {
           title:'关注我吧',
           content1:'腾讯 QQ',
           content2:'新浪微博',
           content3:'官方邮箱',
         },
       ],

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
.bottom_left{
  flex: 2;
}
.bottom_right{
  flex: 1;
}
</style>