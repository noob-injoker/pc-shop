<template>
<div>

    <div class=" box  w00  f-column a-center">

        <div class="banner_box">
            <banner></banner>
        </div>

    </div>

</div>
</template>

<script>
import banner from '../components/banner/banner'
export default {
    name: '',
    props: {

    },
    components: {
        banner,

    },
    data() {
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

<style lang="scss" scoped>
.banner_box {
    background: #EDEDED;
    padding-top: 20px;
}
</style>
