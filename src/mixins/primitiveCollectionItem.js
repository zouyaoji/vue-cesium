import cmp from './virtualCmp'
import mergeDescriptors from '../util/mergeDescriptors'

const props = {}
const computed = {}
const methods = {
  mount () {
  },
  unload () {
    const { primitive, primitiveCollection } = this
    primitiveCollection.remove(primitive)
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
      primitive: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      primitiveCollection: {
        enumerable: true,
        get: () => this.$services && this.$services.primitiveCollection
      }
    })
  }
}
