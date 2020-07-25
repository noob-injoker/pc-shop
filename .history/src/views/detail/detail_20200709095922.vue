<template>
<div>


      <div v-html="detailList."></div>


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
        this.id = window.location.search.substring(1);
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
