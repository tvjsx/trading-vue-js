
<!-- Layer for Interface objects -->

<template>
<span :class="`trading-vue-grid-ux-${id}`" :style="style">
    <ux-wrapper v-for="ux of uxs"
        :key="ux.uuid"
        :comp="ux.component">
    </ux-wrapper>
</span>
</template>

<script>

import UxWrapper from './UxWrapper.vue'

export default {
    name: 'UxLayer',
    props: ['tv_id', 'id', 'uxs'],
    components: { UxWrapper },
    created: function () {

    },
    beforeDestroy: function () {

    },
    methods: {

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
                'pointer-events': 'none'
            }
        }
    }
}

</script>
