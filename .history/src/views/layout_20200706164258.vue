<template>
 <div>
    <div>

        <div>
          <top></top>
        </div>

        <div>
            <view-router></view-router>
        </div>

        <div>
          <bottom></bottom>
        </div>


    
    
    </div>
 </div>
</template>
<script>

import top from '../components/top/top.vue'
import bottom from '../components/top/bottom.vue'
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
     this.$api.getHomeData().then(res=>{
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