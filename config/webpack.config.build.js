const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const config = require('./webpack.config.base');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/DropdownJS.ts'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "DropdownJS.css"
    }),
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin(config.banner)
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: "DropdownJS.js",
    chunkFilename: '[name].js',
    libraryTarget: "umd",
    libraryExport: config.libraryExport,
    library: config.libraryName,
    umdNamedDefine: true
  },
  module: {
    rules: [{
        test: /.[jt]s?$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        loader: 'ts-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts']
  },
  devtool: 'source-map'
};