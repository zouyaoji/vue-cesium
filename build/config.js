/**
 * Shared config
 */
const path = require('path')
const packageJson = require('../package.json')

const banner = `/**
 * ${packageJson.name} - https://github.com/zouyaoji/vue-cesium
 * ${packageJson.description}
 *
 * @package ${packageJson.fullname}
 * @author ${packageJson.author}
 * @version ${packageJson.version}
 * @license ${packageJson.license}
 * @homepage ${packageJson.homepage}
 * @copyright (c) 2018-${new Date().getFullYear()}, ${packageJson.author}
 */`

module.exports = {
  banner,
  name: packageJson.name,
  fullname: packageJson.fullname,
  author: packageJson.author,
  version: packageJson.version,
  license: packageJson.license,
  entry: path.join(__dirname, '../src/index.js'),
  umdEntry: path.join(__dirname, '../src/index.umd.js'),
  outputPath: path.join(__dirname, '../lib'),
  publicPath: '/',
  host: 'localhost',
  port: 8080,
  replaces: {
    C_PKG_NAME: packageJson.name,
    C_PKG_FULLNAME: packageJson.fullname,
    C_PKG_DESCRIPTION: packageJson.description,
    C_PKG_VERSION: packageJson.version,
    C_PKG_HOMEPAGE: packageJson.homepage,
    C_PKG_REPOSITORY: 'https://github.com/zouyaoji/vue-cesium'
  },
  autoOpenBrowser: true,
  dev: {

    // Paths
    assetsSubDirectory: 'statics',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'statics',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
