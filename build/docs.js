const webpack = require("webpack");
const webpackConfig = require("./webpack.docs");
const ora = require('ora');
const spinner = ora('building for docs');
spinner.start();

webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
});
