const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './scss/material-foundation.scss',
    output: {
        path: './css',
        filename: 'demo.css'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }]
    },
    plugins: [
        new ExtractTextPlugin('demo.css'),
    ]
};