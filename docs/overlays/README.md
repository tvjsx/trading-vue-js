# Built-in Overlays

This guide's version is **1.0.0**

![npm](https://img.shields.io/npm/v/trading-vue-js.svg?color=brightgreen&label=Current%20lib%20version)

## General Settings

Available in any overlay:

| Type name | Aliases | Description |
|---|---|---|
| **z-index** | Number | 0 = candlestick layer, default = -1 |
| **legend** | Boolean  | Show legend, default = true |
| **display**  | Boolean  | Show overlay, default = true |

## Candles

| Type name | Aliases | Description |
|---|---|---|
| Candles  | - | Candlestick chart, colud be used as main chart or overlay |

### Data format

```
{
    "name": "Indicator name",
    "type": "Candles",
    "data": [
        [ <timestamp>, <Open>, <High>, <Low>, <Close>, <Volume>, <Style> (optional) ],
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
| showVolume | Boolean | Show volume below the chart, default **true** |
| colorCandleUp | String | Green candles color, hex |
| colorCandleDw | String | Red candles color, hex |
| colorWickUp | String | Green wick color, hex |
| colorWickDw | String | Red wick color, hex |
| colorWickSm | String | Scaled down wick color, hex |
| colorVolUp | String | Green volume color, hex |
| colorVolDw | String | Red volume color, hex |
| priceLine | Boolean | Show/hide a price line, default = true |

The Style object, if defined, overwrites all the color settings of a particular candle:

#### Style object format:
```
{
    colorCandleUp,
    colorCandleDw,
    colorWickUp,
    colorWickDw,
    colorWickSm,
    colorVolUp,
    colorVolDw
}
```

## Volume

| Type name | Aliases | Description |
|---|---|---|
| Volume  | - | Standalone volume, colud be used onchart or offchart |

### Data format

```
{
    "name": "Indicator name",
    "type": "Volume",
    "data": [
        [ <timestamp>, <Value>, <Green or not?> ],
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
| colorVolUp | String | Green volume color, hex |
| colorVolDw | String | Red volume color, hex |
| colorVolUpLegend | String | Legend green bar color, hex |
| colorVolDwLegend | String | Legend red bar color, hex |
| volscale | Number | Volume bar max height, default = 0.85 |


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
| lineWidth | Number | Line width, px |
| color | String | Line color, hex |
| skipNaN | Boolean | Skip NaN values, default = false |

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
| lineWidth | Number | General line width, px |
| lineWidths | Array of Numbers | Line widths, [px]|
| colors | Array of Strings | Line colors, [hex] |
| skipNaN | Boolean | Skip NaN values, default = false |

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
| buyColor | String | Buy marker color, hex |
| sellColor | String | Sell marker color, hex  |
| labelColor | String | Marker label color, hex  |
| markerSize | Number | Marker size, px |
| showLabel | Boolean | Show/hide label, default = true |
| font | Strung | Label font string, e.g '11x Arial...'|

## Segment

| Type name | Aliases | Description |
|---|---|---|
| Segment  | - | Line segment |

### Data format

```
{
    "name": "Indicator name",
    "type": "Segment",
    "data": [],
    "settings": {
        "p1": [<timestamp>, <Price>],
        "p2": [<timestamp>, <Price>],
        ...
    }
}
```

### Settings

| Prop | Type | Description |
|---|---|---|
|  p1 | Array |  Coordinate of the first point  |
|  p2 | Array |  Coordinate of the second point  |
| lineWidth | Number | Line width, px |
| color | String | Line color, hex |

## Splitters

| Type name | Aliases | Description |
|---|---|---|
| Splitters  | - | Data section splitters |

### Data format

```
{
    "name": "Data sections",
    "type": "Splitters",
    "data": [
        [ <timestamp>, (opt)<Text>, (opt)<Side>, (opt)<Color>, (opt)<Y-pos> ],
    ],
    "settings": {
        ...
    }
}
```

### Settings

| Prop | Type | Description |
|---|---|---|
| lineWidth | Number | Line width, px |
| yPosition | Number | Label y-postion [0,1], default = 0.9 |
| lineColor | String | Line color, hex |
| labelColor | String | Label color, hex |
| font | Strung | Label font string, e.g '11x Arial...'|
