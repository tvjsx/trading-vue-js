
<template>
    <div class="trading-vue-toolbar" :style="styles">
    </div>
</template>

<script>

export default {
    name: 'Toolbar',
    props: [
        'height', 'colors', 'font', 'tv_id', 'config'
    ],
    mounted() {
        console.log(this.$props.colors.colorTbBack)
    },
    computed: {
        styles() {
            let colors = this.$props.colors
            let b = this.$props.config.TB_BORDER
            let w = this.$props.config.TOOLBAR - b
            let c = colors.colorGrid
            let cb = colors.colorTbBack || colors.colorBack
            let brd = colors.colorTbBorder || colors.colorGrid
            return {
                'width': `${w}px`,
                'height': `${this.$props.height}px`,
                'background-color': cb,
                'border-right': `${b}px solid ${brd}`
            }
        }
    }
}

</script>

<style>
.trading-vue-toolbar {
    position: absolute;
    border-right: 1px solid black;
}
</style>
