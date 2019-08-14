<script>
import {
  vcMixin,
  geometryInstances,
  appearance,
  show,
  interleave,
  releaseGeometryInstances,
  aaMixin,
  classificationType,
  debugShowBoundingVolume,
  debugShowShadowVolume
} from '@/mixins/entity/allProps'
import primitiveMixin from '@/mixins/primitive/primitiveMixin'
export default {
  name: 'ground-primitive',
  mixins: [
    vcMixin,
    geometryInstances,
    appearance,
    show,
    interleave,
    releaseGeometryInstances,
    aaMixin,
    classificationType,
    debugShowBoundingVolume,
    debugShowShadowVolume,
    primitiveMixin
  ],
  methods: {
    createCesiumObject () {
      const { geometryInstances, appearance, show, vertexCacheOptimize, interleave, compressVertices,
        releaseGeometryInstances, allowPicking, asynchronous, classificationType, debugShowBoundingVolume, debugShowShadowVolume } = this
      let options = {
        geometryInstances,
        appearance,
        show,
        vertexCacheOptimize,
        interleave,
        compressVertices,
        releaseGeometryInstances,
        allowPicking,
        asynchronous,
        classificationType,
        debugShowBoundingVolume,
        debugShowShadowVolume
      }
      this.removeNullItem(options)
      return new Cesium.GroundPrimitive(options)
    },
    setGeometryInstances (geometryInstances) {
      const listener = this.$listeners['update:geometryInstances']
      if (listener) { this.$emit('update:geometryInstances', geometryInstances) } else this.primitive.geometryInstances = geometryInstances
    }
  }
}
</script>
