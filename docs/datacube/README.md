# DataCube API

::: warning
This library is in alpha stage, API may change. This guide version is **0.3.12**
:::

![npm](https://img.shields.io/npm/v/trading-vue-js.svg?color=brightgreen&label=Current%20lib%20version)

**DataCube** [WIP] is a helper class dedicated for data manipulation. `Trading-vue` component provides only rendering functionality, but with the help of DC it also enables features such as real-time chart updates, indicator calculations and drawing tools (and much more).

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
                chart: [], onchart: [], offchart: []
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

## Query system

All overlays, settings and candlestick data can be accessed with a simple query language. For example, if you want to get all overlays chilling in DC, call this:

```js
let dc = new DataCube()
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

More stuff will be here
