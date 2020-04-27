<template>
    <div class="chart-widget">
        <div class="widget-header" :id="'widget-header'+this.i" ref="header">header {{this.i}}</div>
        <trading-vue :data="this.chartData" :width="widgetWidth" :height="widgetHeight" ></trading-vue>
    </div>
</template>

<script>

    import TradingVue from "../../../src/TradingVue.vue";

	export default {
		name: "ChartWidget",
        components: {
			TradingVue
        },

        props : {
			i : Number,
			chartData : Object,
			wrapperHeight : Number,
            wrapperWidth : Number,
        },

        data(){
			return{
				widgetWidth : this.wrapperWidth,
                widgetHeight : this.wrapperHeight,
            }
        },

        methods: {
			updateWidgetDims(){
				console.log("updateWidgetDims on widget with id : " + this.i);
				this.$nextTick(() => {
					this.widgetWidth = this.$el.clientWidth;
					this.widgetHeight = this.$el.clientHeight - this.$refs.header.clientHeight ;
					console.log("newdims = W : " , this.widgetWidth, " H : ", this.widgetHeight);
				});
			},
        }
	}
</script>

<style scoped>
    .widget-header{
        background-color: #4285f4;
    }
    .chart-widget{
        background-color: #42b983;
        height: 100%;
    }
</style>