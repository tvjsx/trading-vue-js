
const SECOND = 1000
const MINUTE = SECOND * 60
const MINUTE5 = MINUTE * 5
const MINUTE15 = MINUTE * 15
const MINUTE30 = MINUTE * 30
const HOUR = MINUTE * 60
const HOUR4 = HOUR * 4
const DAY = HOUR * 24
const WEEK = DAY * 7
const MONTH = WEEK * 4
const YEAR = MONTH * 12

const MONTHMAP = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun","Jul", "Aug",
    "Sep", "Oct","Nov", "Dec"
]

// Grid time steps
const TIMESCALES = [
    YEAR * 10, YEAR * 5, YEAR * 3, YEAR * 2, YEAR,
    MONTH * 6, MONTH * 4, MONTH * 3, MONTH * 2, MONTH,
    DAY * 15, DAY * 10, DAY * 7, DAY * 5, DAY * 3, DAY * 2, DAY,
    HOUR * 12, HOUR * 6, HOUR * 3, HOUR * 1.5, HOUR,
    MINUTE30, MINUTE15, MINUTE * 10, MINUTE5, MINUTE * 2, MINUTE
]

// Grid $ steps
const $SCALES = [0.05, 0.1, 0.2, 0.25, 0.5, 0.8, 1, 2, 5]

const ChartConfig = {
    SBMIN: 60,      // px
    EXPAND: 0.15,   // %/100 of range
    CANDLEW: 0.6,   // %/100 of step
    GRIDX: 100,     // px
    GRIDY: 47,      // px
    BOTBAR: 28,     // px
    PANHEIGHT: 24,  // px
    DEFAULT_LEN: 50,// candles
    MINIMUM_LEN: 5, // candles,
    MIN_ZOOM: 25,   // candles
    MAX_ZOOM: 1000, // candles,
    VOLSCALE: 0.15  // %/100 of height
}

ChartConfig.FONT =
    `11px -apple-system,BlinkMacSystemFont,
    Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,
    Fira Sans,Droid Sans,Helvetica Neue,
    sans-serif`

export default {
    SECOND: SECOND,
    MINUTE: MINUTE,
    MINUTE5: MINUTE5,
    MINUTE15: MINUTE15,
    MINUTE30: MINUTE30,
    HOUR: HOUR,
    HOUR4: HOUR4,
    DAY: DAY,
    WEEK: WEEK,
    MONTH: MONTH,
    YEAR: YEAR,
    MONTHMAP: MONTHMAP,
    TIMESCALES: TIMESCALES,
    $SCALES: $SCALES,
    ChartConfig: ChartConfig
}
