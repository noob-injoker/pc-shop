<template>
<div class="box ccc">
    <div class="login f-column  a-center ">
        <div class="M_box ccc m-t-40">
            M
        </div>
        <div class="M_text">
            使用XMall账号登录官网
        </div>
        <div class="input_box">
            <i-input size="large" :value.sync="value" placeholder="账号" class="inps"></i-input>
        </div>
        <div class="m-t-10">
            <i-input size="large" :value.sync="value" placeholder="密码" class="inps"></i-input>
        </div>
        <div>
            <div id="vaptchaContainer" style="width: 300px;height: 36px;">
                <!--vaptcha-container是用来引入VAPTCHA的容器，下面代码为预加载动画，仅供参考-->
                <div class="vaptcha-init-main">
                    <div class="vaptcha-init-loading">
                        <a href="/" target="_blank">
                            <img src="https://r.vaptcha.net/public/img/vaptcha-loading.gif" />
                        </a>
                        <span class="vaptcha-text">Vaptcha启动中...</span>
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
            value: ''

        }
    },
    methods: {
        vaptcha({
            //配置参数
            vid: '5f06e92886e8ce893ab1c900', // 验证单元id
            type: 'click', // 展现类型 点击式
            container: '#vaptchaContainer', // 按钮容器，可为Element 或者 selector
            ... //其他配置参数省略
        }).then(function (vaptchaObj) {
            vaptchaObj.render() // 调用验证实例 vaptchaObj 的 render 方法加载验证按钮
                ... //其他事件处理
        })

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
.vaptcha-init-main {
    display: table;
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
}

​ .vaptcha-init-loading {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

​ .vaptcha-init-loading>a {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: none;
}

​ .vaptcha-init-loading>a img {
    vertical-align: middle;
}

​ .vaptcha-init-loading .vaptcha-text {
    font-family: sans-serif;
    font-size: 12px;
    color: #cccccc;
    vertical-align: middle;
}

.input_box {
    margin-top: 40px;
}

.inps {

    width: 300px;
    outline: none;

}

.ivu-input {
    outline: none;
    border: none;
}

.M_box {

    width: 70px;
    height: 70px;
    border-radius: 50% 50%;
    font-size: 40px;
    color: white;
    background: rgb(199, 58, 58);
}

.M_text {
    font-size: 20px;
    margin-top: 20px;
}

.box {
    width: 100%;
    height: 100%;
    background: #F6F6F6;
    position: absolute;

}

.login {

    width: 352px;
    height: 546px;
    box-shadow: 0px 0px 8px gray;
    border-radius: 20px;

}
</style>
