/**
 * ClassificationPrimitive
 * GroundPolylinePrimitive
 * GroundPrimitive
 * Model
 * Cesium3DTileset
 * Primitive
 * BillboardCollection
 * LabelCollection
 * PointPrimitiveCollection
 * PolylineCollection
 */
import cmp from '../virtualCmp'
import mergeDescriptors from '../../util/mergeDescriptors'

const methods = {
  mount () {
    const { viewer, primitive } = this
    primitive.readyPromise &&
      primitive.readyPromise
        .then(primitive => {
          const listener = this.$listeners['readyPromise']
          listener && this.$emit('readyPromise', primitive)
        })
        .otherwise(error => {
          throw new Cesium.DeveloperError(error)
        })
    viewer && viewer.scene.primitives.add(primitive)
  },
  unload () {
    const { viewer, primitive } = this
    this.instances = []
    viewer && viewer.scene.primitives.remove(primitive)
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
  },
  setGeometryInstances (geometryInstance, index) {
    this.instances.push(geometryInstance)
    if (index === this.childCount - 1) {
      const listener = this.$listeners['update:geometryInstances']
      if (listener) {
        this.$emit('update:geometryInstances', this.instances)
      } else this.primitive.geometryInstances = this.instances
    }
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
      }
    })
  }
}
