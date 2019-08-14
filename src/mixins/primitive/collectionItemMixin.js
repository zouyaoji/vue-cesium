/**
 * Label
 * PointPrimitive
 * Polyline
 * Billboard
 */
import cmp from '@/mixins/virtualCmp'
import mergeDescriptors from '@/util/mergeDescriptors'

const methods = {
  mount () {},
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

export default {
  mixins: [cmp],
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
        get: () => this.$services && this.$services.primitive
      }
    })
  }
}
