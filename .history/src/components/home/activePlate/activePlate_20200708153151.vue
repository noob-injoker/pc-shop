<template>
<div>

    <div class="w1220 df h200">
        <div class="f1 box" v-for="(item,index) in activePlateList" :key="index">
            <div class="f1  pic_container">
                <div class="pic_box f1"><img :src="item.productImageBig" alt=""></div>
                 
            </div>
           

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {
        activePlateList: {
            type: Array
        }
    },
    components: {

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
.img_box {

    position: relative;
    z-index: 0;

    .cover-link {
        cursor: pointer;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 4;
        background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==) repeat;
    }

    div {
        color: #5079d9;
        cursor: pointer;
        transition: all .15s ease-out;
        text-decoration: none;
    }

    div:hover {
        box-shadow: inset 0 0 38px rgba(0, 0, 0, .08);
        transition: all .15s ease;
    }

    .pic_box {}

    .pic_container {
        background: white;
    }

    .pic_box img {
        width: 305px;
    }
</style>
