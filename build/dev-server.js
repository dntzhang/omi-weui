const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require("webpack");
const config = require('../config');
const webpackConfig = require("./webpack.dev");

const port= config.port;

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        color: true,
        chunks: false
    }
}));
app.use(webpackHotMiddleware(compiler));

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        webpackHotMiddleware.publish({action: 'reload'})
        cb()
    })
});

app.listen(port, function () {
    console.log("Listening on port " + port + '\n')
})
