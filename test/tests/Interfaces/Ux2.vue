<template>
<div class='test-ux' :style="style">
</div>
</template>
<script>

import Interface from '../../../src/mixins/interface.js'

export default {
    name: 'Ux2',
    mixins: [Interface],
    created() {
        this.overlay.mouse.on('mousemove', this.mousemove)
    },
    beforeDestroy() {
        this.overlay.mouse.off('mousemove', this.mousemove)
    },
    computed: {
        style() {
            return {
                'background': `url(${this.ux.vars.url || this.def_url})`,
                'background-size': '100% auto',
                'background-repeat': 'no-repeat'
            }
        }
    },
    methods: {
        mousemove() {

            if (!this.ux.vars.schiff_id) return

            // This is the gold bullion

            let mx = this.overlay.mouse.x
            let my = this.overlay.mouse.y
            let dx = this.$props.wrapper.pin_x - mx
            let dy = this.$props.wrapper.pin_y - my

            if (dx * dx + dy * dy < 9000) {
                if (!this.hit) {
                    this.change_url('https://i.postimg.cc/TP3XdYWB/s3.png')
                    this.hit = true
                }
            } else {
                if (this.hit) {
                    this.change_url(this.def_url)
                    this.hit = false
                }
            }
        },
        change_url(url) {
            this.$emit('custom-event', {
                event: 'modify-interface',
                args: [this.ux.vars.schiff_id, {
                    // TODO: nested merge
                    vars: { url }
                }]
            })
        }
    },
    data() {
        return {
            def_url: 'https://i.postimg.cc/SjMXRf21/s1.png',
            hit: false
        }
    }
}
</script>
<style scoped>
    .test-ux {
        width: 150px;
        height: 150px;
    }
</style>
