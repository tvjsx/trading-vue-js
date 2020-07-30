<script>

import Overlay from '../../../src/mixins/overlay.js'

export default {
    name: 'Illuminati',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return { author: 'C451', version: '1.0.0' }
        },

        init() {
            var img = new window.Image()
            img.setAttribute("src", 'https://www.freeiconspng.com/uploads/eagle-eyeilluminati-photo-transparent-background-8.png')
            img.addEventListener("load", () => { this.pic = img })
        },

        draw(ctx) {
            const layout = this.$props.layout
            for (var p of this.$props.data) {
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1])
                let c = layout.c_magnet(p[0])
                if (c) y = c.l
                if (this.pic) {
                    ctx.drawImage(this.pic, x -50, y-32, 100,64)
                }
            }
        },
        use_for() { return ['Illuminati'] },
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        }
    },
    data() {
        return {
            pic: null
        }
    }

}
</script>
