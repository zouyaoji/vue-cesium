/**
 * for
 * PrimitiveCollection
 * BillboardCollection
 * LabelCollection
 * PointPrimitiveCollection
 * PolylineCollection
 */
import cmp from '../virtualCmp'
import mergeDescriptors from '../../utils/mergeDescriptors'

const methods = {
  async mount () {
    const { primitives, collection } = this
    return primitives && primitives.add(collection)
  },
  async unmount () {
    const { primitives, collection } = this
    return primitives && primitives.remove(collection)
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get primitives () {
        return vm.collection
      },
      get collectionContainer () {
        return vm
      }
    })
  }
}

export default {
  mixins: [cmp],
  methods,
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      collection: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      primitives: {
        enumerable: true,
        get: () => this.$services && this.$services.primitives
      },
      groundPrimitives: {
        enumerable: true,
        get: () => this.$services && this.$services.groundPrimitives
      }
    })
  }
}
