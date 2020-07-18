



const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/assets/scripts'),
    filename: '[name].[contentHash].bundle.js',
    publicPath: 'assets/scripts/'
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        filename: '../../index.html',
        template: './index.html',
        chunks: ['main'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: false,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        filename: '../../contact.html',
        template: './contact.html',
        chunks: ['contact'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: false,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        filename: '../../projects.html',
        template: './projects.html',
        chunks: ['projects'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: false,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        filename: '../../resume.html',
        template: './resume.html',
        chunks: ['resume'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: false,
          removeComments: true
        }
      }),
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '../styles/[name].[contentHash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../styles/',
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          },
        ]
      }
    ]
  }
});



