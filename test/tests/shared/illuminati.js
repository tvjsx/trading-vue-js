// Illuminati test mixin

export default {
    created() {
        window.illuminati = this.illuminati
    },
    methods: {
        illuminati(auto = true, sound = true) {
            let data = dc.data.chart.data

            let t0 = data[0][0] - 3600000 * 10
            let tN = data[data.length - 1][0] + 3600000 * 10
            let tS = (tN - t0) / (data.length * 3)

            let y0 = data[0][4]
            let yN = data[data.length - 1][4]


            let ov = dc.get_one('Illuminati')
            if (!ov) {
                var obj = [t0, y0]
                dc.add('onchart', {
                    name: 'Illuminaty Test',
                    type: 'Illuminati',
                    data: [obj]
                })
                ov = dc.get_one('Illuminati')

            } else {
                var obj = [t0, y0]
                ov.data.unshift(obj)
            }
            let t = t0

            if (auto) {
                setInterval(() => {
                    let i = ov.data.indexOf(obj)
                    this.$set(ov.data[i], 0, t)
                    t += tS
                    if (t >= tN || t < t0) tS =- tS
                }, 20)
            } else {
                window.addEventListener("keydown", (event) => {
                    let key = event.key.toUpperCase()
                    let i = ov.data.indexOf(obj)
                    switch (key) {
                        case 'ARROWLEFT':
                            t -= tS
                            this.$set(ov.data[i], 0, t)
                            break
                        case 'ARROWRIGHT':
                            t += tS
                            this.$set(ov.data[i], 0, t)
                            break
                    }
                }, true)
            }
            if (sound) {
                var div = document.createElement("div");
                div.innerHTML = `
                    <iframe width="420" height="345"
                        src="https://www.youtube.com/embed/GRWbIoIR04c?autoplay=1">
                    </iframe>
                `
                div.style="opacity: 0; display: none"
                document.body.appendChild(div)
            }
        }
    }
}
