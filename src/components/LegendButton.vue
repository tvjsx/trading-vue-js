<template>
    <img class="t-vue-lbtn" :src="base64"
        :id="uuid" :style="{
            width: config.L_BTN_SIZE + 'px',
            height: config.L_BTN_SIZE + 'px',
            margin: config.L_BTN_MARGIN
        }"
        @click="onclick">
</template>
<script>

import Icons from '../stuff/icons.json'

export default {
    name: 'LegendButton',
    props: ['id', 'tv_id', 'grid_id', 'ov_id', 'index', 'display',
            'icon', 'config'],
    mounted() {
    },
    computed: {
        base64() {
            return this.icon || Icons[this.file_name]
        },
        file_name() {
            let id = this.$props.id
            if (this.$props.id === 'display') {
                id = this.$props.display ? 'display_on' : 'display_off'
            }
            return id + '.png'
        },
        uuid() {
            let tv = this.$props.tv_id
            let gr = this.$props.grid_id
            let ov = this.$props.ov_id
            return `${tv}-btn-g${gr}-${ov}`
        },
        data_type() {
            return this.$props.grid_id === 0 ?
                "onchart" : "offchart"
        },
        data_index() {
            return this.$props.index
        }
    },
    methods: {
        onclick() {
            this.$emit('legend-button-click', {
                button: this.$props.id,
                type: this.data_type,
                dataIndex: this.data_index,
                grid: this.$props.grid_id,
                overlay: this.$props.ov_id,
            })
        }
    }
}
</script>
<style>
.t-vue-lbtn {
    z-index: 100;
    pointer-events: all;
    cursor: pointer;
}
</style>
