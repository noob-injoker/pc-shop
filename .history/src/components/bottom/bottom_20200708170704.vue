<template>
<div>
    <div class="df bottom_top f-column w1220">

        <div class="text w1220 df">
            <div class="f1 bottom_left df">
                <div class="df text_item text f1" v-for="(item,index) in list" :key="index">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="content1 content">
                        {{item.content1}}
                    </div>
                    <div class="content2 content">
                        {{item.content2}}
                    </div>
                    <div class="content3 content">
                        {{item.content3}}
                    </div>

                </div>
            </div>

            <div class="bottom_right ">
                <div class="phone m-t-5  df j-end">
                    <div>13666191545</div>
                </div>
                <div class="time df m-t-10 j-end">
                    <div>周一至周日 10:00-23:00（限Starrer或捐赠人联系）</div>
                </div>
                <div class=" df m-t-10 j-end">

                    <div class="btn ccc">在线帮助</div>

                </div>
            </div>
        </div>

        <div class="line">

        </div>

        <div>
            <div>
                Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属 锤子科技
                 法律声明 隐私条款 开发者中心
            </div>

            <div>
                蜀ICP备16030308号-1 蜀ICP证16030308号
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
            list: [{
                    title: '订单服务',
                    content1: '购买指南',
                    content2: '支付方式',
                    content3: '送货政策',
                },
                {
                    title: '服务支持',
                    content1: '官方开源',
                    content2: '项目前端',
                    content3: '项目后端',
                },
                {
                    title: '自助服务',
                    content1: '个人博客',
                    content2: '个人简介',
                    content3: '个人视频',
                },
                {
                    title: '其他项目',
                    content1: 'XPay支付系统',
                    content2: '数据共享',
                    content3: '待开发...',
                },
                {
                    title: '友情链接',
                    content1: '宇cccc',
                    content2: 'Smartisan',
                    content3: 'vue',
                },
                {
                    title: '关注我吧',
                    content1: '腾讯 QQ',
                    content2: '新浪微博',
                    content3: '官方邮箱',
                },
            ],

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
.line {
    width: 100%;
    height: 1px;
    background: rgb(204, 200, 200);
}

.btn {
    border: 1px solid rgb(168, 158, 158);
    color: rgb(154, 154, 206);
    font-weight: 700;
    cursor: pointer;
    border-radius: 5px;
}

.btn:hover {
    background: #FAFAFA;
}

.phone {
    font-size: 30px;

}

.btn {
    width: 100px;
    height: 30px;
    background: white;
}

.bottom_top {
    margin-top: 100px;
}

.content {

    margin-bottom: 4px;
    font-size: 14px;
}

.title {
    margin-bottom: 7px;
    font-size: 15px;

}

.text {
    height: 150px;
}

.text_item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.bottom_left {
    flex: 2;
}

.bottom_right {
    flex: 1;
}
</style>
