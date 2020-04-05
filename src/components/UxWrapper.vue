
<!-- Wrapper window for Interface objects -->

<template>
<div class="trading-vue-wrapper">
    <component v-bind:is="comp"></component>
</div>
</template>

<script>

export default {
    name: 'UxWrapper',
    props: ['comp'],

    methods: {

    },
    computed: {

    }
}

</script>
