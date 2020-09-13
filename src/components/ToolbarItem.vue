
<template>
    <div :class="['trading-vue-tbitem', selected ? 'selected-item' : '']"
        @click="$emit('item-selected', data)"
        :style="item_style">
        <div class="trading-vue-tbicon pixelated"
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
    },
    computed: {
        item_style() {
            if (this.$props.data.type === 'System:Splitter') {
                return this.splitter
            }
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
            if (this.$props.data.type === 'System:Splitter') {
                return {}
            }
            let conf = this.$props.config
            let br = conf.TB_ICON_BRI
            let im = conf.TB_ITEM_M
            return {
                'background-image': `url(${this.$props.data.icon})`,
                'width': '25px',
                'height': '25px',
                'margin': `${im}px`,
                'filter': `brightness(${br})`
            }
        },
        splitter() {
            let conf = this.$props.config
            let colors = this.$props.colors
            let c = colors.grid
            let im = conf.TB_ITEM_M
            let m = (conf.TOOLBAR - conf.TB_ICON) * 0.5 - im
            let s = conf.TB_ICON + im * 2
            return {
                'width': `${s}px`,
                'height': '1px',
                'margin': `8px ${m}px 8px ${m}px`,
                'background-color': c
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
     filter: brightness(1.45) sepia(1) hue-rotate(90deg) saturate(4.5) !important;
}
.pixelated {
    -ms-interpolation-mode: nearest-neighbor;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: -webkit-crisp-edges;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: pixelated;
}

</style>
