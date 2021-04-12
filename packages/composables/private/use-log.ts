import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { isString } from '@vue-cesium/utils/util'

export default function(vcInstance: VcComponentInternalInstance) {
  const makeLog = (prefix = '') => {
    return function(...args) {
      if (process.env.NODE_ENV !== 'production') {
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
  }

  const makeWarn = (prefix = '') => {
    return function(...args) {
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
    return function(...args) {
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

  return {
    log: makeLog(`[VueCesium] ${vcInstance.proxy.$options.name}`),
    warn: makeWarn(`[VueCesium] WARN ${vcInstance.proxy.$options.name}`),
    error: makeError(`[VueCesium] ERR ${vcInstance.proxy.$options.name}`)
  }
}
