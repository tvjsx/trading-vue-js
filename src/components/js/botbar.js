
import Const from '../../stuff/constants.js'
import Utils from '../../stuff/utils.js'

const { MINUTE15, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR, MONTHMAP } = Const

export default class Botbar {

    constructor(canvas, comp) {

        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.comp = comp
        this.$p = comp.$props
        this.data = this.$p.sub
        this.range = this.$p.range
        this.layout = this.$p.layout
        //add interval and cursor
        this.interval = this.$p.interval;
        this.cursor = comp.$props.cursor;

        //add off set for draging method andd add lisners for events
        this.offset_x = 0;
        this.offset_y = 0;
        //call lsitners
        this.listeners();

    }

    //add listener event to class
    listeners() {
        let mc = (this.mc = new Hammer.Manager(this.canvas));
        let T = Utils.is_mobile ? 10 : 0;
        mc.add(
          new Hammer.Pan({
            direction: Hammer.DIRECTION_VERTICAL,
            threshold: T,
          })
        );
    
        mc.on("panstart", (event) => {
          if (this.cursor.scroll_lock) return;
    
          this.drug = {
            x: event.center.x + this.offset_x,
            r: this.range.slice(),
            t: this.range[1] - this.range[0],
            t0: Utils.now(),
          };
        });
    
        mc.on("panmove", (event) => {
          if (Utils.is_mobile) {
            this.calc_offset();
            this.propagate("mousemove", this.touch2mouse(event));
          }
          if (this.drug) {
            this.mousedrag(this.drug.x + event.deltaX);
          }
        });
    
        mc.on("panend", (event) => {
          if (Utils.is_mobile && this.drug) {
            this.pan_fade(event);
          }
          this.drug = null;
          this.comp.$emit("cursor-locked", false);
        });
      }

    update() {

        this.grid_0 = this.layout.grids[0]

        const width = this.layout.botbar.width
        const height = this.layout.botbar.height

        const sb = this.layout.grids[0].sb

        //this.ctx.fillStyle = this.$p.colors.back
        this.ctx.font = this.$p.font
        //this.ctx.fillRect(0, 0, width, height)
        this.ctx.clearRect(0, 0, width, height)

        this.ctx.strokeStyle = this.$p.colors.scale

        this.ctx.beginPath()
        this.ctx.moveTo(0, 0.5)
        this.ctx.lineTo(Math.floor(width + 1), 0.5)
        this.ctx.stroke()

        this.ctx.fillStyle = this.$p.colors.text
        this.ctx.beginPath()

        for (var p of this.layout.botbar.xs) {

            let lbl = this.format_date(p)

            if (p[0] > width - sb) continue

            this.ctx.moveTo(p[0] - 0.5, 0)
            this.ctx.lineTo(p[0] - 0.5, 4.5)

            if (!this.lbl_highlight(p[1][0])) {
                this.ctx.globalAlpha = 0.85
            }
            this.ctx.textAlign = 'center'
            this.ctx.fillText(lbl, p[0], 18)
            this.ctx.globalAlpha = 1

        }

        this.ctx.stroke()
        this.apply_shaders()
        if (this.$p.cursor.x && this.$p.cursor.t !== undefined)
            this.panel()

    }

    apply_shaders() {
        let layout = this.layout.grids[0]
        let props = {
            layout: layout,
            cursor: this.$p.cursor
        }
        for (var s of this.comp.bot_shaders) {
            this.ctx.save()
            s.draw(this.ctx, props)
            this.ctx.restore()
        }
    }

    panel() {

        let lbl = this.format_cursor_x()
        this.ctx.fillStyle = this.$p.colors.panel

        let measure = this.ctx.measureText(lbl + '    ')
        let panwidth = Math.floor(measure.width)
        let cursor = this.$p.cursor.x
        let x = Math.floor(cursor - panwidth * 0.5)
        let y = - 0.5
        let panheight = this.comp.config.PANHEIGHT
        this.ctx.fillRect(x, y, panwidth, panheight + 0.5)

        this.ctx.fillStyle = this.$p.colors.textHL
        this.ctx.textAlign = 'center'
        this.ctx.fillText(lbl, cursor, y + 16)

    }

    format_date(p) {
        let t = p[1][0]
        t = this.grid_0.ti_map.i2t(t)
        let ti = this.$p.layout.grids[0].ti_map.tf
        // Enable timezones only for tf < 1D
        let k = ti < DAY ? 1 : 0
        let tZ = t + k * this.$p.timezone * HOUR

        //t += new Date(t).getTimezoneOffset() * MINUTE
        let d = new Date(tZ)

        if (p[2] === YEAR || Utils.year_start(t) === t) {
            return d.getUTCFullYear()
        }
        if (p[2] === MONTH || Utils.month_start(t) === t) {
            return MONTHMAP[d.getUTCMonth()]
        }
        // TODO(*) see grid_maker.js
        if (Utils.day_start(tZ) === tZ) return d.getUTCDate()

        let h = Utils.add_zero(d.getUTCHours())
        let m = Utils.add_zero(d.getUTCMinutes())
        return h + ":" + m

    }

