
export default class EventBus {
    constructor() {}
    send(to, e) {
        let h = this[`on${to}`]
        if (h) h(e)
    }
}
