
# Datasets API

Dataset is an element of DataStructure that is completely invisible to the rendering engine, but can be accessed from scripts (the data lives in web worker):

```js
this.chart = new DataCube({
    // ...
    datasets: [{
        type: 'Trades',
        id: 'binance-btcusdt',
        data: [...]
    }]
})
```

When you create a new dataset, its data is sent to the web-worker and immediately deleted from the structure (we don't need Vue to sniff out its existence).
After you added the initial dataset object, the reference will appear in `dss`:


```js
dc.dss['binance-btcusdt'] // => Dataset {...}
```

## Dataset Methods

### set(data, exec = true)

Sets new data array (overwrites it) in web worker.

* **Arguments**: data (Data array)
* **Arguments**: exec (Exec the scripts, default = true)

### update(arr)

Updates the set with an array of data points. (script `update` is not called).

* **Arguments**: arr (Data array)

Alternatively all datasets can be updated in parallel with `dc.update` method:

```js
dc.update({
    'datasets.dataset-id-1': [...], // Only fresh points added,
    'datasets.dataset-id-2': [...], // similarly to merge()
    'datasets.dataset-id-3': [...]
})
```

To trigger the `update` functions of the scripts, in addition send an array of the latest `ohlcv` points:

```js
dc.ww.just('update-data', {
    'datasets.dataset-id-1': [...],
    'datasets.dataset-id-2': [...],
    'datasets.dataset-id-3': [...],
    'ohlcv': [...] // Preferably the last two candles
})
```

### merge(data, exec = true)

Sends WW a chunk to merge. The merge algo here is simpler than in DC. It just adds data at the beginning or/and the end of dataset (cuts overlaps).

* **Arguments**: data (Data array)
* **Arguments**: exec (Exec the scripts, default = true)

### remove(exec = true)

Removes a dataset from existence.

* **Arguments**: exec (Exec the scripts, default = true)

## Fetching WW data

Executing `dc.get('datasets')` will give you dataset descriptors only (w/o the data).

If you need to fetch the data itself, you need to specify `.data` in your query, e.g.:

```js
dc.get('datasets.binance-btcusdt.data') // => Promise of array
dc.get('datasets..data') // All datasets, array of Promises
```

**WARNING:** if you uploaded gigabytes of data it will likely make the query pretty slow.

## Limiting RAM

Datasets allow you to keep data for multiple symbols at the same time. For example, you don't need to reload all data every time user switches between `BTC/USD` & `LTC/USD`. Instead you can keep uploading new datasets and updating them (through `merge`) for the active symbol.

For this reason there is a max-size limit for all datasets:

```js
let dc = new DataCube({}, {
    ww_ram_limit: 500 // MB, 0 for no limit
})
```

Then, each time you upload new dataset, all sets will be purged by the `last_upd` time. To force this operation send an empty `upload-data` event:

```js
dc.ww.just('upload-data', {})
```
