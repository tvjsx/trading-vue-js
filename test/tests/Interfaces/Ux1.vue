<template>
<div class='test-ux' :style="style">
    <h1>TVJS</h1>
    <p>{{ux.vars.p_text}}</p>
    <button>{{ux.vars.button_text}}</button>
</div>
</template>
<script>

import Interface from '../../../src/mixins/interface.js'

export default {
    name: 'Ux1',
    mixins: [Interface],
    mounted() {
        /*
        setInterval(() => {
            this.w = Math.abs(Math.sin(
                new Date().getTime()/1000)) * 100 + 150, 0
            this.modify()
        })
        this.modify({
            pin_position: '100%,0'
        })*/
    },
    computed: {
        style() {
            return {
                width: this.w + 'px',
                background: this.uxr.vars.custom_back,
                color: this.uxr.vars.color || this.$props.colors.colorText
            }
        }
    },
    data() {
        return {
            w : 250
        }
    }
}
</script>
<style scoped>
    .test-ux {
        font-size: 3em;
        //background: url(http://youremyfavoritetoday.com/wp-content/uploads/2014/04/warp-speed.gif);
        //background: url(https://media.giphy.com/media/oyFyFiXz0hrnG/giphy.gif);
        //background: url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/d58c4258730099.5a0726f0f1616.gif);
        background-position: center;
        width: 250px;
        height: 150px;
        line-height: 0.25;
        padding: 0.5em 1em 1em 1em;
    }
    h1 {
        margin-top: 30px;
    }
</style>
