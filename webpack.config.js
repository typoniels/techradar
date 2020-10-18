var path = require('path');
const loaders = require('./webpack/loaders');

module.exports = {
  entry: {
    bundle: './js/client.js',
  },
  bail: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/js/[name].js',
  },
  module: {
    rules: [
      {
         test: /\.js?$/,
         include: [
           path.resolve(__dirname, "js"),
           path.resolve(__dirname, "common"),
         ],
          loader: "babel-loader",
       },
    ],
  },
}