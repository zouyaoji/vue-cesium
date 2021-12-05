/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2021-12-05 13:44:33
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\helper.ts
 */
import path from 'path'
import helper from 'components-helper'
import { vcPackage, vcOutput, projRoot } from './utils/paths'
import { getPackageManifest } from './utils/pkg'
import type { TaskFunction } from 'gulp'
import type { InstallOptions } from 'components-helper/lib/type'
const slugify = require('transliteration').slugify

const reComponentName: InstallOptions['reComponentName'] = (title: string) =>
  title
    .replace(/\B([A-Z])/g, '-$1')
    .replace(/[ ]+/g, '-')
    .toLowerCase()

const reDocUrl: InstallOptions['reDocUrl'] = (fileName, header, path) => {
  // const docs = 'https://element-plus.org/en-US/component/'
  // const _header = header ? header.replaceAll(/\s+/g, '-').toLowerCase() : ''

  // return `${docs}${fileName}.html${_header ? '#' : ''}${_header}`

  const regExp = /website\/docs\/en-US\/(.*).md/
  const pathContent = path?.match(regExp)!
  const docs = `https://zouyaoji.top/vue-cesium/#/en-US/component/${pathContent[1]}/`
  const _header = slugify(header ? header.replace(/[ ]+/g, '-').toLowerCase() : undefined)
  return docs + (_header ? '#' + _header : '')
}

const reWebTypesSource: InstallOptions['reWebTypesSource'] = title => {
  const symbol = `Vc${title.replaceAll(/-/g, ' ').replaceAll(/^\w|\s+\w/g, item => {
    return item.trim().toUpperCase()
  })}`

  return { symbol }
}

const reAttribute: InstallOptions['reAttribute'] = (value, key, item) => {
  const _value = value.match(/^\*\*(.*)\*\*$/)
  const str = _value ? _value[1] : value

  if (key === 'Accepted Values' && /icon/i.test(item[0])) {
    // return icons
  } else if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined
  } else if (key === 'Name' && /v-model:(.+)/.test(str)) {
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === 'Name' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === 'Name') {
    return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
  } else if (key === 'Type') {
    return str
      .replace(/\s*\/\s*/g, '|')
      .replace(/\s*,\s*/g, '|')
      .replace(/\(.*\)/g, '')
      .toLowerCase()
  } else if (key === 'Accepted Values') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str) ? undefined : str.replace(/`/g, '')
  } else {
    return str
  }
}

export const buildHelper: TaskFunction = done => {
  const { name, version } = getPackageManifest(vcPackage)

  const tagVer = process.env.TAG_VERSION
  const _version = tagVer ? (tagVer.startsWith('v') ? tagVer.slice(1) : tagVer) : version!

  helper({
    name: name!,
    version: _version,
    // entry: `${path.resolve(projRoot, 'website/docs/en-US/**')}/!(base|donations|i18n|installation|migration-from-2.x|quickstart|platforms).md`,
    entry: '../website/docs/en-US/**/!(base|donations|i18n|installation|migration-from-2.x|quickstart|platforms).md',
    // outDir: vcOutput,
    outDir: '../dist/vue-cesium',
    reComponentName,
    reDocUrl,
    reWebTypesSource,
    reAttribute,
    props: 'Props', // 属性
    propsName: 'Name', // 属性名
    propsDescription: 'Description', // 描述
    propsType: 'Type', // 类型
    propsDefault: 'Default', // 默认值
    propsOptions: 'Accepted Values', // 可选值
    events: 'Events', // 事件
    eventsName: 'Name', // 事件名
    eventsDescription: 'Description', // 描述
    slots: 'Slots', // 插槽
    slotsName: 'Name', // 插槽名
    slotsDescription: 'Description', // 描述
    directives: 'Directives', // 指令
    directivesName: 'Name', // 指令名
    directivesDescription: 'Description', // 描述
    directivesType: 'Type', // 类型
    titleRegExp: '#+\\s+(.*)\\n+([^(#|\\n)]*)',
    tableRegExp:
      '#+\\s+(.*\\s*Props|.*\\s*Events|.*\\s*Slots|.*\\s*Directives)\\s*\\n*.*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)'
  })

  done()
}
