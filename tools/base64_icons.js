var fs = require('fs')

const PATH = './src/icons/'

function base64_encode(file) {
    var bitmap = fs.readFileSync(file)
    return new Buffer(bitmap).toString('base64')
}

let files = fs.readdirSync(PATH)
let json = {}

for (const file of files) {

    if (file === '.DS_Store') continue

    let b64 = base64_encode(PATH + file)
    let fn = file.toLowerCase()
    json[fn] = 'data:image/png;base64,' + b64

    console.log(file)

}

let txt = JSON.stringify(json, null, 4)
fs.writeFileSync('./src/stuff/icons.json', txt)
