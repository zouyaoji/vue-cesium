/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-27 15:30:13
 * @LastEditTime: 2025-04-02 13:59:49
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\utils\logger.ts
 */

import { useGlobalConfig } from '@vue-cesium/composables/use-global-config'
import { useLocale } from '@vue-cesium/composables/use-locale'
import { isString } from 'lodash-es'

const globalConfig = useGlobalConfig()

function makeLog(prefix = '') {
  return function (...args) {
    const { t } = useLocale()
    prefix = t('vm.notify.log')

    if (prefix) {
      if (isString(args[0])) {
        args[0] = `${prefix.trim()} ${args[0]}`
      }
      else {
        args = [prefix.trim(), ...args]
      }
    }

    console.log(...args)
    const msg = args.shift()
    globalConfig.value.showNotify && globalConfig.value.$q
    && globalConfig.value.$q.notify({
      message: msg,
      timeout: 3000,
      type: 'positive',
      position: 'top',
      ...globalConfig.value.notifyConfig
    })
  }
}

function makeWarn(prefix = '') {
  return function (...args) {
    const { t } = useLocale()
    prefix = t('vm.notify.warn')

    if (prefix) {
      if (isString(args[0])) {
        args[0] = `${prefix.trim()} ${args[0]}`
      }
      else {
        args = [prefix.trim(), ...args]
      }
    }
    console.warn(...args)
    const msg = args.shift()

    globalConfig.value.showNotify && globalConfig.value.$q
    && globalConfig.value.$q.notify({
      message: msg,
      timeout: 3000,
      type: 'warning',
      position: 'top',
      ...globalConfig.value.notifyConfig
    })
  }
}

function makeError(prefix = '') {
  return function (...args) {
    const { t } = useLocale()
    prefix = t('vm.notify.error')

    if (prefix) {
      if (isString(args[0])) {
        args[0] = `${prefix.trim()} ${args[0]}`
      }
      else {
        args = [prefix.trim(), ...args]
      }
    }
    console.error(...args)
    const msg = args.shift()
    globalConfig.value.showNotify && globalConfig.value.$q
    && globalConfig.value.$q.notify({
      message: msg,
      timeout: 3000,
      type: 'negative',
      position: 'top',
      ...globalConfig.value.notifyConfig
    })
  }
}

function makeDebug(prefix = '') {
  return function (...args) {
    const { t } = useLocale()
    prefix = t('vm.notify.debug')

    if (prefix) {
      if (isString(args[0])) {
        args[0] = `${prefix.trim()} ${args[0]}`
      }
      else {
        args = [prefix.trim(), ...args]
      }
    }

    if (!globalConfig.value?.debug) {
      return
    }

    console.log(...args)
    const msg = args.shift()
    globalConfig.value.showNotify && globalConfig.value.$q
    && globalConfig.value.$q.notify({
      message: msg,
      timeout: 3000,
      type: 'info',
      position: 'top',
      ...globalConfig.value.notifyConfig
    })
  }
}

function makeInfo(prefix = '') {
  return function (...args) {
    const { t } = useLocale()
    prefix = t('vm.notify.info')

    if (prefix) {
      if (isString(args[0])) {
        args[0] = `${prefix.trim()} ${args[0]}`
      }
      else {
        args = [prefix.trim(), ...args]
      }
    }
    console.log(...args)

    const msg = args.shift()
    globalConfig.value.showNotify && globalConfig.value.$q
    && globalConfig.value.$q.notify({
      message: msg,
      timeout: 3000,
      type: 'info',
      position: 'top',
      ...globalConfig.value.notifyConfig
    })
  }
}

/**
 * @description 返回这个样式的颜色值
 * @param {string} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor(type = 'default') {
  let color = ''
  switch (type) {
    case 'default':
      color = '#35495E'
      break
    case 'primary':
      color = '#3488ff'
      break
    case 'success':
      color = '#43B883'
      break
    case 'warning':
      color = '#e6a23c'
      break
    case 'danger':
      color = '#f56c6c'
      break
    default:
      break
  }
  return color
}
/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param {string} title title text
 * @param {string} info info text
 * @param {string} type style
 */
function capsule(title, info, type = 'primary') {
  console.log(
    `%c ${title} %c ${info} %c`,
    'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
    `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
    'background:transparent'
  )
}

/**
 * @description 打印彩色文字
 */
function colorful(textArr) {
  console.log(`%c${textArr.map(t => t.text || '').join('%c')}`, ...textArr.map(t => `color: ${typeColor(t.type)};`))
}

function success(text) {
  colorful([{ text, type: 'success' }])
}

function warning(text) {
  colorful([{ text, type: 'warning' }])
}

function danger(text) {
  colorful([{ text, type: 'danger' }])
}

function primary(text) {
  colorful([{ text, type: 'primary' }])
}

const log = makeLog()
const warn = makeWarn()
const error = makeError()
const debug = makeDebug()
const info = makeInfo()

export { capsule, danger, debug, error, info, log, primary, success, warn, warning }
