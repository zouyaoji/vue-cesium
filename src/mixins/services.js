import mergeDescriptors from '../util/mergeDescriptors'
// todo uncomment when IE 11 will die
// const SERVICES_PROP = Symbol('services')
const SERVICES_PROP = 'services'
/**
 * Service container mixin
 */
export default {
  inject: {
    $services: SERVICES_PROP
    // todo works only in Vue 2.5.x
    // $services: {from: SERVICES_PROP, default: Object.create(null)},
  },
  provide () {
    return {
      [SERVICES_PROP]: this.getServices()
    }
  },
  methods: {
    /**
     * @returns {Object}
     * @protected
     */
    getServices () {
      return mergeDescriptors({}, this.$services || {})
    },
    isEmptyObj (o) {
      for (var attr in o) return !1
      return !0
    },
    processArray (arr) {
      for (var i = arr.length - 1; i >= 0; i--) {
        /* if (arr[i] === null || arr[i] === undefined) arr.splice(i, 1);
            else */ if (
          typeof arr[i] === 'object'
        ) {
          this.removeNullItem(arr[i], arr, i)
        }
      }
      return arr.length === 0
    },
    proccessObject (o) {
      for (var attr in o) {
        if (o[attr] === null || o[attr] === undefined) delete o[attr]
        else if (typeof o[attr] === 'object') {
          // this.removeNullItem(o[attr])
          if (this.isEmptyObj(o[attr])) delete o[attr]
        }
      }
    },
    removeNullItem (o, arr, i) {
      var s = {}.toString.call(o)
      if (s === '[object Array]') {
        if (this.processArray(o) === true) {
          // o也是数组，并且删除完子项，从所属数组中删除
          // if (arr) arr.splice(i, 1);
        }
      } else if (s === '[object Object]') {
        this.proccessObject(o)
        // if (arr&&isEmptyObj(o)) arr.splice(i, 1);
      }
    }
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
