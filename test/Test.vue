<template>
    <div>
        <div id="test-title">
            <h1>{{current_test.name}}</h1>
            <p>{{current_test.description}} [{{test_index+1}}/{{len}}]</p>
            <span class="night-mode">
                <input type="checkbox" v-model="night">
                <label>NM</label>
            </span>
            <a href="#" class="test-btn prev-test"
                v-on:click="prev_test">
                Prev test
            </a>
            <a href="#" class="test-btn next-test"
                v-on:click="next_test">
                Next test
            </a>
        </div>
        <div id="test-container">
            <component v-bind:is="current_test"
                :night="night">
            </component>
        </div>
    </div>
</template>

<script>

import Simple from './tests/Simple.vue'
import MouseEvents from './tests/MouseEvents.vue'
import Timeframes from './tests/Timeframes.vue'
import Multichart from './tests/Multichart.vue'
import LegendButtons from './tests/LegendButtons.vue'
import ChartTypes from './tests/ChartTypes.vue'
import DataHelper from './tests/DataHelper.vue'
import Toolbar from './tests/Toolbar.vue'
import GridSettings from './tests/GridSettings.vue'
import Interfaces from './tests/Interfaces.vue'
import IndexBased from './tests/IndexBased.vue'
import Performance from './tests/Performance.vue'
import Renko from './tests/Renko.vue'

const TESTS = {
    Simple, MouseEvents, Timeframes, Multichart,
    LegendButtons, ChartTypes, DataHelper, Toolbar,
    GridSettings, Interfaces, IndexBased, Performance,
    Renko
}

export default {
    name: 'app',
    components: TESTS,
    mounted() {
        this.current_test = Object.values(TESTS)[0]
    },
    data() {
        return {
            len: Object.values(TESTS).length,
            test_index: 0,
            current_test: 'Simple',
            night: true
        }
    },
    methods: {
        prev_test() {
            let list = Object.values(TESTS)

            if (--this.test_index < 0) {
                this.test_index = list.length - 1
            }
            this.current_test = list[this.test_index]
        },
        next_test() {
            let list = Object.values(TESTS)

            if (++this.test_index >= list.length) {
                this.test_index = 0
            }
            this.current_test = list[this.test_index]
        }
    }
};
</script>

<style>
html,
body {
    background-color: #34363c;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
#test-title{
    position: absolute;
    height: 50px;
    color: #ddd;
    width: 100%;
}

#test-container{
    position: absolute;
    top: 50px;
}
#test-title h1 {
    color: #9b9ca0;
    margin: 5px 0 0 10px;
}
#test-title p {
    position: absolute;
    width: 100%;
    top: 1px;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,
    Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,
    Fira Sans,Droid Sans,Helvetica Neue,
    sans-serif;
    font-weight: 200;
}

.test-btn {
    top: 12px;
    position: absolute;
    right: 10px;
	background-color:#44c767;
	-moz-border-radius:28px;
	-webkit-border-radius:28px;
	border-radius:28px;
	//border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:5px 17px;
	text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;
}

.test-btn:active {
	top: 13px;
}

.prev-test {
    right: 115px;
    background-color:#4285f4;
}

.test-btn .prev-test:hover {
	background-color:#44c767;
}

.test-btn .next-test:hover {
	background-color:#44c767;
}

.night-mode {
    position: absolute;
    top: 17px;
    right: 220px;
    color: #888;
    font: 11px -apple-system,BlinkMacSystemFont,
        Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,
        Fira Sans,Droid Sans,Helvetica Neue,
        sans-serif
}

</style>
