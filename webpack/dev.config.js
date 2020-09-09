const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WWPlugin = require('./ww_plugin.js')

global.port = '8080'

module.exports = {
    entry: './src/main.js',
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
            template: './src/index.html'
        }),
        new WWPlugin()
    ],
    devServer: {
        onListening: function(server) {
            const port = server.listeningApp.address().port
            global.port = port
        }
    }
}
