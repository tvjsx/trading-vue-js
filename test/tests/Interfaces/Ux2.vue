<template>
<div class='test-ux'>
    <h1>Title 2</h1>
    <p>Content 2</p>
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
        background: #dbb925;
        width: 100px;
        height: 100px;
    }
</style>
