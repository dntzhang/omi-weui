const path = require('path')

module.exports = {
    global: {
        entry: {
            app: path.resolve(__dirname, '../docs/src/main.js')
        },
        assetsRoot: path.resolve(__dirname, '../docs'),
        index: path.resolve(__dirname, '../docs/src/index.html')
    },
    build: {
        env: '"production"',
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: '"development"',
        port: 3000,
        hotPath: 'webpack-hot-middleware/client?reload=true',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false
    }
}