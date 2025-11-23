// import fs from 'node:fs'
import path from 'node:path'
import buildPkg from '@vue-cesium/build'

const { docRoot } = buildPkg

export const languages = ['en-US', 'zh-CN']

export const ensureLang = (lang: string) => `/${lang}`

export function getLang(id: string) {
  return path.relative(docRoot, id).split(path.sep)[0]
}
