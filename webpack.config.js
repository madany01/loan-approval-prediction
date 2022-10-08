const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',

  devServer: {
    static: './public',
  },

  target: ['web', 'es5'],

  entry: {
    index: './src/index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
}
