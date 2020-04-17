<template>
<div class='test-ux' :style="style">
    <h1>Performance</h1>
    <p>Tests</p>
    <button>Start</button>
</div>
</template>
<script>

import Interface from '../../../src/mixins/interface.js'

export default {
    name: 'Ux',
    mixins: [Interface],
    mounted() {
    },
    computed: {
        style() {
            return {}
        }
    },
    data() {
        return {}
    }
}
</script>
<style scoped>
    .test-ux {
        font-size: 1.5em;
        background-position: center;
        width: 500px;
        height: 350px;
        line-height: 0.25;
        padding: 0.5em 1em 1em 1em;
    }
    h1 {
        margin-top: 30px;
    }
</style>
