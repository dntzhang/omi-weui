const path = require('path');

module.exports = {
    entry: './example/src/main.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'example/dist'),
        publicPath: '/'
    }
};