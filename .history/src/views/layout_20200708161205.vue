<template>
 <div>
    <div>

        <div class="top_box w00 h100 a-center j-center">
          <top></top>
        </div>

        <div class="navs  w00 h90 a-center j-center">
          <navs></navs>
        </div>

        <div class="rt_view">
            <router-view></router-view>
        </div>

        <div class="bottom_box w00 h500 a-center j-center">
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
.rt_view{
  padding-bottom: 0px;
  background: #EDEDED;
}
.top_box{
  background: black;
}
.navs{
  background: #F7F7F7;
}
.bottom_box{
  background: #FAFAFA;
}
</style>