
# Std-lib (Scripts)

This guide version is **1.0.0**

![npm](https://img.shields.io/npm/v/trading-vue-js.svg?color=brightgreen&label=Current%20lib%20version)

## Functions

<dl>
<dt><a href="#ts">ts(x)</a> ⇒ <code>TS</code></dt>
<dd><p>Creates a new time-series &amp; records each x.
Returns  an array. Id is auto-genrated</p>
</dd>
<dt><a href="#tstf">tstf(x, tf)</a> ⇒ <code>TS</code></dt>
<dd><p>Creates a new time-series &amp; records each x.
Uses Sampler to aggregate the values
Return the an array. Id is auto-genrated</p>
</dd>
<dt><a href="#nz">nz(x, [v])</a> ⇒ <code>*</code></dt>
<dd><p>Replaces the variable if it&#39;s NaN</p>
</dd>
<dt><a href="#na">na(x)</a> ⇒ <code>boolean</code></dt>
<dd><p>Is the variable NaN ?</p>
</dd>
<dt><a href="#nf">nf(x, [v])</a> ⇒ <code>*</code></dt>
<dd><p>Replaces the var with NaN if Infinite</p>
</dd>
<dt><a href="#add">add(x, y)</a> ⇒ <code>TS</code></dt>
<dd><p>Adds values / time-series</p>
</dd>
<dt><a href="#sub">sub(x, y)</a> ⇒ <code>TS</code></dt>
<dd><p>Subtracts values / time-series</p>
</dd>
<dt><a href="#mult">mult(x, y)</a> ⇒ <code>TS</code></dt>
<dd><p>Multiplies values / time-series</p>
</dd>
<dt><a href="#div">div(x, y)</a> ⇒ <code>TS</code></dt>
<dd><p>Divides values / time-series</p>
</dd>
<dt><a href="#neg">neg(x)</a> ⇒ <code>TS</code></dt>
<dd><p>Returns a negative value / time-series</p>
</dd>
<dt><a href="#abs">abs(x)</a> ⇒ <code>number</code></dt>
<dd><p>Absolute value</p>
</dd>
<dt><a href="#acos">acos(x)</a> ⇒ <code>number</code></dt>
<dd><p>Arccosine function</p>
</dd>
<dt><a href="#signal">signal(type, data)</a></dt>
<dd><p>Emits an event to DataCube</p>
</dd>
<dt><a href="#signalif">signalif(cond, type, data)</a></dt>
<dd><p>Emits an event if cond === true</p>
</dd>
<dt><a href="#alma">alma(src, len, offset, sigma)</a> ⇒ <code>TS</code></dt>
<dd><p>Arnaud Legoux Moving Average</p>
</dd>
<dt><a href="#asin">asin(x)</a> ⇒ <code>number</code></dt>
<dd><p>Arcsine function</p>
</dd>
<dt><a href="#atan">atan(x)</a> ⇒ <code>number</code></dt>
<dd><p>Arctangent function</p>
</dd>
<dt><a href="#atr">atr(len)</a> ⇒ <code>TS</code></dt>
<dd><p>Average True Range</p>
</dd>
<dt><a href="#avg">avg(...args)</a> ⇒ <code>number</code></dt>
<dd><p>Average of arguments</p>
</dd>
<dt><a href="#since">since(cond)</a></dt>
<dd><p>Candles since the event occured (cond === true)</p>
</dd>
<dt><a href="#bb">bb(src, len, mult)</a> ⇒ <code>Array.&lt;TS&gt;</code></dt>
<dd><p>Bollinger Bands</p>
</dd>
<dt><a href="#bbw">bbw(src, len, mult)</a> ⇒ <code>TS</code></dt>
<dd><p>Bollinger Bands Width</p>
</dd>
<dt><a href="#bool">bool(x)</a> ⇒ <code>number</code></dt>
<dd><p>Converts the variable to Boolean</p>
</dd>
<dt><a href="#cci">cci(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Commodity Channel Index</p>
</dd>
<dt><a href="#ceil">ceil(x)</a> ⇒ <code>number</code></dt>
<dd><p>Shortcut for Math.ceil()</p>
</dd>
<dt><a href="#change">change(src, [len])</a> ⇒ <code>TS</code></dt>
<dd><p>Change: x[0] - x[len]</p>
</dd>
<dt><a href="#cmo">cmo(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Chande Momentum Oscillator</p>
</dd>
<dt><a href="#cog">cog(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Center of Gravity</p>
</dd>
<dt><a href="#cos">cos(x)</a> ⇒ <code>number</code></dt>
<dd><p>Cosine function</p>
</dd>
<dt><a href="#cross">cross(src1, src2)</a> ⇒ <code>TS</code></dt>
<dd><p>When one time-series crosses another</p>
</dd>
<dt><a href="#crossover">crossover(src1, src2)</a> ⇒ <code>TS</code></dt>
<dd><p>When one time-series goes over another one</p>
</dd>
<dt><a href="#crossunder">crossunder(src1, src2)</a> ⇒ <code>TS</code></dt>
<dd><p>When one time-series goes under another one</p>
</dd>
<dt><a href="#cum">cum(src1)</a> ⇒ <code>TS</code></dt>
<dd><p>Sum of all elements of src</p>
</dd>
<dt><a href="#dayofmonth">dayofmonth([time])</a> ⇒ <code>number</code></dt>
<dd><p>Day of month, literally</p>
</dd>
<dt><a href="#dayofweek">dayofweek([time])</a> ⇒ <code>number</code></dt>
<dd><p>Day of week, literally</p>
</dd>
<dt><a href="#dev">dev(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Deviation from SMA</p>
</dd>
<dt><a href="#dmi">dmi(len, smooth)</a> ⇒ <code>TS</code></dt>
<dd><p>Directional Movement Index ADX, +DI, -DI</p>
</dd>
<dt><a href="#ema">ema(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Exponential Moving Average with alpha = 2 / (y + 1)</p>
</dd>
<dt><a href="#exp">exp(x)</a> ⇒ <code>number</code></dt>
<dd><p>Shortcut for Math.exp()</p>
</dd>
<dt><a href="#falling">falling(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Test if &quot;src&quot; TS is falling for &quot;len&quot; candles</p>
</dd>
<dt><a href="#fixnan">fixnan(src)</a> ⇒ <code>TS</code></dt>
<dd><p>For a given series replaces NaN values with
previous nearest non-NaN value</p>
</dd>
<dt><a href="#floor">floor(x)</a> ⇒ <code>number</code></dt>
<dd><p>Shortcut for Math.floor()</p>
</dd>
<dt><a href="#highest">highest(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Highest value for a given number of candles back</p>
</dd>
<dt><a href="#highestbars">highestbars(src, len)</a></dt>
<dd><p>Highest value offset for a given number of bars back</p>
</dd>
<dt><a href="#hma">hma(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Hull Moving Average</p>
</dd>
<dt><a href="#hour">hour([time])</a> ⇒ <code>number</code></dt>
<dd><p>Returns hours of a given timestamp</p>
</dd>
<dt><a href="#iff">iff(cond, x, y)</a> ⇒ <code>*</code></dt>
<dd><p>Returns x or y depending on the condition</p>
</dd>
<dt><a href="#kc">kc(src, len, mult, [use_tr])</a> ⇒ <code>Array.&lt;TS&gt;</code></dt>
<dd><p>Keltner Channels</p>
</dd>
<dt><a href="#kcw">kcw(src, len, mult, [use_tr])</a> ⇒ <code>TS</code></dt>
<dd><p>Keltner Channels Width</p>
</dd>
<dt><a href="#linreg">linreg(src, len, offset)</a> ⇒ <code>TS</code></dt>
<dd><p>Linear Regression</p>
</dd>
<dt><a href="#log">log(x)</a> ⇒ <code>number</code></dt>
<dd><p>Shortcut for Math.log()</p>
</dd>
<dt><a href="#log10">log10(x)</a> ⇒ <code>number</code></dt>
<dd><p>Shortcut for Math.log10()</p>
</dd>
<dt><a href="#lowest">lowest(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Lowest value for a given number of candles back</p>
</dd>
<dt><a href="#lowestbars">lowestbars(src, len)</a></dt>
<dd><p>Lowest value offset for a given number of bars back</p>
</dd>
<dt><a href="#macd">macd(src, fast, slow, sig)</a> ⇒ <code>Array.&lt;TS&gt;</code></dt>
<dd><p>Moving Average Convergence/Divergence</p>
</dd>
<dt><a href="#max">max(...args)</a> ⇒ <code>number</code></dt>
<dd><p>Max of arguments</p>
</dd>
<dt><a href="#modify">modify(id, fields)</a></dt>
<dd><p>Sends update to some overlay / main chart</p>
</dd>
<dt><a href="#buffsize">buffsize(src, len)</a></dt>
<dd><p>Sets the reverse buffer size for a given
time-series (default = 5, grows on demand)</p>
</dd>
<dt><a href="#mfi">mfi(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Money Flow Index</p>
</dd>
<dt><a href="#min">min(...args)</a> ⇒ <code>number</code></dt>
<dd><p>Min of arguments</p>
</dd>
<dt><a href="#minute">minute([time])</a> ⇒ <code>number</code></dt>
<dd><p>Returns minutes of a given timestamp</p>
</dd>
<dt><a href="#mom">mom(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Momentum</p>
</dd>
<dt><a href="#month">month([time])</a> ⇒ <code>number</code></dt>
<dd><p>Month</p>
</dd>
<dt><a href="#onchart">onchart(x, [name], [sett])</a></dt>
<dd><p>Display data point onchart
(create a new overlay in DataCube)</p>
</dd>
<dt><a href="#offchart">offchart(x, [name], [sett])</a></dt>
<dd><p>Display data point offchart
(create a new overlay in DataCube)</p>
</dd>
<dt><a href="#onclose">onclose(tf)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true when the candle(<tf>) is being closed
(create a new overlay in DataCube)</p>
</dd>
<dt><a href="#settings">settings(upd)</a></dt>
<dd><p>Sends settings update
(can be called from init(), update() or post())</p>
</dd>
<dt><a href="#offset">offset(num)</a> ⇒ <code>TS</code></dt>
<dd><p>Shifts TS left or right by &quot;num&quot; candles</p>
</dd>
<dt><a href="#now">now()</a> ⇒ <code>number</code></dt>
<dd><p>The current time</p>
</dd>
<dt><a href="#pivothigh">pivothigh(src, left, right)</a> ⇒ <code>TS</code></dt>
<dd><p>Returns price of the pivot high point
Tip: works best with <code>offset</code> function</p>
</dd>
<dt><a href="#pivotlow">pivotlow(src, left, right)</a> ⇒ <code>TS</code></dt>
<dd><p>Returns price of the pivot low point
Tip: works best with <code>offset</code> function</p>
</dd>
<dt><a href="#pow">pow(x)</a> ⇒ <code>number</code></dt>
<dd><p>Shortcut for Math.pow()</p>
</dd>
<dt><a href="#rising">rising(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Test if &quot;src&quot; TS is rising for &quot;len&quot; candles</p>
</dd>
<dt><a href="#rma">rma(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Exponentially MA with alpha = 1 / length
Used in RSI</p>
</dd>
<dt><a href="#roc">roc(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Rate of Change</p>
</dd>
<dt><a href="#round">round(x)</a> ⇒ <code>number</code></dt>
<dd><p>Shortcut for Math.round()</p>
</dd>
<dt><a href="#rsi">rsi(x, y)</a> ⇒ <code>TS</code></dt>
<dd><p>Relative Strength Index</p>
</dd>
<dt><a href="#sar">sar(start, inc, max)</a> ⇒ <code>TS</code></dt>
<dd><p>Parabolic SAR</p>
</dd>
<dt><a href="#second">second([time])</a> ⇒ <code>number</code></dt>
<dd><p>Returns seconds of a given timestamp</p>
</dd>
<dt><a href="#sign">sign(x)</a> ⇒ <code>number</code></dt>
<dd><p>Shortcut for Math.sing()</p>
</dd>
<dt><a href="#sin">sin(x)</a> ⇒ <code>number</code></dt>
<dd><p>Sine function</p>
</dd>
<dt><a href="#sma">sma(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Simple Moving Average</p>
</dd>
<dt><a href="#sqrt">sqrt(x)</a> ⇒ <code>number</code></dt>
<dd><p>Shortcut for Math.sqrt()</p>
</dd>
<dt><a href="#stdev">stdev(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Standard deviation</p>
</dd>
<dt><a href="#stoch">stoch(src, high, low, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Stochastic</p>
</dd>
<dt><a href="#sum">sum(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Returns the sliding sum of last &quot;len&quot; values of the source</p>
</dd>
<dt><a href="#supertrend">supertrend(factor, atrlen)</a> ⇒ <code>Array.&lt;TS&gt;</code></dt>
<dd><p>Supertrend Indicator</p>
</dd>
<dt><a href="#swma">swma(src)</a> ⇒ <code>TS</code></dt>
<dd><p>Symmetrically Weighted Moving Average</p>
</dd>
<dt><a href="#sym">sym(x, y)</a> ⇒ <code>Sym</code></dt>
<dd><p>Creates a new Symbol.</p>
</dd>
<dt><a href="#tan">tan(x)</a> ⇒ <code>number</code></dt>
<dd><p>Tangent function</p>
</dd>
<dt><a href="#tr">tr(fixnan)</a> ⇒ <code>TS</code></dt>
<dd><p>True Range</p>
</dd>
<dt><a href="#tsi">tsi(src, short, long)</a> ⇒ <code>TS</code></dt>
<dd><p>True strength index</p>
</dd>
<dt><a href="#vwma">vwma(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Volume Weighted Moving Average</p>
</dd>
<dt><a href="#weekofyear">weekofyear([time])</a> ⇒ <code>number</code></dt>
<dd><p>Week of year, literally</p>
</dd>
<dt><a href="#wma">wma(src, len)</a> ⇒ <code>TS</code></dt>
<dd><p>Weighted moving average</p>
</dd>
<dt><a href="#wpr">wpr(len)</a> ⇒ <code>TS</code></dt>
<dd><p>Williams %R</p>
</dd>
<dt><a href="#year">year([time])</a> ⇒ <code>number</code></dt>
<dd><p>Year</p>
</dd>
</dl>

<a name="ts"></a>

## ts(x) ⇒ <code>TS</code>
Creates a new time-series & records each x.
Returns  an array. Id is auto-genrated

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | A variable to sample from |

<a name="tstf"></a>

## tstf(x, tf) ⇒ <code>TS</code>
Creates a new time-series & records each x.
Uses Sampler to aggregate the values
Return the an array. Id is auto-genrated

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | A variable to sample from |
| tf | <code>number</code> \| <code>string</code> | Timeframe in ms or as a string |

<a name="nz"></a>

## nz(x, [v]) ⇒ <code>\*</code>
Replaces the variable if it's NaN

**Kind**: global function
**Returns**: <code>\*</code> - - New value

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | The variable |
| [v] | <code>\*</code> | A value to replace with |

<a name="na"></a>

## na(x) ⇒ <code>boolean</code>
Is the variable NaN ?

**Kind**: global function
**Returns**: <code>boolean</code> - - New value

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | The variable |

<a name="nf"></a>

## nf(x, [v]) ⇒ <code>\*</code>
Replaces the var with NaN if Infinite

**Kind**: global function
**Returns**: <code>\*</code> - - New value

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | The variable |
| [v] | <code>\*</code> | A value to replace with |

<a name="add"></a>

## add(x, y) ⇒ <code>TS</code>
Adds values / time-series

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| x | <code>TS</code> \| <code>\*</code> | First input |
| y | <code>TS</code> \| <code>\*</code> | Second input |

<a name="sub"></a>

## sub(x, y) ⇒ <code>TS</code>
Subtracts values / time-series

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| x | <code>TS</code> \| <code>\*</code> | First input |
| y | <code>TS</code> \| <code>\*</code> | Second input |

<a name="mult"></a>

## mult(x, y) ⇒ <code>TS</code>
Multiplies values / time-series

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| x | <code>TS</code> \| <code>\*</code> | First input |
| y | <code>TS</code> \| <code>\*</code> | Second input |

<a name="div"></a>

## div(x, y) ⇒ <code>TS</code>
Divides values / time-series

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| x | <code>TS</code> \| <code>\*</code> | First input |
| y | <code>TS</code> \| <code>\*</code> | Second input |

<a name="neg"></a>

## neg(x) ⇒ <code>TS</code>
Returns a negative value / time-series

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| x | <code>TS</code> \| <code>\*</code> | Input |

<a name="abs"></a>

## abs(x) ⇒ <code>number</code>
Absolute value

**Kind**: global function
**Returns**: <code>number</code> - - Absolute value

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Input |

<a name="acos"></a>

## acos(x) ⇒ <code>number</code>
Arccosine function

**Kind**: global function
**Returns**: <code>number</code> - - Arccosine of x

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Input |

<a name="signal"></a>

## signal(type, data)
Emits an event to DataCube

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Signal type |
| data | <code>\*</code> | Signal data |

<a name="signalif"></a>

## signalif(cond, type, data)
Emits an event if cond === true

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| cond | <code>boolean</code> \| <code>TS</code> | The condition |
| type | <code>string</code> | Signal type |
| data | <code>\*</code> | Signal data |

<a name="alma"></a>

## alma(src, len, offset, sigma) ⇒ <code>TS</code>
Arnaud Legoux Moving Average

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |
| offset | <code>number</code> | Offset |
| sigma | <code>number</code> | Sigma |

<a name="asin"></a>

## asin(x) ⇒ <code>number</code>
Arcsine function

**Kind**: global function
**Returns**: <code>number</code> - - Arcsine of x

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Input |

<a name="atan"></a>

## atan(x) ⇒ <code>number</code>
Arctangent function

**Kind**: global function
**Returns**: <code>number</code> - - Arctangent of x

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Input |

<a name="atr"></a>

## atr(len) ⇒ <code>TS</code>
Average True Range

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| len | <code>number</code> | Length |

<a name="avg"></a>

## avg(...args) ⇒ <code>number</code>
Average of arguments

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> | Numeric values |

<a name="since"></a>

## since(cond)
Candles since the event occured (cond === true)

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| cond | <code>boolean</code> \| <code>TS</code> | the condition |

<a name="bb"></a>

## bb(src, len, mult) ⇒ <code>Array.&lt;TS&gt;</code>
Bollinger Bands

**Kind**: global function
**Returns**: <code>Array.&lt;TS&gt;</code> - - Array of new time-series (3 bands)

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |
| mult | <code>number</code> | Multiplier |

<a name="bbw"></a>

## bbw(src, len, mult) ⇒ <code>TS</code>
Bollinger Bands Width

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |
| mult | <code>number</code> | Multiplier |

<a name="bool"></a>

## bool(x) ⇒ <code>number</code>
Converts the variable to Boolean

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="cci"></a>

## cci(src, len) ⇒ <code>TS</code>
Commodity Channel Index

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="ceil"></a>

## ceil(x) ⇒ <code>number</code>
Shortcut for Math.ceil()

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="change"></a>

## change(src, [len]) ⇒ <code>TS</code>
Change: x[0] - x[len]

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| src | <code>TS</code> |  | Input |
| [len] | <code>number</code> | <code>1</code> | Length |

<a name="cmo"></a>

## cmo(src, len) ⇒ <code>TS</code>
Chande Momentum Oscillator

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="cog"></a>

## cog(src, len) ⇒ <code>TS</code>
Center of Gravity

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="cos"></a>

## cos(x) ⇒ <code>number</code>
Cosine function

**Kind**: global function
**Returns**: <code>number</code> - - Cosine of x

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Input |

<a name="cross"></a>

## cross(src1, src2) ⇒ <code>TS</code>
When one time-series crosses another

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src1 | <code>TS</code> | TS1 |
| src2 | <code>TS</code> | TS2 |

<a name="crossover"></a>

## crossover(src1, src2) ⇒ <code>TS</code>
When one time-series goes over another one

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src1 | <code>TS</code> | TS1 |
| src2 | <code>TS</code> | TS2 |

<a name="crossunder"></a>

## crossunder(src1, src2) ⇒ <code>TS</code>
When one time-series goes under another one

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src1 | <code>TS</code> | TS1 |
| src2 | <code>TS</code> | TS2 |

<a name="cum"></a>

## cum(src1) ⇒ <code>TS</code>
Sum of all elements of src

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src1 | <code>TS</code> | Input |

<a name="dayofmonth"></a>

## dayofmonth([time]) ⇒ <code>number</code>
Day of month, literally

**Kind**: global function
**Returns**: <code>number</code> - - Day

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> | Time in ms (current t, if not defined) |

<a name="dayofweek"></a>

## dayofweek([time]) ⇒ <code>number</code>
Day of week, literally

**Kind**: global function
**Returns**: <code>number</code> - - Day

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> | Time in ms (current t, if not defined) |

<a name="dev"></a>

## dev(src, len) ⇒ <code>TS</code>
Deviation from SMA

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="dmi"></a>

## dmi(len, smooth) ⇒ <code>TS</code>
Directional Movement Index ADX, +DI, -DI

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| len | <code>number</code> | Length |
| smooth | <code>number</code> | Smoothness |

<a name="ema"></a>

## ema(src, len) ⇒ <code>TS</code>
Exponential Moving Average with alpha = 2 / (y + 1)

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="exp"></a>

## exp(x) ⇒ <code>number</code>
Shortcut for Math.exp()

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="falling"></a>

## falling(src, len) ⇒ <code>TS</code>
Test if "src" TS is falling for "len" candles

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="fixnan"></a>

## fixnan(src) ⇒ <code>TS</code>
For a given series replaces NaN values with
previous nearest non-NaN value

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input time-series |

<a name="floor"></a>

## floor(x) ⇒ <code>number</code>
Shortcut for Math.floor()

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="highest"></a>

## highest(src, len) ⇒ <code>TS</code>
Highest value for a given number of candles back

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="highestbars"></a>

## highestbars(src, len)
Highest value offset for a given number of bars back

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="hma"></a>

## hma(src, len) ⇒ <code>TS</code>
Hull Moving Average

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="hour"></a>

## hour([time]) ⇒ <code>number</code>
Returns hours of a given timestamp

**Kind**: global function
**Returns**: <code>number</code> - - Hour

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> | Time in ms (current t, if not defined) |

<a name="iff"></a>

## iff(cond, x, y) ⇒ <code>\*</code>
Returns x or y depending on the condition

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| cond | <code>boolean</code> \| <code>TS</code> | Condition |
| x | <code>\*</code> | Frist value |
| y | <code>\*</code> | Second value |

<a name="kc"></a>

## kc(src, len, mult, [use_tr]) ⇒ <code>Array.&lt;TS&gt;</code>
Keltner Channels

**Kind**: global function
**Returns**: <code>Array.&lt;TS&gt;</code> - - Array of new time-series (3 bands)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| src | <code>TS</code> |  | Input |
| len | <code>number</code> |  | Length |
| mult | <code>number</code> |  | Multiplier |
| [use_tr] | <code>boolean</code> | <code>true</code> | Use true range |

<a name="kcw"></a>

## kcw(src, len, mult, [use_tr]) ⇒ <code>TS</code>
Keltner Channels Width

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| src | <code>TS</code> |  | Input |
| len | <code>number</code> |  | Length |
| mult | <code>number</code> |  | Multiplier |
| [use_tr] | <code>boolean</code> | <code>true</code> | Use true range |

<a name="linreg"></a>

## linreg(src, len, offset) ⇒ <code>TS</code>
Linear Regression

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| src | <code>TS</code> |  | Input |
| len | <code>number</code> |  | Length |
| offset | <code>number</code> | <code>0</code> | Offset |

<a name="log"></a>

## log(x) ⇒ <code>number</code>
Shortcut for Math.log()

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="log10"></a>

## log10(x) ⇒ <code>number</code>
Shortcut for Math.log10()

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="lowest"></a>

## lowest(src, len) ⇒ <code>TS</code>
Lowest value for a given number of candles back

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="lowestbars"></a>

## lowestbars(src, len)
Lowest value offset for a given number of bars back

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="macd"></a>

## macd(src, fast, slow, sig) ⇒ <code>Array.&lt;TS&gt;</code>
Moving Average Convergence/Divergence

**Kind**: global function
**Returns**: <code>Array.&lt;TS&gt;</code> - - [macd, signal, hist]

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| fast | <code>number</code> | Fast EMA |
| slow | <code>number</code> | Slow EMA |
| sig | <code>number</code> | Signal |

<a name="max"></a>

## max(...args) ⇒ <code>number</code>
Max of arguments

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> | Numeric values |

<a name="modify"></a>

## modify(id, fields)
Sends update to some overlay / main chart

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Overlay id |
| fields | <code>Object</code> | Fields to be overwritten |

<a name="buffsize"></a>

## buffsize(src, len)
Sets the reverse buffer size for a given
time-series (default = 5, grows on demand)

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | New length |

<a name="mfi"></a>

## mfi(src, len) ⇒ <code>TS</code>
Money Flow Index

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="min"></a>

## min(...args) ⇒ <code>number</code>
Min of arguments

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>number</code> | Numeric values |

<a name="minute"></a>

## minute([time]) ⇒ <code>number</code>
Returns minutes of a given timestamp

**Kind**: global function
**Returns**: <code>number</code> - - Hour

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> | Time in ms (current t, if not defined) |

<a name="mom"></a>

## mom(src, len) ⇒ <code>TS</code>
Momentum

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="month"></a>

## month([time]) ⇒ <code>number</code>
Month

**Kind**: global function
**Returns**: <code>number</code> - - Day

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> | Time in ms (current t, if not defined) |

<a name="onchart"></a>

## onchart(x, [name], [sett])
Display data point onchart
(create a new overlay in DataCube)

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>TS</code> \| <code>Array.&lt;TS&gt;</code> \| <code>\*</code> | Data point / TS / array of TS |
| [name] | <code>string</code> | Overlay name |
| [sett] | <code>Object</code> | Object with settings & OV type |

<a name="offchart"></a>

## offchart(x, [name], [sett])
Display data point offchart
(create a new overlay in DataCube)

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>TS</code> \| <code>Array.&lt;TS&gt;</code> \| <code>\*</code> | Data point / TS / array of TS |
| [name] | <code>string</code> | Overlay name |
| [sett] | <code>Object</code> | Object with settings & OV type |

<a name="onclose"></a>

## onclose(tf) ⇒ <code>boolean</code>
Returns true when the candle(<tf>) is being closed
(create a new overlay in DataCube)

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| tf | <code>number</code> \| <code>string</code> | Timeframe in ms or as a string |

<a name="settings"></a>

## settings(upd)
Sends settings update
(can be called from init(), update() or post())

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| upd | <code>Object</code> | Settings update (object to merge) |

<a name="offset"></a>

## offset(num) ⇒ <code>TS</code>
Shifts TS left or right by "num" candles

**Kind**: global function
**Returns**: <code>TS</code> - - New / existing time-series

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | Offset measured in candles |

<a name="now"></a>

## now() ⇒ <code>number</code>
The current time

**Kind**: global function
**Returns**: <code>number</code> - - timestamp
<a name="pivothigh"></a>

## pivothigh(src, left, right) ⇒ <code>TS</code>
Returns price of the pivot high point
Tip: works best with `offset` function

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| left | <code>number</code> | left threshold, candles |
| right | <code>number</code> | right threshold, candles |

<a name="pivotlow"></a>

## pivotlow(src, left, right) ⇒ <code>TS</code>
Returns price of the pivot low point
Tip: works best with `offset` function

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| left | <code>number</code> | left threshold, candles |
| right | <code>number</code> | right threshold, candles |

<a name="pow"></a>

## pow(x) ⇒ <code>number</code>
Shortcut for Math.pow()

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="rising"></a>

## rising(src, len) ⇒ <code>TS</code>
Test if "src" TS is rising for "len" candles

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="rma"></a>

## rma(src, len) ⇒ <code>TS</code>
Exponentially MA with alpha = 1 / length
Used in RSI

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="roc"></a>

## roc(src, len) ⇒ <code>TS</code>
Rate of Change

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="round"></a>

## round(x) ⇒ <code>number</code>
Shortcut for Math.round()

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="rsi"></a>

## rsi(x, y) ⇒ <code>TS</code>
Relative Strength Index

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| x | <code>TS</code> | First Input |
| y | <code>number</code> \| <code>TS</code> | Second Input |

<a name="sar"></a>

## sar(start, inc, max) ⇒ <code>TS</code>
Parabolic SAR

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | Start |
| inc | <code>number</code> | Increment |
| max | <code>number</code> | Maximum |

<a name="second"></a>

## second([time]) ⇒ <code>number</code>
Returns seconds of a given timestamp

**Kind**: global function
**Returns**: <code>number</code> - - Hour

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> | Time in ms (current t, if not defined) |

<a name="sign"></a>

## sign(x) ⇒ <code>number</code>
Shortcut for Math.sing()

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="sin"></a>

## sin(x) ⇒ <code>number</code>
Sine function

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="sma"></a>

## sma(src, len) ⇒ <code>TS</code>
Simple Moving Average

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="sqrt"></a>

## sqrt(x) ⇒ <code>number</code>
Shortcut for Math.sqrt()

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="stdev"></a>

## stdev(src, len) ⇒ <code>TS</code>
Standard deviation

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="stoch"></a>

## stoch(src, high, low, len) ⇒ <code>TS</code>
Stochastic

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| high | <code>TS</code> | TS of high |
| low | <code>TS</code> | TS of low |
| len | <code>number</code> | Length |

<a name="sum"></a>

## sum(src, len) ⇒ <code>TS</code>
Returns the sliding sum of last "len" values of the source

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | Length |

<a name="supertrend"></a>

## supertrend(factor, atrlen) ⇒ <code>Array.&lt;TS&gt;</code>
Supertrend Indicator

**Kind**: global function
**Returns**: <code>Array.&lt;TS&gt;</code> - - Supertrend line and direction of trend

| Param | Type | Description |
| --- | --- | --- |
| factor | <code>number</code> | ATR multiplier |
| atrlen | <code>number</code> | Length of ATR |

<a name="swma"></a>

## swma(src) ⇒ <code>TS</code>
Symmetrically Weighted Moving Average

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |

<a name="sym"></a>

## sym(x, y) ⇒ <code>Sym</code>
Creates a new Symbol.

**Kind**: global function
**Returns**: <code>Sym</code> - Argument variations:
<data>(Array), [<params>(Object)]
<ts>(TS), [<params>(Object)]
<point>(Number), [<params>(Object)]
<tf>(String) 1m, 5m, 1H, etc. (uses main OHLCV)
Params object: {
 id: <String>,
 tf: <String|Number>,
 aggtype: <String> (TODO: Type of aggregation)
 format: <String> (Data format, e.g. "time:price:vol")
 window: <String|Number> (Aggregation window)
 main <true|false> (Use as the main chart)
}

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | Something, depends on arg variation |
| y | <code>\*</code> | Something, depends on arg variation |

<a name="tan"></a>

## tan(x) ⇒ <code>number</code>
Tangent function

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The variable |

<a name="tr"></a>

## tr(fixnan) ⇒ <code>TS</code>
True Range

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fixnan | <code>TS</code> | <code>false</code> | Fix NaN values |

<a name="tsi"></a>

## tsi(src, short, long) ⇒ <code>TS</code>
True strength index

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| short | <code>number</code> | Short length |
| long | <code>number</code> | Long length |

<a name="vwma"></a>

## vwma(src, len) ⇒ <code>TS</code>
Volume Weighted Moving Average

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | length |

<a name="weekofyear"></a>

## weekofyear([time]) ⇒ <code>number</code>
Week of year, literally

**Kind**: global function
**Returns**: <code>number</code> - - Week

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> | Time in ms (current t, if not defined) |

<a name="wma"></a>

## wma(src, len) ⇒ <code>TS</code>
Weighted moving average

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| src | <code>TS</code> | Input |
| len | <code>number</code> | length |

<a name="wpr"></a>

## wpr(len) ⇒ <code>TS</code>
Williams %R

**Kind**: global function
**Returns**: <code>TS</code> - - New time-series

| Param | Type | Description |
| --- | --- | --- |
| len | <code>number</code> | length |

<a name="year"></a>

## year([time]) ⇒ <code>number</code>
Year

**Kind**: global function
**Returns**: <code>number</code> - - Year

| Param | Type | Description |
| --- | --- | --- |
| [time] | <code>number</code> | Time in ms (current t, if not defined) |
