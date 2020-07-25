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

                <div class="input_box">
                    <i-input size="large" :value.sync="value" placeholder="账号" class="inps"></i-input>
                </div>
                <div class="m-t-10">
                    <i-input size="large" :value.sync="value" placeholder="密码" class="inps"></i-input>
                </div>

            </i-form>
        </div>

        <div>
            <div ref="vaptcha" style="width:300px;height:36px">
                <div class="vaptcha-init-main">
                    <div class="vaptcha-init-loading">
                        <a href="https://www.vaptcha.com/" target="_blank"><img src="https://cdn.vaptcha.com/vaptcha-loading.gif" /></a>
                        <span class="vaptcha-text">VAPTCHA启动中...</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
const extend = function (to, _from) {
    for (const key in _from) {
        to[key] = _from[key]
    }
    return to
}
export default {
    name: '',
    props: {
        type: {
            type: String,
            default: 'click'
        },
        scene: {
            type: [String, Number],
            default: 0
        },
        vpStyle: {
            type: String,
            default: 'dark'
        },
        color: {
            type: String,
            color: '#3C8AFF'
        },
        lang: {
            type: String,
            default: 'auto'
        },

    },
    components: {

    },
    data() {
        return {
            value: ''

        }
    },
    methods: {
        loadV2Script() {
            if (typeof window.vaptcha === 'function') { //如果已经加载就直接放回
                return Promise.resolve()
            } else {
                return new Promise(resolve => {
                    var script = document.createElement('script')
                    script.src = 'https://v.vaptcha.com/v3.js'
                    script.async = true
                    script.onload = script.onreadystatechange = function () {
                        if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                            resolve()
                            script.onload = script.onreadystatechange = null
                        }
                    }
                    document.getElementsByTagName("head")[0].appendChild(script)
                })
            }

        },
        mounted() {

            var config = extend({
                vid: '5efc030de988dd2fc1b8e91b',
                container: this.$refs.vaptcha,
                style: this.vpStyle
            }, this.$props)
            this.loadV2Script().then(() => {
                window.vaptcha(config).then(obj => {
                    this.$emit('input', obj)
                    obj.render()
                })
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
    background-color: #EEEEEE;
}

.vaptcha-init-loading {
    display: table-cell;
    vertical-align: middle;
    text-align: center
}

.vaptcha-init-loading>a {
    display: inline-block;
    width: 18px;
    height: 18px;
}

.vaptcha-init-loading>a img {
    vertical-align: middle
}

.vaptcha-init-loading .vaptcha-text {
    font-family: sans-serif;
    font-size: 12px;
    color: #CCCCCC;
    vertical-align: middle
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
