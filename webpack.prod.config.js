const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: /^@(app)\//,
    }),
  ],
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/server/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
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
  plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
};
