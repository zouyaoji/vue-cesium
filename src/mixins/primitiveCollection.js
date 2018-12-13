import cmp from './virtualCmp'
import mergeDescriptors from '../util/mergeDescriptors'

const props = {}
const computed = {}
const methods = {
  mount () {
    const { viewer, primitiveCollection } = this
    viewer && viewer.scene.primitives.add(primitiveCollection)
  },
  unload () {
    const { viewer, primitiveCollection } = this
    viewer && viewer.scene.primitives.remove(primitiveCollection)
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get primitiveCollection () {
        return vm.primitiveCollection
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
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      primitiveCollection: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
