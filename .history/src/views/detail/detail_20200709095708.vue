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
       detailList

     }
   },
   methods: {

   },
   mounted() {
     this.id = window.location.search.substring(1);
     console.log(this.id);
     
            this.$api.getGoodsDetail(this.id).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>