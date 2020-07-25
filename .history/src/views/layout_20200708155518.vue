<template>
 <div>
    <div>

        <div class="top_box w00 h100 a-center j-center">
          <top></top>
        </div>

        <div class="navs  w00 h100 a-center j-center h90">
          <navs></navs>
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
import navs from '../components/navs/navs.vue'

 export default {
   name: '',
   props: {
   },
   components: {
     top,
     bottom,
     navs,

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
.top_box{
  background: black;
}
.navs{
  background: #F7F7F7;
}
</style>