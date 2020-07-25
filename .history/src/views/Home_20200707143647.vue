<template>
<div>

    <div class=" box  w00  f-column a-center">

        <div class="banner_box">
            <banner></banner>
        </div>

        <div class="newProducts_box">

            <newProducts :newProductsList="newProductsList"></newProducts>

        </div>

    </div>

</div>
</template>

<script>
import banner from '../components/banner/banner'
import newProducts from '../components/newProducts/newProducts'
export default {
    name: '',
    props: {

    },
    components: {
        banner,
        newProducts,

    },
    data() {
        return {
            newProductsList: [],

        }
    },
    methods: {
        getHomeData() {
            this.$api.getHomeData().then(res => {
                this.newProductsList = res.data[1].panelContents
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }

    },
    mounted() {
      this.getHomeData()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.box {
    background: #EDEDED;

}

.banner_box {
    padding-top: 20px;
}
.newProducts_box{
  margin-top:
}
</style>
