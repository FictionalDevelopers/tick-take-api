const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: /^@(app)\//,
    }),
  ],
  watch: true,
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/server/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new NodemonPlugin(),
  ],
};
