
<template>
    <div :class="['trading-vue-tbitem', selected ? 'selected-item' : '']"
        :style="item_style">
        <div class="trading-vue-tbicon"
            :style="icon_style">
        </div>
    </div>
</template>

<script>

export default {
    name: 'ToolbarItem',
    props: [
        'data', 'selected', 'colors', 'tv_id', 'config'
    ],
    mounted() {
        console.log(this.$props.selected)
    },
    computed: {
        item_style() {
            let conf = this.$props.config
            let im = conf.TB_ITEM_M
            let m = (conf.TOOLBAR - conf.TB_ICON) * 0.5 - im
            let s = conf.TB_ICON + im * 2
            return {
                'width': `${s}px`,
                'height': `${s}px`,
                'margin': `8px ${m}px 0px ${m}px`,
                'border-radius': '3px'
            }
        },
        icon_style() {
            return {
                'background-image': `url(${this.$props.data.icon})`,
                'width': '25px',
                'height': '25px',
                'margin': '5px'
            }
        }
    }
}

</script>

<style>
.trading-vue-tbitem {
}
.trading-vue-tbitem:hover {
    background-color: #76878319;
}

.trading-vue-tbicon {
    position: absolute;
}
.trading-vue-tbitem.selected-item .trading-vue-tbicon {
    filter: brightness(1.6) sepia(1) hue-rotate(110deg) saturate(6);
}
</style>
