<template>
 <div>

     <div class="w1220 df h200">
        <div class="f1" v-for="(item,index) in activePlateList" :key="index">
            <div class="f1  pic_container">
               <div class="pic_box f1"><img :src="item.productImageBig" alt=""></div>
            </div>
           
            
        </div>
     </div>   
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     activePlateList:{
       type:Array
     }
   },
   components: {

   },
   data () {
     return {

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
.pic_box{
  

}
.pic_container{
  background: white;
}
.pic_box img{
  width: 305px;
}
</style>