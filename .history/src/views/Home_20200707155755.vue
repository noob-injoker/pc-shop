<template>
<div>

    <div class=" box b1  w00  f-column a-center">

        <div class="banner_box">
            <banner></banner>
        </div>

        <div class="newProducts_box">

            <newProducts :newProductsList="newProductsList"></newProducts>

        </div>
        
        <div class="r1 hotProducts_box">
            <hotProducts :hotProductsList="hotProductsList"></hotProducts>
        </div>

    </div>

</div>
</template>

<script>
import banner from '../components/home/banner/banner'
import newProducts from '../components/home/newProducts/newProducts'
import hotProducts from '../components/home/hotProducts/hotProducts'
export default {
    name: '',
    props: {

    },
    components: {
        banner,
        newProducts,
        hotProducts,


    },
    data() {
        return {
            newProductsList: [],
            hotProductsList:[],

        }
    },
    methods: {
        getHomeData() {
            this.$api.getHomeData().then(res => {
                 //活动板块
                this.newProductsList = res.data[1].panelContents
                 //热门板块
                this.hotProductsList = res.data[2].panelContents
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
.hotProducts_box{
    margin-top: 20px;
    
}
.box {
    background: #EDEDED;

}

.banner_box {
    padding-top: 20px;
}
.newProducts_box{
  margin-top:25px;
}
</style>
