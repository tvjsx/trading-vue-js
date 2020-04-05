<template>
<div class='test-ux'>
    <h1>Title</h1>
    <p>Content</p>
</div>
</template>
<script>

import Interface from '../../../src/mixins/interface.js'

export default {
    name: 'Ux1',
    mixins: [Interface]
}
</script>
<style scoped>
    .test-ux {
        background: #3d71d3;
        width: 100px;
        height: 100px;
    }
</style>
