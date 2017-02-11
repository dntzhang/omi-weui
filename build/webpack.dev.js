const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.omi', '.css']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.index,
            inject: true
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("styles.css"),
    ]
});
