<template>
 <div>
    <div class="df w1220 f-column a-center r1">

        <div class="df w1220">
            <div>综合排序</div>
            <div>价格从低到高</div>
            <div>价格从高到低</div>
            <div>
                this is an
            </div>
        </div>

        <div>
            <div></div>
            <div> <Page :total="40" size="small" show-elevator show-sizer show-total/></div>
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

     }
   },
   methods: {
    

   },
   mounted() {

      this.$api.getAllData(1,16).then(res=>{
        console.log(res);
      }).catch(err=>{
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