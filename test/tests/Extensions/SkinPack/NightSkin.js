
import NightPack from './NightPack.json'
import BackShader from './back_shader.js'
import SideShader from './side_shader.js'
import BotShader from './bot_shader.js'

export default {
    id: 'NightSkin',
    colors: NightPack,
    shaders: [BackShader, SideShader, BotShader]
}
