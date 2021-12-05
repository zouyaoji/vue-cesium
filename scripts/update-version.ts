/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 16:56:11
 * @LastEditTime: 2021-12-05 09:48:10
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\scripts\update-version.ts
 */
import fs from 'fs'
import { vcPackage } from '../build/utils/paths'
import { cyan, red, yellow, green } from '../build/utils/log'
import { getPackageManifest } from '../build/utils/pkg'

const tagVersion = process.env.TAG_VERSION
const gitHead = process.env.GIT_HEAD
if (!tagVersion || !gitHead) {
  red('No tag version or git head were found, make sure that you set the environment variable $TAG_VERSION \n')
  process.exit(1)
}

cyan('Start updating version')

cyan(['NOTICE:', `$TAG_VERSION: ${tagVersion}`, `$GIT_HEAD: ${gitHead}`].join('\n'))
;(async () => {
  yellow(`Updating package.json for vue-cesium`)

  const json: Record<string, any> = getPackageManifest(vcPackage)

  json.version = tagVersion
  json.gitHead = gitHead

  if (!(process.argv.includes('-d') || process.argv.includes('--dry-run'))) {
    try {
      await fs.promises.writeFile(vcPackage, JSON.stringify(json, null, 2), {
        encoding: 'utf-8'
      })
    } catch (e) {
      process.exit(1)
    }
  } else {
    console.log(json)
  }

  green(`Version updated to ${tagVersion}`)

  green(`Git head updated to ${gitHead}`)
})()
