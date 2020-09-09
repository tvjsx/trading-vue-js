<template>
    <!-- WidgetS Layer -->
    <div class="tvjs-widgets"
        :style="{width: width+'px', height: height+'px'}">
        <component v-for="id in Object.keys(map)"
            :key="id"
            :id="id"
            :main="map[id].ctrl"
            :data="map[id].data"
            :tv="tv"
            :dc="dc"
            v-bind:is="initw(id)">
        </component>
    </div>
</template>
<script>
export default {
    name: 'Widgets',
    props: ['width', 'height', 'map', 'tv', 'dc'],
    methods: {
        initw(id) {
            return this.$props.map[id].cls
        }
    }
}
</script>
<style>
.tvjs-widgets {
    position: absolute;
    z-index: 1000;
    pointer-events: none;
}
</style>
