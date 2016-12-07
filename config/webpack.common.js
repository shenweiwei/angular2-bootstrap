var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = function(options) {

    isProd = options.env === 'production';

    return {
        entry: {
            'polyfills': './app/polyfills.ts',
            'vendor': './app/js/vendor/vendor.ts',
            'app': './app/main.ts'
        },
        resolve: {
            extensions: ['', '.ts', '.js']
        },

        module: {
            loaders: [{
                    test: /\.ts$/,
                    loaders: ['awesome-typescript-loader', 'angular2-template-loader']
                },
                {
                    test: /\.html$/,
                    loader: 'html'
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'file?name=assets/[name].[hash].[ext]'
                },
                {
                    test: /\.css$/,
                    loaders: ['raw-loader']
                },
                //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass?sourceMap'
                },
            ]
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor', 'polyfills']
            }),

            new HtmlWebpackPlugin({
                title: 'angular2-bootstrap-webpack',
                template: './index.html'
            }),

            new webpack.optimize.OccurenceOrderPlugin(),
            // new webpack.optimize.UglifyJsPlugin(),

            new webpack.ProvidePlugin({
                'rxjs': 'npm:rxjs',
                'vendor/annotation': 'npm:vendor/annotation',
                'vendor/common': 'npm:vendor/common',
                'vendor/http': 'npm:vendor/http',
                'vendor/lang': 'npm:vendor/lang',
                'vendor/util': 'npm:vendor/util',
                'reflect-metadata': 'npm:reflect-metadata'
            })
        ]
    }
};