
// Timeseries for scripts

export default function TS(id, arr, len) {
    arr.__id__ = id
    arr.__len__ = len
    return arr
}
