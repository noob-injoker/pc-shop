<template>
 <div>

     <div class="w1220 df h200">
        <div class="f1" v-for="(item,index) in activePlateList" :key="index">
            <div><img :src="item.productImageBig" alt=""></div>
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

</style>