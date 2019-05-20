<template>
<span class="t-vue-lbtn-grp">
    <legend-button
        v-for="(b, i) in buttons" :key="i"
        :id="b"
    >
    </legend-button>
</span>
</template>
<script>

import LegendButton from './LegendButton.vue'

export default {
    name: 'ButtonGroup',
    props: ['buttons', 'ov_id', 'tv_id'],
    components: {
        LegendButton
    },
    mounted() {
    }
}
</script>
<style>
.t-vue-lbtn-grp {
    margin-left: 0.0em;
}
</style>
