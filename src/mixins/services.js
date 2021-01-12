import mergeDescriptors from '../utils/mergeDescriptors'
import { isEmptyObj } from '../utils/util'

const SERVICES_PROP = 'services'
/**
 * 全局注入 provider 的数据
 */
export default {
  inject: {
    $services: SERVICES_PROP
  },
  provide () {
    return {
      [SERVICES_PROP]: this.getServices()
    }
  },
  methods: {
    /**
     *  获取注入数据。
     * @returns {Object}
     * @protected
     */
    getServices () {
      return mergeDescriptors({}, this.$services || {})
    },
    /**
     * 移除对象中的空值。
     * @param {*} o
     * @param {*} arr
     * @param {*} i
     * @returns {Object}
     */
    removeNullItem: removeNullItem,
    /**
     * 判断是否是空对象。
     * @param {*} o
     * @returns {Boolean}
     */
    isEmptyObj: isEmptyObj

  },
  beforeCreate () {
    let source = this.$parent
    while (source) {
      if (source._provided != null && source._provided[SERVICES_PROP] != null) {
        break
      }
      source = source.$parent
    }
    if (source == null || source._provided[SERVICES_PROP] == null) {
      delete this.$options.inject.$services
    }
  }
}

/**
 * 处理对象。
 * @param {*} o
 */
function proccessObject (o) {
  for (const attr in o) {
    if (o[attr] === null || o[attr] === undefined) delete o[attr]
    else if (typeof o[attr] === 'object') {
      // this.removeNullItem(o[attr])
      if (isEmptyObj(o[attr])) delete o[attr]
    }
  }
}

/**
 * 处理数组。
 * @param {*} arr
 */
function processArray (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    /* if (arr[i] === null || arr[i] === undefined) arr.splice(i, 1);
            else */ if (
      typeof arr[i] === 'object'
    ) {
      removeNullItem(arr[i], arr, i)
    }
  }
  return arr.length === 0
}

/**
  * 移除对象中的空值。
  * @param {*} o
  * @param {*} arr
  * @param {*} i
  * @returns {Object}
  */
function removeNullItem (o, arr, i) {
  const s = {}.toString.call(o)
  if (s === '[object Array]') {
    if (processArray(o) === true) {
      // o也是数组，并且删除完子项，从所属数组中删除
      // if (arr) arr.splice(i, 1);
    }
  } else if (s === '[object Object]') {
    proccessObject(o)
    // if (arr&&isEmptyObj(o)) arr.splice(i, 1);
  }
}
