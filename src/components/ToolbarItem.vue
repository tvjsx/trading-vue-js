
<template>
    <div :class="['trading-vue-tbitem', selected ? 'selected-item' : '']"
        @click="emit_selected('click')"
        @mousedown="mousedown"
        @touchstart="mousedown"
        @touchend="emit_selected('touch')"
        :style="item_style">
        <div class="trading-vue-tbicon tvjs-pixelated"
            :style="icon_style">
        </div>
        <div class="trading-vue-tbitem-exp" v-if="data.group"
            :style="exp_style"
            @click="exp_click"
            @mousedown="expmousedown"
            @mouseover="expmouseover"
            @mouseleave="expmouseleave">
            ᐳ
        </div>
        <item-list :config="config" :items="data.items"
            v-if="show_exp_list" :colors="colors" :dc="dc"
            @close-list="close_list"
            @item-selected="emit_selected_sub"/>
    </div>
</template>

<script>

import ItemList from './ItemList.vue'
import Utils from '../stuff/utils.js'

export default {
    name: 'ToolbarItem',
    props: [
        'data', 'selected', 'colors', 'tv_id', 'config', 'dc', 'subs'
    ],
    components: { ItemList },
    mounted() {
        if (this.data.group) {
            let type = this.subs[this.data.group]
            let item = this.data.items.find(x => x.type === type)
            if (item) this.sub_item = item
        }
    },
    methods: {
        mousedown(e) {
            this.click_start = Utils.now()
            this.click_id = setTimeout(() => {
                this.show_exp_list = true
            }, this.config.TB_ICON_HOLD)
        },
        expmouseover() {
            this.exp_hover = true
        },
        expmouseleave() {
            this.exp_hover = false
        },
        expmousedown(e) {
            if (this.show_exp_list) e.stopPropagation()
        },
        emit_selected(src) {
            if (Utils.now() - this.click_start >
                this.config.TB_ICON_HOLD) return
            clearTimeout(this.click_id)
            //if (Utils.is_mobile && src === 'click') return
            // TODO: double firing
            if (!this.data.group) {
                this.$emit('item-selected', this.data)
            } else {
                let item = this.sub_item || this.data.items[0]
                this.$emit('item-selected', item)
            }
        },
        emit_selected_sub(item) {
            this.$emit('item-selected', item)
            this.sub_item = item
        },
        exp_click(e) {
            if (!this.data.group) return
            e.cancelBubble = true
            this.show_exp_list = !this.show_exp_list
        },
        close_list() {
            this.show_exp_list = false
        }
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
            let b = this.exp_hover ? 0 : 3
            return {
                'width': `${s}px`,
                'height': `${s}px`,
                'margin': `8px ${m}px 0px ${m}px`,
                'border-radius': `3px ${b}px ${b}px 3px`
            }
        },
        icon_style() {
            if (this.$props.data.type === 'System:Splitter') {
                return {}
            }
            let conf = this.$props.config
            let br = conf.TB_ICON_BRI
            let sz = conf.TB_ICON
            let im = conf.TB_ITEM_M
            let ic = this.sub_item ?
                this.sub_item.icon : this.$props.data.icon
            return {
                'background-image': `url(${ic})`,
                'width': `${sz}px`,
                'height': `${sz}px`,
                'margin': `${im}px`,
                'filter': `brightness(${br})`
            }
        },
        exp_style() {
            let conf = this.$props.config
            let im = conf.TB_ITEM_M
            let s = conf.TB_ICON * 0.5 + im
            let p = (conf.TOOLBAR - s * 2) / 4
            return {
                padding: `${s}px ${p}px`,
                transform: this.show_exp_list ?
                    `scale(-0.6, 1)` :
                    `scaleX(0.6)`
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
    },
    data() {
        return {
            exp_hover: false,
            show_exp_list: false,
            sub_item: null
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

.trading-vue-tbitem-exp {
    position: absolute;
    right: -3px;
    padding: 18.5px 5px;
    font-stretch: extra-condensed;
    transform: scaleX(0.6);
    font-size: 0.6em;
    opacity: 0.0;
    user-select: none;
    line-height: 0;
}

.trading-vue-tbitem:hover
.trading-vue-tbitem-exp {
    opacity: 0.5;
}

.trading-vue-tbitem-exp:hover {
    background-color: #76878330;
    opacity: 0.9 !important;
}

.trading-vue-tbicon {
    position: absolute;
}
.trading-vue-tbitem.selected-item > .trading-vue-tbicon,
.tvjs-item-list-item.selected-item > .trading-vue-tbicon {
     filter: brightness(1.45) sepia(1) hue-rotate(90deg) saturate(4.5) !important;
}
.tvjs-pixelated {
    -ms-interpolation-mode: nearest-neighbor;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: -webkit-crisp-edges;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: pixelated;
}

</style>
