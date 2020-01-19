'use strict';

const path = require('path');

module.exports = {
    entry: {
      'index': './src/index.js',
      'index.es6': './src/index.es6.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: 'source-map',
    mode: 'development',
};
