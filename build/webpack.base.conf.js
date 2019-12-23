'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('./config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack')
const StringReplacePlugin = require('string-replace-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: {
    main: 'docs/main.js',
    libs: ['vue', 'vue-router', 'prismjs', 'vue-material'],
    vendor: [
      'docs/components/App.vue',
      'docs/components/CateView.vue',
      'docs/components/DocPreview.vue',
      'docs/components/Navigator.vue',
      'docs/components/RootFrame.vue'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  mode: ['production', 'development'].includes(process.env.NODE_ENV)
    ? process.env.NODE_ENV
    : 'development',
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
        test: /\.md$/,
        loader: 'vue-markdown-loader'
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
      }
    ]
  },
  resolve: {
    alias: {
      docs: path.resolve(__dirname, '../docs'),
      '@': path.resolve(__dirname, '../src'),
      'vc-variables': path.resolve(__dirname, '../src/styles/common/_variables.scss'),
      'vc-mixins': path.resolve(__dirname, '../src/styles/common/_mixins.scss'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin(Object.assign({}, config.replaces, {
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
      'process.env.VUECESIUM_DEBUG': process.env.NODE_ENV !== 'production'
    })),
    new webpack.BannerPlugin({
      banner: config.banner,
      raw: true,
      entryOnly: true,
    }),
    new StringReplacePlugin()
  ],
  performance: {
    maxEntrypointSize: 1024 * 1024, // 1Mb
    maxAssetSize: 10 * 1024 * 1024, // 10Mb
  },
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false,
    chunkModules: false
  }
}
