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
  name: 'vc-primitive-classification',
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
      return new Cesium.ClassificationPrimitive(options)
    }
  }
}
</script>
