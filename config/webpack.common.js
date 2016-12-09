const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './node_modules/vendor/vendor.ts',
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
            }
        ]
    },

    plugins: [
        new AssetsPlugin({
            path: helpers.root('dist'),
            filename: 'webpack-assets.json',
            prettyPrint: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            title: 'angular2-bootstrap-webpack',
            template: './index.html'
        }),

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
};