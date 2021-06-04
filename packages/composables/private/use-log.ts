import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { isString } from '@vue-cesium/utils/util'

export default function (vcInstance: VcComponentInternalInstance) {
  const makeLog = (prefix = '') => {
    return function (...args) {
      if (prefix) {
        if (isString(args[0])) {
          args[0] = prefix.trim() + ' ' + args[0]
        } else {
          args = [prefix.trim(), ...args]
        }
      }
      console.log(...args)
    }
  }

  const makeWarn = (prefix = '') => {
    return function (...args) {
      if (prefix) {
        if (isString(args[0])) {
          args[0] = prefix.trim() + ' ' + args[0]
        } else {
          args = [prefix.trim(), ...args]
        }
      }
      console.warn(...args)
    }
  }

  const makeError = (prefix = '') => {
    return function (...args) {
      if (prefix) {
        if (isString(args[0])) {
          args[0] = prefix.trim() + ' ' + args[0]
        } else {
          args = [prefix.trim(), ...args]
        }
      }
      console.error(...args)
    }
  }

  const makeDebug = (prefix = '') => {
    return function (...args) {
      if (prefix) {
        if (isString(args[0])) {
          args[0] = prefix.trim() + ' ' + args[0]
        } else {
          args = [prefix.trim(), ...args]
        }
      }

      if (process.env.NODE_ENV === 'development') {
        // console.log(...args)
      }
    }
  }

  /**
   * @description 返回这个样式的颜色值
   * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
   */
  const typeColor = (type = 'default') => {
    let color = ''
    switch (type) {
      case 'default': color = '#35495E'; break
      case 'primary': color = '#3488ff'; break
      case 'success': color = '#43B883'; break
      case 'warning': color = '#e6a23c'; break
      case 'danger': color = '#f56c6c'; break
      default: break
    }
    return color
  }
  /**
   * @description 打印一个 [ title | text ] 样式的信息
   * @param {String} title title text
   * @param {String} info info text
   * @param {String} type style
   */
  const capsule = (title, info, type = 'primary') => {
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
  const colorful = textArr => {
    console.log(
      `%c${textArr.map(t => t.text || '').join('%c')}`,
      ...textArr.map(t => `color: ${typeColor(t.type)};`)
    )
  }

  const success = text => {
    colorful([{ text, type: 'success' }])
  }

  const warning = text => {
    colorful([{ text, type: 'warning' }])
  }

  const danger = text => {
    colorful([{ text, type: 'danger' }])
  }

  const primary = text => {
    colorful([{ text, type: 'primary' }])
  }

  return {
    log: makeLog(`[VueCesium] ${vcInstance.proxy.$options.name}`),
    warn: makeWarn(`[VueCesium] WARN ${vcInstance.proxy.$options.name}`),
    error: makeError(`[VueCesium] ERR ${vcInstance.proxy.$options.name}`),
    debug: makeDebug(`[VueCesium] Debug ${vcInstance.proxy.$options.name}`),
    capsule,
    success,
    warning,
    danger,
    primary
  }
}
