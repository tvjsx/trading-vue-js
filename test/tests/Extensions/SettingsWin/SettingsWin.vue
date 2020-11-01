<template>
    <window :title="data.ov.name" class="sett-win"
        @close="on_close" :tv='tv'>
        <div v-for="k in settlist" class="sett-win-item">
            <label>{{s2d(k)}}</label>
            <std-input :value="sett[k]"
                @input="update_sett(k, $event)"/>
        </div>
        <span v-if="!settlist.length" class="sett-win-empty">
            <i>No script settings</i>
        </span>
    </window>
</template>
<script>

import Window from './Window.vue'
import StdInput from './StdInput.vue'
import Utils from './utils.js'

export default {
    name: 'SettingsWin',
    props: ['id', 'main', 'dc', 'tv', 'data'],
    components: { Window, StdInput },
    mounted() {
    },
    methods: {
        s2d(str) {
            return Utils.sett2desc(str)
        },
        on_close() {
            this.$props.main.remove_widget(this.$props.id)
        },
        update_sett(k, val) {
            let dcid = this.$props.data.ov.id

            let valN = parseFloat(val)
            if (valN !== valN) valN = val

            this.$props.dc.merge(`${dcid}.settings`,
                { [k]: valN }
            )
        }
    },
    computed: {
        sett() {
            return this.$props.data.ov.settings
        },
        settlist() {
            return Object.keys(this.sett).filter(x =>
                x[0] !== '$' && this.sett.$props &&
                this.sett.$props.includes(x))
        }
    }
}
</script>
<style scoped>
.tvjs-x-window.sett-win {
    padding-bottom: 30px;
    border: 1px solid #80808011;
}
.sett-win-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
}
.sett-win-item label {
    min-width: 80px;
    color: #35a776;
}
.sett-win-empty {
    opacity: 0.5;
}
</style>
