<!-- Basically, a simple widget example -->
<template>
    <img class="x-goto-button" :src="icon"
        :style="style"
        @click="onclick">
</template>
<script>

import Icon from './goto_icon.json'

export default {
    name: 'Button',
    props: ['id', 'main', 'dc', 'tv', 'data'],
    components: {},
    mounted() {
        this.chart = this.$props.tv.$refs.chart
        this.layout = this.chart._layout.grids[0]

        // Enable some chart hook events
        this.chart.hooks('data', 'resize')

        this.main.bus.onupdate = () => {
            this.layout = this.chart._layout.grids[0]
        }

        // Update ref to the chart when resetChart is called()
        // TODO: make this automatic (prob add 'chart' prop)
        this.main.bus.onreset = () => {
            this.chart = this.$props.tv.$refs.chart
            this.layout = this.chart._layout.grids[0]
        }
    },
    methods: {
        onclick() {

            // Ease it bro
            let ez = x => x<.5 ? 2*x*x : -1+(4-2*x)*x

            let tN = this.chart.meta.last[0]
            let t0 = this.$props.tv.getRange()[1]
            let t1 = tN + this.chart.interval * 5

            let step = (t1 - t0) / 50
            let len = t1 - t0
            let t = t0

            let f = () => {
                if (t >= t1) return this.chart.goto(t1)
                this.chart.goto(t0+ez((t-t0)/len)*len)
                t+=step
                setTimeout(f)
            }
            f()
        }
    },
    computed: {
        style() {
            if (!this.layout) return {}
            return {
                top: this.layout.height - 52 + 'px',
                right: this.layout.sb + 10 + 'px',
            }
        }
    },
    data() {
        return {
            icon: Icon,
            chart: null,
            layout: null
        }
    }
}
</script>
<style>
.x-goto-button {
    position: absolute;
    cursor: pointer;
    pointer-events: all;
}
.x-goto-button:hover {
    filter: brightness(1.2);
}
</style>
