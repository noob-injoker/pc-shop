<template>
<div>
    <div>

        <div class="w1220 df r1">
            <div class="f5">

                <div class="m-l-10 M_box ccc  b1">
                    <div class="M_text  ccc">M</div>
                </div>

            </div>
            <div class="right_content df f7 g1 bgw">
                <div>
                    <Input v-model="value" placeholder="请输入商品信息" clearable style="width: 300px" />

                </div>
                <div class="df  r1">
                    <div class="text1 ccc">
                        全部商品
                    </div>
                    <div class="text2 ccc">
                        捐赠
                    </div>
                </div>
                <div>
                    <div class="line"></div>
                </div>

                <div></div>

            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            value: "",

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
.M_box {
    width: 40px;
    height: 40px;
    border-radius: 50% 50%;
    font-size: 22px;
    background: white;

}
.text1{
  
  width: 110px;

}
.text2{
  width: 110px;

}
.line{
  width:1px;
  height: 14px;
}
</style>
