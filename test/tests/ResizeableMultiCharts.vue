<template>

    <div id="grid-wrapper">

        <grid-layout
                :layout.sync="layout"
                :col-num="40"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :is-mirrored="false"
                :vertical-compact="false"
                :margin="[10, 10]"
                :use-css-transforms="false"
                :preventCollision="true"
                @layout-ready="layoutReadyEvent">

            <grid-item
                    v-for="item in layout"
                    :key="item.i"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                    :dragAllowFrom="'#widget-header'+item.i"
                    @resized="resizedEvent"
            >
                <ChartWidget :ref="'widgets'" :i="item.i" :chartData="chartData"  />
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>

    import ChartWidget from "./ResizeableMultiCharts/ChartWidget.vue";
	import VueGridLayout from 'vue-grid-layout';

    let layout = [

        { x: 0, y: 0, w: 8, h: 8, i: 0, type : 'ChartWidget' },
        { x: 8, y: 0, w: 8, h: 8, i: 1, type : 'ChartWidget' },
        { x: 16, y: 0, w: 8, h: 8, i: 2, type : 'ChartWidget' },
    ];

	export default {
		name: "ResizeableMultiCharts",
        components : {
            ChartWidget,
			GridLayout: VueGridLayout.GridLayout,
			GridItem: VueGridLayout.GridItem,
        },

        data(){
            return{
                widgetCount : layout.length,
                layout : layout,
				chartData: {
                    ohlcv: [
                        [ 1551128400000, 33,  37.1, 14,  14,  196 ],
                        [ 1551132000000, 13.7, 30, 6.6,  30,  206 ],
                        [ 1551135600000, 29.9, 33, 21.3, 21.8, 74 ],
                        [ 1551139200000, 21.7, 25.9, 18, 24,  140 ],
                        [ 1551142800000, 24.1, 24.1, 24, 24.1, 29 ],
                    ]
				}
			}
        },


        methods : {

			layoutReadyEvent(){
				console.log("layoutReadyEvent");
				let widgets = this.$refs['widgets'];
				this.$nextTick(() => {
					for(let j = 0; j < widgets.length; j++){
						widgets[j].updateWidgetDims();
					}
				});
            },

			resizedEvent(i, newX, newY, newHPx, newWPx){
				let widgets = this.$refs['widgets'];

				for(let j = 0; j < widgets.length; j++){
					let w = widgets[j];
					console.log("tested widget ", w.i, w);
					if(w.i === i){
						w.updateWidgetDims();
						break;
					}
				}
            }
        }
	}
</script>

<style  >
    #grid-wrapper {
        width: 100vw;
        height: 100vh;
    }
</style>