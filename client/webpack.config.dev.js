var path = require('path');
var webpack = require('webpack');

var clientPath = path.join(__dirname, '..', 'client');
var buildPath = path.join(clientPath, 'build');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    path.join(clientPath, 'source/main.jsx')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: buildPath,
    filename: './bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    contentBase: buildPath,
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [
          path.join(clientPath, 'source')
        ],
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
