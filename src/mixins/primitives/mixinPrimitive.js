/**
 * for
 * ClassificationPrimitive
 * GroundPolylinePrimitive
 * GroundPrimitive
 * Model
 * Cesium3DTileset
 * Primitive
 */
import cmp from '../virtualCmp'
import mergeDescriptors from '../../utils/mergeDescriptors'
import bindEvents from '../../utils/bindEvent'

const methods = {
  async mount () {
    const { primitives, primitive } = this
    primitive.readyPromise && primitive.readyPromise.then(primitive => {
      const listener = this.$listeners['readyPromise']
      listener && this.$emit('readyPromise', primitive)
    }).otherwise(error => {
      throw new Cesium.DeveloperError(error)
    })
    bindEvents.call(this, primitive, undefined, true)
    return primitives && primitives.add(primitive)
  },
  async unmount () {
    const { primitives, primitive } = this
    this.childCount = 0
    this.instances = []
    bindEvents.call(this, primitive, undefined, false)
    return primitives && primitives.remove(primitive)
  },
  async setGeometryInstances (geometryInstance, index) {
    this.instances.push(geometryInstance)
    if (index === this.childCount - 1) {
      const listener = this.$listeners['update:geometryInstances']
      if (listener) {
        this.$emit('update:geometryInstances', this.instances)
      } else {
        this.primitive.geometryInstances = index === 0 ? geometryInstance : this.instances
      }
    }
    return true
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get primitive () {
        return vm.primitive
      },
      get primitiveContainer () {
        return vm
      }
    })
  }
}

export default {
  data () {
    return {
      childCount: 0,
      instances: []
    }
  },
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
      primitive: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      primitives: {
        enumerable: true,
        get: () => this.$services && this.$services.primitives
      }
    })
  }
}
