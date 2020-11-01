<template>
    <div class="tvjs-x-window" :style="style" ref="win">
        <div class="tvjs-x-window-head">
            <div class="tvjs-x-window-title"
                @mousedown="onMouseDown">
                {{title}}
            </div>
            <div class="tvjs-x-window-close"
                @click="$emit('close')">
                ╳
            </div>
        </div>
        <div class="tvjs-x-window-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>

import Dragg from './dragg.js'

export default {
    name: 'Window',
    mixins: [Dragg],
    props: ['title', 'tv'],
    mounted() {
        this.ww = this.$refs.win.clientWidth
        this.wh = this.$refs.win.clientHeight
        this.x = this.tvw * 0.5 - this.ww * 0.5
        this.y = this.tvh * 0.5 - this.wh * 0.5
    },
    computed: {
        style() {
            return {
                top: `${this.y}px`,
                left: `${this.x}px`
            }
        },
        tvw() {
            return this.$props.tv.width
        },
        tvh() {
            return this.$props.tv.height
        }
    },
    data() {
        return {
            ww: 0,
            wh: 0,
            x: 0,
            y: 0
        }
    }
}
</script>
<style>
.tvjs-x-window {
    position: absolute;
    background: #1b202def;
    border-radius: 3px;
    pointer-events: all;
    padding-left: 7px;
}
.tvjs-x-window-head {
    font-size: 2em;
    user-select: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    height: 36px;
    padding: 10px;
    cursor: grab;
}

.tvjs-x-window-body {
    padding: 10px;
    font-size: 1.1em;
}
.tvjs-x-window-title {
    width: 300px;
    user-select: none;
}
.tvjs-x-window-close {
    width: 26px;
    cursor: pointer;
    margin: -1em;
    padding: 1em;
    font-size: 0.75em;
}
</style>
