const path = require('path')
const vueConfig = require('./vue-loader.config')

module.exports = {
  // devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: [
      'vue',
      'vue-router',
      'vue-headroom'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: './public/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|woff|woff2|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: './public/[name].[ext]?[hash]'
        }
      }
    ]
  }
}
