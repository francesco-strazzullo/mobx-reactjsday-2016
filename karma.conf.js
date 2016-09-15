var webpack = require('webpack');

module.exports = function (config) {
    config.set({

        browsers: ['Chrome'],

        singleRun: true,

        frameworks: [ 'mocha' ],

        reporters: ['story'],

        files: [ 'webpack.tests.js' ],

        preprocessors: {
            'webpack.tests.js': [ 'webpack', 'sourcemap']
        },

        webpack:{
            devtool: 'inline-source-map',
            module: {
                loaders : [
                    {
                        test : /\.js?/,
                        exclude: /node_modules/,
                        loader : 'babel'
                    }
                ]
            }
        }
    });
};