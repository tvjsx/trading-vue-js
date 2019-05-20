<template>
    <img class="t-vue-lbtn" :src="base64"
        @click="onclick"
    ></img>
</template>
<script>

import Icons from '../stuff/icons.json'

export default {
    name: 'LegendButton',
    props: ['id', 'uuid'],
    mounted() {
        console.log(this.$props.uuid)
    },
    computed: {
        base64() {
            return 'data:image/png;base64,' + Icons[this.file_name]
        },
        file_name() {
            let id = this.$props.id
            if (this.$props.id === 'display') {
                id = 'display_on'
            }
            return id + '.png'
        }
    },
    methods: {
        onclick() {
            console.log('here')
        }
    }
}
</script>
<style>
.t-vue-lbtn {
    z-index: 100;
    width: 21px;
    height: 21px;
    margin-bottom: -6px;
    pointer-events: all;
    cursor: pointer;
}
</style>
