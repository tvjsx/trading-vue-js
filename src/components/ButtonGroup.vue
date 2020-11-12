<template>
<span class="t-vue-lbtn-grp">
    <legend-button
        v-for="(b, i) in buttons" :key="i"
        :id="b.name || b"
        :tv_id="tv_id"
        :ov_id="ov_id"
        :grid_id="grid_id"
        :index="index"
        :display="display"
        :icon="b.icon"
        :config="config"
        v-on:legend-button-click="button_click"
    >
    </legend-button>
</span>
</template>
<script>

import LegendButton from './LegendButton.vue'

export default {
    name: 'ButtonGroup',
    props: [
        'buttons', 'tv_id', 'ov_id', 'grid_id', 'index',
        'display', 'config'
    ],
    components: {
        LegendButton
    },
    methods: {
        button_click(event) {
            this.$emit('legend-button-click', event)
        }
    }
}
</script>
<style>
.t-vue-lbtn-grp {
    margin-left: 0.5em;
}
</style>
