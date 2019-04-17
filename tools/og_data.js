// OG data secured

const request = require('request')
const tulind = require('tulind')
const I = tulind.indicators
const fs = require('fs')

const write_to = './data/data.json'

const t1 = Math.floor(new Date().getTime() / 1000)
const t0 = t1 - 3600 * 4200

// Hey Coingy, we will borrow some data, ok?
const mrk = 'BITF/BTC/USD'
const url = `https://www.coinigy.com/getjson/chart_feed/${mrk}/60/${t0}/${t1}`

request
    .get(url, {}, function(err,res,body) {
        if (err) {
            console.log('Not this time, bro')
            process.exit()
        } else {
            try {
                deal_with_it(JSON.parse(body))
            } catch(e) {
                console.log('Data corrupted:', e)
            }
        }
    })

async function deal_with_it(data) {

    data = data.map(x => {
        return [
            x[0] * 1000,
            parseFloat(x[1]),
            parseFloat(x[2]),
            parseFloat(x[3]),
            parseFloat(x[4]),
            parseFloat(x[5]),
        ]
    })

    data.reverse()

    data = {
        ohlcv: data,
        onchart: [
            {
                name: "EMA, 25",
                type: "EMA",
                data: await make_ema(data, 25),
                settings: {}
            },
            {
                name: "EMA, 43",
                type: "EMA",
                data: await make_ema(data, 43),
                settings: {}
            },
            {
                name: "Trades",
                type: "Trades",
                data: await trade_like_god(data),
                settings: {
                    "z-index": 5,
                    "legend": false
                }
            }

        ],
        offchart: [
            {
                name: "RSI, 20",
                type: "RSI",
                data: await make_rsi(data, 20),
                settings: {
                    upper: 70,
                    lower: 30,
                    backColor: "#9b9ba316",
                    bandColor: "#666"
                }
            }
        ]
    }

    save(data)
}

async function make_ema(data, len) {
    return new Promise(rs => {
        const close = data.map(x => x[4])
        const time = data.map(x => x[0])
        I.ema.indicator([close], [len], (err, results) => {
            rs(merge(time, results[0]))
        })
    })
}

async function make_rsi(data, len) {
    return new Promise(rs => {
        const close = data.map(x => x[4])
        const time = data.map(x => x[0])
        I.rsi.indicator([close], [len], (err, results) => {
            rs(merge(time, results[0]))
        })
    })
}

async function trade_like_god(data, len) {
    let trades = []
    let entry = 0
    let last = [0, 0]
    return new Promise(rs => {
        for (var p of data) {
            if (Math.random() < 0.1 && last[1] === 0) {
                entry = (p[2] -  p[3]) * Math.random() + p[3]
                last = [p[0], 1, entry]
                trades.push(last)
                continue
            }
            if (Math.random() < 0.1 && last[1] === 1) {
                let sell = (p[2] -  p[3]) * Math.random() + p[3]
                if (sell > entry) {
                    let pr = '+' + (100 * (sell / entry - 1)).toFixed(2) + '%'
                    last = [p[0], 0, sell, pr]
                    trades.push(last)
                }
                if (p[3] / entry < 0.999) {
                    trades.pop()
                    last = [0,0]
                }
            }
        }
        rs(trades)
    })
}


// Merge backwards
function merge(vec1, vec2) {
    const len = Math.min(vec1.length, vec2.length)
    let vec = []
    for (var i = 0; i < len; i++) {
        let i1 = vec1.length - i - 1
        let i2 = vec2.length - i - 1
        vec.unshift([vec1[i1], vec2[i2]])
    }
    return vec
}

function save(data) {

    fs.writeFileSync(write_to, JSON.stringify(data,null,4))

    console.log('Data secured (4200 points)')
}
