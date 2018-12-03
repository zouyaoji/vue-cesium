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
