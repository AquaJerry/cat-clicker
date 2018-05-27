// (c) 2018 AquaJerry, Guangzhou University.
// Cat Clicker is freely distributed under the terms of ISC license.

// - Cleaner, clears old dists
// - Html, generates html dynamically
// - Uglifyer, minimizes scripts
const Cleaner = require('clean-webpack-plugin');
const Html = require('html-webpack-plugin');
const path = require('path');
const Uglifyer = require('uglify-js-plugin');

// Webpack config
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new Cleaner('dist'),
    new Uglifyer(),
    new Html({
      description: 'Browsering lovely cats',
      favicon: 'src/favicon.ico',
      template: 'src/app.html',
      title: 'Cat Clicker',
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
  ],
};
