
# Extensions Guide

This guide's version is **0.9.0**

![npm](https://img.shields.io/npm/v/trading-vue-js.svg?color=brightgreen&label=Current%20lib%20version)

## Why & How

To keep the core library size relatively small, it was decided to introduce a simple (but not as of today) way to extend the functionality. The main project consists of the two major parts: **TradingVue** component (renderer) and **DataCube** (data helper). An extension can manipulate the behaviour of both of them. The internal functions of `TradingVue` can be accessed through `tv` and `tv.$refs.chart`, the inner-works of `DC` is available through the `dc` reference & its events can be caught with `pre_dc` and `post_dc` functions.

## X Structure

Every extension can contain the following parts:

* Widgets
* Components
* Overlays
* Skins
* Colorpacks

If you check the repo with standard pack https://github.com/tvjsx/tvjs-xp you'll find that each extension contains `x.json` file with this structure. For example, https://github.com/tvjsx/tvjs-xp/blob/main/src/extensions/settings-win/x.json includes only one widget

```json
{
    "name": "settings-win",
    "author": "StdSquad",
    "version": "1.0.0",
    "components": [],
    "widgets": ["SettingsWin.vue"],
    "overlays": [],
    "skins": [],
    "colorpacks": [],
    "deps": {}
}
```

This repo uses a special building process, so it transforms `x.json` into the corresponding `index.js` files (e.g. https://github.com/tvjsx/tvjs-xp/blob/main/build/settings-win/settings-win.js). You can start developing extension by cloning this repo & following the build-in process. To make a development index and building the library you'll need 2 commands:

```bash
npm run compile
npm run build
```

Otherwise, you can just make an index file similar to the one shown above and include it directly into your app.
An array of compiled extensions should be plugged in the corresponding prop:

```html
<!-- DataCube is needed -->
<trading-vue :data="dc" :extensions="[...]"/>
```

## Controller

A controller lies in the heart of every extension. Its main responsibilities are: registering event listeners, creating new widgets, serving as a hub between widgets/components. The basic example:

```js

// Extension's controller

export default class Main {

    constructor(tv, dc, sett) {

        this.widgets = {} // Installed Widgets
        this.tv = tv      // Reference to TradingVue
        this.dc = dc      // Reference to DataCube
        this.sett = sett  // X Settings

    }

    // Listens to all tvjs events (& dc events)
    update(e) {
        switch(e.event) {
            case 'range-changed': break
            // ...
        }
    }

    // Extensions settings has changed
    // (for all registered extensions combined)
    onsettings(all) {
        this.sett = all['ext-id']
    }

    // Called before the destruction
    destroy() {

    }

}

```

Mouse events can be handled with the native listeners:

```js
constructor() {
    setTimeout(() => {
        this.tv.$el.addEventListener(
            'mousemove',
            this.onmousemove.bind(this)
        )
    })
}

onmousemove(e) {
    // ...
}

destroy() {
    this.tv.$el.removeEventListener(
        'mousemove',
        this.onmousemove
    )
}
```

To communicate between widgets/components and the controller you can add a simple event bus class:

```js

/* --------- event_bus.js ---------- */
export default class EventBus {
    constructor() {}
    send(to, e) {
        let h = this[`on${to}`]
        if (h) h(e)
    }
}

/* ---------- Controller ----------- */

import EventBus from './event_bus.js'
var bus = new EventBus()

bus.onDifferentEvent = () => {}
bus.send('SomeEvent ', {})

export default class Main {}
export bus

/* ------ Widget / Component ------ */

import bus from './main.js'

bus.onSomeEvent = () => {}
bus.send('DifferentEvent', {})

```

## Widgets

Widgets are components living in the widget layer of `TradingVue` component. How to create a new widget? Ez:

```js

/* ----------- Widget.vue ---------- */

export default {
    name: 'Widget',
    // The props provided by the lib
    props: ['id', 'main', 'dc', 'tv', 'data'],
    mounted() {}
}

/* ---------- Controller ----------- */

import Widget from './Widget.vue'

// Generating a unique widget id
let id = `Widget-${Math.random()}`
this.tv.$set(this.widgets, id, {
    id,
    cls: Widget,
    data: { } // Arbitrary data
})

```

Removing the widget can be done in a similar way:

```js

/* ---------- Controller ----------- */
// ...

remove_widget(id) {
    this.tv.$delete(this.widgets, id)
}
```

## Components

## Overlay

## Skins

## Color Packs

## X Settings

## Chart-event hooks
