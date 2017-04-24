'use strict';
const path              = require('path'),
      webpack           = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      // using dist for BUILD
      BUILD_DIR         = path.resolve(__dirname, 'dist'),
      // using src for incoming
      APP_DIR           = path.resolve(__dirname, 'src');

 const config = {
  // setting entry point of webpack to src/index.jsx
  entry: `${APP_DIR}/index.jsx`,
  output: {
    // output to dist/
    path: BUILD_DIR,
    // dist/js/main.js with a relative path
    filename: './js/[name].js',
  },
  cache: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ninaTracker',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
      scripts: []
    }),
    // same here, extract-text-plugin only takes one arg
    new ExtractTextPlugin({
      // remember to make this always a relative path
      filename: './css/[name].css',
      allChunks: true
    })
  ],

  module : {
    // include: path.join(__dirname, 'src'),
    loaders: [
      {
        test: /\.css$/,
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        // Extract text plugin only takes one argument now, so we change it like so
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', use: 'css-loader'
        })
      },
      // {
      //   test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      //   loader: 'file-loader',
      // },
      {
        test: /\.svg$/,
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
      },
      {
        test: /\.gif$/,
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
      },
      { test: /\.jpg$/,
        loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      }
    ]
  }
};

module.exports = config;
