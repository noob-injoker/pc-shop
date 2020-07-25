<template>
<div>


     <div v-if="detailList">
       <div v-html="detailList.detail"></div>
     </div>
      <div></div>


</div>
</template>

<script>
export default {
    name: '',
    props: {

    },
    components: {

    },
    data() {
        return {
            id: '',
            detailList: null,

        }
    },
    methods: {

    },
    mounted() {
        //  this.id = window.location.search.substring(1);
        
         this.id = this.$route.query.id
        console.log(this.id);
        this.$api.getGoodsDetail(this.id).then(res => {
          
            this.detailList = res.data.result
            console.log(this.detailList);
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
