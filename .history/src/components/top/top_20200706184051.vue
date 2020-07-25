<template>
<div>
    <div>

        <div class="w1220  df ">
            <div class="f5">

                <div class="m-l-10 M_box ccc  ">
                    <div class="M_text  ccc">M</div>
                </div>

            </div>
            <div class="right_content df a-center f7  bgw">
                <div class="m-l-20 icon_box">
                    <Input v-model="value" placeholder="请输入商品信息" clearable style="width: 310px" />
                    <div>
                       <div class=" icon_search fs18"><Icon type="ios-search" /></div>
                    </div>

                </div>
                <div class="df  ">
                    <div class="text1 ccc">
                        全部商品
                    </div>
                    <div class="text2 ccc">
                        捐赠
                    </div>
                </div>

                <div class="login_box df j-bettween ">
                    <div>
                        <div class="line"></div>
                    </div>
                    <div class="fs24  ccc">
                        <Icon type="ios-person" />
                    </div>
                    <div class="fs22  df ">
                        <div class="ccc">
                            <Icon type="md-cart" />
                        </div>
                        <div class="ccc number_box  fs14">
                            0
                        </div>
                    </div>
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
.icon_box{
  position: relative;
}
.icon_search{
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 10px;
}
.right_content{
  background: black;
  color:#ccc7c7;
}
.number_box {
    width: 20px;
    height: 20px;
    border-radius: 50% 50%;
    background: #ccc7c7;
    color: whitesmoke;
    margin-left: 2px;
}

.login_box {
    width: 160px;
    height: 19px;
}

.M_box {
    width: 40px;
    height: 40px;
    border-radius: 50% 50%;
    font-size: 22px;
    background: white;

}

.text1 {

    width: 111px;

}

.text2 {
    width: 111px;

}

.line {
    width: 1px;
    height: 14px;
    background: green;
}
</style>
