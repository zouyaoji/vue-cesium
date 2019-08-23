/**
 * Label
 * PointPrimitive
 * Polyline
 * Billboard
 */
import cmp from '../virtualCmp'
import mergeDescriptors from '../../util/mergeDescriptors'

const methods = {
  mount () {
    this.index = this.$parent.childCount
    this.$parent.childCount += 1
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
export default {
  data () {
    return {
      index: 0
    }
  },
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
