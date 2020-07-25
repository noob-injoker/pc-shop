<template>
 <div>
      <div>
        热门商品
      </div>
      
      <div>
      
        <div v-for="(item,index) in hotProductsList" :key="index">
            <div>
                <img cla :src="item.productImageBig" alt="">
            </div>
        </div>

      </div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     hotProductsList:{
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