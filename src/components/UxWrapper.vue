
<!-- Wrapper window for Interface objects -->

<!-- TODO UxWrapper
    + static pin values
    + wrapper window controls
    * drag'n'drop
    * behaviour on screen edges (h/v): (pass, stick, close)
    + background (trasnparent, backColor by default, etc...)
    * fullscreen mode
-->

<template>
<div class="trading-vue-ux-wrapper" v-if="visible"
    :id="`tvjs-ux-wrapper-${ux.uuid}`"
    :style="style">
    <component
        @custom-event="on_custom_event"
        :ux="ux" :updater="updater" :wrapper="wrapper"
        :colors="colors"
        v-bind:is="ux.component"></component>
    <div v-if="ux.show_pin"
        :style="pin_style"
        class="tvjs-ux-wrapper-pin">
    </div>
    <div class="tvjs-ux-wrapper-head"
        v-if="ux.win_header !== false">
        <div class="tvjs-ux-wrapper-close"
            @click="close"
            :style="btn_style"
        >×</div>
    </div>
</div>
</template>

<script>

import Utils from '../stuff/utils.js'

export default {
    name: 'UxWrapper',
    props: ['ux', 'updater', 'colors', 'config'],
    mounted() {
        this.self = document.getElementById(this.uuid)
        this.w = this.self.offsetWidth // TODO: => width: "content"
        this.h = this.self.offsetHeight // TODO: => height: "content"
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
            if (this.uxr.hidden) return
            let lw = this.layout.width
            let lh = this.layout.height
            let pin = this.uxr.pin

            switch (pin[0]) {
                case 'cursor':
                    var x = this.uxr.overlay.cursor.x
                    break
                case 'mouse':
                    x = this.mouse.x
                    break
                default:
                    if (typeof pin[0] === 'string') {
                        x = this.parse_coord(pin[0], lw)
                    } else {
                        x = this.layout.t2screen(pin[0])
                    }
            }
            switch (pin[1]) {
                case 'cursor':
                    var y = this.uxr.overlay.cursor.y
                    break
                case 'mouse':
                    y = this.mouse.y
                    break
                default:
                    if (typeof pin[1] === 'string') {
                        y = this.parse_coord(pin[1], lh)
                    } else {
                        y = this.layout.$2screen(pin[1])
                    }
            }
            this.x = x + this.ox
            this.y = y + this.oy
        },
        parse_coord(str, scale) {
            str = str.trim()
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
        },
        on_custom_event(event) {
            this.$emit('custom-event', event)
            if (event.event === 'modify-interface') {
                if (this.self) {
                    this.w = this.self.offsetWidth
                    this.h = this.self.offsetHeight
                }
                this.update_position()
            }
        },
        close() {
            this.$emit('custom-event', {
                event: 'close-interface',
                args: [this.$props.ux.uuid]
            })
        }
    },
    computed: {
        uxr() {
            return this.$props.ux // just a ref
        },
        layout() {
            return this.$props.ux.overlay.layout
        },
        settings() {
            return this.$props.ux.overlay.settings
        },
        uuid() {
            return `tvjs-ux-wrapper-${this.uxr.uuid}`
        },
        mouse() {
            return this.uxr.overlay.mouse
        },
        style() {
            let st = {
                'display': this.uxr.hidden ? 'none' : undefined,
                'left': `${this.x}px`,
                'top': `${this.y}px`,
                'pointer-events': this.uxr.pointer_events || 'all',
                'z-index': this.z_index
            }
            if (this.uxr.win_styling !== false)
                st = Object.assign(st, {
                    'border': `1px solid ${this.$props.colors.grid}`,
                    'border-radius': '3px',
                    'background': `${this.background}`,
                })
            return st
        },
        pin_style() {
            return {
                'left': `${ -this.ox }px`,
                'top': `${ -this.oy }px`,
                'background-color': this.uxr.pin_color
            }
        },
        btn_style() {
            return {
                'background': `${this.inactive_btn_color}`,
                'color': `${this.inactive_btn_color}`,
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
        },
        z_index() {
            let base_index = this.settings['z-index'] ||
                this.settings['zIndex']  || 0
            let ux_index = this.uxr['z_index'] || 0
            return base_index + ux_index
        },
        background() {
            let c = this.uxr.background || this.$props.colors.back
            return Utils.apply_opacity(c,
                this.uxr.background_opacity ||
                this.$props.config.UX_OPACITY
            )
        },
        inactive_btn_color() {
            return this.uxr.inactive_btn_color ||
                this.$props.colors.grid
        },
        wrapper() {
            return {
                x: this.x,
                y: this.y,
                pin_x: this.x - this.ox,
                pin_y: this.y - this.oy
            }
        }
    },
    watch: {
        updater() {
            this.update_position()
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
        width: 9px;
        height: 9px;
        z-index: 100;
        background-color: #23a776;
        border-radius: 10px;
        margin-left: -6px;
        margin-top: -6px;
        pointer-events: none;
    }
    .tvjs-ux-wrapper-head {
        position: absolute;
        height: 23px;
        width: 100%;
    }
    .tvjs-ux-wrapper-close {
        position: absolute;
        width: 11px;
        height: 11px;
        font-size: 1.5em;
        line-height: 0.5em;
        padding: 1px 1px 1px 1px;
        border-radius: 10px;
        right: 5px;
        top: 5px;
        user-select: none;
        text-align: center;
        z-index: 100;
    }
    .tvjs-ux-wrapper-close-hb {

    }
    .tvjs-ux-wrapper-close:hover {
        background-color: #FF605C !important;
        color: #692324 !important;
    }
    .tvjs-ux-wrapper-full {

    }
</style>
