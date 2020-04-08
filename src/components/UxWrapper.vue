
<!-- Wrapper window for Interface objects -->

<template>
<div class="trading-vue-ux-wrapper" v-if="visible"
    :id="`tvjs-ux-wrapper-${ux.uuid}`"
    :style="style">
    <component v-bind:is="ux.component"></component>
    <div v-if="ux.show_pin"
        :style="pin_style"
        class="tvjs-ux-wrapper-pin">
    </div>
</div>
</template>

<script>

export default {
    name: 'UxWrapper',
    props: ['ux', 'updater'],
    mounted() {
        let self = document.getElementById(this.uuid)
        this.w = self.offsetWidth
        this.h = self.offsetHeight
        this.update_position()
    },
    created () {
        this.mouse.on('mousemove', this.mousemove)
        this.mouse.on('mouseout', this.mouseout)
    },
    beforeDestroy() {
        this.mouse.off('mousemove', this.mousemove)
        this.mouse.off('mouseout', this.mouseout)
    },
    methods: {
        update_position() {
            let pin = this.uxr.pin
            switch (pin[0]) {
                case 'cursor':
                    var x = this.uxr.overlay.cursor.x
                    break
                case 'mouse':
                    x = this.mouse.x
                    break
                default:
                    x = this.layout.t2screen(pin[0])
            }
            switch (pin[1]) {
                case 'cursor':
                    var y = this.uxr.overlay.cursor.y
                    break
                case 'mouse':
                    y = this.mouse.y
                    break
                default:
                    y = this.layout.$2screen(pin[1])
            }
            this.x = x + this.ox
            this.y = y + this.oy
        },
        parse_coord(str, scale) {
            if (str === '0' || str === '') return 0
            let plus = str.split('+')
            if (plus.length === 2) {
                return (
                    this.parse_coord(plus[0], scale) +
                    this.parse_coord(plus[1], scale)
                )
            }
            let minus = str.split('-')
            if (minus.length === 2) {
                return (
                    this.parse_coord(minus[0], scale) -
                    this.parse_coord(minus[1], scale)
                )
            }
            let per = str.split('%')
            if (per.length === 2) {
                return scale * parseInt(per[0]) / 100
            }
            let px = str.split('px')
            if (px.length === 2) {
                return parseInt(px[0])
            }
            return undefined
        },
        mousemove() {
            this.update_position()
            this.visible = true
        },
        mouseout() {
            if (this.uxr.pin.includes('cursor') ||
                this.uxr.pin.includes('mouse'))
                this.visible = false
        }
    },
    computed: {
        layout() {
            return this.$props.ux.overlay.layout
        },
        uxr() {
            return this.$props.ux
        },
        uuid() {
            return `tvjs-ux-wrapper-${this.uxr.uuid}`
        },
        mouse() {
            return this.uxr.overlay.mouse
        },
        style() {
            return {
                'left': `${this.x}px`,
                'top': `${this.y}px`,
                'pointer-events': this.uxr.pointer_events || 'all'
            }
        },
        pin_style() {
            return {
                'left': `${ -this.ox }px`,
                'top': `${ -this.oy }px`
            }
        },
        pin_pos() {
            return this.uxr.pin_position ?
                this.uxr.pin_position.split(',') : ['0','0']
        },
        // Offset x
        ox() {
            if (this.pin_pos.length !== 2) return undefined
            let x = this.parse_coord(this.pin_pos[0], this.w)
            return -x
        },
        // Offset y
        oy() {
            if (this.pin_pos.length !== 2) return undefined
            let y = this.parse_coord(this.pin_pos[1], this.h)
            return -y
        }
    },
    watch: {
        updater() {
            if (this.uxr.pin.includes('cursor') ||
                this.uxr.pin.includes('mouse')) {
                this.update_position()
            }
        }
    },
    data() {
        return {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            visible: true
        }
    }
}

</script>
<style>
    .trading-vue-ux-wrapper {
        position: absolute;
        display: flex;
    }
    .tvjs-ux-wrapper-pin {
        position: absolute;
        width: 10px;
        height: 10px;
        z-index: 100;
        background-color: #23a776;
        border-radius: 10px;
        margin-left: -5px;
        margin-top: -5px;
        pointer-events: none;
    }
</style>
