const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')

const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const VERS = require('../package.json').version
const DATE = new Date().toDateString()
const BANNER =

`TradingVue.JS - v${VERS} - ${DATE}\n` +
`    https://github.com/tvjsx/trading-vue-js\n` +
`    Copyright (c) 2019 C451 Code's All Right;\n` +
`    Licensed under the MIT license`

if (!fs.existsSync('./src/helpers/tmp/ww$$$.json')) {
    console.log('Web-worker is not compiled. Run `npm run ww`\n')
    process.exit()
}

let common = {
    entry: {
        'trading-vue': './src/index.js',
        'trading-vue.min': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        library: 'TradingVueJs',
        libraryTarget: 'umd',
        //libraryExport: "default"
    },
    performance: {
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
    },
    module: {
        rules: [
            {
                test: /script_ww.js/,
                use: 'null-loader'
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            include: /\.min\.js$/,
            extractComments: {
                banner: BANNER
            }
        })]
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
        new webpack.BannerPlugin({
            banner: BANNER
        })
    ]
}


module.exports = [
    common
]
