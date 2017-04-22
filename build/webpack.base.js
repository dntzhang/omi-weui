const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        config.entry.app,
    ],
    output: {
        filename: config.assetsSubDirectory + '/[name].[hash].js',
        path: config.assetsRoot,
        publicPath: config.assetsPublicPath,
        chunkFilename: config.assetsSubDirectory +'/[name].[chunkhash:8].chunk.js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [
            {
                test: /\.(js|omi)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015", "stage-1"]
                    }
                },
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: {
                    loader: "url-loader",
                    query: {
                        limit: 8192,
                        name: 'static/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                    query: {
                        limit: 100000
                    }
                }
            }
        ]
    }
};