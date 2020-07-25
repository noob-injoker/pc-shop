<template>
 <div>
      <div>
        热门商品
      </div>
      
      <div>
      
        <div v-for="(item,index) in hotProductsList" :key="index">

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
       hotProductsList:[]
       

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