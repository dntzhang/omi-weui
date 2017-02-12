const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require("webpack");
const config = require('../config');
let webpackConfig = require("./webpack.dev");

const port = config.port;

webpackConfig.entry.push(config.hotPath);

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr'
}));

app.listen(port, function () {
    console.log("Listening on port " + port + '\n')
    console.log("Please open http://localhost:" + port + " in browser" + '\n')
});
