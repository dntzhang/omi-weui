const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("../config");
const baseWebpackConfig = require('./webpack.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            test: /\.js$/,
            compress: {
                warnings: false
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.index,
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('docs')
            }
        }),
        new ExtractTextPlugin("styles.[hash].css"),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]
});