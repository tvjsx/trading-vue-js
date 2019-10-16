<script>
// Line drawing tool

import Overlay from '../../mixins/overlay.js'
import Icons from '../../stuff/icons.json'
import Pin from '../basic/pin.js'

export default {
    name: 'LineTool',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },
        tool() {
            return {
                // Descriptor for the tool
                group: 'Lines', icon: Icons['segment.png'],
                type: 'Segment',
                hint: 'This hint will be shown on hover',
                data: [],     // Default data
                settings: {}, // Default settings
                // Modifications
                mods: {
                    'Extended': {
                        // Rewrites the default setting fields
                        settings: { extended: true },
                        icon: Icons['extended.png']
                    }
                }
            }
        },
        // Called after overlay mounted
        init() {
            this.pins = [
                // First pin is settled at the mouse position
                new Pin(this, 'p1'),
                // Second one is following mouse until it clicks
                new Pin(this, 'p2', {state: 'tracking'})
            ]
        },
        draw(ctx) {
            if (!this.p1 || !this.p2) return

            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color
            ctx.beginPath()

            const layout = this.$props.layout

            let x1 = layout.t2screen(this.p1[0])
            let y1 = layout.$2screen(this.p1[1])
            ctx.moveTo(x1, y1)

            let x2 = layout.t2screen(this.p2[0])
            let y2 = layout.$2screen(this.p2[1])
            ctx.lineTo(x2, y2)

            ctx.stroke()

            // Render pins
            (this.pins || []).forEach(x => x.draw(ctx))
        },
        use_for() { return ['LineTool'] },
        data_colors() { return [this.color] }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        p1() {
            return this.$props.settings.p1
        },
        p2() {
            return this.$props.settings.p2
        },
        line_width() {
            return this.sett.lineWidth || 0.9
        },
        color() {
            const n = this.$props.num % 5
            return this.sett.color || this.COLORS[n]
        }
    },
    data() {
        return {
            COLORS:
            [
                '#42b28a', '#5691ce', '#612ff9',
                '#d50b90', '#ff2316'
            ]
        }
    }

}
</script>
