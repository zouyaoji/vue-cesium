/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:23:35
 * @LastEditTime: 2021-12-03 14:23:59
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\scripts\gen-version.ts
 */
import fs from 'fs'
import path from 'path'
import pkg from '../packages/vue-cesium/package.json' // need to be checked
const tagVer = process.env.TAG_VERSION
let version = ''

if (tagVer) {
  version = tagVer.startsWith('v') ? tagVer.slice(1) : tagVer
} else {
  version = pkg.version
}

fs.writeFileSync(
  path.resolve(__dirname, '../packages/vue-cesium/version.ts'),
  `export const version = '${version}'
`
)
