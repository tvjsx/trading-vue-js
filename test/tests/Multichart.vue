<template>
    <div class="multi-chart">
        <chartbox v-for="(timeframe, id) in charts" :key="id"
            :id="id" :tf="id" v-bind:data="timeframe"
            :width="cbox_width" :height="cbox_height"
            >
        </chartbox>
    </div>
</template>

<script>
import Chartbox from './Multichart/Chartbox.vue'
import Data from '../data/data_tf.json'
import Utils from '../../src/stuff/utils.js'

export default {
    name: 'Multichart',
    description: 'All charts must work correctly and independently',
    components: {
        Chartbox
    },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight - 50
        }
    },
    computed: {
        cbox_width() { return Math.floor(this.width / 2 - 1) },
        cbox_height() { return Math.floor(this.height / 2 - 1) }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        setTimeout(() => {
            // Async data setup
            this.$set(this, 'charts', Data)
        }, 0)
        this.onResize()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            charts: {}, // Data will be here,
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
};
</script>

<style>
.multi-chart {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100%;
}
</style>
