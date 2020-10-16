# FAQ

## How to place an overlay higher, change the overlay z-index?

Set a new value in the overlay settings object:

```js
"settings" {
    "z-index": 10
}
```

## How to change the default number of visible candles?

Add this prop to the TradingVue component:

```html
<trading-vue :chart-config=" { DEFAULT_LEN: 200 } "/>
```

## My chart looks ugly / glitchy, what can I do?

In 99% cases there is a problem with you data, check that candles are **sorted by time**, have **unique timestamps** and the **timeframe stays the same** (if it's not the index-based mode)

## What is the index-based (IB) rendering mode?

By default TVJS uses time as the x-coordinate. For candlestick charts like BTCUSD it's fine, because there are no time gaps & every candle is unique. But when you plot stocks data or build renko charts, you'll see the weekend gaps, or a total mess in the second case.


The solution is to use the candle index instead of time, so the gaps are collapsed.
You can enable the index-based mode in the TVJS [props](https://github.com/tvjsx/trading-vue-js/tree/master/docs/api#props) or in your data:

```js
"chart": {
    "type": "Candles",
    "data": [],
    "indexBased": true
}
```

It must be `true` for Renko charts. More info [here](https://github.com/tvjsx/trading-vue-js/blob/master/docs/api/IB.md)

## See weekend gaps?

Read the big chunk of text above.

## Log-scale, no?

Yes,

```js
{
    "type": "<Overlay>",
    "data": [],
    "grid": {
        "logScale": true
    }
}
```

## Can I change how candles / built-in overlays look?

Big YES, the most legit way is to create your custom overlay and include it into the lib: [Getting Started Guide](https://github.com/tvjsx/trading-vue-js/tree/master/docs/guide#getting-started)

## What does Inline Shader mean?

It's an arrow function emitted from your overlay to draw stuff on top of Bottom bar and Scale bar (e.g. current price value). [More info here](https://github.com/tvjsx/trading-vue-js/blob/master/docs/api/SHADERS.md)

## What the hell is DC ?

DC === [DataCube](https://github.com/tvjsx/trading-vue-js/tree/master/docs/datacube#datacube-api), it's a part of the project for dealing with data (the library itself is only a rendering engine). Also it can handle the internal events, e.g. it should be included in order to use the toolbar.

## Can I set my custom timeframe instead of the auto-detected?

No prob,

```js
"chart": {
    "type": "Candles",
    "data": [],
    "tf": "1m"
}
```

or,


```js
"chart": {
    "type": "Candles",
    "data": [],
    "tf": 60000
}
```

## I use a grid of TVJS components and it behaves very strange, wtf?

Did you give each instance a unique id?

Do you use `translate3d`? Currenty the lib doesn't support it.

## How to use real-time data? Lazy data loading? 

See https://github.com/tvjsx/trading-vue-js/blob/master/test/tests/DataHelper.vue
