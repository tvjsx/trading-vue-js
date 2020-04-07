<template>
<div class='test-ux'>
    <h1>Ok</h1>
    <p>I got it</p>
    <button>But Why?</button>
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
        font-size: 3em;
        //background: url(http://youremyfavoritetoday.com/wp-content/uploads/2014/04/warp-speed.gif);
        background: url(https://media.giphy.com/media/oyFyFiXz0hrnG/giphy.gif);
        background-position: center;
        width: 250px;
        height: 150px;
        color: #ffffff;
        line-height: 0.25;
        padding: 0.5em 1em 1em 1em;
        border: 1px solid #50525d;
        border-radius: 3px;
    }
</style>
