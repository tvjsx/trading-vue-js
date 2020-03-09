<script>

import Overlay from '../../mixins/overlay.js'

export default {
    name: 'Trades',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.1' }
        },
        draw(ctx) {
            let layout = this.$props.layout
            ctx.lineWidth = 1.5
            ctx.strokeStyle = 'black'
            for (var p of this.$props.data) {

            switch (p[1]) {
                case 0:
                    ctx.fillStyle = this.short_color
                    break
                case 1:
                    ctx.fillStyle = this.long_color
                    break
                case 2:
                    ctx.fillStyle = this.short_cover_color
                    break
                case 3:
                    ctx.fillStyle = this.long_cover_color
                    break                    
                default:
                    ctx.fillStyle = 'black'
            }                
                ctx.beginPath()
                let x = layout.t2screen(p[0]) // x - Mapping
                let y = layout.$2screen(p[2]) // y - Mapping
                ctx.arc(x, y, this.marker_size + 0.5, 0, Math.PI * 2, true)
                ctx.fill()
                ctx.stroke()

                if (this.show_label && p[3]) {
                    this.draw_label(ctx, x, y, p)
                }
            }
        },

        draw_label(ctx, x, y, p) {

            ctx.fillStyle = this.label_color
            ctx.font = this.new_font
            ctx.textAlign = 'center'
            ctx.fillText(p[3], x, y - 25)
        },
        use_for() { return ['Trades'] },

        // Defines legend format (values & colors)
        legend(values) {
            switch (values[1]) {
                case 0:
                    var pos = 'Short'
                    break
                case 1:
                    pos = 'Long'
                    break
                case 2:
                    pos = 'Short Cover'
                    break
                case 3:
                    pos = 'Long Cover'
                    break                    
                default:
                    pos = 'Unknown'
            }
            return [
                {
                    value: pos
                },
                {
                    value: values[2].toFixed(4),
                    color: this.$props.colors.colorText
                }
            ].concat(values[3] ? [
                {
                    value: values[3]
                }
            ] : [])
        }


    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        default_font() {
            //console.log(this.$props.font.split('px').pop())
            return '12px ' + this.$props.font.split('px').pop()
        },
        long_color() {
            return this.sett.longColor || '#63df89'
        },
        short_color() {
            return this.sett.shortColor || '#ec4662'
        },
        long_cover_color() {            
            return this.sett.longCoverColor || '#2c65e0'
        },
        short_cover_color() {            
            return this.sett.shortCoverColor || '#af54dd'
        },        
        label_color() {
            return this.sett.labelColor || '#333'
        },
        marker_size() {
            return this.sett.markerSize || 5
        },
        show_label() {
            return this.sett.showLabel !== false
        },
        new_font() {
            return this.sett.font || this.default_font
        }
    }
}
</script>
