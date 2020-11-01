export default  {
    methods: {
        onMouseDown(e) {
            e = e || window.event
            e.preventDefault()
            this.drag.offset_x = e.clientX - this.x
            this.drag.offset_y = e.clientY - this.y
            document.onmouseup = this.stopdrag
            document.onmousemove = this.ondrag
        },

        ondrag(e) {
            e = e || window.event
            e.preventDefault()
            this.x = e.clientX - this.drag.offset_x
            this.y =  e.clientY - this.drag.offset_y
        },

        stopdrag() {
            document.onmouseup = null
            document.onmousemove = null
        }
    },
    data() {
        return {
            drag: {
                offset_x: 0,
                offset_y: 0
            }
        }
    }
}
