<template>
    <div class="tvjs-the-tip"
        v-html="data.text" @mousedown="$emit('remove-me')"
        :style="style">
    </div>
</template>
<script>
export default {
    name: 'TheTip',
    props: ['data'],
    mounted() {
        setTimeout(() => this.$emit('remove-me'), 3000)
    },
    computed: {
        style() {
            return {
                background: this.data.color
            }
        }
    },
}
</script>
<style>
.tvjs-drift-enter-active {
    transition: all .3s ease;
}
.tvjs-drift-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.tvjs-drift-enter, .tvjs-drift-leave-to
{
    transform: translateX(10px);
    opacity: 0;
}
.tvjs-the-tip {
    position: absolute;
    width: 200px;
    text-align: center;
    z-index: 10001;
    color: #ffffff;
    font-size: 1.5em;
    line-height: 1.15em;
    padding: 10px;
    border-radius: 3px;
    right: 70px;
    top: 10px;
    text-shadow: 1px 1px black;
}
</style>
