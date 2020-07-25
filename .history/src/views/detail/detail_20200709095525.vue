<template>
 <div>
        this is detail
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
       id:'',

     }
   },
   methods: {

   },
   mounted() {
     this.id = window.location.search.substring(1);
     

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>