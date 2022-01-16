const path = require('path');

module.exports = {
  entry: './web/index.js',
  mode: 'development',

  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'web', '__compiled__'),
    publicPath: '/__compiled__/'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'web')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};

