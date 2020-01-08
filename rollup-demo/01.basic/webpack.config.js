'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    // profile: true,
    // stats: {
    //     modules: true,
    //     // depth: true,
    //     // moduleTrace: true,
    //     // reasons: true,
    //     // source: true,
    //     // children: true,
    //     outputPath: true,
    // },
    // plugins: [new BundleAnalyzerPlugin()]
};
