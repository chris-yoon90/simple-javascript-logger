var webpack = require('webpack');
var path = require('path');

var ROOTDIR = __dirname;
var paths = {
    appSrc: path.resolve(ROOTDIR, 'src'),
    appDist: path.resolve(ROOTDIR, 'dist')
}

var config = {
    output: {
        library: "Logger",
        libraryTarget: "umd"
    },
    resolve: {
        root: paths.appSrc,
        extensions: ['.ts', '.js', ''],
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint',
                include: paths.appSrc
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                include: paths.appSrc,
                loaders: [
                    'ts-loader'
                ]
            },
        ]
    }
};

module.exports = config;