const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, './src/index.js')
  ],

  output: {
    path: path.join(__dirname, './public/build')
  },

  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/view/index.html'
    }),        
  ], 
}