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
} from '../../mixins/entity/allProps'
import primitiveMixin from '../../mixins/primitive/primitiveMixin'
export default {
  name: 'vc-primitive-ground',
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
    async createCesiumObject () {
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
      if (!asynchronous) {
        await Cesium.GroundPrimitive.initializeTerrainHeights()
      }
      return new Cesium.GroundPrimitive(options)
    }
  }
}
</script>
