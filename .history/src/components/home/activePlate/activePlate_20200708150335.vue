<template>
 <div>
     <div class="w1220 h200">
        <div v-for="(item,index) in activePlateList" :key="index">
    
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