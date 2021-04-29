/* eslint-disable @typescript-eslint/no-var-requires */
const helper = require('./components-helper')
const { name, version } = require('../package.json')
// const icon = require('../website/icon.json')
// const icons = icon.map(item => 'el-icon-' + item).join('/')
const tagVer = process.env.TAG_VERSION
const _version = tagVer ? (tagVer.startsWith('v') ? tagVer.slice(1) : tagVer) : version
const slugify = require('transliteration').slugify
const subtags = require('../website/subtags.json')

helper({
  name,
  version: _version,
  entry: 'website/docs/zh-CN/**/!(base|donations|i18n|installation|migration-from-2.x|quickstart).md',
  // entry: 'website/docs/zh-CN/vc-entity.md',
  // outDir: 'lib',
  outDir: 'vetur',
  reComponentName,
  reDocUrl,
  reAttribute,
  props: '属性', // Props
  propsName: '属性名', // Name
  propsDescription: '描述', // Description
  propsType: '类型', // Type
  propsDefault: '默认值', // Default
  propsOptions: '可选值', // Accepted Values
  defaultValSeparators: ['', '。'],
  events: '事件', // Events
  eventsName: '事件名', // Name
  eventsDescription: '描述', // Description
  slots: '插槽', // Slots
  slotsName: '插槽名', // Name
  slotsDescription: '描述', // Description
  directives: '插槽', // Directives
  directivesName: '插槽名', // Name
  directivesDescription: '描述', // Description
  directivesType: '类型', // Type
  titleRegExp: '#+\\s+(.*)\\n+([^(#|\\n)]*)',
  tableRegExp: '#+\\s+(.*\\s*属性|.*\\s*事件|.*\\s*插槽|.*\\s*指令)\\s*\\n*.*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
  subtagsMap: subtags
})

function reComponentName(title) {
  return title
    .replace(/\B([A-Z])/g, '-$1')
    .replace(/[ ]+/g, '-')
    .toLowerCase()
}

function reDocUrl(fileName, header, path) {
  const regExp = /website\/docs\/zh-CN\/(.*).md/
  const pathContent = path.match(regExp)
  const docs = `https://zouyaoji.top/vue-cesium/#/zh-CN/component/${pathContent[1]}/`
  const _header = slugify(header ? header.replace(/[ ]+/g, '-').toLowerCase() : undefined)
  return docs + (_header ? '#' + _header : '')
}

function reAttribute(value, key, item) {
  const _value = value.match(/^\*\*(.*)\*\*$/)
  const str = _value ? _value[1] : value

  if (key === '可选值' && /icon/i.test(item[0])) {
    // return icons
  } else if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str) || /^-*$/.test(str)) {
    return undefined
  } else if (key === '属性名' && /v-model:(.+)/.test(str)) {
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === '属性名' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === '属性名') {
    return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
  } else if (key === '类型') {
    return str
      .replace(/\s*\/\s*/g, '|')
      .replace(/\s*,\s*/g, '|')
      .replace(/\(.*\)/g, '')
      .toLowerCase()
  } else if (key === '可选值') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str) ? undefined : str.replace(/`/g, '')
  } else {
    return str
  }
}
