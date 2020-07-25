<template>
<div>
    <div>

        <div class="w1220 df r1">
            <div class="f5">

                <div class="m-l-10 M_box ccc  b1">
                    <div class="M_text  ccc">M</div>
                </div>

            </div>
            <div class="right_content f7 g1 bgw">
                <div>
                    <Input v-model="value" placeholder="请输入商品信息" clearable style="width: 300px" />
                     
                </div>
                <div>
                  qua
                </div>
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
          value:"",


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
</style>
