const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, './docs_src')
const DEST_DIR = path.resolve(__dirname, './docs')

const config = {
  context: SRC_DIR,
  entry: {
    'babel-polyfill': 'babel-polyfill',
    'index': './index.js',
  },
  output: {
    path: DEST_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    compress: true,
    contentBase: DEST_DIR,
    watchContentBase: true,
    open: true,
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '**/*.{html,css}',
        context: SRC_DIR,
        to: DEST_DIR,
      },
    ]),
  ],
}

module.exports = config
