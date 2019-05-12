# Built-in Overlays

::: warning
This library is in alpha stage, API may change. This guide version is **0.2.10**
:::

![npm](https://img.shields.io/npm/v/trading-vue-js.svg?color=brightgreen&label=Current%20lib%20version)

## Spline

| Type name | Aliases | Description |
|---|---|---|
| Spline  | EMA, SMA | Single spline |

### Data format

```
{
    "name": "Indicator name",
    "type": "Spline",
    "data": [
        [ <timestamp>, <Number> ],
        ...
    ],
    "settings": {
        ...
    }
}
```

### Settings

| Prop | Type | Description |
|---|---|---|
| **z-index** | Number | 0 = candlestick layer, default = -1 |
| **legend**  | Boolean  | Show legend, default = true |
| lineWidth | Number | Line width, px |
| color | String | Line color, hex |

## Splines

| Type name | Aliases | Description |
|---|---|---|
| Splines  | - | Multiple splines |

### Data format

```
{
    "name": "Indicator name",
    "type": "Splines",
    "data": [
        [ <timestamp>, <Number>, <Number>, ... ],
        ...
    ],
    "settings": {
        ...
    }
}
```

### Settings

| Prop | Type | Description |
|---|---|---|
| **z-index** | Number | 0 = candlestick layer, default = -1 |
| **legend**  | Boolean  | Show legend, default = true |
| lineWidth | Number | General line width, px |
| lineWidths | Array of Numbers | Line widths, [px]|
| colors | Array of Strings | Line colors, [hex] |

## Channel

| Type name | Aliases | Description |
|---|---|---|
| Channel  | KC, BB | Channel with middle line (band) |

### Data format

```
{
    "name": "Indicator name",
    "type": "Channel",
    "data": [
        [ <timestamp>, <Upper>,  <Middle>,  <Lower> ],
        ...
    ],
    "settings": {
        ...
    }
}
```

### Settings

| Prop | Type | Description |
|---|---|---|
| **z-index** | Number | 0 = candlestick layer, default = -1 |
| **legend**  | Boolean  | Show legend, default = true |
| lineWidth | Number | Line width, px |
| color | String | Lines color, hex |
| backColor | String | Channel body color, hex |
| showMid  | Boolean | Show/hide middle line, default = true |

## Range

| Type name | Aliases | Description |
|---|---|---|
| Range  | RSI | Fixed range indicator (e.g. oscillator) |

### Data format

```
{
    "name": "Indicator name",
    "type": "Range",
    "data": [
        [ <timestamp>, <Number> ],
        ...
    ],
    "settings": {
        ...
    }
}
```

### Settings

| Prop | Type | Description |
|---|---|---|
| **z-index** | Number | 0 = candlestick layer, default = -1 |
| **legend**  | Boolean  | Show legend, default = true |
| lineWidth | Number | Line width, px |
| color | String | Lines color, hex |
| backColor  | String | Background color, hex |
| bandColor   | String  |  Bands color, hex |
| upper | Number  | Upper band, default = 70 |
| lower | Number  |  Lower band, default = 30 |

## Trades

| Type name | Aliases | Description |
|---|---|---|
| Trades | - | Trade markers with labels|

### Data format

```
{
    "name": "Indicator name",
    "type": "Trades",
    "data": [
        [ <timestamp>, <Type>, <Price>, (opt)<Label> ],
        ...
    ],
    "settings": {
        ...
    }
}
```

```js
Type:
1 = Buy marker
0 = Sell marker
```

### Settings

| Prop | Type | Description |
|---|---|---|
| **z-index** | Number | 0 = candlestick layer, default = -1 |
| **legend**  | Boolean  | Show legend, default = true |
| buyColor | String | Buy marker color, hex |
| sellColor | String | Sell marker color, hex  |
| labelColor | String | Marker label color, hex  |
| markerSize | Number | Marker size, px |
| showLabel | Boolean | Show/hide label, default = true |
| font | Strung | Label font string, e.g '11x Arial...'|
