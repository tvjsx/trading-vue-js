<template>
<div class='test-ux' :style="style">
    <h1>Performance</h1>
    <ul>
        <li v-for="test of tests" :key="test.name"
            :class="test.live ? 'live' : ''">
            {{test.name}}
            <button @click="start_test(test)">Start</button>
            <button @click="stop_test(test)">Stop</button>
            <span> {{test.result}} </span>
        </li>

    </ul>
</div>
</template>
<script>

import Interface from '../../../src/mixins/interface.js'

export default {
    name: 'Ux',
    mixins: [Interface],
    methods: {
        start_test(test) {
            if (test.live) return
            test.live = true
            test.start()
        },
        stop_test(test) {
            if (!test.live) return
            test.live = false
            test.stop()
        }
    },
    computed: {
        style() {
            return {}
        }
    },
    data() {
        return {
            tests: [
                {
                    name: 'Rendering test',
                    result: '',
                    start: () => { this.$emit('scrolling-test', true) },
                    stop: () => { this.$emit('scrolling-test', false) },
                    live: false
                }
            ]
        }
    },
    watch: {
        updater() {
            for (var k in this.overlay.settings) {
                let f = this.tests.filter(x => x.name === k)[0]
                if (f) f.result = this.overlay.settings[k]
            }
        }
    }
}
</script>
<style scoped>
    .test-ux {
        font-size: 1.5em;
        background-position: center;
        width: 500px;
        height: 350px;
        line-height: 0.25;
        padding: 0.5em 1em 1em 1em;
    }
    h1 {
        margin-top: 30px;
    }
    ul {
        list-style: none;
        margin-top: 30px;
        padding-left: 0px;
    }
    li {
        padding: 3px;
        margin-top: 15px;
    }
    li button {
        margin-left: 3px;
        margin-right: 3px;
        vertical-align: text-bottom;
    }
    li span {
        float: right;
        color: #55d226;
        padding-top: 7px;
    }
    .live {
        background-color: #6b6b6b26
    }
    .live::after {
        content: "running";
        font-size: 0.5em;
        vertical-align:top;
        line-height: 15px;
    }
</style>
