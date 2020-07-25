<template>
 <div>
        this is detail
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     id
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