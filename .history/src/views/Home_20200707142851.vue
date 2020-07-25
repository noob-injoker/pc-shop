<template>
<div>

    <div class=" box  w00  f-column a-center">

        <div class="banner_box">
            <banner></banner>
        </div>

        <div class="newProducts_box">

            <newProducts></newProducts>

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
            newProducts: [],

        }
    },
    methods: {
        getHomeData() {
            this.$api.getHomeData().then(res => {
                this.newProducts = res
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }

    },
    mounted() {
      this

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
</style>
