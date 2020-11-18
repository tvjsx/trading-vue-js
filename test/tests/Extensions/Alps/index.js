
// Index for the extentention

import Main from './main.js'
import AlpsPack from './AlpsPack.json'
import Alps from './AlpsSkin.js'
Main.__name__ = 'alps'

const widgets = { }
const components = {  }
const overlays = {  }
const colorpacks = { AlpsPack }
const skins = { Alps }

const Pack = {
    widgets,
    components,
    overlays,
    colorpacks,
    skins,
    Main
}

export default Pack

export {
    widgets,
    components,
    overlays,
    colorpacks,
    skins,
    Main
}
