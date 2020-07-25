<template>
<div>
    <div class="df w1220 f-column a-center r1">

        <div class="df w1220">
            <div>综合排序</div>
            <div>价格从低到高</div>
            <div>价格从高到低</div>
            <div>
                this is an
            </div>
        </div>

        <div>
            <div>



                                                              
                <div class="loop_item" :key></div>
                







            </div>
            <div>
                <Page @on-change="onChange" @on-page-size-change="onPageSizeChange" :total="16" size="small" :page-size-opts=[8,16] :page-size='8' show-total show-sizer show-elevator />
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
          list:[]

        }
    },
    methods: {
        onChange(size) {

            this.$api.getAllData(size, 8).then(res => {
                this.list = res.data
                console.log(this.list);
            }).catch(err => {
                console.log(err);
            })

        },
        onPageSizeChange(size) {
            this.$api.getAllData(1, size).then(res => {
                this.list = res.data
                console.log(this.list);
            }).catch(err => {
                console.log(err);
            })
        }

    },
    mounted() {

        this.$api.getAllData(1, 16).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
