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
  autoOpenBrowser: true
}
