<template>
<div class="box ccc">
    <div class="login f-column  a-center ">
        <div class="M_box ccc m-t-40">
            M
        </div>
        <div class="M_text">
            使用XMall账号登录官网
        </div>
        <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="80">
            <div>

                <div class="input_class ccc m-t-10">
                    <i-input class="inps" :value.sync="formValidate.username" placeholder="请输入姓名"></i-input>
                </div>

                <div class="input_class ccc m-t-10">
                    <i-input class="inps" :value.sync="formValidate.password" placeholder="请输入密码"></i-input>
                </div>

            </div>

            <div class="ccc">
                <div id="vaptchaContainer" style="width: 350px;height: 40px;margin: 20px auto;margin-top: 20px;">
                    <!--vaptcha-container是用来引入VAPTCHA的容器，下面代码为预加载动画，仅供参考-->
                    <div class="vaptcha-init-main">
                        <div class="vaptcha-init-loading">
                            <a href="/" target="_blank">
                                <img src="https://r.vaptcha.com/public/img/vaptcha-loading.gif" />
                            </a>
                            <span class="vaptcha-text">Vaptcha启动中...</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="df a-center c">
                <div  @click="handleSubmit('formValidate')" class="ccc">
                    <i-button type="primary">登录</i-button>
                </div>
                <div  @click="handleSubmit('formValidate')" class="ccc">
                    <i-button type="primary">注册</i-button>
                </div>
            </div>

        </i-form>

    </div>
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
            formValidate: {
                username: '',
                password: ''
            },
            ruleValidate: {

                username: [{
                    required: true,
                    message: '姓名不能为空',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '姓名不能为空',
                    trigger: 'blur'
                }],

            }

        }
    },
    methods: {
        vaptcha(_this) {
            var token = "";
            vaptcha({
                vid: "5e33eb0b76cb1970819ea979",
                type: "click", // 展现类型 点击式
                container: "#vaptchaContainer", // 按钮容器，可为Element 或者 selector
                offline_server: "/offline"
                // mode: 'offline' 调试离线模式时使用
            }).then(function (vaptchaObj) {
                vaptchaObj.render(); // 调用验证实例 vaptchaObj 的 render 方法加载验证按钮
                vaptchaObj.listen("pass", function () {
                    token = vaptchaObj.getToken();
                    _this.checkVaptcha = true;
                    _this.changeData();
                });
                $("#reset").on("click", function () {
                    vaptchaObj.reset();
                    $("#result").html("请验证..");
                });
            });
            $("#validate").on("click", function () {
                $.post(
                    "/validate", {
                        token: token
                    },
                    function (res) {
                        if (res.success == 1) {
                            $("#result").html("验证成功");
                        } else {
                            $("#result").html("验证失败");
                        }
                    },

                );
            });
        },
        handleSubmit(formValidate) {
            this.$refs[formValidate].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },

    },
    mounted() {
        let _this = this;

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
