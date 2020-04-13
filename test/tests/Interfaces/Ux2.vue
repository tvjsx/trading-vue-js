<template>
<div class='test-ux'>
</div>
</template>
<script>

import Interface from '../../../src/mixins/interface.js'

export default {
    name: 'Ux2',
    mixins: [Interface]
}
</script>
<style scoped>
    .test-ux {
        background: url(https://usawatchdog.com/wp-content/uploads/2018/10/Peter-Schiff-10.2.18.png);
        width: 100px;
        height: 100px;
        background-size: cover;
    }
</style>
