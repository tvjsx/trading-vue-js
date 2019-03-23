const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const VERS = require('../package.json').version
const DATE = new Date().toDateString()

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
    module: {
        rules: [{
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
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true
        })]
    },
    devtool: '#source-map',
    plugins: [
        new VueLoaderPlugin(),
        new webpack.BannerPlugin({
            banner:
                `TradingVue.JS - v${VERS} - ${DATE}\n` +
                `https://github.com/C451/trading-vue-js\n` +
                `Copyright (c) 2019 c451 Code's All Right;\n` +
                `Licensed under the MIT license\n`
        })
    ]
}


module.exports = [
    common
]
