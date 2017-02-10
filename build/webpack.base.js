const path = require('path');

module.exports = {
    entry: [
        './example/src/main.js',
        'webpack-hot-middleware/client?reload=true',
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'example/dist'),
        publicPath: 'http://localhost:3000/'
    }
};