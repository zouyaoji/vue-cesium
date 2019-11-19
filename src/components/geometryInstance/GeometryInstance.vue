<script>
import cmp from '../../mixins/virtualCmp'
import { modelMatrix, id } from '../../mixins/mixinProps'
import mergeDescriptors from '../../utils/mergeDescriptors'
export default {
  name: 'vc-instance-geometry',
  mixins: [cmp, modelMatrix, id],
  props: {
    geometry: Object,
    attributes: Object
  },
  methods: {
    /**
     * 重写 createCesiumObject 方法，因为 GeometryInstance 构造参数中有一个必要参数 geometry，需要单独处理一下。
     */
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      if (!options.geometry) {
        options.geometry = new Cesium.Geometry({ attributes: new Cesium.GeometryAttributes() })
      }
      return new Cesium.GeometryInstance(options)
    },
    async mount () {
      this.index = this.$parent.childCount
      this.$parent.childCount += 1
      const { geometryInstance, primitiveContainer } = this
      primitiveContainer && primitiveContainer.setGeometryInstances(geometryInstance, this.index)
      return true
    },
    async setGeometry (geometry) {
      const listener = this.$listeners['update:geometry']
      if (listener) { this.$emit('update:geometry', geometry) } else this.geometryInstance.geometry = geometry
      return true
    },
    getServices () {
      const vm = this
      return mergeDescriptors(cmp.methods.getServices.call(this), {
        get geometryInstance () {
          return vm.geometryInstance
        },
        get geometryContainer () {
          return vm
        }
      })
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
    this.renderByParent = true
    Object.defineProperties(this, {
      geometryInstance: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      primitiveContainer: {
        enumerable: true,
        get: () => this.$services && this.$services.primitiveContainer
      }
    })
  }
}
</script>
