
const path = require('path');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: "none",
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: './contact.html',
      template: './contact.html',
      chunks: ['contact'],
    }),
    new HtmlWebpackPlugin({
      filename: './about.html',
      template: './about.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      filename: './projects.html',
      template: './projects.html',
      chunks: ['projects'],
    }),
    new HtmlWebpackPlugin({
      filename: './resume.html',
      template: './resume.html',
      chunks: ['resume'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|PNG)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]'
          }
        }
      },
    ]
  }
});


