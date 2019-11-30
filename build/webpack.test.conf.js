// This is the webpack config used for unit tests.
const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders()
  },
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: Object.assign({}, {
      'vue$': 'vue/dist/vue.common.js'
    }),
    modules: ['node_modules']
  },
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
