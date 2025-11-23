/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:23:35
 * @LastEditTime: 2025-03-29 16:42:34
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\internal\build\gen-version.ts
 */

import { writeFile } from 'fs/promises'
import path from 'path'
import consola from 'consola'
import { vcRoot } from '@vue-cesium/build'
import pkg from '../../packages/vue-cesium/package.json' // need to be checked

function getVersion() {
  const tagVer = process.env.TAG_VERSION
  if (tagVer) {
    return tagVer.startsWith('v') ? tagVer.slice(1) : tagVer
  } else {
    return pkg.version
  }
}

const version = getVersion()

async function main() {
  consola.info(`Version: ${version}`)
  await writeFile(path.resolve(vcRoot, 'version.ts'), `export const version = '${version}'\n`)
}

main()
