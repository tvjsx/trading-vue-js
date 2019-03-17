// Canvas context for text measurments

function Context($p) {

    let el = document.createElement('canvas')
    let ctx = el.getContext("2d")
    ctx.font = $p.font

    return ctx

}

export default Context
