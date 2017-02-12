var path = require('path');
var webpack = require('webpack');

//module.exports = merge()
const config= {
    entry: {
            'omi-weui': './src/index.js'
    },
    output: {
        // path: __dirname,
        path: 'dist/',
            library:'OmiWeUI',
            libraryTarget: 'umd',
            filename:  '[name].js'
        //umdNamedDefine: true
    },
    module: {
    loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                query: {
                    presets: ["es2015", "stage-1"]
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.BannerPlugin(" omi-weui v0.1.0  \r\n Github: https://github.com/pasturn/omi-weui\r\n Omi: https://github.com/AlloyTeam/omi\r\n MIT Licensed."),
        new webpack.NoEmitOnErrorsPlugin()
    ],
        stats: {
            // Nice colored output
            colors: true
        },
            // Create Sourcemaps for the bundle
            // devtool: 'source-map',
        };

module.exports = config;