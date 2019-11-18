const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
  return {
    mode: 'production',
    entry: './js/ads.js',
    output: {
      path: path.resolve(__dirname, 'js'),
      filename: 'wakool-ads.js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devServer: {
      contentBase: './',
      hot: true
    }
  } 
}
