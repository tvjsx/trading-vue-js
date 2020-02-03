export default function Stream(url) {

    const ws = new WebSocket(url)
    const cb = () => {}

    ws.onopen = function() {
        console.log('Websocket is opened')
    }

    ws.onmessage = function(data) {
        try {
            data = JSON.parse(data.data)
            cb(data)
        } catch(e) {
            console.log(e.toString())
        }
    }

    return {
        set ontrades(val) { cb = val },
        off() { ws.close(1000) }
    }
}
