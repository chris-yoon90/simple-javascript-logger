var webpack = require('webpack');
var path = require('path');

var ROOTDIR = __dirname;
var paths = {
    appSrc: path.resolve(ROOTDIR, 'src'),
    appDist: path.resolve(ROOTDIR, 'dist')
}

var config = {
    devtool: "source-map",
    entry: {
        "simple-javascript-logger": path.join(paths.appSrc, 'index.ts')
    },
    output: {
        path: paths.appDist,
        filename: "[name].js",
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