<template>
<div class="login-container">
    <div class="login-box">
        <div class="login-logo">
            <img src="../../assets/logo1.png" alt />
        </div>
        <div class="login-title">使用 XMall 账号 登录官网</div>
        <div class="login-input">
            <Input v-model="username" @on-change="changeData" placeholder="账号" style="width: 350px" />
        </div>
        <div class="login-input">
            <Input v-model="passwd" @on-change="changeData" type="password" password placeholder="密码" style="width: 350px" />
        </div>
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
        <div class="login-other">
            <div>
                <Checkbox v-model="flagSave">记住密码</Checkbox>
            </div>
            <div class="login-link">
                <span>
                    <a href="/register">注册 XMall 账号</a>
                </span>
                <span>
                    <a href="javascript:0;" @click="forget">忘记密码 ?</a>
                </span>
            </div>
        </div>
        <div class="btn-box">
            <Button class="btn" :class="flag?'submit':'not-allowed'" @click="submit">登录</Button>
        </div>
        <div class="btn-box">
            <Button class="btn" @click="$router.go(-1)">返回</Button>
        </div>
        <div class="support-more">
            其它账号登录：
            <i class="iconfont icon-zhifubao" @click="support"></i>
            <i class="iconfont icon-weixin" @click="support"></i>
            <i class="iconfont icon-QQ" @click="support"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "register",
    props: {},
    data() {
        return {
            username: "",
            passwd: "",
            flagSave: false,
            checkVaptcha: false,
            flag: false
        };
    },
    computed: {},
    created() {},
    mounted() {
        if (localStorage.getItem("userinfo")) {
            let obj = JSON.parse(localStorage.getItem("userinfo"));
            this.username = obj.username;
            this.passwd = obj.passwd;
            this.flagSave = true;
        }
        let _this = this;
        this.vaptcha(_this);
    },
    watch: {},
    methods: {
        //创建验证实例
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
                    "json"
                );
            });
        },
        changeData() {
            if (this.username !== "" && this.passwd !== "" && this.checkVaptcha) {
                this.flag = true;
            }
        },
        submit() {
            if (this.flag) {
                let userCheck = /^[a-zA-Z0-9_-]{4,16}$/;
                let passCheck = /^[a-zA-Z0-9_-]{4,16}$/;
                if (!userCheck.test(this.username)) {
                    this.$Message.error(
                        "用户名错误，4到16位（字母，数字，下划线，减号）"
                    );
                    return;
                }
                if (!passCheck.test(this.passwd)) {
                    this.$Message.error(
                        "密码错误，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"
                    );
                    return;
                }
                //保存密码等操作
                if (this.flagSave) {
                    localStorage.setItem(
                        "userinfo",
                        JSON.stringify({
                            username: this.username,
                            passwd: this.passwd
                        })
                    );
                } else {
                    if (localStorage.getItem("userinfo")) {
                        localStorage.removeItem("userinfo");
                    }
                }
                this.$api.login(this.username, this.passwd).then(res => {
                    if (res.code === 200) {
                        this.$Message.success(res.msg);
                        localStorage.setItem("username", this.username);
                        this.$router.push("/");
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
            } else {
                this.$Message.warning("请补全信息再点击登录");
            }
        },
        //忘记密码
        forget() {
            let nodesc = false;
            this.$Notice.warning({
                title: "想多了",
                desc: nodesc ? "" : "不可能给你找回密码的! "
            });
        },
        //底部链接
        support() {
            let nodesc = false;
            this.$Notice.warning({
                title: "功能开发中...",
                desc: nodesc ? "" : "想什么哦，不可能开发的! "
            });
        }
    },
    components: {}
};
</script>

<style lang="scss" scoped>
.login-container {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 800px;
    background: url("../../assets/right2.jpg");
}

.login-box {
    overflow: hidden;
    width: 450px;
    margin: 50px auto;
    background: white;
    border-bottom: 1px solid #dcdcdc;
    border-radius: 10px;
    box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
        0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
        0 10px 20px -10px rgba(0, 0, 0, 0.04);
}

.login-logo {
    width: 140px;
    height: 140px;
    margin: 0 auto;

    img {
        width: 60%;
        height: 60%;
        margin: 25px 0 0 10px;
    }
}

.login-title {
    padding: 0;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
}

.login-input {
    margin: 20px auto;
    width: 350px;
    color: rgb(153, 153, 153);

    /deep/input {
        height: 50px;
        border-radius: 8px;
    }

    /deep/.ivu-icon {
        font-size: 22px;
        line-height: 50px;
    }
}

.login-other {
    display: flex;
    justify-content: space-between;
    width: 350px;
    height: 40px;
    line-height: 20px;
    margin: 10px auto;
    color: rgb(153, 153, 153);

    .login-link {
        span {
            padding: 0 10px;

            &:nth-child(1) {
                border-right: 1px solid #dcdcdc;
            }
        }
    }
}

.btn-box {
    width: 350px;
    height: 50px;
    margin: 20px auto;
}

.btn {
    font-size: 18px;
    width: 350px;
    height: 50px;
    border-radius: 4px;
}

.not-allowed {
    color: #fff;
    cursor: not-allowed;
    border: 1px solid #afafaf;
    background-color: #a9a9a9;
    background-image: linear-gradient(180deg, #b8b8b8, #a9a9a9);
}

.submit {
    color: #fff;
    cursor: pointer;
    background-color: #678ee7;
}

.support-more {
    color: rgb(153, 153, 153);
    border-top: 1px solid #dcdcdc;
    width: 350px;
    margin: auto;
    padding: 20px 0;

    .iconfont {
        margin: 0 5px;
        cursor: pointer;
    }
}

.iconfont {
    width: 30px;
    color: #6be767;
}
</style>
