<script>
import {
  vcMixin,
  modelMatrix,
  shadows,
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
  name: 'vc-primitive',
  mixins: [
    vcMixin,
    modelMatrix,
    shadows,
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
  props: {
    cull: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    cull (val) {
      this.primitive.cull = val
    }
  },
  methods: {
    createCesiumObject () {
      const { geometryInstances, appearance, show, modelMatrix, vertexCacheOptimize, interleave, compressVertices,
        releaseGeometryInstances, allowPicking, cull, asynchronous, debugShowBoundingVolume, shadows } = this
      let options = {
        geometryInstances,
        appearance,
        show,
        modelMatrix,
        vertexCacheOptimize,
        interleave,
        compressVertices,
        releaseGeometryInstances,
        allowPicking,
        cull,
        asynchronous,
        debugShowBoundingVolume,
        shadows
      }
      this.removeNullItem(options)
      return new Cesium.Primitive(options)
    }
  }
}
</script>
