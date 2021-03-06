'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /.(png)$/,
          use: 'file-loader'
        }
      ]
    }
};
