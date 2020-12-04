
<template>
    <div class="tvjs-item-list" :style="list_style()"
        @mousedown="thismousedown">
        <div v-for="item of items" :class="item_class(item)"
            v-if="!item.hidden" @click="e => item_click(e, item)"
                :style="item_style(item)">
            <div class="trading-vue-tbicon tvjs-pixelated"
                :style="icon_style(item)">
            </div>
            <div>{{item.type}}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ItemList',
    props: ['config', 'items', 'colors', 'dc'],
    mounted() {
        window.addEventListener(
            'mousedown', this.onmousedown
        )
    },
    beforeDestroy() {
        window.removeEventListener(
            'mousedown', this.onmousedown
        )
    },
    methods: {
        list_style() {
            let conf = this.$props.config
            let w = conf.TOOLBAR
            let brd = this.colors.tbListBorder || this.colors.grid
            let bstl = `1px solid ${brd}`
            return {
                left: `${w}px`,
                background: this.colors.back,
                borderTop: bstl,
                borderRight: bstl,
                borderBottom: bstl,
            }
        },
        item_class(item) {
            if (this.dc.tool === item.type) {
                return "tvjs-item-list-item selected-item"
            }
            return "tvjs-item-list-item"
        },
        item_style(item) {
            let conf = this.$props.config
            let h = conf.TB_ICON + conf.TB_ITEM_M * 2 + 8
            let sel = this.dc.tool === item.type
            return {
                height: `${h}px`,
                color: sel ? undefined : `#888888`
            }
        },
        icon_style(data) {
            let conf = this.$props.config
            let br = conf.TB_ICON_BRI
            let im = conf.TB_ITEM_M
            return {
                'background-image': `url(${data.icon})`,
                'width': '25px',
                'height': '25px',
                'margin': `${im}px`,
                'filter': `brightness(${br})`
            }
        },
        item_click(e, item) {
            e.cancelBubble = true
            this.$emit('item-selected', item)
            this.$emit('close-list')
        },
        onmousedown() {
            this.$emit('close-list')
        },
        thismousedown(e) {
            e.stopPropagation()
        }
    },
    computed: {
    },
    data() {
        return {

        }
    }
}

</script>

<style>
.tvjs-item-list {
    position: absolute;
    user-select: none;
    margin-top: -5px;
}
.tvjs-item-list-item {
    display: flex;
    align-items: center;
    padding-right: 20px;
    font-size: 1.15em;
    letter-spacing: 0.05em;
}
.tvjs-item-list-item:hover {
    background-color: #76878319;
}
.tvjs-item-list-item * {
    position: relative !important;
}
</style>
