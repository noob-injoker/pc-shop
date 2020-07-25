<template>
<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
  <template>
    <i-input size="large" placeholder="large size"></i-input>
    <br>
    <i-input placeholder="default size"></i-input>
    <br>
    <i-input size="small" placeholder="small size"></i-input>
</template>
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
            spanLeft: 5,
            spanRight: 19

        }
    },
    methods: {
        toggleClick() {
            if (this.spanLeft === 5) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 5;
                this.spanRight = 19;
            }
        }

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
</style>
