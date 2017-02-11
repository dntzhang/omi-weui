const path = require('path');
const webpack = require('webpack');

module.exports = {
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
        ]
    }
};