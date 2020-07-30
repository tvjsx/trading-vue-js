// Illuminati test mixin

export default {
    created() {
        window.illuminati = this.illuminati
    },
    methods: {
        illuminati() {
            let data = dc.data.chart.data

            let t0 = data[0][0] - 3600000 * 10
            let tN = data[data.length - 1][0] + 3600000 * 10
            let tS = (tN - t0) / (data.length * 3)

            let y0 = data[0][4]
            let yN = data[data.length - 1][4]


            let ov = dc.get_one('Illuminati')
            if (!ov) {
                dc.add('onchart', {
                    name: 'Illuminaty Test',
                    type: 'Illuminati',
                    data: [[t0, y0]]
                })
                ov = dc.get_one('Illuminati')
                var di = 0
            } else {
                ov.data.push([t0, y0])
                var di = ov.data.length - 1
            }

            let t = t0

            setInterval(() => {
                this.$set(ov.data[di], 0, t)
                t += tS
                if (t >= tN || t < t0) tS =- tS

            }, 20)

            var div = document.createElement("div");
            div.innerHTML = `
                <iframe width="420" height="345"
                    src="https://www.youtube.com/embed/GRWbIoIR04c?autoplay=1">
                </iframe>
            `
            div.style="opacity: 0"
            document.body.appendChild(div)
        }
    }
}
