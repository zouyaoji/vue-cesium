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
import mixinPickEvent from '../event/mixinPickEvent'

const methods = {
  async mount () {
    const { primitives, collection, registerEvents } = this
    registerEvents(true)
    collection._vcParent = primitives
    return primitives && primitives.add(collection)
  },
  async unmount () {
    const { primitives, collection, registerEvents } = this
    registerEvents(false)
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
  mixins: [cmp, mixinPickEvent],
  methods,
  props: {
    enbaleEvent: {
      type: Boolean,
      default: true
    }
  },
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