    format_cursor_x() {

        let t = this.$p.cursor.t
        t = this.grid_0.ti_map.i2t(t)
        //let ti = this.$p.interval
        let ti = this.$p.layout.grids[0].ti_map.tf
        // Enable timezones only for tf < 1D
        let k = ti < DAY ? 1 : 0

        //t += new Date(t).getTimezoneOffset() * MINUTE
        let d = new Date(t + k * this.$p.timezone * HOUR)

        if (ti === YEAR) {
            return d.getUTCFullYear()
        }

        if (ti < YEAR) {
            var yr = '`' + `${d.getUTCFullYear()}`.slice(-2)
            var mo = MONTHMAP[d.getUTCMonth()]
            var dd = '01'
        }
        if (ti <= WEEK) dd = d.getUTCDate()
        let date = `${dd} ${mo} ${yr}`
        let time = ''

        if (ti < DAY) {
            let h = Utils.add_zero(d.getUTCHours())
            let m = Utils.add_zero(d.getUTCMinutes())
            time = h + ":" + m
        }

        return `${date}  ${time}`

    }

    // Highlights the begining of a time interval
    // TODO: improve. Problem: let's say we have a new month,
    // but if there is no grid line in place, there
    // will be no month name on t-axis. Sad.
    // Solution: manipulate the grid, skew it, you know
    lbl_highlight(t) {

        let ti = this.$p.interval

        if (t === 0) return true
        if (Utils.month_start(t) === t) return true
        if (Utils.day_start(t) === t) return true
        if (ti <= MINUTE15 && t % HOUR === 0) return true

        return false

    }

    mousemove() { }
    mouseout() { }
    mouseup() { }
    mousedown() { }

    touch2mouse(e) {
        this.calc_offset();
        return {
          original: e.srcEvent,
          layerX: e.center.x + this.offset_x,
          layerY: e.center.y + this.offset_y,
          preventDefault: function() {
            this.original.preventDefault();
          },
        };
      }
    
      upper_border() {
        this.ctx.strokeStyle = this.$p.colors.scale;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0.5);
        this.ctx.lineTo(this.layout.width, 0.5);
        this.ctx.stroke();
      }
    
      mousedrag(x) {
        let dt = (this.drug.t * (this.drug.x - x)) / this.layout.botbar.width;
        let lftmrgn = this.layout.botbar.width / 4;
        let rghtmrgn = this.layout.botbar.width - this.layout.botbar.width / 4;
    
        if (this.drug.x < lftmrgn) {
          this.range[0] = this.drug.r[0] + dt;
        } else if (this.drug.x > rghtmrgn) {
          this.range[1] = this.drug.r[1] + dt;
        } else {
          this.range[0] = this.drug.r[0] + dt;
        }
    
        //
    
        this.change_range();
      }
    
      calc_offset() {
        let rect = this.canvas.getBoundingClientRect();
        this.offset_x = -rect.x;
        this.offset_y = -rect.y;
      }
    
      change_range() {
        // TODO: better way to limit the view. Problem:
        // when you are at the dead end of the data,
        // and keep scrolling,
        // the chart continues to scale down a little.
        // Solution: I don't know yet
    
        if (!this.range.length || this.data.length < 2) return;
    
        let l = this.data.length - 1;
        let data = this.data;
        let range = this.range;
    
        range[0] = Utils.clamp(
          range[0],
          -Infinity,
          data[l][0] - this.interval * 5.5
        );
    
        range[1] = Utils.clamp(
          range[1],
          data[0][0] + this.interval * 5.5,
          +Infinity
        );
    
        // TODO: IMPORTANT scrolling is jerky The Problem caused
        // by the long round trip of 'range-changed' event.
        // First it propagates up to update layout in Chart.vue,
        // then it moves back as watch() update. It takes 1-5 ms.
        // And because the delay is different each time we see
        // the lag. No smooth movement and it's annoying.
        // Solution: we could try to calc the layout immediatly
        // somewhere here. Still will hurt the sidebar & bottombar
        this.comp.$emit("range-changed", range);
      }
    
      trackpad_scroll(event) {
        let dt = this.range[1] - this.range[0];
    
        this.range[0] += event.deltaX * dt * 0.011;
        this.range[1] += event.deltaX * dt * 0.011;
    
        this.change_range();
      }
      destroy() {
        if (this.mc) this.mc.destroy();
      }
}
