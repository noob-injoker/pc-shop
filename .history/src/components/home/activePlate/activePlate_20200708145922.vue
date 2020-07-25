<template>
 <div>
     <div class="w1220">
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
       type{ type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
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