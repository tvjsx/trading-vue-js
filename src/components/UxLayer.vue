
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
    <div class="grid-options">
      <GridOptions @toggle-grid="toggleGrid"/>
    </div>
</span>

</template>

<script>

import GridOptions from './GridOptions.vue';
import UxWrapper from './UxWrapper.vue'

export default {
    name: 'UxLayer',
    props: ['tv_id', 'id', 'uxs', 'updater', 'colors', 'config'],
    components: { UxWrapper,GridOptions },
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
<style>
.grid-options {
    position: absolute;
    top: 10px; /* Adjust this value to fine-tune the vertical position */
    right: 10px; /* Adjust this value to fine-tune the horizontal position */
    z-index: 100; /* Ensure it's above other content */
}
</style>
        