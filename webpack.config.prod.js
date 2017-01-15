var webpack = require('webpack');
var webpackConfigBase = require('./webpack.config.base');

const config = Object.create(webpackConfigBase);
config.output.filename = "[name].min.js";
config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            screw_ie8: true,
            warnings: false
        },
        mangle: {
            screw_ie8: true
        },
        output: {
            comments: false,
            screw_ie8: true
        }
    }),
];

module.exports = config;


