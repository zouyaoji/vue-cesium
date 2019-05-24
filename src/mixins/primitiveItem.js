import cmp from './virtualCmp'
import mergeDescriptors from '../util/mergeDescriptors'

const props = {}
const computed = {}
const methods = {
  mount () {
    const { geometry, geometryContainer } = this
    geometryContainer && geometryContainer.setGeometry(geometry)
  },
  unload () {
    const { geometryContainer } = this
    geometryContainer && geometryContainer.unload()
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get primitive () {
        return vm.primitive
      }
    })
  }
}
const watch = {}

export default {
  mixins: [cmp],
  props,
  computed,
  watch,
  methods,
  stubVNode: {
    empty () {
      return this.$options.name
    }
  },
  created () {
    Object.defineProperties(this, {
      geometry: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      geometryContainer: {
        enumerable: true,
        get: () => this.$services && this.$services.geometryContainer
      }
    })
  }
}
