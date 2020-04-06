
<!-- Wrapper window for Interface objects -->

<template>
<div class="trading-vue-ux-wrapper"
    :id="`tvjs-ux-wrapper-${ux.uuid}`"
    :style="style">
    <component v-bind:is="ux.component"></component>
</div>
</template>

<script>

export default {
    name: 'UxWrapper',
    props: ['ux', 'updater'],
    mounted() {
        let self = document.getElementById(this.uuid)
        this.x = this.layout.t2screen(this.uxr.pin[0])
        this.y = this.layout.$2screen(this.uxr.pin[1])
    },
    methods: {
    },
    computed: {
        layout() {
            return this.$props.ux.overlay.layout
        },

        uxr() {
            return this.$props.ux
        },
        uuid() {
            return `tvjs-ux-wrapper-${this.uxr.uuid}`
        },
        style() {
            return {
                'left': `${this.x}px`,
                'top': `${this.y}px`
            }
        }
    },
    watch: {
        updater() {
            this.x = this.layout.t2screen(this.uxr.pin[0])
            this.y = this.layout.$2screen(this.uxr.pin[1])
        }
    },
    data() {
        return {
            x: 0,
            y: 0
        }
    }
}

</script>
<style>
    .trading-vue-ux-wrapper {
        pointer-events: all;
        position: absolute;
        display: flex;
    }
</style>
