const path = require('path')
const utils = require('./utils')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: '../index.js',
    library: 'VueCesium',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|vue|s?[ca]ss)$/,
        loader: utils.compileVarsReplaceLoader(),
        enforce: 'pre',
        include: [
          resolve('src')
        ],
        exclude: [/node_modules/, /md/]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: [/node_modules/, /md/]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      ...utils.styleLoaders({ sourceMap: true, usePostCSS: true })
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  performance: {
    hints: false
  }
}
