
// Index for the extentention

import Main from './main.js'
import DayPack from './DayPack.json'
import NightPack from './NightPack.json'
import DaySkin from './DaySkin.js'
import NightSkin from './NightSkin.js'
Main.__name__ = 'skin-pack'

const widgets = { }
const components = {  }
const overlays = {  }
const colorpacks = { DayPack, NightPack }
const skins = { DaySkin, NightSkin }

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
