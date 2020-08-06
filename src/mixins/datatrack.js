// Data tracker/watcher

import Utils from '../stuff/utils.js'

export default {
    methods: {
        data_changed() {
            let n = this.ohlcv
            let changed = false
            if (this._data_n0 !== n[0] && this._data_len !== n.length) {
                changed = true
            }
            this.check_all_data(changed)
            if (this.ti_map.ib) {
                this.reindex_delta(n[0], this._data_n0)
            }
            this._data_n0 = n[0]
            this._data_len = n.length
            this.save_data_t()
            return changed
        },
        check_all_data(changed) {
            // If length of data in the Structure changed by > 1 point
            // emit a special event for DC to recalc the scripts
            // TODO: check overlays data too
            let len = this._data_len || 0
            if (Math.abs(this.ohlcv.length - len) > 1 ||
                this._data_n0 !== this.ohlcv[0]) {
                this.$emit('custom-event', {
                    event: 'data-len-changed',
                    args: []
                })
            }

        },
        reindex_delta(n, p) {
            n = n || [[0]]
            p = p || [[0]]
            let dt = n[0] - p[0]
            if (dt !== 0 && this._data_t) {
                // Convert t back to index
                try {
                    // More precise method first
                    let nt = this._data_t + 0.01 // fix for the filter lib
                    let res = Utils.fast_nearest(this.ohlcv, nt)
                    let cndl = this.ohlcv[res[0]]
                    var off = (nt - cndl[0]) / this.interval_ms
                    this.goto(res[0] + off)
                } catch(e) {
                    this.goto(this.ti_map.t2i(this._data_t))
                }
            }
        },
        save_data_t() {
            this._data_t = this.ti_map.i2t(this.range[1]) // save as t
        }
    },
    data() {
        return {
            _data_n0: null,
            _data_len: 0,
            _data_t: 0
        }
    }
}
