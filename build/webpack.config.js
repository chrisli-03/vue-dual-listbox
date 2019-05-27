const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var commonConfig = {
  entry: '../src/index.js',
  output: {
    path: path.resolve(__dirname + '/../dist/'),
    filename: 'vue-dual-listbox.min.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      use: 'vue-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = [
  // Browser environment
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/../src/index.js'),
    output: {
      filename: 'vue-duallistbox.min.js',
      libraryTarget: 'window',
      library: 'VueDualListbox'
    }
  })
]
