const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        config.entry.app,
        'webpack-hot-middleware/client?reload=true',
    ],
    output: {
        filename: '[name].[hash].js',
        path: config.assetsRoot,
        publicPath: '/',
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
                test: /\.(jpg|png|gif)$/,
                use: "file-loader"
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