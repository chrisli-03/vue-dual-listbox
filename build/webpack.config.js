const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var commonConfig = {
  entry: '../src/index.js',
  output: {
    path: path.resolve(__dirname + '/../dist/'),
    filename: '[name].js'
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
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
      ],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
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
