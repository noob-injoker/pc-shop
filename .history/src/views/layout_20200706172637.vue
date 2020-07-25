<template>
 <div>
    <div>

        <div class="top_box  j-center">
          <top></top>
        </div>

        <div>
            <router-view></router-view>
        </div>

        <div>
          <bottom></bottom>
        </div>


    
    
    </div>
 </div>
</template>
<script>

import top from '../components/top/top.vue'
import bottom from '../components/bottom/bottom.vue'
 export default {
   name: '',
   props: {
   },
   components: {
     top,
     bottom,

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