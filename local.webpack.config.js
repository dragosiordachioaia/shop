/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.resolve('service/static'),
    filename: 'main.js'
  },
  resolve: {
    modules: [
      path.resolve('./frontend'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
      }
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: 500,
  }
}
