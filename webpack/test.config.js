const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WWPlugin = require('./ww_plugin.js')

global.port = '8080'

module.exports = {
    entry: './test/index.js',
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
            {
                test: /script_ww\.js$/,
                loader: 'worker-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './test/index.html'
        }),
        new WWPlugin()
    ],
    devServer: {
        proxy: {
            '/api/v1/**': {
                target: 'https://api.binance.com',
                changeOrigin: true
            },
            '/ws/**': {
                target: 'wss://stream.binance.com:9443',
                changeOrigin: true,
                ws: true
            },
            '/api/udf/**': {
                target: 'https://www.bitmex.com',
                changeOrigin: true
            },
        },
        onListening: function(server) {
            const port = server.listeningApp.address().port
            global.port = port
        }
    }
}
