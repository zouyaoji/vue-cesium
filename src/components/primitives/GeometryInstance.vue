<script>
import cmp from '../../mixins/virtualCmp'
import mergeDescriptors from '../../util/mergeDescriptors'
export default {
  name: 'geometry-instance',
  mixins: [cmp],
  props: {
    geometry: Object,
    modelMatrix: Object,
    id: Object,
    attributes: Object
  },
  watch: {
    geometry (val) {
      this.geometryInstance.geometry = val
    },
    modelMatrix (val) {
      this.geometryInstance.modelMatrix = val
    },
    id (val) {
      this.geometryInstance.id = val
    },
    attributes (val) {
      this.geometryInstance.attributes = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, geometry, modelMatrix, id, attributes } = this
      let options = {
        geometry,
        modelMatrix,
        id,
        attributes
      }
      this.removeNullItem(options)
      return new Cesium.GeometryInstance(options)
    },
    mount () {
      const { geometryInstance, geometryInstancesContainer } = this
      geometryInstancesContainer && geometryInstancesContainer.setGeometryInstances(geometryInstance)
    },
    unload () {
      const { geometryInstancesContainer } = this
      geometryInstancesContainer && geometryInstancesContainer.setGeometryInstances(undefined)
    },
    setGeometry (geometry) {
      const listener = this.$listeners['update:geometry']
      if (listener) { this.$emit('update:geometry', geometry) } else this.geometryInstance.geometry = geometry
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
    Object.defineProperties(this, {
      geometryInstance: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      geometryInstancesContainer: {
        enumerable: true,
        get: () => this.$services && this.$services.geometryInstancesContainer
      }
    })
  }
}
</script>
