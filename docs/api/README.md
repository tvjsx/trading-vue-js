# API Book

::: warning
This library is in alpha stage, API may change. This guide version is **0.2.2**
:::

![npm](https://img.shields.io/npm/v/trading-vue-js.svg?color=brightgreen&label=Current%20lib%20version)

## Props

| Prop | Type | Description |
|---|---|---|
| titleTxt | String | Chart title text  |
| id | String | HTML id of root div |
| width | Number | Chart width (px) |
| height | Number | Chart height (px) |
| colorTitle | String | Title text color |
| colorBack | String | Background color |
| colorGrid | String | Grid color |
| colorText | String | Text (labels) color |
| colorTextHL | String | Highlighted text color |
| colorScale | String | Scales border color |
| colorCross | String | Crosshair color |
| colorCandleUp | String | Green candle color |
| colorCandleDw | String | Red candle color |
| colorWickUp | String | Green wick color  |
| colorWickDw | String | Red wick color  |
| colorWickSm | String | Scaled down wick color |
| colorVolUp | String | Green volume color |
| colorVolDw | String | Red volume color |
| colorPanel | String | Value bars color |
| font | String | Full font string, e.g. "11px Arial..." |
| data | Object | Data object |
| overlays | Array | List of custom overlay classes |

## Data structure

`Data structure v1.0`

```js
{
    "ohlcv": [   // Mandatory
        [timestamp, open, high, low, close, volume],
        ...
    ],
    "onchart": [ // Displayed ON the chart
        {
            "name": "<Indicator name>",
            "type": "<e.g. EMA, SMA>",
            "data": [
                [timestamp, ... ], // Arbitrary length
                ...
            ],
            "settings": { } // Arbitrary settings format
        },
        ...
    ],
    "offchart": [ // Displayed BELOW the chart
        {
            "name": "<Indicator name>",
            "type": "<e.g. RSI, Stoch>",
            "data": [
                [timestamp, ... ], // Arbitrary length
                ...
            ],
            "settings": { } // Arbitrary settings format
        },
        ...
    ]
}
```

## Overlay api

Data for building overlays. Defined in `mixins/overlay.js`, accessed through overlay's `this.$props`.

*All properties reactive*

| Prop | Type | Description |
|---|---|---|
| id | String | Overlay unique id (within current grid) ,e.g 'EMA_1' |
| num | Number | Overlay unique num (within current grid) |
| interval | Number | Candlestick interval, ms (e.g. 1 min = 60000 ) |
| cursor | Object | Crosshair position and selected values, see below* |
| colors | Object | All colors from `TradingVue.vue` combined |
| layout | Object | Layout API object, see below |
| sub | Array | Current subset of candlestick data |
| data | Array | Current subset of indicator data |
| settings | Object | Indicator's settings, defined in `data.json` |
| grid_id | Number | Current grid id |

### Cursor data*

| Field | Type | Description |
|---|---|---|
| x | Number | Current x position (px) |
| y | Number | Current y position (px) |
| t | Number | Current timestamp (ms) |
| y$ | Number | Current price level |
| grid_id | Number | Current grid id |
| locked | Boolean | *true* during scrolling, *false* otherwise |
| values | Object | Current indicator values in a specific format |

#### Values format

```js
values: {
    "<grid_id>": {
        "ohlcv": [ ... ] | undefined,
        "<overlay_id>": [ ... ],
        ...
    },
    ...
}
```

*Eaxample:*

```js
{
    0: {
        ohlcv: [1553378400000,4051.3,4063.9,4051.3,4063.8,259.61602371],
        EMA_0: [1553378400000,4054.9315737970815],
        EMA_1: [1553378400000,4057.3817565994727]
    },
    1: {
        ohlcv: undefined,
        RSI_0: [1553378400000,53.148999912870806]
    }
}
```

### Layout API

¯\\_(ツ)_/¯ Will be here soon
