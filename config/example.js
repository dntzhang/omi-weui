var path = require('path')

module.exports = {
    global: {
        entry: {
            app: path.resolve(__dirname, '../example/src/main.js')
        },
        assetsRoot: path.resolve(__dirname, '../docs'),
        index: path.resolve(__dirname, '../example/src/index.html')
    },
    build: {
        env: '"production"',
        assetsSubDirectory: '',
        assetsPublicPath: '',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: '"development"',
        port: 3000,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false
    }
}