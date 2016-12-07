var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common');
var helpers = require('./helpers');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig({ env: ENV }).metadata, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: HMR
});

module.exports = function(env) {
    return webpackMerge(commonConfig({ env: ENV }), {
        devtool: 'cheap-module-eval-source-map',

        output: {
            path: helpers.root('dist'),
            filename: '[name].chunk.bundle.js',
            sourceMapFilename: '[name].chunk.bundle.map',
            chunkFilename: '[id].chunk.js'
        },

        plugins: [
            new ExtractTextPlugin('[name].css')
        ],

        devServer: {
            contentBase: "./dist", //本地服务器所加载的页面所在的目录
            colors: true, //终端中输出结果为彩色
            historyApiFallback: true, //不跳转
            inline: true, //实时刷新
            stats: 'minimal'
        }

    });
}