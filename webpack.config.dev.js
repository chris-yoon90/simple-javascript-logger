var webpack = require('webpack');
var webpackConfigBase = require('./webpack.config.base');

const config = Object.create(webpackConfigBase);
config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
];

module.exports = config;