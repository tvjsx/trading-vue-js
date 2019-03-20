
<div align="center">
  <img width="318" heigth="256" src="assets/README-c8a97eb7.png" alt="trading-vue logo">
</div>

# TradingVue.js ![npm](https://img.shields.io/npm/v/trading-vue-js.svg?color=brightgreen&label=version) ![license](https://img.shields.io/badge/license-MIT-blue.svg) ![GRUGLIKE](https://img.shields.io/badge/GRUG-LIKE-yellow.svg) ![build](https://img.shields.io/badge/build-passing-brightgreen.svg) ![size](https://img.shields.io/github/size/C451/trading-vue-js/dist/trading-vue.min.js.svg) ![yes](https://img.shields.io/badge/by%20trader-for%20traders-lightgray.svg)


**TradingVue.js** is a hackable charting lib for traders. You can draw literally ANYTHING on top of candlestick charts.

## Why?

I've been using [TradingView.com](https://www.tradingview.com) for several years and oh boy, I like this service.
But when it came to writing custom trading software there was no charting library with the same level of usability, not even near. There **WAS** no lib.

<br>

<div align="center">
    <img width="780" heigth="446" src="assets/README-db7bd751.gif" alt="White preview">
</div>

<br>

## Features

* Scrolling & zoomming as we all like
* Simple API for making new overlays
* No need for fancy math!
* One overlay === one .vue file (or .js)
* Fully reactive
* Fully responsive
* Customizable colors and fonts

## Demo & Docs

Oh yeah, here will be something cool.

## Install

**NPM**
```
npm i trading-vue-js -S
```
**In browser**

```
<script src="trading-vue.min.js"></script>
```

## How to use

Here is a minimal working example:

```html
<template>
<trading-vue :data="this.$data"></trading-vue>
</template>
<script>

import TradingVue from 'trading-vue-js'

export default {
    name: 'app',
    components: { TradingVue },
    data() {
        return {
            ohlcv: [
                [ 1551128400000, 33,  37.1, 14,  14,  196 ],
                [ 1551132000000, 13.7, 30, 6.6,  30,  206 ],
                [ 1551135600000, 29.9, 33, 21.3, 21.8, 74 ],
                [ 1551139200000, 21.7, 25.9, 18, 24,  140 ],
                [ 1551142800000, 24.1, 24.1, 24, 24.1, 29 ],
            ]
        }
    }
}

</script>

```

## Roadmap

* Solve known issues (search for "TODO: IMPORTANT")
* Performance improvements
* Add more built-in overlays
* Add toolbar (drawing tools)
* Custom loayout / layout persistence
* Fix and improve mobile version
* **Version 1.0.0 here**

## Contribution

In progress
