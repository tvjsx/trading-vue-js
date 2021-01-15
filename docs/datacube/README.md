# DataCube API

This guide version is **0.10.0**

![npm](https://img.shields.io/npm/v/trading-vue-js.svg?color=brightgreen&label=Current%20lib%20version)

**DataCube** [WIP] is a helper class designed for data manipulation. `Trading-vue` component provides only rendering functionality, but with the help of DC it also enables features such as real-time chart updates, indicator calculations and drawing tools (and much more).

Use DC to wrap your data object:

```html
<template>
    <trading-vue :data="chart"></trading-vue>
</template>
<script>

import { TradingVue, DataCube } from 'trading-vue-js'

export default {
    components: { TradingVue },
    data() {
        return {
            chart: new DataCube({
                chart: {}, onchart: [], offchart: []
            })
        }
    }
}
</script>

```

TVJS automatically detects that you are a smart person who wants to use this lib like a PRO.

*Note: During initialization the DC performs some data modifications, so your data structure may change. With best intentions only.*

## Properties

| Prop | Type | Description |
|---|---|---|
| data | Object | Original chart data. Use it for direct access  |
| tv | Component | Reference to `trading-vue` component |
| sett  | Object  | DC Settins object |
| se_state | Object | Script Engine state |
| ww  | Object  |  Web-worker interface |


## Settings

```js
new DataCube({
    // Data
}, {
    // Settings
})
```

| Sett | Type | Description |
|---|---|---|
| aggregation | Number | Update aggregation interval, default = 100  |
| script_depth | Number | 0 === Exec on all data, default = 0 |
| auto_scroll | Boolean  | Auto scroll to a new candle, default = true |
| scripts | Boolean | Enable overlays scripts, default = true |
| node_url | String | Use node.js instead of WW |
| shift_measure | String  | Shift+click measurment, default = true |
| ww_ram_limit <sup style="color:#14b32a">new</sup> | Number  | WebWorker RAM limit (MB), default = 0 |


## Query system

All overlays, settings and candlestick data can be accessed with a simple query language. For example, if you want to get all overlays chilling in DC, call this:

```html
<trading-vue :data="dc"></trading-vue>
<script>
...
    data() {
        return {
            // Data - see Data Structure v1.1
            dc: new DataCube(Data),
        }
    }
...
</script>
```

```js
// 'dc' is shortcut for 'this.dc'

dc.get('.') // -> [{id: "onchart.Spline0", settings: {...}}, ...]
```


If you need only the main chart:

```js
dc.get('chart') // -> [{id: "chart.Candles", data: [...]}]
dc.get('chart.data') // -> [Array(96)]
```

If you have a bunch of overlays with unique names/types, you can use only one keyword:

```js
dc.get('EMA') // -> [{id: "onchart.Spline0", name: "EMA", ...}]
dc.get('Spline') // -> [{id: "onchart.Spline0", name: "EMA", ...}]
```

But you can also be more specific:

```js
dc.get('onchart.Spline')  // -> [{id: "onchart.Spline0", name: "EMA", ...}]
dc.get('onchart.EMA.data')  // -> [Array(80)]
dc.get('offchart.EMA')  // -> Nope
```

For all the methods below - if you see `query` in arguments you simply use the query lang!

```js
dc.merge('.settings', {color: 'green'}) // -> Makes everything green
dc.hide('.') // -> Hides all overlays
```

## Methods

### add (side, overlay)

Adds a new overlay to the selected array reactively.

* **Arguments**:
    - side (String) "onchart" or "offchart"
    - overlay (Object) Overlay descriptor
* **Returns**: Overlay datacube id


*Example:*

```js
dc.add('onchart', {
    type: 'Spline',
    name: 'EMA 25',
    data: [ ... ],
    settings: {
        lineColor: 'green'
    }
}) // -> "onchart.Spline0"
```

### get (query)

Gets all objects matching the query.

* **Arguments**: query (String)
* **Returns**: Array of objects

```js
dc.get('onchart.Spline')  // -> [{id: "onchart.Spline0", name: "EMA", ...}]
```

### get_one (query)

Gets first object matching the query.

* **Arguments**: query (String)
* **Returns**: Array of objects

```js
dc.get_one('chart') // -> Chart object
dc.get_one('chart.data') // -> ohlcv data [ ... ]
dc.get_one('onchart.Spline')  // -> {id: "onchart.Spline0", name: "EMA", ...}
dc.get_one('onchart.Spline.data')  // -> [ ... ]
```

### set (query, data)

Changes values of selected objects.

* **Arguments**:
    - query (String)
    - data (Object|Array) New value

*Examples:*

```js
// Reset candles
dc.set('chart.data', ohlcv)

 // Change the entire chart object
dc.set('chart', {
    type: "Candles",
    data: [ ... ],
    settings: {}
})

// Apply new settings to all splines
dc.set('onchart.Spline.settings', {
    lineWidth: 2,
    color: 'green'
})

// Change the data of a specific overlay
dc.set('onchart.EMA0.data', [ ... ])
```

### merge (query, data)

Merges objects pulled by query with new data. Objects can be of type `Object` or` Array`.
If the type is `Array`, DC will first consider the data as time series and try to combine them by timestamp.

* **Arguments**:
    - query (String)
    - data (Object|Array) New value

*Note: time series must be sorted before merging*

*Examples:*

```js
// Merge new settings with existing ones
// (old properties will be overridden)
dc.merge('onchart.Spline.settings', {
    lineWidth: 2,
    color: 'green'
})

// Merge as time series
dc.get('chart.data') // -> [[10001, 1, 1, 1, 1 ], [10002, 1, 1, 1, 1 ]]
dc.merge('chart.data', [
    [10002, 2, 2, 2, 2 ], [10003, 3, 3, 3, 3 ]
])
dc.get('chart.data') // ->
// [[10001, 1, 1, 1, 1 ], [10002, 2, 2, 2, 2 ], [10003, 3, 3, 3, 3 ]]

```

### del (query)

Removes all overlays matching query.

* **Arguments**:
    - query (String)

```js
dc.del('.') // Remove everything (except the main chart)
dc.del('Spline') // Remove all overlays with id/name 'Spline'
```

### update (data)

Updates/appends a data point, depending on the timestamp (or current time).

* **Arguments**:
    - data (Object) Specifies an update, see examples below
* **Returns**: (Boolean) **true** if a new candle is formed

```js
// Update with a trade stream:
dc.update({
    price: 8800,
    volume: 22,
    'EMA': 8576, // query => value
    'BB': [8955, 8522] // query => [value, value, ...]
})
// Update with full candlestick:
dc.update({
    candle: [1573231698000, 8750, 8900, 8700, 8800, 1688],
    'EMA': 8576, // query => value
    'BB': [8955, 8522] // query => [value, value, ...]
})
// Update with ohlcv (auto time):
dc.update({
    candle: [8750, 8900, 8700, 8800, 1688],
    'EMA': 8576, // query => value
    'BB': [8955, 8522] // query => [value, value, ...]
})
```

### lock (query)

Excludes specific query from results (for all query-based methods).

* **Arguments**:
    - query (String)

```js
dc.lock('onchart.Spline')
dc.get('onchart.Spline')  // -> []
```

### unlock (query)

Enables the query back.

* **Arguments**:
    - query (String)

```js
dc.unlock('onchart.Spline')
dc.get('onchart.Spline')  // -> [{id: "onchart.Spline0", name: "EMA", ...}]
```

### show (query), hide (query)

Show/hide all overlays by query.

* **Arguments**:
    - query (String)

```js
dc.hide('.')
dc.show('onchart.Spline')
```
