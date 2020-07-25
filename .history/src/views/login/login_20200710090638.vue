<template>
<div class="box ccc">
    <div class="login f-column  a-center ">
        <div class="M_box ccc m-t-40">
            M
        </div>
        <div class="M_text">
            使用XMall账号登录官网
        </div>

        <div>

            <i-form :model="formItem" :label-width="80">
                <Form-item label="输入框">
                    <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
                </Form-item>
            </i-form>

            <i-form :model="formItem" :label-width="80">

                <div class="input_box">
                    <i-input size="large" :value.sync="value" placeholder="账号" class="inps"></i-input>
                </div>
                <div class="input_box">
                    <i-input size="large" :value.sync="value" placeholder="密码" class="inps"></i-input>
                </div>
                <div class="m-t-10">

                </div>

            </i-form>

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

    <div>

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
                username:'',
                password:
            },
            ruleValidate: {
                name: [{
                    required: true,
                    message: '姓名不能为空',
                    trigger: 'blur'
                }],
                mail: [{
                        required: true,
                        message: '邮箱不能为空',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: '邮箱格式不正确',
                        trigger: 'blur'
                    }
                ],
                city: [{
                    required: true,
                    message: '请选择城市',
                    trigger: 'change'
                }],
                gender: [{
                    required: true,
                    message: '请选择性别',
                    trigger: 'change'
                }],
                interest: [{
                        required: true,
                        type: 'array',
                        min: 1,
                        message: '至少选择一个爱好',
                        trigger: 'change'
                    },
                    {
                        type: 'array',
                        max: 2,
                        message: '最多选择两个爱好',
                        trigger: 'change'
                    }
                ],
                date: [{
                    required: true,
                    type: 'date',
                    message: '请选择日期',
                    trigger: 'change'
                }],
                time: [{
                    required: true,
                    type: 'date',
                    message: '请选择时间',
                    trigger: 'change'
                }],
                desc: [{
                        required: true,
                        message: '请输入个人介绍',
                        trigger: 'blur'
                    },
                    {
                        type: 'string',
                        min: 20,
                        message: '介绍不能少于20字',
                        trigger: 'blur'
                    }
                ]
            }

        }
    },
    methods: {

    },
    mounted() {
        vaptcha({
            //配置参数
            vid: '****', // 验证单元id
            type: 'click', // 展现类型 点击式
            container: '#vaptchaContainer', // 按钮容器，可为Element 或者 selector

        }).then(function (vaptchaObj) {
            vaptchaObj.render() // 调用验证实例 vaptchaObj 的 render 方法加载验证按钮

        })

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
