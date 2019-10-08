
<template>
    <div class="trading-vue-tbitem" :style="styles">
    </div>
</template>

<script>

export default {
    name: 'ToolbarItem',
    props: [
        'data', 'colors', 'tv_id', 'config'
    ],
    mounted() {
        console.log(this.$props.data)
    },
    computed: {
        styles() {
            /*let colors = this.$props.colors
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
            }*/
            return {
                'background-image': `url(${this.$props.data.icon})`,
                'width': '25px',
                'height': '25px',
                'margin': '15px',
                'filter': 'brightness(1.6) sepia(1) hue-rotate(120deg) saturate(6)'
            }
        }
    }
}

</script>

<style>
.trading-vue-tbitem {

}
</style>
