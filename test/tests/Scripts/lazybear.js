//
// @author LazyBear
// List of all my indicators: https://www.tradingview.com/v/4IneGo8h/
//
export default () => {

    // Calculate BB
    let source = close
    let basis = sma(source, length)
    let dev = ts(multKC * stdev(source, length)[0])
    let upperBB = ts(basis[0] + dev[0])
    let lowerBB = ts(basis[0] - dev[0])

    // Calculate KC
    let ma = sma(source, lengthKC)
    let range = useTrueRange ? tr() : ts(high[0] - low[0])
    let rangema = sma(range, lengthKC)
    let upperKC = ts(ma[0] + rangema[0] * multKC)
    let lowerKC = ts(ma[0] - rangema[0] * multKC)

    let sqzOn  = ts((lowerBB[0] > lowerKC[0]) && (upperBB[0] < upperKC[0]))
    let sqzOff = ts((lowerBB[0] < lowerKC[0]) && (upperBB[0] > upperKC[0]))
    let noSqz  = ts((sqzOn[0] == false) && (sqzOff[0] == false))

    let val = linreg(
        ts(source[0] -
            avg(
                avg(
                    highest(high, lengthKC)[0],
                    lowest(low, lengthKC)[0]
                ),
                sma(close,lengthKC)[0]
            )
        ),
        lengthKC, 0)

    return val[0]
}
