
const path = require('path');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: '[name].[contentHash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './index.html',
    }),
    new HtmlWebpackPlugin({
      filename: './contact.html',
      template: './contact.html',
    }),
    new HtmlWebpackPlugin({
      filename: './projects.html',
      template: './projects.html',
    }),
    new HtmlWebpackPlugin({
      filename: './resume.html',
      template: './resume.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: '../styles/',
      //       },
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         url: true
      //       }
      //     },
      //   ]
      // },
    ]
  }
});


