
<template>
    <div class="trading-vue-toolbar" :style="styles"
        :key="tool_count">
        <toolbar-item v-for="(tool, i) in data.tools"
            v-if="tool.icon && !tool.hidden"
            @item-selected="selected"
            :key="i"
            :data="tool"
            :config="config"
            :colors="colors"
            :selected="tool.type === data.tool">
        </toolbar-item>
    </div>
</template>

<script>

import ToolbarItem from './ToolbarItem.vue'

export default {
    name: 'Toolbar',
    props: [
        'data', 'height', 'colors', 'tv_id', 'config'
    ],
    components: { ToolbarItem },
    mounted() {
    },
    methods: {
        selected(tool) {
            this.$emit('custom-event', {
                event:'tool-selected', args: [tool.type]
            })
        }
    },
    computed: {
        styles() {
            let colors = this.$props.colors
            let b = this.$props.config.TB_BORDER
            let w = this.$props.config.TOOLBAR - b
            let c = colors.grid
            let cb = colors.tbBack || colors.back
            let brd = colors.tbBorder || colors.scale
            let st = this.$props.config.TB_B_STYLE
            return {
                'width': `${w}px`,
                'height': `${this.$props.height-3}px`,
                'background-color': cb,
                'border-right': `${b}px ${st} ${brd}`
            }
        }
    },
    watch: {
        data: {
            handler(n) {
                // For some reason Vue.js doesn't want to
                // update 'tools' automatically when new item
                // is pushed/removed. Yo, Vue, I herd you
                // you want more dirty tricks?
                if (n.tools) this.tool_count = n.tools.length
            },
            deep: true
        }
    },
    data() { return { tool_count: 0 } }
}

</script>

<style>
.trading-vue-toolbar {
    position: absolute;
    border-right: 1px solid black;
    z-index: 100;
    padding-top: 3px;
}
</style>
