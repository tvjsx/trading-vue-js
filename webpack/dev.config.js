const VueLoader = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WWPlugin = require('./ww_plugin.js')
const TerserPlugin = require('terser-webpack-plugin')

global.port = '8080'

module.exports = (env, options) => ({
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
        new VueLoader.VueLoaderPlugin(),
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
    },
    optimization: {
        minimize: options.mode === 'production',
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: {
                        reserved: ['_id', '_tf'] // for scripts std
                    }
                }
            })
        ]
    }
})
