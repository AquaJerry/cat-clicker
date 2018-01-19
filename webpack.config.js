// (c) 2018 LiuZeyang, Guangzhou University.
// Cat Clicker Packer is freely distributed under the terms of ISC license.

// - `Cleaner` Clear old distributions.
// - `Html` Puzzle as the website is.
// - `Uglifyer` Minimize scripts.
// - `distpath` Where to build.
const Cleaner = require('clean-webpack-plugin');
const Html = require('html-webpack-plugin');
const path = require('path');
const Uglifyer = require('uglify-js-plugin');
const distpath = path.resolve('dist');

// Webpack config.
// - `plugins` No olds, shortest news, pages made.
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.min.js',
    path: distpath,
  },
  plugins: [
    new Cleaner(path.resolve(distpath, '*')),
    new Uglifyer,
    new Html({
      template: './src/app.html',
    }),
  ],
};
