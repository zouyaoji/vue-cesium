/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-18 13:29:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\build-helper.ts
 */
/* eslint-disable @typescript-eslint/no-var-requires */
// const helper = require('./components-helper')
// import helper from 'components-helper'
import helper from './components-helper'
import path from 'path'
import { vcRoot } from './paths'
const { name, version } = require(path.resolve(vcRoot, './package.json'))

const tagVer = process.env.TAG_VERSION
const _version = tagVer ? (tagVer.startsWith('v') ? tagVer.slice(1) : tagVer) : version
const slugify = require('transliteration').slugify
const subtags = require('../website/subtags.json')

helper({
  name,
  version: _version,
  entry: 'website/docs/en-US/**/!(base|donations|i18n|installation|migration-from-2.x|quickstart|platforms).md',
  outDir: 'dist/vue-cesium',
  reComponentName,
  reDocUrl,
  reAttribute,
  props: 'Props', // 属性
  propsName: 'Name', // 属性名
  propsDescription: 'Description', // 描述
  propsType: 'Type', // 类型
  propsDefault: 'Default', // 默认值
  propsOptions: 'Accepted Values', // 可选值
  defaultValSeparators: ['', '.'],
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
    '#+\\s+(.*\\s*Props|.*\\s*Events|.*\\s*Slots|.*\\s*Directives)\\s*\\n*.*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
  subtagsMap: subtags
})

function reComponentName(title) {
  return title
    .replace(/\B([A-Z])/g, '-$1')
    .replace(/[ ]+/g, '-')
    .toLowerCase()
}

function reDocUrl(fileName, header, path) {
  const regExp = /website\/docs\/en-US\/(.*).md/
  const pathContent = path.match(regExp)
  const docs = `https://zouyaoji.top/vue-cesium/#/en-US/component/${pathContent[1]}/`
  const _header = slugify(header ? header.replace(/[ ]+/g, '-').toLowerCase() : undefined)
  return docs + (_header ? '#' + _header : '')
}

function reAttribute(value, key, item) {
  const _value = value.match(/^\*\*(.*)\*\*$/)
  const str = _value ? _value[1] : value

  if (key === 'Accepted Values' && /icon/i.test(item[0])) {
    // return icons
  } else if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str) || /^-*$/.test(str)) {
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
