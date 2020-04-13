
<!-- Layer for Interface objects -->

<template>
<span :class="`trading-vue-grid-ux-${id}`" :style="style">
    <ux-wrapper v-for="ux of uxs"
        @custom-event="on_custom_event"
        :key="ux.uuid"
        :ux="ux"
        :updater="updater"
        :colors="colors"
        :config="config">
    </ux-wrapper>
</span>
</template>

<script>

import UxWrapper from './UxWrapper.vue'

export default {
    name: 'UxLayer',
    props: ['tv_id', 'id', 'uxs', 'updater', 'colors', 'config'],
    components: { UxWrapper },
    created () {
    },
    mounted() {
    },
    beforeDestroy () {
    },
    methods: {
        on_custom_event(event) {
            this.$emit('custom-event', event)
        }
    },
    computed: {
        style() {
            return {
                'top': this.$props.id !== 0 ? '1px' : 0,
                'left': 0,
                'width': '100%',
                'height': 'calc(100% - 2px)',
                'position': 'absolute',
                'z-index': '1',
                'pointer-events': 'none',
                'overflow': 'hidden'
            }
        }
    }
}

</script>
